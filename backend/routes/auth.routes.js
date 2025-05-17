import express from 'express';
import { signup, signin, logout, verifyEmail, getCurrentUser } from '../controllers/auth.controller.js';
import { validateSignup, validateSignin } from '../middleware/validation.middleware.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// Auth routes
router.post('/signup', validateSignup, signup);
router.post('/signin', validateSignin, signin);
router.get('/verify/:token', verifyEmail);
router.get('/logout', logout);
router.get('/me', protect, getCurrentUser);

export default router;

