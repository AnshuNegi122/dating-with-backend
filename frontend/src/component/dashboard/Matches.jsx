"use client"

import { useState, useRef } from "react"
import {
  Heart,
  X,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  Info,
  Undo,
  Zap,
  Filter,
  Settings,
  MessageCircle,
  Sparkles,
  Crown,
  Eye,
  Music,
  Camera,
  Coffee,
  Plane,
} from "lucide-react"

const Matches = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showMatchModal, setShowMatchModal] = useState(false)
  const [matchedUser, setMatchedUser] = useState(null)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    ageRange: [18, 35],
    distance: 50,
    interests: [],
    education: "",
    occupation: "",
  })
  const cardRef = useRef(null)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)

  // Enhanced user data
  const users = [
    {
      id: 1,
      name: "Emma Wilson",
      age: 28,
      location: "New York, NY",
      distance: "2 miles away",
      occupation: "Graphic Designer",
      education: "NYU",
      interests: ["Art", "Travel", "Photography", "Coffee", "Yoga"],
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      ],
      bio: "Love exploring new places and capturing moments through my lens. Always up for a good coffee and deep conversations about art and life.",
      verified: true,
      premium: true,
      compatibility: 95,
      lastActive: "Active now",
    },
    {
      id: 2,
      name: "Alex Johnson",
      age: 32,
      location: "Los Angeles, CA",
      distance: "5 miles away",
      occupation: "Software Engineer",
      education: "Stanford",
      interests: ["Technology", "Hiking", "Music", "Gaming", "Cooking"],
      images: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      ],
      bio: "Tech enthusiast who loves outdoor adventures and live music. Looking for someone to share new experiences with.",
      verified: false,
      premium: false,
      compatibility: 88,
      lastActive: "Active 2 hours ago",
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      age: 26,
      location: "Miami, FL",
      distance: "3 miles away",
      occupation: "Marketing Manager",
      education: "University of Miami",
      interests: ["Fitness", "Cooking", "Dancing", "Beach", "Wine"],
      images: [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      ],
      bio: "Passionate about healthy living and trying new cuisines. Love dancing salsa and spending time at the beach.",
      verified: true,
      premium: true,
      compatibility: 92,
      lastActive: "Active now",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const currentUser = users[currentCardIndex]

  const interestIcons = {
    Art: Camera,
    Travel: Plane,
    Photography: Camera,
    Coffee: Coffee,
    Music: Music,
    Technology: Zap,
    Fitness: Heart,
    Cooking: Coffee,
  }

  const handleSwipe = (direction) => {
    if (isAnimating) return

    setIsAnimating(true)

    if (direction === "right") {
      // Check if it's a match (simulate 40% chance)
      if (Math.random() < 0.4) {
        setMatchedUser(currentUser)
        setShowMatchModal(true)
      }
    }

    setTimeout(() => {
      setCurrentCardIndex((prev) => (prev + 1) % users.length)
      setCurrentImageIndex(0)
      setIsAnimating(false)
    }, 300)
  }

  const handleLike = () => handleSwipe("right")
  const handlePass = () => handleSwipe("left")

  const handleSuperLike = () => {
    if (isAnimating) return
    setMatchedUser(currentUser)
    setShowMatchModal(true)
    handleSwipe("right")
  }

  const handleUndo = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prev) => prev - 1)
    }
  }

  // Touch/Mouse handlers for swipe gestures
  const handleStart = (clientX, clientY) => {
    setIsDragging(true)
    setDragStart({ x: clientX, y: clientY })
  }

  const handleMove = (clientX, clientY) => {
    if (!isDragging) return

    const deltaX = clientX - dragStart.x
    const deltaY = clientY - dragStart.y
    setDragOffset({ x: deltaX, y: deltaY })
  }

  const handleEnd = () => {
    if (!isDragging) return

    const threshold = 100
    if (Math.abs(dragOffset.x) > threshold) {
      handleSwipe(dragOffset.x > 0 ? "right" : "left")
    }

    setIsDragging(false)
    setDragOffset({ x: 0, y: 0 })
  }

  const getCardStyle = () => {
    if (!isDragging) return {}

    const rotation = dragOffset.x * 0.1
    return {
      transform: `translateX(${dragOffset.x}px) translateY(${dragOffset.y}px) rotate(${rotation}deg)`,
      opacity: 1 - Math.abs(dragOffset.x) / 300,
    }
  }

  const nextImage = () => {
    if (currentUser && currentUser.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % currentUser.images.length)
    }
  }

  const prevImage = () => {
    if (currentUser && currentUser.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + currentUser.images.length) % currentUser.images.length)
    }
  }

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">No more profiles</h3>
          <p className="text-gray-500">Check back later for new matches!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col">
      {/* Enhanced Header */}
      <div className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text flex items-center">
            <Sparkles className="h-8 w-8 text-pink-500 mr-2" />
            Discover
          </h1>
          <p className="text-gray-600 mt-1">Find your perfect match</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-3 rounded-2xl transition-all duration-300 ${
              showFilters
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Filter className="h-5 w-5" />
          </button>
          <button className="p-3 rounded-2xl text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-300">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Enhanced Filters Panel */}
      {showFilters && (
        <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Age Range</label>
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  value={filters.ageRange[0]}
                  onChange={(e) =>
                    setFilters({ ...filters, ageRange: [Number.parseInt(e.target.value), filters.ageRange[1]] })
                  }
                  className="w-20 px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  min="18"
                  max="100"
                />
                <span className="text-gray-500 font-medium">to</span>
                <input
                  type="number"
                  value={filters.ageRange[1]}
                  onChange={(e) =>
                    setFilters({ ...filters, ageRange: [filters.ageRange[0], Number.parseInt(e.target.value)] })
                  }
                  className="w-20 px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  min="18"
                  max="100"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Distance</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={filters.distance}
                  onChange={(e) => setFilters({ ...filters, distance: Number.parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-sm text-gray-600 font-medium">{filters.distance} miles</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Education</label>
              <select
                value={filters.education}
                onChange={(e) => setFilters({ ...filters, education: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="">Any</option>
                <option value="high-school">High School</option>
                <option value="college">College</option>
                <option value="graduate">Graduate</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Interests</label>
              <div className="flex flex-wrap gap-2">
                {["Art", "Travel", "Music", "Sports", "Food", "Tech", "Fitness", "Books"].map((interest) => (
                  <button
                    key={interest}
                    onClick={() => {
                      const newInterests = filters.interests.includes(interest)
                        ? filters.interests.filter((i) => i !== interest)
                        : [...filters.interests, interest]
                      setFilters({ ...filters, interests: newInterests })
                    }}
                    className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 ${
                      filters.interests.includes(interest)
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Card Stack */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-indigo-50/50">
        <div className="relative w-full max-w-sm">
          {/* Main Card */}
          <div
            ref={cardRef}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing border border-gray-200"
            style={getCardStyle()}
            onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
            onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchEnd={handleEnd}
          >
            {/* Image Section */}
            <div className="relative h-[28rem] overflow-hidden">
              <img
                src={currentUser.images[currentImageIndex] || "/placeholder.svg"}
                alt={currentUser.name}
                className="w-full h-full object-cover"
              />

              {/* Enhanced Image Navigation */}
              {currentUser.images.length > 1 && (
                <>
                  <div className="absolute top-4 left-0 right-0 flex justify-center space-x-1">
                    {currentUser.images.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? "bg-white w-8 shadow-lg" : "bg-white/50 w-4"
                        }`}
                      />
                    ))}
                  </div>
                  <button onClick={prevImage} className="absolute left-0 top-0 bottom-0 w-1/2 z-10" />
                  <button onClick={nextImage} className="absolute right-0 top-0 bottom-0 w-1/2 z-10" />
                </>
              )}

              {/* Enhanced Badges */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                {currentUser.verified && (
                  <div className="bg-blue-500 text-white p-2 rounded-full shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                {currentUser.premium && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-2 rounded-full shadow-lg">
                    <Crown className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Compatibility Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                <Sparkles className="h-4 w-4 mr-1 text-yellow-300" />
                <span>{currentUser.compatibility}% Match</span>
              </div>

              {/* Enhanced Swipe Indicators */}
              {isDragging && (
                <>
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      dragOffset.x > 50 ? "bg-green-500/30 backdrop-blur-sm" : "opacity-0"
                    }`}
                  >
                    <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-xl transform rotate-12 shadow-2xl">
                      LIKE ❤️
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      dragOffset.x < -50 ? "bg-red-500/30 backdrop-blur-sm" : "opacity-0"
                    }`}
                  >
                    <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-xl transform -rotate-12 shadow-2xl">
                      PASS 👋
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Enhanced User Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  {currentUser.name}, {currentUser.age}
                  {currentUser.verified && <Star className="h-5 w-5 ml-2 text-blue-500" />}
                </h2>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Info className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-2 mb-4">
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-pink-500" />
                  {currentUser.distance}
                </p>
                <p className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2 text-purple-500" />
                  {currentUser.occupation}
                </p>
                <p className="flex items-center text-gray-600">
                  <GraduationCap className="h-4 w-4 mr-2 text-indigo-500" />
                  {currentUser.education}
                </p>
                <p className="flex items-center text-gray-600">
                  <Eye className="h-4 w-4 mr-2 text-green-500" />
                  {currentUser.lastActive}
                </p>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{currentUser.bio}</p>

              <div className="flex flex-wrap gap-2">
                {currentUser.interests.map((interest, index) => {
                  const IconComponent = interestIcons[interest] || Heart
                  return (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-medium flex items-center space-x-1 border border-pink-200"
                    >
                      <IconComponent className="h-3 w-3" />
                      <span>{interest}</span>
                    </span>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Background Cards */}
          {users[currentCardIndex + 1] && (
            <div className="absolute inset-0 bg-white rounded-3xl shadow-lg -z-10 scale-95 opacity-50 border border-gray-200" />
          )}
          {users[currentCardIndex + 2] && (
            <div className="absolute inset-0 bg-white rounded-3xl shadow-md -z-20 scale-90 opacity-25 border border-gray-200" />
          )}
        </div>
      </div>

      {/* Enhanced Action Buttons */}
      <div className="flex justify-center items-center space-x-6 p-8 bg-white/80 backdrop-blur-xl border-t border-gray-200/50">
        <button
          onClick={handleUndo}
          className="p-4 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentCardIndex === 0}
        >
          <Undo className="h-6 w-6" />
        </button>

        <button
          onClick={handlePass}
          className="p-5 rounded-full bg-red-100 text-red-600 hover:bg-red-200 hover:scale-110 transition-all duration-300 shadow-xl"
        >
          <X className="h-8 w-8" />
        </button>

        <button
          onClick={handleSuperLike}
          className="p-5 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 hover:scale-110 transition-all duration-300 shadow-xl"
        >
          <Star className="h-8 w-8" />
        </button>

        <button
          onClick={handleLike}
          className="p-5 rounded-full bg-green-100 text-green-600 hover:bg-green-200 hover:scale-110 transition-all duration-300 shadow-xl"
        >
          <Heart className="h-8 w-8" />
        </button>

        <button className="p-4 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 hover:scale-110 transition-all duration-300 shadow-lg">
          <Zap className="h-6 w-6" />
        </button>
      </div>

      {/* Enhanced Match Modal */}
      {showMatchModal && matchedUser && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-gray-200">
            <div className="mb-8">
              <div className="flex justify-center items-center mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="You"
                  className="w-24 h-24 rounded-full object-cover border-4 border-pink-500 shadow-lg"
                />
                <div className="mx-6 relative">
                  <Heart className="h-12 w-12 text-pink-500 animate-pulse" />
                  <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-spin" />
                </div>
                <img
                  src={matchedUser.images[0] || "/placeholder.svg"}
                  alt={matchedUser.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-pink-500 shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">It's a Match! 🎉</h2>
              <p className="text-gray-600 text-lg">You and {matchedUser.name} liked each other</p>
              <div className="mt-4 inline-block bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full">
                <span className="text-pink-700 font-semibold">{matchedUser.compatibility}% Compatible</span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setShowMatchModal(false)
                  // Navigate to messages
                }}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-bold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Send Message</span>
              </button>
              <button
                onClick={() => setShowMatchModal(false)}
                className="w-full py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                Keep Swiping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Matches
