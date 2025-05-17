import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/user.model.js';
import { sendVerificationEmail } from '../utils/email.js';

// Register a new user
export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'User with this email already exists' 
      });
    }
    
    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const verificationTokenExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    
    // Create new user
    const newUser = new User({
      name,
      email,
      password,
      verificationToken,
      verificationTokenExpires
    });
    
    // Save user to database
    await newUser.save();
    
    // Send verification email
    const verificationUrl = `${req.protocol}://${req.get('host')}/api/auth/verify/${verificationToken}`;
    await sendVerificationEmail(newUser.email, verificationUrl);
    
    // Return success response (without sending the token for security)
    res.status(201).json({
      success: true,
      message: 'User registered successfully. Please check your email to verify your account.'
    });
    
    console.log(`✅ User registered: ${email}`);
    console.log(`📧 Verification email sent to: ${email}`);
    console.log(`🔗 Verification URL: ${verificationUrl}`);
    
  } catch (error) {
    next(error);
  }
};

// Verify user email
export const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.params;
    
    // Find user with the verification token
    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpires: { $gt: Date.now() }
    });
    
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired verification token'
      });
    }
    
    // Update user verification status
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;
    await user.save();
    
    // Generate JWT token for automatic login
    const authToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || 'your-jwt-secret',
      { expiresIn: '1h' }
    );
    
    res.status(200).json({
      success: true,
      message: 'Email verified successfully',
      token: authToken
    });
    
    console.log(`✅ User verified: ${user.email}`);
    
  } catch (error) {
    next(error);
  }
};

// Login user
export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }
    
    // Check if password is correct
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }
    
    // Check if user is verified
    if (!user.isVerified) {
      return res.status(401).json({
        success: false,
        message: 'Please verify your email before logging in'
      });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || 'your-jwt-secret',
      { expiresIn: '1h' }
    );
    
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
    
    console.log(`🔑 User logged in: ${email}`);
    
  } catch (error) {
    next(error);
  }
};

// Logout user
export const logout = (req, res) => {
  // In a token-based authentication system, the client is responsible for removing the token
  res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  });
  
  console.log('👋 User logged out');
};

// Get current user profile
export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    
    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  }
};