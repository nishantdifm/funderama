import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import mailConfig from "../config/config";
import globalInfo from "../data/globalInfo";

/**
 * Creates and returns the Nodemailer transporter using settings from mailConfig and secret pass from .env
 */
function getTransporter() {
  const host = mailConfig.smtpHost || "smtp.gmail.com";
  const port = Number(mailConfig.smtpPort) || 465;
  const secure = mailConfig.smtpSecure !== undefined ? Boolean(mailConfig.smtpSecure) : true;
  const user = mailConfig.smtpUser;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.warn("⚠️ SMTP password (SMTP_PASS in .env) or user in mailConfig is missing. Email dispatch skipped.");
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

/**
 * Resolves the logo attachment for inline CID rendering
 */
function getLogoAttachment() {
  try {
    const logoPath = path.join(process.cwd(), "public", "images", "fundrama-logo.png");
    if (fs.existsSync(logoPath)) {
      return [
        {
          filename: "logo.png",
          path: logoPath,
          cid: "funderama-logo",
        },
      ];
    }
  } catch (err) {
    console.error("Error attaching email logo:", err);
  }
  return [];
}

/**
 * Base email wrapper for consistent, modern card layout
 */
function renderEmailWrapper({ title, content, badgeText = "Notification" }) {
  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #334155;
      -webkit-text-size-adjust: 100%;
    }
    .email-container {
      max-width: 600px;
      width: 100%;
      margin: 24px auto;
      background: #ffffff;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(24, 48, 89, 0.08);
      border: 1px solid #e2e8f0;
      box-sizing: border-box;
    }
    .top-accent-strip {
      height: 4px;
      background: linear-gradient(90deg, #183059 0%, #00b0ff 65%, #eed900 100%);
    }
    .header-bar {
      background: #ffffff;
      padding: 24px 20px 20px 20px;
      text-align: center;
      border-bottom: 1px solid #edf2f7;
    }
    .logo-img {
      height: 48px;
      max-height: 48px;
      width: auto;
      display: inline-block;
    }
    .badge {
      display: inline-block;
      background: #e0f2fe;
      color: #0284c7;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.6px;
      text-transform: uppercase;
      padding: 5px 12px;
      border-radius: 9999px;
      margin-bottom: 12px;
      border: 1px solid #bae6fd;
    }
    .body-content {
      padding: 28px 24px 32px 24px;
      box-sizing: border-box;
    }
    .table-details {
      width: 100% !important;
      max-width: 100% !important;
      table-layout: fixed !important;
      border-collapse: collapse;
      margin: 18px 0;
      background: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      box-sizing: border-box;
    }
    .table-details td {
      padding: 12px 14px;
      font-size: 14px;
      border-bottom: 1px solid #f1f5f9;
      box-sizing: border-box;
    }
    .table-details tr:last-child td {
      border-bottom: none;
    }
    .table-label {
      width: 34%;
      font-weight: 600;
      color: #546e7a;
      background: #f8fafc;
      vertical-align: top;
    }
    .table-value {
      color: #183059;
      font-weight: 600;
      word-break: break-all !important;
      word-wrap: break-word !important;
      overflow-wrap: anywhere !important;
      vertical-align: top;
    }
    .message-box {
      background: #f8fafc;
      border-left: 4px solid #00b0ff;
      padding: 14px;
      margin: 14px 0;
      border-radius: 6px;
      font-size: 14px;
      line-height: 1.6;
      color: #183059;
      word-break: break-word !important;
      overflow-wrap: anywhere !important;
    }
    .btn-primary {
      display: inline-block;
      background: #183059;
      color: #ffffff !important;
      font-weight: 600;
      font-size: 14px;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 6px;
      margin-top: 16px;
      text-align: center;
    }
    .footer-bar {
      background: #f8fafc;
      padding: 20px 16px;
      text-align: center;
      font-size: 12px;
      color: #64748b;
      border-top: 1px solid #e2e8f0;
    }
    .footer-bar a {
      color: #0284c7;
      text-decoration: none;
    }

    @media only screen and (max-width: 600px) {
      .email-container {
        margin: 8px auto !important;
        width: 100% !important;
        border-radius: 10px !important;
      }
      .body-content {
        padding: 20px 14px !important;
      }
      .header-bar {
        padding: 18px 14px 16px 14px !important;
      }
      .table-details td {
        padding: 10px 10px !important;
        font-size: 13px !important;
      }
      .table-label {
        width: 32% !important;
      }
      .btn-primary {
        display: block !important;
        width: 100% !important;
        padding: 12px 14px !important;
        box-sizing: border-box !important;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Top Accent Bar (Website Colors) -->
    <div class="top-accent-strip"></div>

    <!-- Header with Logo on White (Clean Logo Visibility) -->
    <div class="header-bar">
      <img src="cid:funderama-logo" alt="Funderama" class="logo-img" />
    </div>

    <!-- Main Content Area -->
    <div class="body-content">
      <div style="text-align: center;">
        <span class="badge">${badgeText}</span>
      </div>
      ${content}
    </div>

    <!-- Footer -->
    <div class="footer-bar">
      <p style="margin: 0 0 6px 0;"><strong>Funderama LLC</strong> | Lending Solutions</p>
      <p style="margin: 0 0 6px 0;">Customer Care: <a href="tel:${globalInfo.phoneRaw}">${globalInfo.phone}</a> | Email: <a href="mailto:${globalInfo.emailApply}">${globalInfo.emailApply}</a></p>
      <p style="margin: 0; font-size: 11px; color: #94a3b8;">&copy; ${currentYear} Funderama LLC. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Sends both User Confirmation and Admin Alert for detailed Contact Us inquiries
 */
export async function sendContactInquiryEmails({ name, email, phone, message, ipAddress }) {
  const transporter = getTransporter();
  if (!transporter) return { success: false, reason: "SMTP not configured" };

  const attachments = getLogoAttachment();
  const fromAddress = `"${mailConfig.senderName}" <${mailConfig.smtpUser || mailConfig.senderEmail}>`;
  const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" });

  try {
    // 1. Send Confirmation Email to the User
    if (email) {
      const userHtml = renderEmailWrapper({
        title: "Thank you for contacting Funderama!",
        badgeText: "Inquiry Received",
        content: `
          <h2 style="color: #183059; margin: 0 0 12px 0; font-size: 22px; text-align: center;">Thank You, ${name}!</h2>
          <p style="font-size: 15px; line-height: 1.6; color: #475569; text-align: center; margin-bottom: 24px;">
            We have received your message. One of our dedicated funding specialists will carefully review your details and contact you shortly.
          </p>

          <h3 style="font-size: 15px; color: #183059; margin: 24px 0 8px 0;">Summary of your submission:</h3>
          <table class="table-details" style="width: 100% !important; max-width: 100% !important; table-layout: fixed !important; border-collapse: collapse;">
            <tr>
              <td class="table-label" style="width: 32%; word-break: normal;">Full Name</td>
              <td class="table-value" style="word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;">${name}</td>
            </tr>
            <tr>
              <td class="table-label" style="width: 32%; word-break: normal;">Email</td>
              <td class="table-value" style="word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none; word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td class="table-label" style="width: 32%; word-break: normal;">Phone</td>
              <td class="table-value" style="word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td class="table-label" style="width: 32%; word-break: normal;">Received At</td>
              <td class="table-value" style="word-break: break-word; overflow-wrap: anywhere;">${timestamp} EST</td>
            </tr>
          </table>

          ${message ? `
          <div style="margin-top: 16px;">
            <strong style="font-size: 13px; color: #475569;">Your Message:</strong>
            <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
          </div>` : ""}

          <div style="text-align: center; margin-top: 28px;">
            <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Need immediate assistance?</p>
            <a href="tel:${globalInfo.phoneRaw}" class="btn-primary">Call Us: ${globalInfo.phone}</a>
          </div>
        `,
      });

      await transporter.sendMail({
        from: fromAddress,
        to: email,
        subject: `Thank you for contacting Funderama! We received your message`,
        html: userHtml,
        attachments,
      });
    }

    // 2. Send Notification Email to Admin
    const adminRecipient = mailConfig.adminEmail;
    const adminHtml = renderEmailWrapper({
      title: "New Contact Inquiry",
      badgeText: "New Contact Inquiry",
      content: `
        <h2 style="color: #183059; margin: 0 0 12px 0; font-size: 20px;">New Contact Message Received</h2>
        <p style="font-size: 14px; color: #475569; margin-bottom: 18px;">
          A visitor has submitted a new inquiry via the <strong>Contact Us</strong> page.
        </p>

        <table class="table-details" style="width: 100% !important; max-width: 100% !important; table-layout: fixed !important; border-collapse: collapse;">
          <tr>
            <td class="table-label" style="width: 32%; word-break: normal;">Full Name</td>
            <td class="table-value" style="word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;"><strong>${name}</strong></td>
          </tr>
          <tr>
            <td class="table-label" style="width: 32%; word-break: normal;">Email Address</td>
            <td class="table-value" style="word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none; word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;">${email}</a></td>
          </tr>
          <tr>
            <td class="table-label" style="width: 32%; word-break: normal;">Phone Number</td>
            <td class="table-value" style="word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;">${phone ? `<a href="tel:${phone}" style="color: #0284c7; text-decoration: none;">${phone}</a>` : "Not provided"}</td>
          </tr>
          <tr>
            <td class="table-label" style="width: 32%; word-break: normal;">Client IP</td>
            <td class="table-value" style="word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;"><code>${ipAddress || "Unknown"}</code></td>
          </tr>
          <tr>
            <td class="table-label" style="width: 32%; word-break: normal;">Date & Time</td>
            <td class="table-value" style="word-break: break-word; overflow-wrap: anywhere;">${timestamp} EST</td>
          </tr>
        </table>

        ${message ? `
        <div style="margin-top: 16px;">
          <strong style="font-size: 13px; color: #475569;">Inquiry Message:</strong>
          <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
        </div>` : ""}

        <div style="text-align: center; margin-top: 24px;">
          <a href="mailto:${email}?subject=Re:%20Your%20Inquiry%20with%20Funderama" class="btn-primary">
            Reply to ${name}
          </a>
        </div>
      `,
    });

    await transporter.sendMail({
      from: fromAddress,
      to: adminRecipient,
      replyTo: email,
      subject: `New Contact Inquiry: ${name} (${email})`,
      html: adminHtml,
      attachments,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact inquiry emails:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Sends Admin Alert for Quick Consultation / Callback lead submissions
 */
export async function sendCallbackNotificationEmail({ name, phone, pageSource, ipAddress }) {
  const transporter = getTransporter();
  if (!transporter) return { success: false, reason: "SMTP not configured" };

  const attachments = getLogoAttachment();
  const fromAddress = `"${mailConfig.senderName}" <${mailConfig.smtpUser || mailConfig.senderEmail}>`;
  const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" });

  try {
    const adminRecipient = mailConfig.adminEmail;
    const adminHtml = renderEmailWrapper({
      title: "New Callback Request",
      badgeText: `Lead from ${pageSource}`,
      content: `
        <h2 style="color: #183059; margin: 0 0 12px 0; font-size: 20px;">New Quick Consultation Request</h2>
        <p style="font-size: 14px; color: #475569; margin-bottom: 18px;">
          A visitor has requested a call-back from the <strong>${pageSource}</strong> page.
        </p>

        <table class="table-details" style="width: 100% !important; max-width: 100% !important; table-layout: fixed !important; border-collapse: collapse;">
          <tr>
            <td class="table-label" style="width: 32%; word-break: normal;">Full Name</td>
            <td class="table-value" style="word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;"><strong>${name}</strong></td>
          </tr>
          <tr>
            <td class="table-label" style="width: 32%; word-break: normal;">Phone Number</td>
            <td class="table-value" style="word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;"><a href="tel:${phone}" style="color: #0284c7; font-weight: 700; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td class="table-label" style="width: 32%; word-break: normal;">Page Source</td>
            <td class="table-value" style="word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;"><span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 12px;">${pageSource}</span></td>
          </tr>
          <tr>
            <td class="table-label" style="width: 32%; word-break: normal;">Client IP</td>
            <td class="table-value" style="word-break: break-all; word-wrap: break-word; overflow-wrap: anywhere;"><code>${ipAddress || "Unknown"}</code></td>
          </tr>
          <tr>
            <td class="table-label" style="width: 32%; word-break: normal;">Date & Time</td>
            <td class="table-value" style="word-break: break-word; overflow-wrap: anywhere;">${timestamp} EST</td>
          </tr>
        </table>

        <div style="text-align: center; margin-top: 24px;">
          <a href="tel:${phone}" class="btn-primary">
            Call ${name} Now (${phone})
          </a>
        </div>
      `,
    });

    await transporter.sendMail({
      from: fromAddress,
      to: adminRecipient,
      subject: `New Consultation Lead [${pageSource}]: ${name} (${phone})`,
      html: adminHtml,
      attachments,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send callback notification email:", error);
    return { success: false, error: error.message };
  }
}
