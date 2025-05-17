import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (email, verificationUrl) => {
  try {
    // For demonstration purposes, we'll create a test account
    // In production, you would use your actual email service credentials
    console.log(`📧 Sending verification email to ${email}`);
    console.log(`🔗 Verification URL: ${verificationUrl}`);
    
    // In a real application, you would set up a transporter like this:
    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    
    const mailOptions = {
      from: `"Your App" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Please verify your email',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h2>Verify Your Email Address</h2>
          <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verify Email</a>
          </div>
          <p>If the button doesn't work, you can also click on the link below or copy and paste it into your browser:</p>
          <p><a href="${verificationUrl}">${verificationUrl}</a></p>
          <p>This link will expire in 24 hours.</p>
          <p>If you didn't sign up for an account, you can safely ignore this email.</p>
        </div>
      `
    };
    
    await transporter.sendMail(mailOptions);
    
    
    return true;
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw new Error('Failed to send verification email');
  }
};