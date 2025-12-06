import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO;

if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
  throw new Error(
    "EMAIL_USER, EMAIL_PASS, and EMAIL_TO must be defined in .env.local"
  );
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactFormData = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: EMAIL_TO,
      subject: `New Contact Form Message from ${name}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
