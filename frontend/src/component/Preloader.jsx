// components/Preloader.jsx
"use client"
import { motion } from "framer-motion"

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex gap-4">
        {/* Heart 1 */}
        <motion.div
          className="text-pink-600 text-4xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
        >
          ❤️
        </motion.div>

        {/* Heart 2 */}
        <motion.div
          className="text-pink-500 text-4xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
        >
          💖
        </motion.div>

        {/* Heart 3 */}
        <motion.div
          className="text-pink-400 text-4xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
        >
          💘
        </motion.div>
      </div>
    </div>
  )
}
