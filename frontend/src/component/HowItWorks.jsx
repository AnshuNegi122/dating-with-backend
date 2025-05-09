"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useNavigate } from "react-router-dom"
import AnimatedBackground from "./AnimatedBackground"

const steps = [
  {
    number: "01",
    title: "Open the App",
    description: "Visit our website or open our app on your device. No downloads or installations required.",
    color: "text-pink-500",
  },
  {
    number: "02",
    title: "Set Your Preferences",
    description: "Choose your interests, age range, and location preferences to find the perfect match.",
    color: "text-purple-500",
  },
  {
    number: "03",
    title: "Start Video Chat",
    description: "Click the 'Start' button and get instantly connected with someone who matches your preferences.",
    color: "text-pink-500",
  },
  {
    number: "04",
    title: "Make Connections",
    description: "If you like each other, exchange contact information or continue chatting on our platform.",
    color: "text-purple-500",
  },
]

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const navigate = useNavigate()

  return (
    <section id="how-it-works" className="py-20 px-6 md:px-12 bg-gray-50">
      {/* Animated Background */}
      <div className="relative inset-0 z-0">
        <AnimatedBackground />
        <div className="relative inset-0 bg-white/80"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Connect with new people in just a few simple steps
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg h-full border border-gray-100 relative z-10">
                <div className={`text-5xl font-bold ${step.color} mb-4`}>{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z"
                      fill="#E5E7EB"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg text-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")}  // navigate to login on click
          >
            Try It Now - It's Free!
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
