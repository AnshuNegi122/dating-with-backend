import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const LoveCalculator = () => {
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const [result, setResult] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const navigate = useNavigate()

  // For animating the percentage number
  const [displayPercentage, setDisplayPercentage] = useState(0)

  useEffect(() => {
    if (result) {
      const start = 0
      const end = result.percentage
      const duration = 1500
      const startTime = Date.now()

      const animatePercentage = () => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        const value = Math.floor(progress * end)
        setDisplayPercentage(value)

        if (progress < 1) {
          requestAnimationFrame(animatePercentage)
        }
      }

      requestAnimationFrame(animatePercentage)
    }
  }, [result])

  const loveQuotes = [
    "Love is composed of a single soul inhabiting two bodies.",
    "The best thing to hold onto in life is each other.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "To love and be loved is to feel the sun from both sides.",
    "Love doesn't make the world go 'round. Love is what makes the ride worthwhile.",
    "The greatest happiness of life is the conviction that we are loved.",
    "When I saw you I fell in love, and you smiled because you knew.",
    "In all the world, there is no heart for me like yours.",
    "If I know what love is, it is because of you.",
    "I love you not because of who you are, but because of who I am when I am with you.",
  ]

  const calculateLove = () => {
    if (!name1.trim() || !name2.trim()) return

    setIsCalculating(true)

    // Simulate calculation with timeout
    setTimeout(() => {
      // Simple algorithm that generates a consistent result for the same name pairs
      const combinedNames = `${name1.toLowerCase()}${name2.toLowerCase()}`
      let sum = 0
      for (let i = 0; i < combinedNames.length; i++) {
        sum += combinedNames.charCodeAt(i)
      }

      // Generate percentage between 50-100 for a more positive experience
      const percentage = 50 + (sum % 51)

      // Select a quote based on the percentage
      const quoteIndex = Math.floor((percentage - 50) / 5)

      setResult({
        percentage,
        quote: loveQuotes[quoteIndex],
      })

      setIsCalculating(false)
    }, 1500)
  }

  return (
    <section id="love-calculator" className="pt-32 pb-20 px-6 md:px-12 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block">Calculate Your</span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Love Compatibility
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Enter your name and your partner's name to discover your love compatibility score and receive a personalized
            romantic quote.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 mb-10 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              className="absolute -top-4 -left-4 -right-4 -bottom-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="name1" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name1"
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="name2" className="block text-gray-700 font-medium mb-2">
                  Partner's Name
                </label>
                <input
                  type="text"
                  id="name2"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter partner's name"
                />
              </div>
            </div>

            <motion.button
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium shadow-lg text-lg"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={calculateLove}
              disabled={isCalculating || !name1.trim() || !name2.trim()}
            >
              {isCalculating ? (
                <span className="flex items-center justify-center">
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
                  Calculating...
                </span>
              ) : (
                "Calculate Love Compatibility"
              )}
            </motion.button>
          </motion.div>

          {result && (
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="10"
                      strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                      strokeDashoffset={2 * Math.PI * 45}
                      initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                      animate={{
                        strokeDashoffset: 2 * Math.PI * 45 * (1 - result.percentage / 100),
                      }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#9333ea" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {displayPercentage}%
                    </motion.span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {name1} & {name2}
              </h3>

              <div className="relative mb-8">
                <div className="absolute left-0 right-0 top-1/2 border-t border-gray-200"></div>
                <div className="relative flex justify-center">
                  <div className="bg-white px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-pink-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <blockquote className="italic text-gray-600 text-lg mb-6">"{result.quote}"</blockquote>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-gray-800 border-2 border-gray-300 px-8 py-3 rounded-full font-medium shadow-sm text-lg hover:border-pink-500 transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setResult(null)}
                >
                  Calculate Again
                </motion.button>

                <motion.button
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg text-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/quiz")}
                >
                  Take Love Quiz
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default LoveCalculator
