"use client"

import { useState } from "react"
import { Search, Phone, Video, MoreHorizontal, Send, Paperclip, Smile, Heart } from "lucide-react"

const TextChat = () => {
  const [activeTab, setActiveTab] = useState("All")
  const [selectedChat, setSelectedChat] = useState(1)
  const [message, setMessage] = useState("")

  const tabs = ["All", "Unread", "Archived"]

  const conversations = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Hey there! How's your day going?",
      time: "2 min ago",
      unread: true,
      online: true,
    },
    {
      id: 2,
      name: "Sarah Parker",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I'd love to meet for coffee sometime this week!",
      time: "1 hour ago",
      unread: true,
      online: false,
    },
    {
      id: 3,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "That movie you recommended was amazing!",
      time: "3 hours ago",
      unread: false,
      online: true,
    },
    {
      id: 4,
      name: "Emily Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Are you free for a video chat tomorrow?",
      time: "Yesterday",
      unread: false,
      online: false,
    },
    {
      id: 5,
      name: "David Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the great conversation last night!",
      time: "Yesterday",
      unread: false,
      online: true,
    },
    {
      id: 6,
      name: "Jessica Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I'm looking forward to our date on Friday!",
      time: "2 days ago",
      unread: false,
      online: false,
    },
  ]

  const messages = [
    { id: 1, sender: "them", text: "Hey there! How's your day going?", time: "10:30 AM" },
    {
      id: 2,
      sender: "me",
      text: "Hi! It's going pretty well, thanks for asking. Just finished a meeting and now taking a break. How about you?",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "them",
      text: "I'm good! Just working on some projects. By the way, I really enjoyed our conversation yesterday.",
      time: "10:34 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "Me too! It was great getting to know you better. Would you be interested in grabbing coffee sometime this week?",
      time: "10:35 AM",
    },
    {
      id: 5,
      sender: "them",
      text: "I'd love to! How about Thursday afternoon? There's a nice café downtown I've been wanting to try.",
      time: "10:38 AM",
    },
    { id: 6, sender: "me", text: "Thursday works for me! What time were you thinking?", time: "10:40 AM" },
    { id: 7, sender: "them", text: "How about 3 PM? I can send you the location.", time: "10:41 AM" },
    { id: 8, sender: "me", text: "Perfect! Looking forward to it! 😊", time: "10:42 AM" },
  ]

  const selectedConversation = conversations.find((c) => c.id === selectedChat)

  const filteredConversations = conversations.filter((conv) => {
    if (activeTab === "Unread") return conv.unread
    if (activeTab === "Archived") return false // No archived messages in this example
    return true
  })

  return (
    <div className="h-full bg-gray-50 flex flex-col lg:flex-row">
      {/* Conversations List */}
      <div className="w-full lg:w-80 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab ? "bg-white text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedChat(conversation.id)}
              className={`w-full p-4 flex items-center border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                selectedChat === conversation.id ? "bg-pink-50 border-pink-200" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={conversation.avatar || "/placeholder.svg"}
                  alt={conversation.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                {conversation.online && (
                  <div className="absolute bottom-0 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-gray-800 truncate">{conversation.name}</h3>
                  <span className="text-xs text-gray-500">{conversation.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
              </div>
              {conversation.unread && <div className="w-2 h-2 bg-pink-500 rounded-full ml-2"></div>}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
          <div className="flex items-center">
            <div className="relative">
              <img
                src={selectedConversation?.avatar || "/placeholder.svg"}
                alt={selectedConversation?.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              {selectedConversation?.online && (
                <div className="absolute bottom-0 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">{selectedConversation?.name}</h2>
              <p className="text-sm text-gray-500">
                {selectedConversation?.online ? "Online now" : "Last seen recently"}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              {msg.sender === "them" && (
                <img
                  src={selectedConversation?.avatar || "/placeholder.svg"}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full mr-2 self-end"
                />
              )}
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.sender === "me"
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                    : "bg-white text-gray-800 border border-gray-200"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.sender === "me" ? "text-pink-100" : "text-gray-500"}`}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-pink-500"
              />
            </div>
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Smile className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextChat
