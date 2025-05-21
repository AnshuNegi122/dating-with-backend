"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import AnimatedBackground from "../component/AnimatedBackground"
import { registerUser } from "../services/api"

const Signup = ({ onLogin }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    gender: "",
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name) newErrors.name = "Name is required"

    if (!formData.email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)) {
      newErrors.password = "Password must include at least one uppercase letter, one number, and one special character"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }
    
    if (!formData.birthdate) newErrors.birthdate = "Birthdate is required"

    if (!formData.gender) newErrors.gender = "Please select your gender"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    const user = {
      name: formData.name,
      email: formData.email,
      birthdate: formData.birthdate,
      gender: formData.gender,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    }

    try {
      const result = await registerUser(user)
      console.log("✅ Registration result:", result)

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthdate: "",
        gender: "",
      })
      setErrors({})

      if (onLogin) onLogin()
      navigate("/")
      alert("Mail Sent")
    } catch (err) {
      setErrors((prev) => ({ ...prev, server: err.message || "Registration failed" }))
      console.error("❌ Error during registration:", err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-gray-800 bg-purple-100">
      {/* Animated Background */}
      <div className="relative inset-0 z-0">
        <AnimatedBackground />
        <div className="relative inset-0 bg-white/80"></div>
      </div>
      <motion.div
        className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-8 cursor-pointer" onClick={() => navigate("/")}>
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <h1 className="text-2xl font-display font-semibold ml-2 tracking-wide">Amour</h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-4">
              Find your perfect match with our premium dating experience
            </h2>
            <p className="text-brand-100/60 mb-8 text-xs md:text-base">
              Join thousands of singles who have found meaningful connections through our curated matching system.
            </p>
          </div>
          {/* <Animation /> */}
          <p className="text-xs text-white/60 mt-8">© 2023 Amour. All rights reserved.</p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-7/12 bg-white p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-2">Create your account</h3>
            <p className="text-gray-600 mb-8">Sign up to start your journey to love</p>

            {errors.server && <p className="mt-2 text-sm text-red-600 text-center">{errors.server}</p>}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-md font-medium mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button hover:bg-gray-50 outline-none"
                      placeholder="Full Name"
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

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
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button hover:bg-gray-50 outline-none"
                      placeholder="Email address"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="birthdate" className="block text-gray-700 text-md font-medium mb-2">
                    Birth Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="birthdate"
                      name="birthdate"
                      type="date"
                      value={formData.birthdate}
                      onChange={handleChange}
                      className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button hover:bg-gray-50 outline-none"
                    />
                  </div>
                  {errors.birthdate && <p className="mt-1 text-sm text-red-600">{errors.birthdate}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="gender" className="block text-gray-700 text-md font-medium mb-2">
                    Gender
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button hover:bg-gray-50 outline-none"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                  {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 text-md font-medium mb-2">
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
                      autoComplete="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button hover:bg-gray-50 outline-none"
                      placeholder="Password"
                    />
                  </div>
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block text-gray-700 text-md font-medium mb-2">
                    Confirm Password
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
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button hover:bg-gray-50 outline-none"
                      placeholder="Confirm Password"
                    />
                  </div>
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{" "}
                  <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div>
                <motion.button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-sm hover:opacity-90"
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
                      <span>Sending Verification...</span>
                    </>
                  ) : (
                    "Create Account"
                  )}
                </motion.button>
              </div>
            </form>

            {/* Already have an account */}
            <div className="text-center mt-5">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-pink-600 hover:text-pink-500">
                  Sign in
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

export default Signup
