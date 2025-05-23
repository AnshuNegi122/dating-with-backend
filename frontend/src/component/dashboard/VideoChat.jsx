"use client"

import { useState } from "react"
import { Mic, MicOff, Video, VideoOff, Phone, SkipForward, Heart, Users } from "lucide-react"

const VideoChat = () => {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [ageRange, setAgeRange] = useState(50)
  const [genderPreference, setGenderPreference] = useState("Women")
  const [isConnecting, setIsConnecting] = useState(false)

  const handleSkip = () => {
    setIsConnecting(true)
    setTimeout(() => setIsConnecting(false), 2000)
  }

  const handleLike = () => {
    // Handle like functionality
    console.log("Liked!")
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col lg:flex-row">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 md:p-6 border-b border-gray-200 bg-white">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Random Video Chat</h1>
          <p className="text-gray-600">Connect with new people through video chat</p>
        </div>

        {/* Video Area */}
        <div className="flex-1 p-4 md:p-6">
          <div className="relative bg-white rounded-xl h-full flex items-center justify-center border border-gray-200 shadow-sm min-h-[400px]">
            {isConnecting ? (
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-700">Connecting to next person...</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-500">Click "Like" to start a video chat</p>
              </div>
            )}

            {/* Self Video */}
            <div className="absolute bottom-4 right-4 w-32 md:w-48 h-24 md:h-36 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center">
              {isVideoOff ? (
                <Users className="w-6 md:w-8 h-6 md:h-8 text-gray-400" />
              ) : (
                <img
                  src="/placeholder.svg?height=144&width=192"
                  alt="You"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>

            {/* Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-3 rounded-full transition-colors ${
                  isMuted ? "bg-red-500 hover:bg-red-600" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {isMuted ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-gray-700" />}
              </button>

              <button
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`p-3 rounded-full transition-colors ${
                  isVideoOff ? "bg-red-500 hover:bg-red-600" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {isVideoOff ? <VideoOff className="w-5 h-5 text-white" /> : <Video className="w-5 h-5 text-gray-700" />}
              </button>

              <button className="p-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-80 bg-white border-t lg:border-t-0 lg:border-l border-gray-200 p-4 md:p-6">
        {/* Chat Controls */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Chat Controls</h3>
          <div className="space-y-3">
            <button
              onClick={handleSkip}
              className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-300 transition-colors flex items-center justify-center"
            >
              <SkipForward className="w-5 h-5 mr-2" />
              Skip
            </button>
            <button
              onClick={handleLike}
              className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-lg transition-colors flex items-center justify-center"
            >
              <Heart className="w-5 h-5 mr-2" />
              Like
            </button>
          </div>
        </div>

        {/* Chat Settings */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Chat Settings</h3>

          {/* Age Range */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
            <div className="relative">
              <input
                type="range"
                min="18"
                max="80"
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>18</span>
                <span className="text-pink-600 font-medium">{ageRange}+</span>
                <span>80+</span>
              </div>
            </div>
          </div>

          {/* Gender Preference */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender Preference</label>
            <div className="grid grid-cols-3 gap-2">
              {["Women", "Men", "Everyone"].map((option) => (
                <button
                  key={option}
                  onClick={() => setGenderPreference(option)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    genderPreference === option
                      ? "bg-pink-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoChat
