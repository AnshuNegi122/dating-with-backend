import { motion } from "framer-motion"

const AnimatedBackground = () => {
  return (
    <div className="w-full h-full">
      {/* Animated hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [0, -100 - Math.random() * 100],
            opacity: [0, 0.3, 0],
            scale: [0, 0.5 + Math.random() * 0.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
          }}
        >
          <svg
            className="w-16 h-16 text-pink-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ transform: `rotate(${Math.random() * 30 - 15}deg)` }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Animated circles */}
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 20 + 5
        const colors = ["bg-pink-200", "bg-purple-200", "bg-pink-300", "bg-purple-300"]
        const color = colors[Math.floor(Math.random() * colors.length)]

        return (
          <motion.div
            key={`circle-${i}`}
            className={`absolute rounded-full ${color}`}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              y: [0, -150 - Math.random() * 100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        )
      })}

      {/* Gradient blobs */}
      {[...Array(5)].map((_, i) => {
        const size = 100 + Math.random() * 150
        const gradients = [
          "bg-gradient-to-r from-pink-200/30 to-purple-200/30",
          "bg-gradient-to-r from-purple-200/30 to-pink-200/30",
          "bg-gradient-to-br from-pink-300/20 to-purple-200/20",
          "bg-gradient-to-bl from-purple-300/20 to-pink-200/20",
        ]
        const gradient = gradients[Math.floor(Math.random() * gradients.length)]

        return (
          <motion.div
            key={`blob-${i}`}
            className={`absolute rounded-full blur-3xl ${gradient}`}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30 * (Math.random() - 0.5)],
              y: [0, 30 * (Math.random() - 0.5)],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}

export default AnimatedBackground
