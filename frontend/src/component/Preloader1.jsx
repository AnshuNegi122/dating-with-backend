// components/Preloader.jsx
"use client"
import { motion } from "framer-motion"

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Animated heart */}
      <motion.div
        className="text-6xl text-pink-600"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ❤️
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="mt-4 text-pink-600 text-lg font-semibold tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, repeat: Infinity, repeatType: "mirror" }}
      >
        Finding your match...
      </motion.p>
    </div>
  )
}
