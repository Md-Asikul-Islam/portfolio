import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Environment variables
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO;
const EMAIL_HOST = process.env.EMAIL_HOST || "smtp.gmail.com";
const EMAIL_PORT = Number(process.env.EMAIL_PORT) || 465;

// Validate required env variables
if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
  throw new Error(
    "EMAIL_USER, EMAIL_PASS, and EMAIL_TO must be defined in .env.local"
  );
}

// Type for contact form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Production-ready POST handler
export async function POST(req: NextRequest) {
  try {
    const data: ContactFormData = await req.json();
    const { name, email, message } = data;

    // Validate input
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: EMAIL_PORT === 465, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true, // ensures secure connection
      },
    });

    // Send email
    await transporter.sendMail({
      from: EMAIL_USER,   // Your Gmail
      replyTo: email,     // User's email
      to: EMAIL_TO,       // Your receiving email
      subject: `New Contact Form Message from ${name}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: unknown) {
    console.error("Email sending error:", error);

    const message =
      error instanceof Error ? error.message : "Internal Server Error";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
