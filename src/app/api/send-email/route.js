import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact from ${name}`,
      text: message,
    });
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to send email." }), { status: 500 });
  }
}
