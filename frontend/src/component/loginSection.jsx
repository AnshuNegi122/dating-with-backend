"use client"

import { useState, useRef, useEffect } from "react"
import Animation from "./Animation"

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState(["", "", "", ""])
  const [otpSent, setOtpSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [resendCooldown, setResendCooldown] = useState(0)

  const otpRefs = useRef([])

  // Cooldown timer for resend
  useEffect(() => {
    if (resendCooldown === 0) return
    const interval = setInterval(() => {
      setResendCooldown((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [resendCooldown])

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleGenerateOTP = async () => {
    if (!isValidEmail(email)) return alert("Please enter a valid email")
    setIsLoading(true)
    try {
      const res = await fetch("http://localhost:5000/api/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setOtpSent(true)
        setResendCooldown(30)
        alert("OTP sent to your email")
      } else {
        alert("Failed to send OTP")
      }
    } catch (err) {
      console.error(err)
      alert("Server error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOTP = async () => {
    const otpCode = otp.join("")
    if (otpCode.length !== 4) return alert("Please enter complete 4-digit OTP")
    setIsLoading(true)
    try {
      const res = await fetch("http://localhost:5000/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otpCode }),
      })
      const result = await res.json()
      if (result.verified) alert("Login successful!")
      else alert("Invalid or expired OTP")
    } catch (err) {
      console.error(err)
      alert("Verification failed")
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return
    const updated = [...otp]
    updated[index] = value
    setOtp(updated)
    if (value && index < otp.length - 1) {
      otpRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        otpRefs.current[index - 1].focus()
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      otpRefs.current[index - 1].focus()
    } else if (e.key === "ArrowRight" && index < otp.length - 1) {
      otpRefs.current[index + 1].focus()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-gray-800">
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl shadow-elegant overflow-hidden">
        {/* Left Side */}
        <div className="bg-pink-700 w-full md:w-5/12 bg-gradient-to-br from-brand-800 to-brand-950 p-8 md:p-12 flex flex-col justify-between text-white">
          <div>
            <div className="flex items-center mb-8">
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
        <div className="w-full md:w-7/12 card-gradient p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-2">Welcome Back</h3>
            <p className="text-gray-600 mb-8">Sign in to continue your journey to love</p>

            {/* Email Field */}
            <label htmlFor="email" className="block text-gray-700 text-md font-display font-medium mb-2">
              Your Email
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                className="bg-white w-full ps-10 py-3 px-4 rounded-lg border border-gray-200 shadow-button mb-4 hover:bg-gray-50 outline-none"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus={!otpSent}
              />
            </div>

            {otpSent && (
              <>
                {/* OTP Inputs */}
                <label className="block text-gray-700 text-md font-display font-medium mb-2">Enter OTP</label>
                <div className="max-w-md mx-auto text-center rounded-xl">
                  <div className="flex items-center justify-center gap-3">
                    {otp.map((val, i) => (
                      <input
                        key={i}
                        id={`otp-${i}`}
                        ref={(el) => (otpRefs.current[i] = el)}
                        type="text"
                        maxLength="1"
                        value={val}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                      />
                    ))}
                  </div>
                  <div className="text-sm text-slate-500 mt-4">
                    Didn't receive code?{" "}
                    <button
                      disabled={resendCooldown > 0}
                      onClick={handleGenerateOTP}
                      className={`font-medium ${
                        resendCooldown > 0 ? "text-gray-400" : "text-indigo-500 hover:text-indigo-600"
                      }`}
                    >
                      Resend {resendCooldown > 0 && `(${resendCooldown}s)`}
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* OTP Action Button */}
            <button
              onClick={otpSent ? handleVerifyOTP : handleGenerateOTP}
              className={`mt-4 shine flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-200 shadow-button mb-4 hover:bg-gray-50 transition-all bg-pink-700 w-full bg-gradient-to-br from-brand-800 to-brand-950 ${
                isLoading ? "opacity-60 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              <span className="font-medium text-white">
                {isLoading ? "Please wait..." : otpSent ? "Verify OTP" : "Generate OTP"}
              </span>
            </button>

            {/* OR Divider */}
            <div className="relative flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-600 text-sm">or continue with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Button */}
            <button className="shine w-full bg-white flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-200 shadow-button mb-4 hover:bg-gray-50 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 
                  1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 
                  3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 
                  1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 
                  20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 
                  8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 
                  1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 
                  1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 
                  3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="font-medium">Continue with Google</span>
            </button>

            {/* Terms */}
            <div className="text-center text-sm text-gray-600 mb-6">
              By continuing, you agree to our
              <a href="#" className="text-brand-700 hover:text-brand-800 font-medium">
                {" "}
                Terms of Service{" "}
              </a>{" "}
              and
              <a href="#" className="text-brand-700 hover:text-brand-800 font-medium">
                {" "}
                Privacy Policy
              </a>
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
      </div>
    </div>
  )
}

export default LoginScreen
