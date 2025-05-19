import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { getCurrentUser, isAuthenticated, logoutUser } from "../services/api" // Import the auth functions

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const userMenuRef = useRef(null)

  const navigate = useNavigate()

  // Check if user is authenticated on component mount
  useEffect(() => {
    if (isAuthenticated()) {
      setUser(getCurrentUser())
    }
  }, [])

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle logout
  const handleLogout = () => {
    logoutUser()
    setUser(null)
    setIsUserMenuOpen(false)
    navigate("/")
  }

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user || !user.name) return "U"
    return user.name
      .split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md py-4 px-6 md:px-12"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <div className="text-3xl font-bold text-pink-500">Sparkle</div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Features", "How It Works", "Love Calculator"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}

          {/* Conditional rendering based on authentication */}
          {!user ? (
            <motion.button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/pass-login")}
            >
              Login
            </motion.button>
          ) : (
            <div className="relative" ref={userMenuRef}>
              <motion.div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-medium">
                  {getUserInitials()}
                </div>
                <span className="text-gray-700 font-medium">{user.name || "User"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-gray-500 transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>

              {/* User Dropdown Menu */}
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-1">
                      <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500">
                        Profile
                      </a>
                      <a
                        href="/dashboard"
                        className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                      >
                        Dashboard
                      </a>
                      <div className="border-t border-gray-100 my-1"></div>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                      >
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {["Home", "Features", "How It Works", "Love Calculator"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-700 hover:text-pink-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

              {/* Mobile login/user section */}
              {!user ? (
                <button
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg w-full"
                  onClick={() => {
                    setIsMenuOpen(false)
                    navigate("/pass-login")
                  }}
                >
                  Login
                </button>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 py-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                      {getUserInitials()}
                    </div>
                    <span className="text-gray-700 font-medium">{user.name || "User"}</span>
                  </div>
                  <a href="/profile" className="block text-gray-700 hover:text-pink-500 font-medium py-2">
                    Profile
                  </a>
                  <a href="/dashboard" className="block text-gray-700 hover:text-pink-500 font-medium py-2">
                    Dashboard
                  </a>
                  <button
                    onClick={handleLogout}
                    className="text-left w-full text-gray-700 hover:text-pink-500 font-medium py-2"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
