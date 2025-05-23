"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import AnimatedBackground from "./AnimatedBackground"
import { Share2, Copy, Check, ChevronRight, Shuffle } from 'lucide-react'

// All possible quiz questions from the provided list
const allQuizQuestions = [
  {
    question: "What's your idea of a romantic evening?",
    options: [
      "Dinner under the stars",
      "Netflix and cuddles",
      "Dancing in the living room",
      "Writing love letters"
    ]
  },
  {
    question: "How do you show love the most?",
    options: [
      "Giving gifts",
      "Spending time together",
      "Complimenting them",
      "Doing small things for them"
    ]
  },
  {
    question: "What type of couple do you see yourself as?",
    options: [
      "Adventure seekers",
      "Chill and cozy",
      "Power couple",
      "Creative and quirky"
    ]
  },
  {
    question: "What's your favorite way to say \"I love you\"?",
    options: [
      "Saying it daily",
      "Through actions",
      "By surprise notes",
      "With hugs and kisses"
    ]
  },
  {
    question: "Where would you love to go on a honeymoon?",
    options: [
      "Maldives",
      "Paris",
      "Iceland",
      "Bali"
    ]
  },
  {
    question: "Which song best describes your romantic side?",
    options: [
      "\"Perfect\" by Ed Sheeran",
      "\"All of Me\" by John Legend",
      "\"Love Story\" by Taylor Swift",
      "\"Just the Way You Are\" by Bruno Mars"
    ]
  },
  {
    question: "Do you believe in love at first sight?",
    options: [
      "Yes, absolutely",
      "Kind of",
      "Not really",
      "Only in movies"
    ]
  },
  {
    question: "What's the cutest couple activity?",
    options: [
      "Cooking together",
      "Traveling",
      "Matching outfits",
      "Watching movies"
    ]
  },
  {
    question: "What makes you feel most loved?",
    options: [
      "Surprises",
      "Being listened to",
      "Thoughtful gestures",
      "Long conversations"
    ]
  },
  {
    question: "Which type of love story would yours be?",
    options: [
      "Friends to lovers",
      "Soulmates who met by chance",
      "Long-distance love",
      "Opposites attract"
    ]
  },
  {
    question: "What's your favorite type of dessert?",
    options: [
      "Chocolate cake",
      "Ice cream",
      "Donuts",
      "Fruit tart"
    ]
  },
  {
    question: "Which season do you love the most?",
    options: [
      "Winter",
      "Summer",
      "Spring",
      "Autumn"
    ]
  },
  {
    question: "Which movie genre do you enjoy most?",
    options: [
      "Romance",
      "Action",
      "Comedy",
      "Horror"
    ]
  },
  {
    question: "What's your favorite way to relax?",
    options: [
      "Listening to music",
      "Reading",
      "Watching movies",
      "Taking a walk"
    ]
  },
  {
    question: "What's your dream vacation type?",
    options: [
      "Beach retreat",
      "Mountain escape",
      "City exploration",
      "Desert adventure"
    ]
  },
  {
    question: "What kind of music do you vibe with?",
    options: [
      "Pop",
      "Rock",
      "Jazz",
      "Chill/Lo-fi"
    ]
  },
  {
    question: "Which pet would you love to have?",
    options: [
      "Dog",
      "Cat",
      "Bunny",
      "Bird"
    ]
  },
  {
    question: "What's your comfort food?",
    options: [
      "Pizza",
      "Noodles",
      "Fries",
      "Ice cream"
    ]
  },
  {
    question: "What's your favorite time of day?",
    options: [
      "Morning",
      "Afternoon",
      "Evening",
      "Midnight"
    ]
  },
  {
    question: "What color best represents your personality?",
    options: [
      "Red – Bold and passionate",
      "Blue – Calm and thoughtful",
      "Yellow – Cheerful and sunny",
      "Purple – Mysterious and creative"
    ]
  },
  {
    question: "Would you rather get flowers or a handwritten note?",
    options: [
      "Flowers",
      "Handwritten note",
      "Both",
      "Neither"
    ]
  },
  {
    question: "Which is more romantic?",
    options: [
      "Surprise date",
      "Late-night phone calls",
      "Thoughtful gifts",
      "Slow dancing at home"
    ]
  },
  {
    question: "Which would you choose for a date?",
    options: [
      "Amusement park",
      "Rooftop dinner",
      "Art museum",
      "Road trip"
    ]
  },
  {
    question: "Pick your favorite activity for a lazy day:",
    options: [
      "Binge-watching shows",
      "Playing games",
      "Talking all day",
      "Napping together"
    ]
  },
  {
    question: "What's your texting style in a relationship?",
    options: [
      "Always texting",
      "Replies in bursts",
      "Short and sweet",
      "Voice notes all the way"
    ]
  },
  {
    question: "What do you value most in a partner?",
    options: [
      "Loyalty",
      "Humor",
      "Ambition",
      "Kindness"
    ]
  },
  {
    question: "Which quality is a must-have in a relationship?",
    options: [
      "Trust",
      "Communication",
      "Physical connection",
      "Shared goals"
    ]
  },
  {
    question: "Which kind of compliment do you like best?",
    options: [
      "About your looks",
      "About your mind",
      "About your energy",
      "About your talent"
    ]
  },
  {
    question: "How often do you like to talk with your partner?",
    options: [
      "All day, every day",
      "A few check-ins",
      "Once a day is enough",
      "Only when needed"
    ]
  },
  {
    question: "Which emotion do you lead with in love?",
    options: [
      "Passion",
      "Joy",
      "Calmness",
      "Excitement"
    ]
  },
  {
    question: "Who's more likely to steal the blanket?",
    options: [
      "Me",
      "My partner",
      "Both",
      "We share nicely"
    ]
  },
  {
    question: "What's your favorite couple nickname?",
    options: [
      "Babe",
      "Honey",
      "Love",
      "Boo"
    ]
  },
  {
    question: "Would you rather receive:",
    options: [
      "A playlist",
      "A handmade gift",
      "A surprise visit",
      "A photo scrapbook"
    ]
  },
  {
    question: "Favorite couple's game to play?",
    options: [
      "Would You Rather",
      "Truth or Dare",
      "Card games",
      "Online co-op games"
    ]
  },
  {
    question: "Which couple celeb do you relate to most?",
    options: [
      "Blake Lively & Ryan Reynolds",
      "Virat Kohli & Anushka Sharma",
      "Tom Holland & Zendaya",
      "Vicky Kaushal & Katrina Kaif"
    ]
  },
  {
    question: "Who plans better dates?",
    options: [
      "Me",
      "My partner",
      "We take turns",
      "We just wing it"
    ]
  },
  {
    question: "What's your go-to relationship emoji?",
    options: [
      "❤️",
      "🥰",
      "💋",
      "💑"
    ]
  },
  {
    question: "What's a romantic gift you'd love?",
    options: [
      "Jewelry",
      "A surprise trip",
      "A love letter",
      "A cozy hoodie"
    ]
  },
  {
    question: "What's your couple's dream goal?",
    options: [
      "Travel the world",
      "Buy a house",
      "Build a business",
      "Adopt pets"
    ]
  },
  {
    question: "Best way to end a date night?",
    options: [
      "A kiss",
      "Deep talk",
      "Watching stars",
      "Sharing dessert"
    ]
  }
]

// Function to get random questions
const getRandomQuestions = (count = 5) => {
  // Shuffle the array
  const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random())
  // Get first 'count' elements
  return shuffled.slice(0, count)
}

const LoveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizId, setQuizId] = useState("")
  const [copied, setCopied] = useState(false)
  const [isCreatingQuiz, setIsCreatingQuiz] = useState(false)
  const [customQuestions, setCustomQuestions] = useState([])
  const [showCustomQuizForm, setShowCustomQuizForm] = useState(false)
  const [newQuestion, setNewQuestion] = useState("")
  const [newOptions, setNewOptions] = useState(["", "", "", "", ""])
  const [shareUrl, setShareUrl] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [randomQuestions, setRandomQuestions] = useState([])

  // Generate random questions on component mount
  useEffect(() => {
    setRandomQuestions(getRandomQuestions(5))
  }, [])

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Check for quiz ID in URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("quiz")
    if (id) {
      // In a real app, you would fetch the quiz data from a database
      // For this demo, we'll just set a dummy quiz ID
      setQuizId(id)

      // Simulate loading quiz data
      setTimeout(() => {
        // This would normally come from your database
        if (id === "demo") {
          setCustomQuestions(getRandomQuestions(5))
        }
      }, 500)
    }
  }, [])

  const resultMessages = [
    {
      title: "Soulmates",
      description:
        "Your connection is rare and beautiful. You understand each other on a deep level and have a natural harmony that many couples dream of. Keep nurturing this special bond!",
      range: [85, 100],
    },
    {
      title: "Perfect Partners",
      description:
        "You complement each other wonderfully. Your relationship has a strong foundation of mutual respect and understanding. With continued effort, your love will only grow stronger.",
      range: [70, 84],
    },
    {
      title: "Growing Together",
      description:
        "You have a healthy relationship with great potential. By focusing on communication and understanding each other's needs, you'll continue to build a fulfilling partnership.",
      range: [55, 69],
    },
    {
      title: "Budding Romance",
      description:
        "Your relationship is still developing. There's chemistry and potential, but you're still learning about each other. Patience and open communication will help your connection deepen.",
      range: [40, 54],
    },
    {
      title: "Getting to Know Each Other",
      description:
        "You're at the beginning of your journey together. Take time to understand each other's values, dreams, and communication styles. Every strong relationship starts somewhere!",
      range: [0, 39],
    },
  ]

  const handleStartQuiz = () => {
    if (name1.trim() && name2.trim()) {
      // Generate new random questions each time the quiz starts
      setRandomQuestions(getRandomQuestions(5))
      setShowQuiz(true)
    }
  }

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    const activeQuestions = customQuestions.length > 0 ? customQuestions : randomQuestions

    if (currentQuestion < activeQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateCompatibility = () => {
    // This is a simple algorithm that weights answers differently
    // In a real app, you might have more sophisticated matching logic
    let score = 0
    const activeQuestions = customQuestions.length > 0 ? customQuestions : randomQuestions
    const maxScore = activeQuestions.length * 4 // Maximum possible score

    answers.forEach((answer, index) => {
      // Different questions might have different weights
      const questionWeight = 1 + (index % 3) * 0.5

      // Different answers have different values (0-4)
      score += answer * questionWeight
    })

    // Normalize to 0-100 and add a bias toward higher scores
    const normalizedScore = Math.min(100, Math.round((score / maxScore) * 80) + 20)

    return normalizedScore
  }

  const getResultMessage = (score) => {
    return resultMessages.find((message) => score >= message.range[0] && score <= message.range[1])
  }

  const compatibility = showResults ? calculateCompatibility() : 0
  const resultMessage = showResults ? getResultMessage(compatibility) : null

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setShowQuiz(false)
    setName1("")
    setName2("")
    setCustomQuestions([])
    setShowCustomQuizForm(false)
    setShareUrl("")
    // Generate new random questions
    setRandomQuestions(getRandomQuestions(5))
  }

  const createShareableQuiz = () => {
    setIsCreatingQuiz(true)

    // In a real app, you would save the quiz to a database and get an ID
    // For this demo, we'll just create a dummy ID
    setTimeout(() => {
      const newQuizId = "custom_" + Math.random().toString(36).substring(2, 8)
      const url = `${window.location.origin}${window.location.pathname}?quiz=${newQuizId}`
      setShareUrl(url)
      setIsCreatingQuiz(false)
    }, 1500)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...newOptions]
    updatedOptions[index] = value
    setNewOptions(updatedOptions)
  }

  const addCustomQuestion = () => {
    if (newQuestion.trim() && newOptions.filter((opt) => opt.trim()).length >= 2) {
      const filteredOptions = newOptions.filter((opt) => opt.trim())
      setCustomQuestions([
        ...customQuestions,
        {
          question: newQuestion,
          options: filteredOptions,
        },
      ])
      setNewQuestion("")
      setNewOptions(["", "", "", "", ""])
    }
  }

  const activeQuestions = customQuestions.length > 0 ? customQuestions : randomQuestions

  return (
    <section className="pt-10 px-6 md:px-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
        <div className=" inset-0 bg-white/80"></div>
      </div>

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
            <span className="block">Relationship</span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Compatibility Quiz
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Answer a few questions about your relationship to discover your true compatibility and receive personalized
            insights.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {!showQuiz && !showResults ? (
            <motion.div
              className={`rounded-2xl shadow-xl p-8 mb-10 relative overflow-hidden ${isLoading ? "" : "bg-white"}`}
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

              {!showCustomQuizForm ? (
                <>
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
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium shadow-lg text-lg mb-4"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleStartQuiz}
                    disabled={!name1.trim() || !name2.trim()}
                  >
                    Start Quiz
                  </motion.button>

                  {shareUrl && !showCustomQuizForm && (
                    <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
                      <p className="text-gray-700 font-medium mb-2">Share this quiz with your partner:</p>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={shareUrl}
                          readOnly
                          className="flex-1 p-2 border border-gray-300 rounded-l-lg bg-white"
                        />
                        <button
                          onClick={copyToClipboard}
                          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-r-lg hover:opacity-90"
                        >
                          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        <span className="font-medium">Tip:</span> Send this link to your partner so they can take your
                        custom quiz!
                      </p>
                    </div>
                  )}

                  <div className="text-center mt-4">
                    <button
                      onClick={() => setShowCustomQuizForm(true)}
                      className="text-pink-600 hover:text-pink-700 font-medium flex items-center justify-center mx-auto"
                    >
                      <span>Create Custom Quiz</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </>
              ) : (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Create Your Custom Quiz</h3>
                  <p className="text-gray-600 mb-6">
                    Add your own questions to create a personalized quiz for your partner.
                  </p>

                  {customQuestions.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-700 mb-2">Your Questions:</h4>
                      <div className="space-y-2 mb-4">
                        {customQuestions.map((q, idx) => (
                          <div key={idx} className="bg-pink-50 p-3 rounded-lg">
                            <p className="font-medium text-gray-800">{q.question}</p>
                            <div className="text-sm text-gray-600 mt-1">{q.options.length} options available</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="question" className="block text-gray-700 font-medium mb-2">
                        Question
                      </label>
                      <input
                        type="text"
                        id="question"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter your question"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Answer Options (at least 2)</label>
                      {newOptions.map((option, idx) => (
                        <input
                          key={idx}
                          type="text"
                          value={option}
                          onChange={(e) => handleOptionChange(idx, e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-2"
                          placeholder={`Option ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <button
                      onClick={addCustomQuestion}
                      className="px-6 py-3 bg-pink-100 text-pink-700 rounded-lg font-medium hover:bg-pink-200 transition-colors"
                      disabled={!newQuestion.trim() || newOptions.filter((opt) => opt.trim()).length < 2}
                    >
                      Add Question
                    </button>

                    <button
                      onClick={() => {
                        if (customQuestions.length > 0) {
                          setIsCreatingQuiz(true)
                          // Generate shareable link automatically when Done is clicked
                          setTimeout(() => {
                            const newQuizId = "custom_" + Math.random().toString(36).substring(2, 8)
                            const url = `${window.location.origin}${window.location.pathname}?quiz=${newQuizId}`
                            setShareUrl(url)
                            setIsCreatingQuiz(false)
                            setShowCustomQuizForm(false)
                          }, 1500)
                        } else {
                          setCustomQuestions(getRandomQuestions(5)) // Use random questions
                          setShowCustomQuizForm(false)
                        }
                      }}
                      className="px-6 py-3 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors"
                    >
                      {customQuestions.length > 0
                        ? isCreatingQuiz
                          ? "Generating Link..."
                          : "Done"
                        : "Use Random Questions"}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ) : showResults ? (
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
                        strokeDashoffset: 2 * Math.PI * 45 * (1 - compatibility / 100),
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
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <motion.span
                      className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
                      initial={{ innerText: "0%" }}
                      animate={{ innerText: `${compatibility}%` }}
                    >
                      {compatibility}%
                    </motion.span>
                  </motion.div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {name1} & {name2}
              </h3>

              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold">
                  {resultMessage?.title}
                </span>
              </div>

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

              <div className="bg-pink-50 p-6 rounded-xl mb-8">
                <p className="text-gray-700 text-lg">{resultMessage?.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-gray-800 border-2 border-gray-300 px-8 py-3 rounded-full font-medium shadow-sm text-lg hover:border-pink-500 transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                >
                  <div className="flex items-center justify-center">
                    <Shuffle className="w-4 h-4 mr-2" />
                    Take New Quiz
                  </div>
                </motion.button>

                <motion.button
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg text-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/love-calculator")}
                >
                  Try Love Calculator
                </motion.button>
              </div>

              <div className="mt-8">
                <button
                  onClick={createShareableQuiz}
                  className="flex items-center justify-center mx-auto px-6 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Results
                </button>

                {shareUrl && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 font-medium mb-2">Share this link with your friends:</p>
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={shareUrl}
                        readOnly
                        className="flex-1 p-2 border border-gray-300 rounded-l-lg bg-white"
                      />
                      <button
                        onClick={copyToClipboard}
                        className="bg-indigo-600 text-white p-2 rounded-r-lg hover:bg-indigo-700"
                      >
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 mb-10 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={currentQuestion}
            >
              <motion.div
                className="absolute -top-4 -left-4 -right-4 -bottom-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              />

              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-500">
                    Question {currentQuestion + 1} of {activeQuestions.length}
                  </span>
                  <span className="text-sm font-medium text-pink-500">
                    {Math.round(((currentQuestion + 1) / activeQuestions.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-pink-500 to-purple-600 h-2.5 rounded-full"
                    initial={{ width: `${(currentQuestion / activeQuestions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestion + 1) / activeQuestions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">{activeQuestions[currentQuestion].question}</h3>

              <div className="space-y-3">
                {activeQuestions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-pink-500 transition-colors flex justify-between items-center"
                    whileHover={{ scale: 1.02, boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.05)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                  >
                    <span>{option}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        
      </div>
    </section>
  )
}

export default LoveQuiz
