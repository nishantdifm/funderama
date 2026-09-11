import { NextResponse } from "next/server";
import { getDbPool } from "@/lib/db";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";
import { sendContactInquiryEmails } from "@/lib/mail";

async function verifyCaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.warn("⚠️ RECAPTCHA_SECRET_KEY is not configured.");
    return false;
  }
  if (!token) return false;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    });
    const data = await res.json();
    return Boolean(data.success);
  } catch (err) {
    console.error("Captcha verification error:", err);
    return false;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone = "", message = "", captchaToken } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and Email are required." },
        { status: 400 }
      );
    }

    // 1. IP-based rate limiting for contact form (5 attempts in 5 mins -> 30 min block)
    const clientIp = getClientIp(request);
    const ipRateLimit = await checkRateLimit(`contact:ip:${clientIp}`);
    if (!ipRateLimit.allowed) {
      return NextResponse.json(
        { success: false, error: ipRateLimit.error || "Too many requests. Please try again after some time." },
        { status: 429 }
      );
    }

    // 2. Email-based rate limiting for contact form (5 attempts in 5 mins -> 30 min block)
    const emailRateLimit = await checkRateLimit(`contact:email:${email}`);
    if (!emailRateLimit.allowed) {
      return NextResponse.json(
        { success: false, error: emailRateLimit.error || "Too many requests. Please try again after some time." },
        { status: 429 }
      );
    }

    if (phone) {
      const cleanedPhone = String(phone).replace(/\D/g, "");
      if (cleanedPhone.length !== 10) {
        return NextResponse.json(
          { success: false, error: "Phone number must be exactly 10 digits." },
          { status: 400 }
        );
      }
      const phoneRateLimit = await checkRateLimit(`contact:phone:${cleanedPhone}`);
      if (!phoneRateLimit.allowed) {
        return NextResponse.json(
          { success: false, error: phoneRateLimit.error || "Too many requests. Please try again after some time." },
          { status: 429 }
        );
      }
    }

    // 3. Mandatory reCAPTCHA verification
    if (!captchaToken) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification is required. Please verify that you are not a robot." },
        { status: 400 }
      );
    }

    const isCaptchaValid = await verifyCaptcha(captchaToken);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }


    const pool = getDbPool();
    const [result] = await pool.execute(
      "INSERT INTO contact_inquiries (name, email, phone, message, ip_address) VALUES (?, ?, ?, ?, ?)",
      [name.trim(), email.trim(), phone ? phone.trim() : "", message ? message.trim() : "", clientIp]
    );

    // Send Confirmation Email to User + Alert Email to Admin
    try {
      await sendContactInquiryEmails({
        name: name.trim(),
        email: email.trim(),
        phone: phone ? phone.trim() : "",
        message: message ? message.trim() : "",
        ipAddress: clientIp,
      });
    } catch (mailErr) {
      console.error("Email notification error in contact route:", mailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been received successfully!",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error saving contact inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
