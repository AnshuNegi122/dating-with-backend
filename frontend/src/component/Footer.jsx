"use client"

import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <motion.div className="text-2xl font-bold text-pink-500 mb-4" whileHover={{ scale: 1.05 }}>
              Sparkle
            </motion.div>
            <p className="text-gray-400 mb-4">
              Connect with new people through video chat in seconds. Find your perfect match today!
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-pink-400 transition-colors">
                Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "Safety Center", "Community Guidelines", "Terms of Service", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Download</h3>
            <div className="space-y-3">
              <a href="#" className="block">
                <div className="bg-gray-800 text-white px-4 py-2 rounded-md text-center">App Store</div>
              </a>
              <a href="#" className="block">
                <div className="bg-gray-800 text-white px-4 py-2 rounded-md text-center">Google Play</div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Sparkle. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-pink-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
