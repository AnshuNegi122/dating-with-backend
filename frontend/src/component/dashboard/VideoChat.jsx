"use client"

import { useState, useRef, useEffect } from "react"
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  Phone,
  MessageSquare,
  Smile,
  Send,
  ChevronRight,
  X,
  Settings,
  Users,
} from "lucide-react"

const VideoChat = () => {
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [isMicOn, setIsMicOn] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [showChat, setShowChat] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)
  const messagesEndRef = useRef(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Mock video stream setup
  useEffect(() => {
    if (localVideoRef.current) {
      // In a real app, this would be a real camera stream
      // For this demo, we'll use a canvas to simulate a video stream
      const canvas = document.createElement("canvas")
      canvas.width = 640
      canvas.height = 480
      const ctx = canvas.getContext("2d")

      const drawPlaceholder = () => {
        if (!localVideoRef.current) return

        // Clear canvas
        ctx.fillStyle = "#f3f4f6"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw placeholder avatar
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2 - 50, 80, 0, Math.PI * 2)
        ctx.fillStyle = "#d1d5db"
        ctx.fill()

        // Draw placeholder body
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2 + 120, 100, Math.PI, Math.PI * 2)
        ctx.fillStyle = "#d1d5db"
        ctx.fill()

        // Draw text
        ctx.font = "24px Arial"
        ctx.fillStyle = "#6b7280"
        ctx.textAlign = "center"
        ctx.fillText("Your Camera", canvas.width / 2, canvas.height - 40)

        if (!isCameraOn) {
          // Draw camera off indicator
          ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.font = "24px Arial"
          ctx.fillStyle = "#ffffff"
          ctx.textAlign = "center"
          ctx.fillText("Camera Off", canvas.width / 2, canvas.height / 2)
        }

        // Convert to video stream
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
    if (remoteVideoRef.current && isConnected) {
      // In a real app, this would be the remote user's stream
      // For this demo, we'll use a canvas to simulate a video stream
      const canvas = document.createElement("canvas")
      canvas.width = 640
      canvas.height = 480
      const ctx = canvas.getContext("2d")

      const drawPlaceholder = () => {
        if (!remoteVideoRef.current) return

        // Clear canvas
        ctx.fillStyle = "#f3f4f6"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw placeholder avatar
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2 - 50, 80, 0, Math.PI * 2)
        ctx.fillStyle = "#d1d5db"
        ctx.fill()

        // Draw placeholder body
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2 + 120, 100, Math.PI, Math.PI * 2)
        ctx.fillStyle = "#d1d5db"
        ctx.fill()

        // Draw text
        ctx.font = "24px Arial"
        ctx.fillStyle = "#6b7280"
        ctx.textAlign = "center"
        ctx.fillText("Remote User", canvas.width / 2, canvas.height - 40)

        // Convert to video stream
        const stream = canvas.captureStream()
        if (remoteVideoRef.current.srcObject !== stream) {
          remoteVideoRef.current.srcObject = stream
        }
      }

      const interval = setInterval(drawPlaceholder, 100)
      return () => clearInterval(interval)
    }
  }, [isConnected])

  const handleConnect = () => {
    setIsLoading(true)

    // Simulate connection delay
    setTimeout(() => {
      setIsConnected(true)
      setIsLoading(false)

      // Add a system message
      setMessages([
        {
          id: 1,
          sender: "system",
          text: "You are now connected with a random user. Say hello!",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
    }, 2000)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setMessages([])
    setShowChat(false)
  }

  const handleNext = () => {
    setIsLoading(true)
    setIsConnected(false)
    setMessages([])

    // Simulate finding a new connection
    setTimeout(() => {
      setIsConnected(true)
      setIsLoading(false)

      // Add a system message
      setMessages([
        {
          id: 1,
          sender: "system",
          text: "You are now connected with a new user. Say hello!",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
    }, 2000)
  }

  const handleSendMessage = () => {
    if (message.trim() === "") return

    // Add message to chat
    const newMessage = {
      id: messages.length + 1,
      sender: "me",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newMessage])
    setMessage("")

    // Simulate response after a delay
    setTimeout(() => {
      const responses = [
        "Hey there! How are you?",
        "Nice to meet you!",
        "What brings you here today?",
        "I like your profile picture!",
        "Have you been using this app for long?",
      ]

      const responseMessage = {
        id: messages.length + 2,
        sender: "them",
        text: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prevMessages) => [...prevMessages, responseMessage])
    }, 1500)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Emoji picker mock - in a real app, you would use a proper emoji picker component
  const emojis = ["😊", "😂", "❤️", "👍", "🎉", "🔥", "😍", "🙏", "👋", "🤔"]

  return (
    <div className="h-[calc(100vh-10rem)] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Video chat header */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Video className="h-5 w-5 mr-2" />
          <h2 className="text-lg font-medium">Random Video Chat</h2>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-700">
            <Settings className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-700">
            <Users className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Video chat area */}
      <div className="flex-1 flex flex-col md:flex-row bg-gray-900 relative">
        {/* Main video area */}
        <div className="flex-1 flex flex-col">
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
                  <h3 className="text-xl font-medium mb-2">Start a Random Video Chat</h3>
                  <p className="text-gray-300 mb-6">Connect with new people from around the world</p>
                  <button
                    onClick={handleConnect}
                    className="px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 focus:outline-none"
                  >
                    Start Chatting
                  </button>
                </div>
              </div>
            )}

            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 text-white">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-500 mx-auto mb-4"></div>
                  <h3 className="text-xl font-medium">Finding someone to chat with...</h3>
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
                className={`p-3 rounded-full ${
                  isMicOn ? "bg-gray-700 hover:bg-gray-600" : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {isMicOn ? <Mic className="h-6 w-6 text-white" /> : <MicOff className="h-6 w-6 text-white" />}
              </button>
              <button
                onClick={isConnected ? handleDisconnect : handleConnect}
                className="p-3 rounded-full bg-red-600 hover:bg-red-700"
              >
                <Phone className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={() => setIsCameraOn(!isCameraOn)}
                className={`p-3 rounded-full ${
                  isCameraOn ? "bg-gray-700 hover:bg-gray-600" : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {isCameraOn ? <Video className="h-6 w-6 text-white" /> : <VideoOff className="h-6 w-6 text-white" />}
              </button>
              {isConnected && (
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center"
                >
                  <span className="text-white mr-1">Next</span>
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Chat sidebar - only shown when connected and chat is toggled */}
        {isConnected && showChat && (
          <div className="w-full md:w-80 bg-white border-l border-gray-200 flex flex-col">
            <div className="p-3 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-medium text-gray-900">Chat</h3>
              <button onClick={() => setShowChat(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`${
                      msg.sender === "system"
                        ? "flex justify-center"
                        : msg.sender === "me"
                          ? "flex justify-end"
                          : "flex justify-start"
                    }`}
                  >
                    {msg.sender === "system" ? (
                      <div className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs">{msg.text}</div>
                    ) : (
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          msg.sender === "me"
                            ? "bg-pink-500 text-white rounded-br-none"
                            : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.sender === "me" ? "text-pink-100" : "text-gray-500"}`}>
                          {msg.time}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="p-3 border-t border-gray-200">
              {showEmojiPicker && (
                <div className="mb-2 p-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="flex flex-wrap">
                    {emojis.map((emoji, index) => (
                      <button
                        key={index}
                        className="p-2 text-xl hover:bg-gray-100 rounded"
                        onClick={() => {
                          setMessage(message + emoji)
                          setShowEmojiPicker(false)
                        }}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex items-center">
                <button
                  className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <Smile className="h-5 w-5" />
                </button>
                <textarea
                  className="flex-1 mx-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 max-h-32"
                  placeholder="Type a message..."
                  rows="1"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                ></textarea>
                <button
                  className={`p-2 rounded-full ${
                    message.trim() ? "bg-pink-500 text-white hover:bg-pink-600" : "bg-gray-200 text-gray-500"
                  }`}
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Chat toggle button - only shown when connected and chat is not shown */}
        {isConnected && !showChat && (
          <button
            onClick={() => setShowChat(true)}
            className="absolute bottom-20 right-4 p-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white shadow-lg"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  )
}

export default VideoChat
