import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, referal, message, plan } = await req.json();

    console.log(process.env.SMTP_HOST);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
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

    await transporter.sendMail({
      from: '"WebTeck" <vancouver.webteck@gmail.com>',
      to: email,
      subject: "Thanks for reaching out to WebTeck!",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for getting in touch with <strong>WebTeck</strong>! We’ve received your message and our team will get back to you shortly.</p>
        
        <h3>Your Submission Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Selected Plan:</strong> ${plan}</p>
        ${referal ? `<p><strong>Referral Code:</strong> ${referal}</p>` : ""}
    
        <br>
        <p>In the meantime, feel free to check out our services or reach us at <a href="mailto:vancouver.webteck@gmail.com">vancouver.webteck@gmail.com</a> if you have any questions.</p>
        
        <p>Best regards,<br>
        The WebTeck Team</p>
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
