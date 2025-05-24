"use client"

import { useState, useEffect } from "react"
import {
  Share2,
  Copy,
  Check,
  ChevronRight,
  Heart,
  Star,
  ArrowLeft,
  Trophy,
  Users,
  Sparkles,
  Plus,
  Send,
  Shuffle,
} from "lucide-react"

// All possible quiz questions
const allQuizQuestions = [
  {
    question: "What's your idea of a romantic evening?",
    options: ["Dinner under the stars", "Netflix and cuddles", "Dancing in the living room", "Writing love letters"],
  },
  {
    question: "How do you show love the most?",
    options: ["Giving gifts", "Spending time together", "Complimenting them", "Doing small things for them"],
  },
  {
    question: "What type of couple do you see yourself as?",
    options: ["Adventure seekers", "Chill and cozy", "Power couple", "Creative and quirky"],
  },
  {
    question: 'What\'s your favorite way to say "I love you"?',
    options: ["Saying it daily", "Through actions", "By surprise notes", "With hugs and kisses"],
  },
  {
    question: "Where would you love to go on a honeymoon?",
    options: ["Maldives", "Paris", "Iceland", "Bali"],
  },
  {
    question: "Which song best describes your romantic side?",
    options: [
      '"Perfect" by Ed Sheeran',
      '"All of Me" by John Legend',
      '"Love Story" by Taylor Swift',
      '"Just the Way You Are" by Bruno Mars',
    ],
  },
  {
    question: "Do you believe in love at first sight?",
    options: ["Yes, absolutely", "Kind of", "Not really", "Only in movies"],
  },
  {
    question: "What's the cutest couple activity?",
    options: ["Cooking together", "Traveling", "Matching outfits", "Watching movies"],
  },
  {
    question: "What makes you feel most loved?",
    options: ["Surprises", "Being listened to", "Thoughtful gestures", "Long conversations"],
  },
  {
    question: "Which type of love story would yours be?",
    options: ["Friends to lovers", "Soulmates who met by chance", "Long-distance love", "Opposites attract"],
  },
]

// Function to get random questions
const getRandomQuestions = (count = 5) => {
  const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState("")
  const [randomQuestions, setRandomQuestions] = useState([])
  const [quizType, setQuizType] = useState("fun")
  const [showQuizSelection, setShowQuizSelection] = useState(true)
  const [showCustomQuiz, setShowCustomQuiz] = useState(false)
  const [customQuestions, setCustomQuestions] = useState([])
  const [newQuestion, setNewQuestion] = useState("")
  const [newOptions, setNewOptions] = useState(["", "", "", ""])

  // Generate random questions on component mount
  useEffect(() => {
    setRandomQuestions(getRandomQuestions(5))
  }, [])

  const resultMessages = [
    {
      title: "Perfect Match",
      description:
        "You have incredible compatibility! Your personalities complement each other beautifully, and you share similar values and interests.",
      range: [85, 100],
      color: "from-green-500 to-emerald-600",
      icon: <Trophy className="h-8 w-8" />,
    },
    {
      title: "Great Connection",
      description:
        "You have strong compatibility with great potential for a meaningful relationship. Your shared interests create a solid foundation.",
      range: [70, 84],
      color: "from-blue-500 to-indigo-600",
      icon: <Star className="h-8 w-8" />,
    },
    {
      title: "Good Potential",
      description:
        "You have good compatibility with room to grow. Focus on communication and understanding each other's differences.",
      range: [55, 69],
      color: "from-yellow-500 to-orange-600",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      title: "Growing Together",
      description:
        "You're still discovering each other. Take time to explore your compatibility and build a stronger connection.",
      range: [40, 54],
      color: "from-purple-500 to-pink-600",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Learning Phase",
      description:
        "You're in the early stages of understanding each other. Every relationship starts somewhere - keep exploring!",
      range: [0, 39],
      color: "from-pink-500 to-rose-600",
      icon: <Heart className="h-8 w-8" />,
    },
  ]

  const handleStartQuiz = (type) => {
    if (type === "custom") {
      setShowCustomQuiz(true)
      setShowQuizSelection(false)
    } else {
      setQuizType(type)
      setShowQuizSelection(false)
      setRandomQuestions(getRandomQuestions(5))
      setShowQuiz(true)
    }
  }

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion < randomQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateCompatibility = () => {
    let score = 0
    const maxScore = randomQuestions.length * 4

    answers.forEach((answer, index) => {
      const questionWeight = 1 + (index % 3) * 0.5
      score += answer * questionWeight
    })

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
    setShowQuizSelection(true)
    setShowCustomQuiz(false)
    setShareUrl("")
    setRandomQuestions(getRandomQuestions(5))
  }

  const createShareableQuiz = () => {
    const newQuizId = "quiz_" + Math.random().toString(36).substring(2, 8)
    const url = `${window.location.origin}/quiz?id=${newQuizId}`
    setShareUrl(url)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const addCustomQuestion = () => {
    if (newQuestion.trim() && newOptions.every((option) => option.trim())) {
      const question = {
        question: newQuestion,
        options: [...newOptions],
      }
      setCustomQuestions([...customQuestions, question])
      setNewQuestion("")
      setNewOptions(["", "", "", ""])
    }
  }

  const startCustomQuiz = () => {
    if (customQuestions.length > 0) {
      setRandomQuestions(customQuestions)
      setShowCustomQuiz(false)
      setShowQuiz(true)
    }
  }

  const sendQuizToPartner = () => {
    // Simulate sending quiz to partner
    alert("Quiz sent to your partner! 💕")
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Quiz Selection */}
      {showQuizSelection && (
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Relationship{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                Quizzes
              </span>
            </h1>
            <p className="text-xl text-gray-600">Discover more about your love connection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Fun Relationship Quiz */}
            <div className="group cursor-pointer" onClick={() => handleStartQuiz("fun")}>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-pink-500 via-purple-500 to-rose-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 mx-auto w-fit">
                      <Heart className="h-12 w-12 text-white" />
                    </div>
                    <Sparkles className="h-6 w-6 text-yellow-300 absolute top-4 right-4 animate-pulse" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Fun Relationship Quiz</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover your compatibility with fun, light-hearted questions about love, relationships, and life
                    together.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-500" />5 questions
                      </span>
                      <span className="flex items-center">
                        <Trophy className="h-4 w-4 mr-1 text-purple-500" />2 min
                      </span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-pink-500 transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Create Custom Quiz */}
            <div className="group cursor-pointer" onClick={() => handleStartQuiz("custom")}>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 mx-auto w-fit">
                      <Plus className="h-12 w-12 text-white" />
                    </div>
                    <Sparkles className="h-6 w-6 text-yellow-300 absolute top-4 right-4 animate-pulse" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Create Custom Quiz</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Design your own personalized quiz with custom questions and send it to your partner for a unique
                    experience.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-indigo-500" />
                        Custom
                      </span>
                      <span className="flex items-center">
                        <Send className="h-4 w-4 mr-1 text-purple-500" />
                        Shareable
                      </span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Quiz Creator */}
      {showCustomQuiz && (
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Your Custom Quiz</h2>
              <p className="text-gray-600">Design personalized questions for your partner</p>
            </div>
            <button onClick={resetQuiz} className="p-3 rounded-full hover:bg-gray-100 transition-colors">
              <ArrowLeft className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Question Creator */}
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Enter your question..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Answer Options</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {newOptions.map((option, index) => (
                  <input
                    key={index}
                    type="text"
                    value={option}
                    onChange={(e) => {
                      const updatedOptions = [...newOptions]
                      updatedOptions[index] = e.target.value
                      setNewOptions(updatedOptions)
                    }}
                    placeholder={`Option ${index + 1}`}
                    className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                ))}
              </div>
            </div>

            <button
              onClick={addCustomQuestion}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add Question</span>
            </button>
          </div>

          {/* Custom Questions List */}
          {customQuestions.length > 0 && (
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-gray-900">Your Questions ({customQuestions.length})</h3>
              <div className="space-y-3">
                {customQuestions.map((q, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{q.question}</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      {q.options.map((option, optIndex) => (
                        <span key={optIndex} className="bg-white px-3 py-1 rounded-lg">
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={startCustomQuiz}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                >
                  <Heart className="h-5 w-5" />
                  <span>Start Quiz</span>
                </button>
                <button
                  onClick={sendQuizToPartner}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send to Partner</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quiz Questions */}
      {showQuiz && !showResults && (
        <div className="bg-white rounded-3xl shadow-xl p-8 relative border border-gray-100">
          <div className="absolute top-4 left-4">
            <button onClick={resetQuiz} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="mb-8 pt-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-500">
                Question {currentQuestion + 1} of {randomQuestions.length}
              </span>
              <span className="text-sm font-medium text-pink-500">
                {Math.round(((currentQuestion + 1) / randomQuestions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / randomQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
            {randomQuestions[currentQuestion]?.question}
          </h3>

          <div className="space-y-4">
            {randomQuestions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                className="w-full text-left p-6 border-2 border-gray-200 rounded-2xl hover:border-pink-500 hover:bg-pink-50 transition-all duration-300 flex justify-between items-center group transform hover:scale-105"
                onClick={() => handleAnswer(index)}
              >
                <span className="text-lg text-gray-800 group-hover:text-gray-900">{option}</span>
                <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-pink-500 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quiz Results */}
      {showResults && (
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">
          <div className="mb-8">
            <div className="relative w-56 h-56 mx-auto">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="6" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="6"
                  strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                  strokeDashoffset={2 * Math.PI * 45 * (1 - compatibility / 100)}
                  className="transition-all duration-2000 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                  {compatibility}%
                </span>
                <span className="text-sm text-gray-500 mt-2">Compatibility</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${resultMessage?.color} text-white mb-6`}
            >
              {resultMessage?.icon}
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">{resultMessage?.title}</h3>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">{resultMessage?.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              className="bg-white text-gray-800 border-2 border-gray-300 px-8 py-4 rounded-2xl font-medium shadow-sm text-lg hover:border-pink-500 hover:bg-pink-50 transition-all duration-300 flex items-center justify-center space-x-2"
              onClick={resetQuiz}
            >
              <Shuffle className="w-5 h-5" />
              <span>Take Another Quiz</span>
            </button>

            <button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-medium shadow-lg text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              onClick={createShareableQuiz}
            >
              <Share2 className="w-5 h-5" />
              <span>Share Results</span>
            </button>
          </div>

          {shareUrl && (
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <p className="text-gray-700 font-medium mb-4">Share your quiz results:</p>
              <div className="flex items-center">
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  className="flex-1 p-3 border border-gray-300 rounded-l-xl bg-white text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-r-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Quiz
