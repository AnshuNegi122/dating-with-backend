"use client"

import { useState, useRef, useEffect } from "react"
import { X, Heart, Star, ArrowLeft, ArrowRight, Info, Sparkles, MessageSquare, Video } from "lucide-react"

const SwipeMatch = () => {
  const [currentProfile, setCurrentProfile] = useState(0)
  const [showLoveAnimation, setShowLoveAnimation] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState(null)
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const cardRef = useRef(null)
  const [showMatch, setShowMatch] = useState(false)
  const [matchedProfile, setMatchedProfile] = useState(null)

  const profiles = [
    {
      id: 1,
      name: "Alex Johnson",
      age: 28,
      location: "New York, NY",
      bio: "Hopeless romantic looking for someone to share sunset walks and deep conversations.",
      image: "/placeholder.svg?height=600&width=400",
      interests: ["Romance", "Poetry", "Sunset Walks", "Deep Talks"],
      compatibility: 95,
    },
    {
      id: 2,
      name: "Jamie Smith",
      age: 26,
      location: "Los Angeles, CA",
      bio: "Believer in love at first sight. Let's create a beautiful love story together.",
      image: "/placeholder.svg?height=600&width=400",
      interests: ["Love Stories", "Candlelit Dinners", "Beach Walks", "Dancing"],
      compatibility: 88,
    },
    {
      id: 3,
      name: "Taylor Brown",
      age: 29,
      location: "Chicago, IL",
      bio: "Looking for that special someone to share life's adventures. I believe in true love and soulmates.",
      image: "/placeholder.svg?height=600&width=400",
      interests: ["Soulmates", "Adventures", "Cooking Together", "Stargazing"],
      compatibility: 92,
    },
  ]

  // Reset drag when profile changes
  useEffect(() => {
    setDragPosition({ x: 0, y: 0 })
    setSwipeDirection(null)
  }, [currentProfile])

  const handleSwipe = (direction) => {
    setSwipeDirection(direction)

    if (direction === "right") {
      // Show love animation
      setShowLoveAnimation(true)

      // Simulate a match (33% chance)
      const isMatch = Math.random() > 0.66

      if (isMatch) {
        setMatchedProfile(profiles[currentProfile])
        setTimeout(() => {
          setShowMatch(true)
        }, 1000)
      } else {
        setTimeout(() => {
          setShowLoveAnimation(false)
          moveToNextProfile()
        }, 1000)
      }
    } else {
      setTimeout(() => {
        moveToNextProfile()
      }, 500)
    }
  }

  const moveToNextProfile = () => {
    // Move to next profile
    if (currentProfile < profiles.length - 1) {
      setCurrentProfile(currentProfile + 1)
    } else {
      // Reset or show "no more profiles" message
      setCurrentProfile(0)
    }
  }

  const handleDragStart = (e) => {
    setIsDragging(true)
  }

  const handleDragMove = (e) => {
    if (!isDragging) return

    const card = cardRef.current
    if (!card) return

    // Get the center of the card
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2

    // Calculate how far we've dragged from the center
    const dragX = e.clientX - centerX
    const dragY = e.clientY - (rect.top + rect.height / 2)

    // Limit the drag distance
    const maxDragX = rect.width / 2
    const maxDragY = rect.height / 2
    const limitedDragX = Math.max(-maxDragX, Math.min(maxDragX, dragX))
    const limitedDragY = Math.max(-maxDragY, Math.min(maxDragY, dragY))

    setDragPosition({ x: limitedDragX, y: limitedDragY })

    // Determine swipe direction based on drag position
    if (limitedDragX > 50) {
      setSwipeDirection("right")
    } else if (limitedDragX < -50) {
      setSwipeDirection("left")
    } else {
      setSwipeDirection(null)
    }
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (swipeDirection) {
      handleSwipe(swipeDirection)
    } else {
      // Reset position if not swiped far enough
      setDragPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseDown = (e) => {
    handleDragStart(e)

    document.addEventListener("mousemove", handleDragMove)
    document.addEventListener("mouseup", handleMouseUpGlobal)
  }

  const handleMouseUpGlobal = (e) => {
    handleDragEnd()
    document.removeEventListener("mousemove", handleDragMove)
    document.removeEventListener("mouseup", handleMouseUpGlobal)
  }

  const handleTouchStart = (e) => {
    handleDragStart(e.touches[0])
  }

  const handleTouchMove = (e) => {
    handleDragMove(e.touches[0])
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  const profile = profiles[currentProfile]

  // Calculate rotation and opacity based on drag position
  const rotation = dragPosition.x * 0.1 // Rotate 0.1 degrees per pixel dragged
  const opacity = Math.max(0, 1 - Math.abs(dragPosition.x) / 400)

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-50 p-4 md:p-6">
      {/* Match overlay */}
      {showMatch && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-pink-500/90 to-rose-600/90 backdrop-blur-sm animate-fade-in">
          <div className="text-center">
            <div className="relative mb-6">
              <Sparkles className="absolute -top-6 -left-6 h-8 w-8 text-yellow-300 animate-ping" />
              <Sparkles
                className="absolute -top-4 -right-8 h-6 w-6 text-yellow-300 animate-ping"
                style={{ animationDelay: "0.5s" }}
              />
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">It's a Match!</div>
              <div className="text-white/80 text-lg">You and {matchedProfile?.name} liked each other</div>
            </div>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="You"
                  className="h-20 md:h-24 w-20 md:w-24 rounded-full border-4 border-white"
                />
                <Heart className="absolute -bottom-2 -right-2 h-6 md:h-8 w-6 md:w-8 text-pink-500" fill="white" />
              </div>
              <div className="relative">
                <img
                  src={matchedProfile?.image || "/placeholder.svg"}
                  alt={matchedProfile?.name}
                  className="h-20 md:h-24 w-20 md:w-24 rounded-full border-4 border-white"
                />
                <Heart className="absolute -bottom-2 -left-2 h-6 md:h-8 w-6 md:w-8 text-pink-500" fill="white" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button className="px-6 py-3 bg-white text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-colors duration-300 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Send Message
              </button>
              <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center">
                <Video className="h-5 w-5 mr-2" />
                Video Date
              </button>
            </div>

            <button
              className="mt-8 text-white/80 hover:text-white transition-colors duration-200"
              onClick={() => {
                setShowMatch(false)
                setShowLoveAnimation(false)
                moveToNextProfile()
              }}
            >
              Keep Swiping
            </button>
          </div>
        </div>
      )}

      <div className="max-w-md w-full">
        <h1 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-800">Find Your Soulmate</h1>

        <div
          ref={cardRef}
          className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 cursor-grab active:cursor-grabbing border border-gray-200"
          style={{
            transform: `translateX(${dragPosition.x}px) translateY(${dragPosition.y}px) rotate(${rotation}deg)`,
            opacity: opacity,
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Swipe indicators */}
          {swipeDirection === "right" && (
            <div className="absolute top-4 right-4 z-20 bg-green-500 text-white px-4 py-2 rounded-full font-bold transform rotate-12 border-2 border-white">
              LIKE
            </div>
          )}
          {swipeDirection === "left" && (
            <div className="absolute top-4 left-4 z-20 bg-red-500 text-white px-4 py-2 rounded-full font-bold transform -rotate-12 border-2 border-white">
              PASS
            </div>
          )}

          {/* Love animation overlay */}
          {showLoveAnimation && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-pink-500 bg-opacity-30 backdrop-blur-sm">
              <div className="animate-heartbeat">
                <Heart className="h-32 w-32 text-white" fill="white" />
              </div>
            </div>
          )}

          {/* Profile image */}
          <div className="relative h-[28rem]">
            <img
              src={profile.image || "/placeholder.svg"}
              alt={profile.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black opacity-90"></div>

            {/* Compatibility badge */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center">
              <Sparkles className="h-4 w-4 mr-1 text-yellow-300" />
              <span>{profile.compatibility}% Match</span>
            </div>

            {/* Profile info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-bold flex items-center">
                {profile.name}, {profile.age}
                <Heart className="h-5 w-5 ml-2 text-pink-400" fill="currentColor" />
              </h2>
              <p className="text-sm opacity-90 mb-2 flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {profile.location}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {profile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <p className="text-sm opacity-90">{profile.bio}</p>
            </div>

            {/* Info button */}
            <button className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors duration-200">
              <Info className="h-5 w-5" />
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center space-x-4 p-4 bg-white">
            <button
              onClick={() => handleSwipe("left")}
              className="p-4 bg-white text-red-500 rounded-full shadow-md border border-gray-200 hover:bg-red-50 hover:scale-110 transition-all duration-300"
            >
              <X className="h-8 w-8" />
            </button>

            <button className="p-3 bg-white text-purple-500 rounded-full shadow-md border border-gray-200 hover:bg-purple-50 hover:scale-110 transition-all duration-300">
              <Star className="h-6 w-6" />
            </button>

            <button
              onClick={() => handleSwipe("right")}
              className="p-4 bg-white text-pink-500 rounded-full shadow-md border border-gray-200 hover:bg-pink-50 hover:scale-110 transition-all duration-300"
            >
              <Heart className="h-8 w-8" />
            </button>
          </div>
        </div>

        {/* Swipe instructions */}
        <div className="text-center mt-4 text-gray-500 text-sm">
          <p>Swipe right to like, left to pass</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => currentProfile > 0 && setCurrentProfile(currentProfile - 1)}
            className={`flex items-center space-x-1 text-sm ${currentProfile > 0 ? "text-pink-600" : "text-gray-400 cursor-not-allowed"}`}
            disabled={currentProfile === 0}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-1">
            {profiles.map((_, index) => (
              <span
                key={index}
                className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentProfile ? "bg-gradient-to-r from-pink-500 to-rose-500 w-6" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

          <button
            onClick={() => currentProfile < profiles.length - 1 && setCurrentProfile(currentProfile + 1)}
            className={`flex items-center space-x-1 text-sm ${currentProfile < profiles.length - 1 ? "text-pink-600" : "text-gray-400 cursor-not-allowed"}`}
            disabled={currentProfile === profiles.length - 1}
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SwipeMatch
