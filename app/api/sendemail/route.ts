import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, referal, message, plan } = await req.json();

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Your SMTP host
      port: 465, // SMTP port (usually 587 for TLS)
      auth: {
        user: process.env.SMTP_USER, // Your SMTP username
        pass: process.env.SMTP_PASS, // Your SMTP password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: '"WebTeck" <vancouver.webteck@gmail.com>', // Replace with your details
      to: "vancouver.webteck@gmail.com", // Replace with your email
      subject: "New Form Submission",
      html: `
        <h1>Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Plan:</strong> ${plan}</p>
        ${referal ?? `<p><strong>Referal code: ${referal}`}
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
