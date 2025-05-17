// This is a simplified version to demonstrate the authentication flow
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Mock database
const users = [];

// JWT Secret
const JWT_SECRET = 'your-jwt-secret';

// Utility functions
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const generateToken = (userId, email) => {
  return jwt.sign(
    { id: userId, email },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
};

// Authentication flow
const authFlow = async () => {
  console.log('🚀 Starting Authentication Flow Demo');
  console.log('===================================');
  
  // 1. User Signup
  console.log('\n📝 STEP 1: USER SIGNUP');
  console.log('-----------------------------------');
  
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123'
  };
  
  console.log(`User data: ${JSON.stringify(userData, null, 2)}`);
  
  // Generate verification token
  const verificationToken = crypto.randomBytes(32).toString('hex');
  const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  
  // Hash password
  const hashedPassword = await hashPassword(userData.password);
  
  // Create new user
  const userId = crypto.randomBytes(16).toString('hex');
  const newUser = {
    id: userId,
    name: userData.name,
    email: userData.email,
    password: hashedPassword,
    isVerified: false,
    verificationToken,
    verificationTokenExpires,
    createdAt: new Date()
  };
  
  // Save user to mock database
  users.push(newUser);
  
  console.log('✅ User registered successfully');
  console.log(`📧 Verification email sent to: ${userData.email}`);
  console.log(`🔗 Verification URL: http://localhost:5000/api/auth/verify/${verificationToken}`);
  
  // 2. Email Verification
  console.log('\n📧 STEP 2: EMAIL VERIFICATION');
  console.log('-----------------------------------');
  
  console.log('User clicks on verification link in email');
  
  // Find user with verification token
  const userToVerify = users.find(user => user.verificationToken === verificationToken);
  
  if (userToVerify && userToVerify.verificationTokenExpires > new Date()) {
    // Update user verification status
    userToVerify.isVerified = true;
    userToVerify.verificationToken = undefined;
    userToVerify.verificationTokenExpires = undefined;
    
    // Generate JWT token for automatic login
    const authToken = generateToken(userToVerify.id, userToVerify.email);
    
    console.log('✅ Email verified successfully');
    console.log(`🔒 JWT Token: ${authToken.substring(0, 20)}...`);
  } else {
    console.log('❌ Invalid or expired verification token');
  }
  
  // 3. User Signin
  console.log('\n🔑 STEP 3: USER SIGNIN');
  console.log('-----------------------------------');
  
  const loginData = {
    email: 'john.doe@example.com',
    password: 'password123'
  };
  
  console.log(`Login attempt with: ${JSON.stringify(loginData, null, 2)}`);
  
  // Find user by email
  const userToLogin = users.find(user => user.email === loginData.email);
  
  if (!userToLogin) {
    console.log('❌ User not found');
  } else {
    // Check password
    const isPasswordValid = await comparePassword(loginData.password, userToLogin.password);
    
    if (!isPasswordValid) {
      console.log('❌ Invalid password');
    } else if (!userToLogin.isVerified) {
      console.log('❌ Email not verified');
    } else {
      // Generate JWT token
      const token = generateToken(userToLogin.id, userToLogin.email);
      
      console.log('✅ Login successful');
      console.log(`🔒 JWT Token: ${token.substring(0, 20)}...`);
      
      // 4. Access Protected Route
      console.log('\n🔒 STEP 4: ACCESS PROTECTED ROUTE');
      console.log('-----------------------------------');
      
      try {
        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // Find user
        const authenticatedUser = users.find(user => user.id === decoded.id);
        
        if (authenticatedUser) {
          console.log('✅ Authenticated successfully');
          console.log('👤 User profile:');
          console.log({
            id: authenticatedUser.id,
            name: authenticatedUser.name,
            email: authenticatedUser.email,
            isVerified: authenticatedUser.isVerified
          });
        } else {
          console.log('❌ User not found');
        }
      } catch (error) {
        console.log(`❌ Token verification failed: ${error.message}`);
      }
      
      // 5. Logout
      console.log('\n👋 STEP 5: USER LOGOUT');
      console.log('-----------------------------------');
      console.log('✅ User logged out successfully');
      console.log('(Token invalidation would be handled by the client)');
    }
  }
  
  console.log('\n🎉 Authentication Flow Demo Completed');
};

// Run the authentication flow
authFlow();