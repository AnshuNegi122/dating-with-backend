"use client"

import { useState, useRef, useEffect } from "react"
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  Phone,
  Heart,
  X,
  Settings,
  Filter,
  MapPin,
  Briefcase,
  GraduationCap,
  Shuffle,
} from "lucide-react"

const VideoChat = () => {
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [isMicOn, setIsMicOn] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [filters, setFilters] = useState({
    ageRange: [18, 35],
    gender: "all",
    distance: 50,
    interests: [],
  })
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)

  // Mock user data
  const mockUsers = [
    {
      id: 1,
      name: "Emma Wilson",
      age: 28,
      location: "New York, NY",
      distance: "2 miles away",
      occupation: "Graphic Designer",
      education: "NYU",
      interests: ["Art", "Travel", "Photography"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Love exploring new places and capturing moments through my lens.",
    },
    {
      id: 2,
      name: "Alex Johnson",
      age: 32,
      location: "Los Angeles, CA",
      distance: "5 miles away",
      occupation: "Software Engineer",
      education: "Stanford",
      interests: ["Technology", "Hiking", "Music"],
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Tech enthusiast who loves outdoor adventures and live music.",
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      age: 26,
      location: "Miami, FL",
      distance: "3 miles away",
      occupation: "Marketing Manager",
      education: "University of Miami",
      interests: ["Fitness", "Cooking", "Dancing"],
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Passionate about healthy living and trying new cuisines.",
    },
  ]

  // Mock video stream setup
  useEffect(() => {
    if (localVideoRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = 640
      canvas.height = 480
      const ctx = canvas.getContext("2d")

      const drawPlaceholder = () => {
        if (!localVideoRef.current) return

        ctx.fillStyle = "#f3f4f6"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2 - 50, 80, 0, Math.PI * 2)
        ctx.fillStyle = "#d1d5db"
        ctx.fill()

        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2 + 120, 100, Math.PI, Math.PI * 2)
        ctx.fillStyle = "#d1d5db"
        ctx.fill()

        ctx.font = "24px Arial"
        ctx.fillStyle = "#6b7280"
        ctx.textAlign = "center"
        ctx.fillText("Your Camera", canvas.width / 2, canvas.height - 40)

        if (!isCameraOn) {
          ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.font = "24px Arial"
          ctx.fillStyle = "#ffffff"
          ctx.textAlign = "center"
          ctx.fillText("Camera Off", canvas.width / 2, canvas.height / 2)
        }

        const stream = canvas.captureStream()
        if (localVideoRef.current.srcObject !== stream) {
          localVideoRef.current.srcObject = stream
        }
      }

      const interval = setInterval(drawPlaceholder, 100)
      return () => clearInterval(interval)
    }
  }, [isCameraOn])

  // Handle remote video placeholder
  useEffect(() => {
    if (remoteVideoRef.current && isConnected && currentUser) {
      const canvas = document.createElement("canvas")
      canvas.width = 640
      canvas.height = 480
      const ctx = canvas.getContext("2d")

      const drawPlaceholder = () => {
        if (!remoteVideoRef.current) return

        ctx.fillStyle = "#f3f4f6"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2 - 50, 80, 0, Math.PI * 2)
        ctx.fillStyle = "#d1d5db"
        ctx.fill()

        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2 + 120, 100, Math.PI, Math.PI * 2)
        ctx.fillStyle = "#d1d5db"
        ctx.fill()

        ctx.font = "24px Arial"
        ctx.fillStyle = "#6b7280"
        ctx.textAlign = "center"
        ctx.fillText(currentUser.name, canvas.width / 2, canvas.height - 40)

        const stream = canvas.captureStream()
        if (remoteVideoRef.current.srcObject !== stream) {
          remoteVideoRef.current.srcObject = stream
        }
      }

      const interval = setInterval(drawPlaceholder, 100)
      return () => clearInterval(interval)
    }
  }, [isConnected, currentUser])

  const handleConnect = () => {
    setIsLoading(true)

    setTimeout(() => {
      const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)]
      setCurrentUser(randomUser)
      setIsConnected(true)
      setIsLoading(false)
    }, 2000)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setCurrentUser(null)
  }

  const handleNext = () => {
    setIsLoading(true)
    setIsConnected(false)

    setTimeout(() => {
      const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)]
      setCurrentUser(randomUser)
      setIsConnected(true)
      setIsLoading(false)
    }, 2000)
  }

  const handleLike = () => {
    // Handle like action
    console.log("Liked user:", currentUser?.name)
    handleNext()
  }

  const handleSkip = () => {
    // Handle skip action
    console.log("Skipped user:", currentUser?.name)
    handleNext()
  }

  return (
    <div className="h-[calc(100vh-10rem)] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Video chat header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Video className="h-5 w-5 mr-2" />
          <h2 className="text-lg font-medium">Video Chat</h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Filter className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age Range</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={filters.ageRange[0]}
                  onChange={(e) =>
                    setFilters({ ...filters, ageRange: [Number.parseInt(e.target.value), filters.ageRange[1]] })
                  }
                  className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
                  min="18"
                  max="100"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  value={filters.ageRange[1]}
                  onChange={(e) =>
                    setFilters({ ...filters, ageRange: [filters.ageRange[0], Number.parseInt(e.target.value)] })
                  }
                  className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
                  min="18"
                  max="100"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                value={filters.gender}
                onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
              >
                <option value="all">All</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="non-binary">Non-binary</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Distance (miles)</label>
              <input
                type="range"
                min="1"
                max="100"
                value={filters.distance}
                onChange={(e) => setFilters({ ...filters, distance: Number.parseInt(e.target.value) })}
                className="w-full"
              />
              <span className="text-sm text-gray-500">{filters.distance} miles</span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interests</label>
              <div className="flex flex-wrap gap-1">
                {["Art", "Travel", "Music", "Sports", "Food"].map((interest) => (
                  <button
                    key={interest}
                    onClick={() => {
                      const newInterests = filters.interests.includes(interest)
                        ? filters.interests.filter((i) => i !== interest)
                        : [...filters.interests, interest]
                      setFilters({ ...filters, interests: newInterests })
                    }}
                    className={`px-2 py-1 text-xs rounded ${
                      filters.interests.includes(interest) ? "bg-pink-100 text-pink-700" : "bg-gray-100 text-gray-700"
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

      {/* Video chat area */}
      <div className="flex-1 flex flex-col bg-gray-900 relative">
        {/* Main video area */}
        <div className="flex-1 relative">
          {/* Remote video (full size) */}
          <video
            ref={remoteVideoRef}
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted={!isConnected}
          ></video>

          {/* Connection status overlay */}
          {!isConnected && !isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 text-white">
              <div className="text-center">
                <Video className="h-16 w-16 mx-auto mb-4 text-pink-500" />
                <h3 className="text-xl font-medium mb-2">Start Video Dating</h3>
                <p className="text-gray-300 mb-6">Connect with people who match your preferences</p>
                <button
                  onClick={handleConnect}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-purple-700 focus:outline-none transition-all"
                >
                  Start Matching
                </button>
              </div>
            </div>
          )}

          {/* Loading overlay */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 text-white">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-500 mx-auto mb-4"></div>
                <h3 className="text-xl font-medium">Finding your next match...</h3>
              </div>
            </div>
          )}

          {/* User info overlay */}
          {isConnected && currentUser && (
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg max-w-xs">
              <div className="flex items-center mb-2">
                <img
                  src={currentUser.image || "/placeholder.svg"}
                  alt={currentUser.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-semibold">
                    {currentUser.name}, {currentUser.age}
                  </h3>
                  <p className="text-sm text-gray-300 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {currentUser.distance}
                  </p>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <p className="flex items-center">
                  <Briefcase className="h-3 w-3 mr-2" />
                  {currentUser.occupation}
                </p>
                <p className="flex items-center">
                  <GraduationCap className="h-3 w-3 mr-2" />
                  {currentUser.education}
                </p>
              </div>
              <p className="text-sm mt-2 text-gray-300">{currentUser.bio}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {currentUser.interests.map((interest, index) => (
                  <span key={index} className="px-2 py-1 bg-pink-500 bg-opacity-70 rounded-full text-xs">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Local video (picture-in-picture) */}
          <div className="absolute bottom-4 right-4 w-1/4 md:w-1/5 aspect-video rounded-lg overflow-hidden border-2 border-gray-800 shadow-lg">
            <video ref={localVideoRef} className="w-full h-full object-cover" autoPlay playsInline muted></video>
          </div>
        </div>

        {/* Video controls */}
        {(isConnected || isLoading) && (
          <div className="bg-gray-800 p-4 flex justify-center space-x-4">
            <button
              onClick={() => setIsMicOn(!isMicOn)}
              className={`p-3 rounded-full transition-colors ${
                isMicOn ? "bg-gray-700 hover:bg-gray-600" : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {isMicOn ? <Mic className="h-6 w-6 text-white" /> : <MicOff className="h-6 w-6 text-white" />}
            </button>

            <button
              onClick={() => setIsCameraOn(!isCameraOn)}
              className={`p-3 rounded-full transition-colors ${
                isCameraOn ? "bg-gray-700 hover:bg-gray-600" : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {isCameraOn ? <Video className="h-6 w-6 text-white" /> : <VideoOff className="h-6 w-6 text-white" />}
            </button>

            {isConnected && (
              <>
                <button
                  onClick={handleSkip}
                  className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                <button
                  onClick={handleLike}
                  className="p-3 rounded-full bg-pink-600 hover:bg-pink-700 transition-colors"
                >
                  <Heart className="h-6 w-6 text-white" />
                </button>

                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center transition-colors"
                >
                  <Shuffle className="h-5 w-5 text-white mr-1" />
                  <span className="text-white text-sm">Next</span>
                </button>
              </>
            )}

            <button
              onClick={isConnected ? handleDisconnect : handleConnect}
              className="p-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
            >
              <Phone className="h-6 w-6 text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoChat
