import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
import { User, LayoutDashboard, LogOut } from "lucide-react" // Use Lucide icons
import { getCurrentUser, isAuthenticated, logoutUser } from "../services/api" // Import the auth functions

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const userMenuRef = useRef(null)

  const navigate = useNavigate()

  const location = useLocation()
  const isDashboard = location.pathname.startsWith("/dashboard")


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
          <div className="text-3xl font-bold text-pink-500 cursor-pointer"
            onClick={() => navigate("/")} >Sparkle</div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {!isDashboard &&
            ["Home", "Features", "How It Works", "Love Calculator"].map((item) => (
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
              onClick={() => navigate("/login")}
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
                    className="absolute right-0 mt-3 w-60 bg-white rounded-2xl shadow-2xl py-2 z-50 border border-pink-100"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-1 space-y-1">
                      {/* Profile */}
                      <motion.a
                        href="/profile"
                        className="group flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-pink-600 transition-all"
                        whileHover={{ scale: 1.02 }}
                      >
                        <User className="w-4 h-4" />
                        Profile
                        <span className="ml-auto text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Go to profile
                        </span>
                      </motion.a>

                      {/* Dashboard */}
                      <motion.a
                        href="/dashboard"
                        className="group flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-pink-600 transition-all"
                        whileHover={{ scale: 1.02 }}
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                        <span className="ml-auto text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Admin area
                        </span>
                      </motion.a>

                      <div className="border-t border-gray-100 my-2" />

                      {/* Logout */}
                      <motion.button
                        onClick={handleLogout}
                        className="group flex items-center gap-2 w-full text-left px-4 py-2 text-red-600 hover:text-red-700 transition-all"
                        whileHover={{ scale: 1.02 }}
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                        <span className="ml-auto text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Sign out
                        </span>
                      </motion.button>
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
      className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl py-5 px-6 rounded-b-3xl border-t border-pink-100"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col space-y-4">
        {/* Show navigation only if not dashboard */}
        {!isDashboard &&
          [
            { label: "Home", icon: <Home className="w-4 h-4" /> },
            { label: "Features", icon: <Star className="w-4 h-4" /> },
            { label: "How It Works", icon: <Heart className="w-4 h-4" /> },
            { label: "Love Calculator", icon: <Heart className="w-4 h-4" /> },
          ].map(({ label, icon }) => (
            <motion.a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.03 }}
            >
              {icon}
              {label}
            </motion.a>
          ))}

        {/* Authenticated User Section */}
        {!user ? (
          <button
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg w-full mt-4"
            onClick={() => {
              setIsMenuOpen(false)
              navigate("/login")
            }}
          >
            Login
          </button>
        ) : (
          <div className="space-y-2 mt-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                {getUserInitials()}
              </div>
              <span className="text-gray-700 font-medium">{user.name || "User"}</span>
            </div>

            <a href="/profile" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium">
              <User className="w-4 h-4" />
              Profile
            </a>

            <a href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium">
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </a>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium w-full text-left"
            >
              <LogOut className="w-4 h-4" />
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
