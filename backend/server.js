const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');

const app = express();
app.use(cors());
app.use(express.json());

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const otpStore = new Map();

app.post('/api/request-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000;
  otpStore.set(email, { otp, expiresAt });

  const msg = {
    to: email,
    from: process.env.EMAIL_FROM, // Your verified sender from SendGrid
    subject: 'Your OTP Code',
    text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    replyTo: 'youremail@example.com',
  };

  try {
    const result = await sgMail.send(msg);
    console.log('SendGrid result:', result);
    res.json({ message: 'OTP sent' });
    console.log('✅ OTP email accepted by SendGrid. Message ID:', result[0]?.headers['x-message-id']);

  } catch (error) {
    console.error('SendGrid error:', error.response?.body || error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

app.post('/api/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  const record = otpStore.get(email);

  if (record && record.otp === otp && Date.now() < record.expiresAt) {
    otpStore.delete(email);
    res.json({ verified: true });
  } else {
    res.json({ verified: false });
  }
});

app.listen(5000, () => {
  console.log('✅ Server running on port 5000 with SendGrid');
});
