
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import { errorHandler } from './middleware/error.middleware.js';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Allow requests from your frontend origin
app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true, // Optional: if you use cookies or authorization headers
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(errorHandler);

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;


// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });

// // For demonstration, let's test our auth flow
// console.log('📝 Authentication Flow Demo:');
// console.log('1. User signup process');
// console.log('2. Email verification process');
// console.log('3. User signin process');