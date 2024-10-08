// app/api/sendEmail/route.js

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Temel doğrulama
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Lütfen tüm gerekli alanları doldurun.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Gmail SMTP ayarları ile bir transporter oluşturun
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // E-posta seçeneklerini tanımlayın
    const mailOptions = {
      from: `"${name}" <${email}>`, // Gönderen adresi
      to: process.env.GMAIL_EMAIL, // Kendi Gmail adresiniz
      subject: subject || "Yeni İletişim Formu Gönderimi",
      text: message,
      html: `
        <p>Yeni bir iletişim formu gönderimi aldınız:</p>
        <ul>
          <li><strong>İsim:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Konu:</strong> ${subject}</li>
        </ul>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    };

    // E-postayı gönderin
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "E-posta başarıyla gönderildi!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("E-posta gönderilirken hata oluştu:", error);
    return new Response(
      JSON.stringify({ success: false, message: "E-posta gönderilemedi." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
