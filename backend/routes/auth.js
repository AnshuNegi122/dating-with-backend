import express from 'express';
import {
  register,
  login,
  verifyEmail,
  resendVerificationEmail,
  forgotPassword,
  resetPassword,
  verifyResetToken,
} from "../controllers/authController.js"
import { protect } from '../middleware/auth.js';

const router = express.Router()

// Registration and login routes
router.post("/register", register)
router.post("/login", login)

// Email verification routes
router.get("/verify-email/:token", verifyEmail)
router.post("/resend-verification", resendVerificationEmail)

// Password reset routes
router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword)
router.get("/reset-password/:token/verify", verifyResetToken)

// Protected route example
router.get('/me', protect, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user
  });
});

export default router;