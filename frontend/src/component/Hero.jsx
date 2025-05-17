import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section id="home" className="pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block">Find Your Perfect</span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Match Instantly
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Connect with new people through video chat in seconds. No sign-up required to start, just click and meet
            someone new!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/pass-login")}  // 🔀 navigate to login on click
            >
              Start Chatting Now
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D?height=40&width=40&text=${i}`}
                    alt={`User ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="ml-4 text-gray-600">
              <span className="font-semibold text-gray-800">10,000+</span> people online now
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -top-6 -left-6 w-full h-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://i.pinimg.com/736x/ed/5d/8f/ed5d8f86e956f68822bb8639f5002819.jpg?height=500&width=600&text=Video+Chat"
                alt="Video chat interface"
                className="w-full h-auto"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://images.squarespace-cdn.com/content/v1/58f2f33603596e9d44cde2c7/1719583455788-G5VBFIW35ALMXY0JP0K7/1671741176329.jpeg?format=1000w?height=48&width=48&text=U"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">Jessica, 24</p>
                      <p className="text-gray-300 text-sm">New York, USA</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute -bottom-10 -right-10 bg-white rounded-lg shadow-xl p-4 max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-medium">Verified Users</p>
                <p className="text-sm text-gray-500">Safe & Secure</p>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Online now:</span>
              <span className="font-semibold text-green-500">10,482</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
