import { useState, useRef, useEffect } from "react"
import { Search, MoreVertical, Smile, Paperclip, Send, ImageIcon, Mic, Video, Phone, Info, ChevronLeft, MessageCircle } from 'lucide-react'

const Chats = () => {
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
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      lastMessage: "Hey, how are you doing?",
      time: "10:30 AM",
      unread: 2,
      online: true,
      messages: [
        {
          id: 1,
          sender: "them",
          text: "Hey there! How's your day going?",
          time: "10:00 AM",
        },
        {
          id: 2,
          sender: "me",
          text: "Pretty good! Just finished a project. How about you?",
          time: "10:05 AM",
        },
        {
          id: 3,
          sender: "them",
          text: "I'm doing well! Just taking a break from work. Any plans for the weekend?",
          time: "10:10 AM",
        },
        {
          id: 4,
          sender: "me",
          text: "Thinking of going hiking, weather permitting. Would you be interested in joining?",
          time: "10:15 AM",
        },
        {
          id: 5,
          sender: "them",
          text: "That sounds fun! I'd love to join. Where were you thinking of going?",
          time: "10:20 AM",
        },
        {
          id: 6,
          sender: "me",
          text: "I was thinking of the trail at Cedar Ridge. It's not too difficult and has great views!",
          time: "10:25 AM",
        },
        {
          id: 7,
          sender: "them",
          text: "Hey, how are you doing?",
          time: "10:30 AM",
        },
      ],
    },
    {
      id: 2,
      name: "Emily Davis",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      lastMessage: "I'll be there in 5 minutes",
      time: "Yesterday",
      unread: 0,
      online: false,
      messages: [
        {
          id: 1,
          sender: "them",
          text: "Hi! Are we still meeting at the coffee shop today?",
          time: "Yesterday, 3:00 PM",
        },
        {
          id: 2,
          sender: "me",
          text: "Yes, definitely! What time works for you?",
          time: "Yesterday, 3:05 PM",
        },
        {
          id: 3,
          sender: "them",
          text: "How about 5:30? After I finish work?",
          time: "Yesterday, 3:10 PM",
        },
        {
          id: 4,
          sender: "me",
          text: "Perfect! I'll see you at Brew & Bean at 5:30 then.",
          time: "Yesterday, 3:15 PM",
        },
        {
          id: 5,
          sender: "them",
          text: "Great! Looking forward to it.",
          time: "Yesterday, 3:20 PM",
        },
        {
          id: 6,
          sender: "them",
          text: "I'll be there in 5 minutes",
          time: "Yesterday, 5:25 PM",
        },
      ],
    },
    {
      id: 3,
      name: "Michael Smith",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      lastMessage: "Did you see the latest movie?",
      time: "Yesterday",
      unread: 0,
      online: true,
      messages: [
        {
          id: 1,
          sender: "them",
          text: "Hey, have you seen the new superhero movie that just came out?",
          time: "Yesterday, 1:00 PM",
        },
        {
          id: 2,
          sender: "me",
          text: "Not yet! I've been meaning to. Is it good?",
          time: "Yesterday, 1:05 PM",
        },
        {
          id: 3,
          sender: "them",
          text: "It's amazing! The special effects are incredible and the story is really engaging.",
          time: "Yesterday, 1:10 PM",
        },
        {
          id: 4,
          sender: "me",
          text: "That's great to hear! Maybe we could go see it together this weekend?",
          time: "Yesterday, 1:15 PM",
        },
        {
          id: 5,
          sender: "them",
          text: "Did you see the latest movie?",
          time: "Yesterday, 1:20 PM",
        },
      ],
    },
    {
      id: 4,
      name: "Jessica Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      lastMessage: "Thanks for the help yesterday!",
      time: "Monday",
      unread: 0,
      online: false,
      messages: [
        {
          id: 1,
          sender: "me",
          text: "Hey Jessica, how did your presentation go?",
          time: "Monday, 10:00 AM",
        },
        {
          id: 2,
          sender: "them",
          text: "It went really well! Thanks for helping me prepare for it.",
          time: "Monday, 10:05 AM",
        },
        {
          id: 3,
          sender: "me",
          text: "No problem at all! I'm glad it went well. Did they ask you any tough questions?",
          time: "Monday, 10:10 AM",
        },
        {
          id: 4,
          sender: "them",
          text: "A few, but I was prepared thanks to our practice session. My boss was impressed!",
          time: "Monday, 10:15 AM",
        },
        {
          id: 5,
          sender: "me",
          text: "That's awesome! We should celebrate sometime.",
          time: "Monday, 10:20 AM",
        },
        {
          id: 6,
          sender: "them",
          text: "Thanks for the help yesterday!",
          time: "Monday, 10:25 AM",
        },
      ],
    },
    {
      id: 5,
      name: "David Brown",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      lastMessage: "Let's catch up soon!",
      time: "Sunday",
      unread: 0,
      online: true,
      messages: [
        {
          id: 1,
          sender: "them",
          text: "Hey, it's been a while since we caught up. How have you been?",
          time: "Sunday, 2:00 PM",
        },
        {
          id: 2,
          sender: "me",
          text: "I've been good! Busy with work but can't complain. How about you?",
          time: "Sunday, 2:05 PM",
        },
        {
          id: 3,
          sender: "them",
          text: "Same here. Work has been hectic but interesting. We should grab coffee sometime and catch up properly.",
          time: "Sunday, 2:10 PM",
        },
        {
          id: 4,
          sender: "me",
          text: "That sounds great! How about next weekend? There's a new café I've been wanting to try.",
          time: "Sunday, 2:15 PM",
        },
        {
          id: 5,
          sender: "them",
          text: "Let's catch up soon!",
          time: "Sunday, 2:20 PM",
        },
      ],
    },
  ]

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSendMessage = () => {
    if (message.trim() === "") return

    // In a real app, you would send this message to a backend
    console.log("Sending message:", message)
    
    // Clear the input
    setMessage("")
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
    <div className="h-[calc(100vh-10rem)] flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Chat list - hidden on mobile when a chat is active */}
      {(!isMobile || !activeChat) && (
        <div className="w-full md:w-1/3 border-r border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                placeholder="Search chats"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <ul className="overflow-auto h-[calc(100%-4rem)]">
            {filteredChats.map((chat) => (
              <li
                key={chat.id}
                className={`px-4 py-3 flex items-center hover:bg-gray-50 cursor-pointer ${
                  activeChat?.id === chat.id ? "bg-pink-50" : ""
                }`}
                onClick={() => setActiveChat(chat)}
              >
                <div className="relative flex-shrink-0">
                  <ImageIcon
                    className="h-12 w-12 rounded-full object-cover"
                    src={chat.avatar || "/placeholder.svg"}
                    alt={chat.name}
                  />
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400" />
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Chat area or empty state */}
      {activeChat ? (
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              {isMobile && (
                <button
                  className="mr-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setActiveChat(null)}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              <div className="relative flex-shrink-0">
                <ImageIcon
                  className="h-10 w-10 rounded-full object-cover"
                  src={activeChat.avatar || "/placeholder.svg"}
                  alt={activeChat.name}
                />
                {activeChat.online && (
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" />
                )}
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">{activeChat.name}</h3>
                <p className="text-xs text-gray-500">{activeChat.online ? "Online" : "Offline"}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700">
                <Phone className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Video className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Info className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {activeChat.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender !== "me" && (
                    <ImageIcon
                      className="h-8 w-8 rounded-full mr-2 self-end"
                      src={activeChat.avatar || "/placeholder.svg"}
                      alt={activeChat.name}
                    />
                  )}
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === "me"
                        ? "bg-pink-500 text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === "me" ? "text-pink-100" : "text-gray-500"
                      }`}
                    >
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
            <div className="flex items-center">
              <button
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <Smile className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                <Paperclip className="h-5 w-5" />
              </button>
              <textarea
                className="flex-1 mx-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 max-h-32"
                placeholder="Type a message..."
                rows="1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className={`p-2 rounded-full ${
                  message.trim()
                    ? "bg-pink-500 text-white hover:bg-pink-600"
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
            <h3 className="mt-2 text-sm font-medium text-gray-900">No chat selected</h3>
            <p className="mt-1 text-sm text-gray-500">Select a chat to start messaging</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chats
