// src/api/signup.js
const API_URL = 'http://localhost:5000/api';

export async function registerUser(user) {
  try {
    console.log(`Registering user: ${user.email}`);

    const response = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    console.log('✅ User registered successfully');
    console.log('📧 Verification email sent to user');

    return data;
  } catch (error) {
    console.error('❌ Registration error:', error);
    throw error;
  }
}
