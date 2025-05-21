import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD);


// Create a transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Function to send verification email
export const sendVerificationEmail = async (email, name, token) => {
  const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
  
  const mailOptions = {
    from: `"Amour Dating App" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Verify Your Email Address',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #ec4899;">Amour Dating App</h1>
        </div>
        <div style="margin-bottom: 30px;">
          <h2>Hello ${name},</h2>
          <p>Thank you for signing up with Amour Dating App! To complete your registration, please verify your email address by clicking the button below:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" style="background: linear-gradient(to right, #ec4899, #8b5cf6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Verify Email Address</a>
          </div>
          <p>If the button doesn't work, you can also copy and paste the following link into your browser:</p>
          <p><a href="${verificationUrl}">${verificationUrl}</a></p>
          <p>This link will expire in 24 hours.</p>
        </div>
        <div style="border-top: 1px solid #e1e1e1; padding-top: 20px; font-size: 12px; color: #666;">
          <p>If you didn't sign up for an account, you can safely ignore this email.</p>
          <p>&copy; 2023 Amour Dating App. All rights reserved.</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Verification email sent to ${email}`);
    return true;
  } catch (error) {
    console.error('Error sending verification email:', error);
    return false;
  }
};

// Assuming you have an existing email.js file with sendVerificationEmail function
// Add this new function for password reset emails

export const sendPasswordResetEmail = async (email, name, resetToken) => {
  try {
    // Your email sending logic here
    // This will depend on your email service (nodemailer, sendgrid, etc.)
    
    // Example with nodemailer:
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    
    const message = {
      from: `"Amour Dating App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Password Reset Request',
      html: `
        <h1>Hello ${name},</h1>
        <p>You requested a password reset. Please click the link below to reset your password:</p>
        <a href="${resetUrl}" target="_blank">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `
    };
    
    // Send email using your email service
    // const info = await transporter.sendMail(message);
    
    try {
      await transporter.sendMail(message);
      console.log(`Reset Password email sent to ${email}`);
      return true;
    } catch (error) {
      console.error('Error sending reset password email:', error);
      return false;
    }
  } catch (error) {
    console.error('Send password reset email error:', error);
    return false;
  }
};

export default transporter;