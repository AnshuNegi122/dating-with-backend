"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import AnimatedBackground from "./AnimatedBackground"
import { verifyResetToken, resetPassword } from "../services/api"
import { toast } from "react-toastify"
import ToastContainer from "./ToastContainer"

function ResetPassword() {
  const { token } = useParams()
  const navigate = useNavigate()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isTokenValid, setIsTokenValid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkToken = async () => {
      try {
        await verifyResetToken(token)
        setIsTokenValid(true)
      } catch (err) {
        setError(err.message)
        setIsTokenValid(false)

        // Show error toast for invalid token
        toast.error(err.message || "Invalid or expired reset link", {
          icon: "💔",
          style: {
            borderRadius: "10px",
            background: "#fff",
            color: "#333",
          },
        })
      } finally {
        setIsLoading(false)
      }
    }

    checkToken()
  }, [token])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsSubmitting(true)
    setError("")
    setMessage("")

    try {
      const response = await resetPassword(token, { password, confirmPassword })
      setMessage(response.message)

      // Show success toast
      toast.success(response.message || "Password reset successful!", {
        icon: "💖",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
      })

      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate("/login")
      }, 3000)
    } catch (err) {
      setError(err.message)

      // Show error toast
      toast.error(err.message || "Failed to reset password", {
        icon: "💔",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-pink-100">
        <div className="text-center">
          <svg
            className="animate-spin h-12 w-12 text-pink-500 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="text-lg text-gray-700">Verifying your reset link...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-gray-800 bg-pink-100">
      {/* Toast Container */}
      <ToastContainer />

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
            {isTokenValid ? (
              <>
                <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-4">
                  Create a new password
                </h2>
                <p className="text-brand-100/80 mb-8 text-sm md:text-base">
                  Choose a strong password to keep your love journey secure. Your perfect match is waiting!
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-4">
                  Invalid or Expired Link
                </h2>
                <p className="text-brand-100/80 mb-8 text-sm md:text-base">
                  This password reset link is no longer valid. Please request a new one.
                </p>
              </>
            )}
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
            {isTokenValid ? (
              <>
                <h3 className="text-2xl md:text-3xl font-display font-medium mb-2">Reset Your Password</h3>
                <p className="text-gray-600 mb-8">Enter your new password below to regain access to your account.</p>

                {message && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200">
                    <p className="text-green-700">{message}</p>
                    <p className="text-sm text-green-600 mt-1">Redirecting to login page...</p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-md font-medium mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5 8V6a5 5 0 0110 0v2h1a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h1zm2-2a3 3 0 116 0v2H7V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button hover:bg-gray-50 outline-none"
                        placeholder="Enter new password"
                        required
                        disabled={isSubmitting}
                        minLength={6}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700 text-md font-medium mb-2">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5 8V6a5 5 0 0110 0v2h1a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h1zm2-2a3 3 0 116 0v2H7V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button hover:bg-gray-50 outline-none"
                        placeholder="Confirm new password"
                        required
                        disabled={isSubmitting}
                        minLength={6}
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
                        <span className="font-medium text-white">Resetting Password...</span>
                      </>
                    ) : (
                      <span className="font-medium text-white">Reset Password</span>
                    )}
                  </motion.button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-red-700">{error || "This password reset link is invalid or has expired."}</p>
                </div>
                <Link
                  to="/forgot-password"
                  className="mt-4 shine inline-flex items-center justify-center gap-3 py-3 px-6 rounded-lg border border-gray-200 shadow-button mb-4 hover:bg-gray-50 transition-all bg-pink-700 bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:opacity-90"
                >
                  Request New Reset Link
                </Link>
              </div>
            )}

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

export default ResetPassword
