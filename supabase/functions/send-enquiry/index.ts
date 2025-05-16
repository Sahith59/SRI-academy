import nodemailer from "npm:nodemailer@6.9.9";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, course, message } = await req.json()

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sriacademy73@gmail.com",
        pass: "hpfa jdwr oxnv opug"
      }
    });

    // Email content for admins
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">New Enquiry from SRI Academy Website</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      </div>
    `;

    // Email content for user
    const userEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">Thank you for contacting SRI Academy</h2>
        <p>Dear ${name},</p>
        <p>We have received your enquiry about our ${course} program. Our team will contact you shortly.</p>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin-bottom: 15px;">In the meantime, if you have any urgent questions, feel free to:</p>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">📞 Call us at: 
              <a href="tel:+919948854533" style="color: #1e3a8a;">+91 9948854533</a> or 
              <a href="tel:+919951190513" style="color: #1e3a8a;">+91 9951190513</a>
            </li>
            <li style="margin-bottom: 10px;">💬 WhatsApp us at: 
              <a href="https://wa.me/919948854533" style="color: #1e3a8a;">+91 9948854533</a> or 
              <a href="https://wa.me/919951190513" style="color: #1e3a8a;">+91 9951190513</a>
            </li>
            <li>✉️ Email us at: 
              <a href="mailto:sriacademy73@gmail.com" style="color: #1e3a8a;">sriacademy73@gmail.com</a> or 
              <a href="mailto:tsridhar73@gmail.com" style="color: #1e3a8a;">tsridhar73@gmail.com</a>
            </li>
          </ul>
        </div>
        <p>Best regards,<br>SRI Academy Team</p>
      </div>
    `;

    // Send to admins
    await transporter.sendMail({
      from: '"SRI Academy" <sriacademy73@gmail.com>',
      to: ["sriacademy73@gmail.com", "tsridhar73@gmail.com"],
      subject: "New Enquiry from SRI Academy Website",
      html: adminEmailContent
    });

    // Send auto-reply to user
    await transporter.sendMail({
      from: '"SRI Academy" <sriacademy73@gmail.com>',
      to: email,
      subject: "Thank you for your interest in SRI Academy",
      html: userEmailContent
    });

    return new Response(
      JSON.stringify({ message: 'Enquiry submitted successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    )
  }
});