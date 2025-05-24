"use client"

import { useState, useRef, useEffect } from "react"
import {
  Search,
  MoreVertical,
  Smile,
  Paperclip,
  Send,
  Phone,
  Video,
  Info,
  ChevronLeft,
  MessageCircle,
  ImageIcon,
  Plus,
  Star,
} from "lucide-react"

const Messages = () => {
  const [activeChat, setActiveChat] = useState(null)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const messagesEndRef = useRef(null)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [activeChat])

  // Mock data for chats
  const chats = [
    {
      id: 1,
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "That sounds like a great plan! 😊",
      time: "2 min ago",
      unread: 2,
      online: true,
      isMatch: true,
      matchedAt: "2 days ago",
      messages: [
        {
          id: 1,
          sender: "them",
          text: "Hey! I saw we matched. How's your day going?",
          time: "10:00 AM",
          type: "text",
        },
        {
          id: 2,
          sender: "me",
          text: "Hi Emma! It's going great, thanks for asking. I love your photos from your trip to Italy!",
          time: "10:05 AM",
          type: "text",
        },
        {
          id: 3,
          sender: "them",
          text: "Thank you! It was an amazing experience. I see you're into photography too?",
          time: "10:10 AM",
          type: "text",
        },
        {
          id: 4,
          sender: "me",
          text: "Yes! I'm actually planning a photography trip to Japan next month. Any recommendations?",
          time: "10:15 AM",
          type: "text",
        },
        {
          id: 5,
          sender: "them",
          text: "Oh wow, Japan is incredible for photography! You should definitely visit Kyoto during cherry blossom season.",
          time: "10:20 AM",
          type: "text",
        },
        {
          id: 6,
          sender: "me",
          text: "That's exactly what I was thinking! Would you like to grab coffee sometime and share more travel stories?",
          time: "10:25 AM",
          type: "text",
        },
        {
          id: 7,
          sender: "them",
          text: "That sounds like a great plan! 😊",
          time: "2 min ago",
          type: "text",
        },
      ],
    },
    {
      id: 2,
      name: "Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "Looking forward to our date tomorrow!",
      time: "1 hour ago",
      unread: 0,
      online: false,
      isMatch: true,
      matchedAt: "1 week ago",
      messages: [
        {
          id: 1,
          sender: "them",
          text: "Hi there! I noticed we both love hiking. Have you been to any good trails lately?",
          time: "Yesterday, 3:00 PM",
          type: "text",
        },
        {
          id: 2,
          sender: "me",
          text: "Hey Alex! Yes, I just did the trail at Bear Mountain last weekend. The views were incredible!",
          time: "Yesterday, 3:05 PM",
          type: "text",
        },
        {
          id: 3,
          sender: "them",
          text: "I've been wanting to check that one out! Would you be interested in going together sometime?",
          time: "Yesterday, 3:10 PM",
          type: "text",
        },
        {
          id: 4,
          sender: "me",
          text: "I'd love that! How about this Saturday morning?",
          time: "Yesterday, 3:15 PM",
          type: "text",
        },
        {
          id: 5,
          sender: "them",
          text: "Perfect! Let's meet at 8 AM at the trailhead. I'll bring some snacks and water.",
          time: "Yesterday, 3:20 PM",
          type: "text",
        },
        {
          id: 6,
          sender: "them",
          text: "Looking forward to our date tomorrow!",
          time: "1 hour ago",
          type: "text",
        },
      ],
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "Thanks for the restaurant recommendation!",
      time: "3 hours ago",
      unread: 1,
      online: true,
      isMatch: true,
      matchedAt: "3 days ago",
      messages: [
        {
          id: 1,
          sender: "them",
          text: "Hi! I love that you're into cooking. What's your favorite cuisine to make?",
          time: "3 hours ago",
          type: "text",
        },
        {
          id: 2,
          sender: "me",
          text: "Hey Sofia! I'm really into Italian and Thai cuisine. How about you?",
          time: "3 hours ago",
          type: "text",
        },
        {
          id: 3,
          sender: "them",
          text: "I love Mediterranean food! There's this amazing Greek place downtown called Mykonos. Have you been?",
          time: "3 hours ago",
          type: "text",
        },
        {
          id: 4,
          sender: "me",
          text: "No, but I've heard great things! We should check it out together sometime.",
          time: "3 hours ago",
          type: "text",
        },
        {
          id: 5,
          sender: "them",
          text: "Thanks for the restaurant recommendation!",
          time: "3 hours ago",
          type: "text",
        },
      ],
    },
    {
      id: 4,
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "Hope you have a great weekend!",
      time: "Yesterday",
      unread: 0,
      online: false,
      isMatch: true,
      matchedAt: "5 days ago",
      messages: [
        {
          id: 1,
          sender: "me",
          text: "Hey Michael! I saw you're into tech. What kind of projects are you working on?",
          time: "Yesterday, 10:00 AM",
          type: "text",
        },
        {
          id: 2,
          sender: "them",
          text: "Hi! I'm currently working on a mobile app for fitness tracking. It's been really exciting!",
          time: "Yesterday, 10:05 AM",
          type: "text",
        },
        {
          id: 3,
          sender: "me",
          text: "That sounds awesome! I'd love to hear more about it. Are you using any specific frameworks?",
          time: "Yesterday, 10:10 AM",
          type: "text",
        },
        {
          id: 4,
          sender: "them",
          text: "React Native for the frontend and Node.js for the backend. It's been a great learning experience!",
          time: "Yesterday, 10:15 AM",
          type: "text",
        },
        {
          id: 5,
          sender: "them",
          text: "Hope you have a great weekend!",
          time: "Yesterday, 10:20 AM",
          type: "text",
        },
      ],
    },
    {
      id: 5,
      name: "Jessica Taylor",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "Can't wait to see you tonight! 💕",
      time: "30 min ago",
      unread: 3,
      online: true,
      isMatch: true,
      matchedAt: "2 weeks ago",
      messages: [
        {
          id: 1,
          sender: "them",
          text: "Good morning! How did your presentation go yesterday?",
          time: "30 min ago",
          type: "text",
        },
        {
          id: 2,
          sender: "me",
          text: "It went really well! Thanks for asking. The client loved our proposal.",
          time: "25 min ago",
          type: "text",
        },
        {
          id: 3,
          sender: "them",
          text: "That's fantastic! We should celebrate. Are we still on for dinner tonight?",
          time: "20 min ago",
          type: "text",
        },
        {
          id: 4,
          sender: "me",
          text: "I made reservations at that Italian place you mentioned.",
          time: "15 min ago",
          type: "text",
        },
        {
          id: 5,
          sender: "them",
          text: "Can't wait to see you tonight! 💕",
          time: "30 min ago",
          type: "text",
        },
      ],
    },
  ]

  const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSendMessage = () => {
    if (message.trim() === "") return

    // In a real app, you would send this message to a backend
    console.log("Sending message:", message)

    // Add message to current chat
    const newMessage = {
      id: activeChat.messages.length + 1,
      sender: "me",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      type: "text",
    }

    // Update the chat with the new message
    const updatedChat = {
      ...activeChat,
      messages: [...activeChat.messages, newMessage],
      lastMessage: message,
      time: "now",
    }

    setActiveChat(updatedChat)
    setMessage("")

    // Simulate response after a delay
    setTimeout(() => {
      const responses = [
        "That sounds great!",
        "I totally agree with you",
        "Thanks for sharing that",
        "That's really interesting!",
        "I'd love to hear more about that",
      ]

      const responseMessage = {
        id: updatedChat.messages.length + 1,
        sender: "them",
        text: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        type: "text",
      }

      setActiveChat((prev) => ({
        ...prev,
        messages: [...prev.messages, responseMessage],
      }))
    }, 1500)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Emoji picker mock
  const emojis = ["😊", "😂", "❤️", "👍", "🎉", "🔥", "😍", "🙏", "👋", "🤔", "💕", "😘", "🥰", "😉"]

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Chat list - hidden on mobile when a chat is active */}
      {(!isMobile || !activeChat) && (
        <div className="w-full md:w-1/3 border-r border-gray-200 bg-white flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                placeholder="Search messages"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <ul>
              {filteredChats.map((chat) => (
                <li
                  key={chat.id}
                  className={`px-4 py-3 flex items-center hover:bg-gray-50 cursor-pointer transition-colors ${
                    activeChat?.id === chat.id ? "bg-pink-50 border-r-2 border-pink-500" : ""
                  }`}
                  onClick={() => setActiveChat(chat)}
                >
                  <div className="relative flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={chat.avatar || "/placeholder.svg"}
                      alt={chat.name}
                    />
                    {chat.online && (
                      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400" />
                    )}
                    {chat.isMatch && (
                      <span className="absolute -top-1 -right-1 block h-4 w-4 rounded-full bg-pink-500 flex items-center justify-center">
                        <Star className="h-2 w-2 text-white" />
                      </span>
                    )}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{chat.name}</h3>
                      <p className="text-xs text-gray-500">{chat.time}</p>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                      {chat.unread > 0 && (
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-pink-500 text-xs font-medium text-white">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                    {chat.isMatch && <p className="text-xs text-pink-600 mt-1">✨ Matched {chat.matchedAt}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Chat area or empty state */}
      {activeChat ? (
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center">
              {isMobile && (
                <button className="mr-2 text-gray-500 hover:text-gray-700" onClick={() => setActiveChat(null)}>
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              <div className="relative flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={activeChat.avatar || "/placeholder.svg"}
                  alt={activeChat.name}
                />
                {activeChat.online && (
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" />
                )}
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900 flex items-center">
                  {activeChat.name}
                  {activeChat.isMatch && <Star className="h-4 w-4 text-pink-500 ml-1" />}
                </h3>
                <p className="text-xs text-gray-500">
                  {activeChat.online ? "Online now" : "Last seen recently"}
                  {activeChat.isMatch && ` • Matched ${activeChat.matchedAt}`}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
                <Phone className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
                <Video className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
                <Info className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {activeChat.isMatch && (
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-2">
                  <Star className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">It's a Match!</h3>
                <p className="text-sm text-gray-500">You and {activeChat.name} liked each other</p>
              </div>
            )}

            <div className="space-y-4">
              {activeChat.messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                  {msg.sender !== "me" && (
                    <img
                      className="h-8 w-8 rounded-full mr-2 self-end object-cover"
                      src={activeChat.avatar || "/placeholder.svg"}
                      alt={activeChat.name}
                    />
                  )}
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === "me"
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "me" ? "text-pink-100" : "text-gray-500"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Message input */}
          <div className="p-4 border-t border-gray-200 bg-white">
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
            <div className="flex items-center space-x-2">
              <button
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <Smile className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                <Paperclip className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                <ImageIcon className="h-5 w-5" />
              </button>
              <div className="flex-1">
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 max-h-32 resize-none"
                  placeholder={`Message ${activeChat.name}...`}
                  rows="1"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <button
                className={`p-2 rounded-full transition-colors ${
                  message.trim()
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                    : "bg-gray-200 text-gray-500"
                }`}
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <MessageCircle className="h-12 w-12" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No conversation selected</h3>
            <p className="mt-1 text-sm text-gray-500">Choose a conversation from the list to start messaging</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Messages
