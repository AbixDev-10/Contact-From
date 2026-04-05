import nodemailer from "nodemailer";

export const submitContactForm = async (request, response) => {
  const { name, email, subject, message } = request.body;

  if (!name || !email || !subject || !message) {
    return response.status(400).json({
      success: false,
      message: "Please fill in all fields."
    });
  }

  // Log the incoming data so beginners can see what the API receives.
  console.log("New contact form submission:");
  console.log({ name, email, subject, message });

  try {
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.MAIL_TO
    ) {
      return response.status(500).json({
        success: false,
        message: "Email settings are missing in the backend .env file."
      });
    }

    if (process.env.SMTP_HOST === "smtp.example.com") {
      return response.status(500).json({
        success: false,
        message: "Please replace SMTP_HOST with your real email provider."
      });
    }

    // Optional: only send an email when mail environment variables exist.
    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      subject: `${subject} - from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return response.status(200).json({
      success: true,
      message: "Message received"
    });
  } catch (error) {
    console.error("Error while processing contact form:", error);

    return response.status(500).json({
      success: false,
      message: "Server error while sending email. Check backend terminal logs."
    });
  }
};
