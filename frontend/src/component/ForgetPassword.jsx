"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import AnimatedBackground from "./AnimatedBackground"
import { forgotPassword } from "../services/api"

function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      setError("Email is required")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Email is invalid")
      return
    }

    setIsSubmitting(true)
    setError("")
    setMessage("")

    try {
      const response = await forgotPassword(email)
      setMessage(response.message)
      // Clear email field after successful submission
      setEmail("")
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-gray-800 bg-pink-100">
      {/* Animated Background */}
      <div className="relative inset-0 z-0">
        <AnimatedBackground />
        <div className="relative inset-0 bg-white/80"></div>
      </div>
      <motion.div
        className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl shadow-elegant overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-8 cursor-pointer" onClick={() => navigate("/")}>
              <svg className="w-8 h-8 text-brand-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <h1 className="text-2xl font-display font-semibold ml-2 tracking-wide">Amour</h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-4">Forgot your password?</h2>
            <p className="text-brand-100/80 mb-8 text-sm md:text-base">
              Don't worry, it happens to the best of us. We'll help you get back to finding love in no time.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <svg className="w-32 h-32 text-white/30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <p className="text-xs text-brand-100/60 mt-8">© 2023 Amour. All rights reserved.</p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-7/12 card-gradient bg-white p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-2">Reset Your Password</h3>
            <p className="text-gray-600 mb-8">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            {message && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200">
                <p className="text-green-700">{message}</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-md font-medium mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 16">
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button hover:bg-gray-50 outline-none"
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className={`mt-4 shine flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-200 shadow-button mb-4 hover:bg-gray-50 transition-all bg-pink-700 w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:opacity-90 ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span className="font-medium text-white">Sending Reset Link...</span>
                  </>
                ) : (
                  <span className="font-medium text-white">Send Reset Link</span>
                )}
              </motion.button>
            </form>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Remember your password?{" "}
                <Link to="/login" className="font-medium text-pink-600 hover:text-pink-500">
                  Back to Login
                </Link>
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {["Secure Login", "Privacy Protected", "24/7 Support"].map((label, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 
                      1 0 00-1.414-1.414L9 10.586 7.707 
                      9.293a1 1 0 00-1.414 1.414l2 2a1 1 
                      0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ForgotPassword
