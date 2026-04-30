/**
 * Email Service Utility
 * Handles sending emails for contact form submissions
 */

const nodemailer = require('nodemailer');

// Email transporter configuration
let transporter;

try {
  transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE || 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });
} catch (err) {
  console.warn('Email service not configured. Contact form submissions will be saved but no email will be sent.');
  transporter = null;
}

/**
 * Send confirmation email to user
 */
const sendConfirmationEmail = async (name, email) => {
  if (!transporter) return;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'We received your message - Samridha\'s Portfolio',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p style="color: #666; font-size: 14px; margin-top: 20px;">
          Best regards,<br>
          Samridha Shri
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to:', email);
  } catch (err) {
    console.error('Error sending confirmation email:', err);
  }
};

/**
 * Send notification email to portfolio owner
 */
const sendNotificationEmail = async (name, email, subject, message) => {
  if (!transporter) return;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.EMAIL_TO,
    subject: `New Portfolio Contact: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3 style="margin-top: 20px;">Message:</h3>
        <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          Submitted at: ${new Date().toLocaleString()}
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent to:', process.env.EMAIL_TO);
  } catch (err) {
    console.error('Error sending notification email:', err);
  }
};

module.exports = {
  sendConfirmationEmail,
  sendNotificationEmail
};
