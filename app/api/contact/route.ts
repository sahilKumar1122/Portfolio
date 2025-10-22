import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend once (outside the handler for faster subsequent calls)
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Simple rate limiting (in-memory, resets on server restart)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 3; // max requests
const RATE_WINDOW = 60 * 1000; // per 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter((time) => now - time < RATE_WINDOW);
  
  if (recentRequests.length >= RATE_LIMIT) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate input
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please contact via social links.",
        },
        { status: 503 }
      );
    }

    // Send email with optimized HTML
    const emailData = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ksahilbazard@gmail.com"],
      replyTo: email,
      subject: `Portfolio: ${name} sent you a message`,
      html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2563EB; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #2563EB; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #2563EB; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Portfolio Contact</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">From:</span> ${name}
      </div>
      <div class="field">
        <span class="label">Email:</span> ${email}
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    
    // Handle specific Resend errors
    if (error instanceof Error && error.message?.includes("API key")) {
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}

