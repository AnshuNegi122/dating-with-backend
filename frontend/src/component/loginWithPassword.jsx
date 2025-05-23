"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Animation from "./Animation"
import AnimatedBackground from "./AnimatedBackground"
import { motion } from "framer-motion"
import { loginUser } from "../services/api"
import { toast } from "react-toastify"
import ToastContainer from "./ToastContainer"

import boyImage from '../assets/images/boy.png'; // adjust path as needed
import girlImage from '../assets/images/girl.png'; // adjust path as needed
import girlImage1 from '../assets/images/girl 1.png'; // adjust path as needed

const LoginWithPasswordScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}

    if (!email) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email is invalid"

    if (!password) newErrors.password = "Password is required"
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return
    setLoading(true) // start loading

    const user = { email, password }

    try {
      const result = await loginUser(user)
      console.log("✅ Login result:", result)

      // Replace alert with toast
      toast.success("Login successful! Welcome back.", {
        icon: "💖",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
      })

      setEmail("")
      setPassword("")
      setErrors({})

      // Short delay before navigation to allow toast to be seen
      setTimeout(() => {
        navigate("/dashboard")
      }, 1500)
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        server: err.message || "Login failed",
      }))

      // Show error toast
      toast.error(err.message || "Login failed", {
        icon: "💔",
      })

      console.error("❌ Error during login:", err.message)
    } finally {
      setLoading(false) // stop loading
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-gray-800 bg-pink-100 relative overflow-hidden">
      {/* Toast Container */}
      <ToastContainer />

      {/* Character Illustrations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Boy illustration on the left */}
        <img
          src={boyImage}
          alt="boy"
          className="absolute left-0 bottom-0 h-[70vh] max-h-[600px] object-contain opacity-60 transform -translate-x-1/4"
        />

        {/* Girl illustration on the right */}
        <img
          src={girlImage1}
          alt=""
          className="absolute right-0 bottom-0 h-[70vh] max-h-[600px] object-contain opacity-60 transform translate-x-1/4"
        />

        {/* Animated Background */}
        <AnimatedBackground />
        <div className=" inset-0 bg-white/70"></div>
      </div>

      <motion.div
        className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl shadow-elegant overflow-hidden relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-8 cursor-pointer" onClick={() => navigate("/")}>
              <svg className="w-8 h-8 text-brand-300" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                  2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                  4.5 2.09C13.09 3.81 14.76 3 
                  16.5 3 19.58 3 22 5.42 22 
                  8.5c0 3.78-3.4 6.86-8.55 
                  11.54L12 21.35z"
                />
              </svg>
              <h1 className="text-2xl font-display font-semibold ml-2 tracking-wide">Amour</h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-4">
              Find your perfect match with our premium dating experience
            </h2>
            <p className="text-brand-100/80 mb-8 text-sm md:text-base">
              Join thousands of singles who have found meaningful connections through our curated matching system.
            </p>
          </div>
          <Animation />
          <p className="text-xs text-brand-100/60 mt-8">© 2023 Amour. All rights reserved.</p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-7/12 card-gradient bg-white p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-2">Welcome Back</h3>
            <p className="text-gray-600 mb-8">Sign in to continue your journey to love</p>

            {/* Email Field */}
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
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button hover:bg-gray-50 outline-none"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus={true}
              />
            </div>

            {/* Password Field */}
            <label htmlFor="password" className="block text-gray-700 text-md font-medium mb-2 mt-4">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 8V6a5 5 0 0110 0v2h1a2 2 0 012 2v6a2 
                                     2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 
                                     012-2h1zm2-2a3 3 0 116 0v2H7V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button hover:bg-gray-50 outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end mt-1">
              <Link to="/forgot-password" className="text-sm text-pink-600 hover:text-pink-500 font-medium">
                Forgot Password?
              </Link>
            </div>

            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            {errors.server && <p className="text-red-500 text-sm mt-4">{errors.server}</p>}

            <button
              onClick={handleSubmit}
              className={`mt-4 shine flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-200 shadow-button mb-4 hover:bg-gray-50 transition-all bg-pink-700 w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:opacity-90 ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? (
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
                  <span className="font-medium text-white outline-none">Logging in...</span>
                </>
              ) : (
                <span className="font-medium text-white outline-none">Login</span>
              )}
            </button>

            {/* OR Divider */}
            <div className="relative flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-600 text-sm"></span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Don't have an account */}
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button className="font-medium text-pink-600 hover:text-pink-500" onClick={() => navigate("/signup")}>
                  Sign Up
                </button>
              </p>
            </div>

            {/* Terms */}
            <div className="text-center text-sm text-gray-600 mb-6">
              By continuing, you agree to our
              <a href="#" className="text-pink-600 hover:text-pink-500 font-medium">
                {" "}
                Terms of Service{" "}
              </a>{" "}
              and
              <a href="#" className="text-pink-600 hover:text-pink-500 font-medium">
                {" "}
                Privacy Policy
              </a>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-4 mt-5">
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

export default LoginWithPasswordScreen
