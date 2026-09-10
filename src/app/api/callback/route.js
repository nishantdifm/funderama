import { NextResponse } from "next/server";
import { getDbPool } from "@/lib/db";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";
import { sendCallbackNotificationEmail } from "@/lib/mail";

async function verifyCaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey || !token) return true;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    });
    const data = await res.json();
    return data.success;
  } catch (err) {
    console.error("Captcha verification error:", err);
    return true; // Fallback in case of local network limits
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, pageSource = "Home", captchaToken } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const cleanedPhone = String(phone).replace(/\D/g, "");
    if (cleanedPhone.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Phone number must be exactly 10 digits." },
        { status: 400 }
      );
    }

    // 1. IP-based rate limiting for callback forms (5 attempts in 5 mins -> 30 min block)
    const clientIp = getClientIp(request);
    const ipRateLimit = await checkRateLimit(`callback:ip:${clientIp}`);
    if (!ipRateLimit.allowed) {
      return NextResponse.json(
        { success: false, error: ipRateLimit.error || "Too many requests. Please try again after some time." },
        { status: 429 }
      );
    }

    // 2. Phone-based rate limiting for callback forms (5 attempts in 5 mins -> 30 min block)
    const phoneRateLimit = await checkRateLimit(`callback:phone:${cleanedPhone}`);
    if (!phoneRateLimit.allowed) {
      return NextResponse.json(
        { success: false, error: phoneRateLimit.error || "Too many requests. Please try again after some time." },
        { status: 429 }
      );
    }

    if (captchaToken) {
      const isCaptchaValid = await verifyCaptcha(captchaToken);
      if (!isCaptchaValid) {
        return NextResponse.json(
          { success: false, error: "reCAPTCHA verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    const pool = getDbPool();
    const [result] = await pool.execute(
      "INSERT INTO callback_requests (name, phone, page_source, ip_address) VALUES (?, ?, ?, ?)",
      [name.trim(), phone.trim(), pageSource, clientIp]
    );

    // Send Alert Email to Admin
    try {
      await sendCallbackNotificationEmail({
        name: name.trim(),
        phone: phone.trim(),
        pageSource,
        ipAddress: clientIp,
      });
    } catch (mailErr) {
      console.error("Email notification error in callback route:", mailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Callback request submitted successfully!",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error saving callback request:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
