import { useState, useRef, useEffect } from "react"
import { Search, MoreVertical, Smile, Paperclip, Send, Users, Plus, ChevronLeft, Settings, Lock, Globe, User, Hash } from 'lucide-react'

const GroupChat = () => {
  const [activeGroup, setActiveGroup] = useState(null)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showCreateGroup, setShowCreateGroup] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const messagesEndRef = useRef(null)

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
  }, [activeGroup])

  // Mock data for groups
  const groups = [
    {
      id: 1,
      name: "Travel Enthusiasts",
      description: "Share your travel experiences and tips",
      members: 28,
      icon: "🌍",
      type: "public",
      lastMessage: {
        sender: "Emily Davis",
        text: "Has anyone been to Japan recently?",
        time: "10:30 AM",
      },
      messages: [
        {
          id: 1,
          sender: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "Hey everyone! I'm planning a trip to Europe next month. Any recommendations?",
          time: "9:30 AM",
        },
        {
          id: 2,
          sender: {
            name: "Michael Smith",
            avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "I was in Barcelona last year, it was amazing! Definitely check out the Sagrada Familia.",
          time: "9:35 AM",
        },
        {
          id: 3,
          sender: {
            name: "Jessica Wilson",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "If you're going to Paris, try to book tickets for the Eiffel Tower in advance. The lines can be crazy!",
          time: "9:40 AM",
        },
        {
          id: 4,
          sender: {
            name: "David Brown",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "I'd recommend spending at least 3 days in each major city. There's so much to see!",
          time: "9:45 AM",
        },
        {
          id: 5,
          sender: {
            name: "Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "Don't forget to try the local food wherever you go! That's half the experience.",
          time: "10:00 AM",
        },
        {
          id: 6,
          sender: {
            name: "Emily Davis",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "Has anyone been to Japan recently?",
          time: "10:30 AM",
        },
      ],
    },
    {
      id: 2,
      name: "Book Club",
      description: "Discuss your favorite books and authors",
      members: 15,
      icon: "📚",
      type: "private",
      lastMessage: {
        sender: "Michael Smith",
        text: "I just finished 'The Midnight Library' and loved it!",
        time: "Yesterday",
      },
      messages: [
        {
          id: 1,
          sender: {
            name: "Jessica Wilson",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "What book should we read for next month?",
          time: "Yesterday, 3:00 PM",
        },
        {
          id: 2,
          sender: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "I've heard great things about 'Project Hail Mary' by Andy Weir.",
          time: "Yesterday, 3:05 PM",
        },
        {
          id: 3,
          sender: {
            name: "Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "I'd like to read something in the fantasy genre this time. Maybe 'The Name of the Wind'?",
          time: "Yesterday, 3:10 PM",
        },
        {
          id: 4,
          sender: {
            name: "Michael Smith",
            avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "I just finished 'The Midnight Library' and loved it!",
          time: "Yesterday, 3:15 PM",
        },
      ],
    },
    {
      id: 3,
      name: "Fitness Motivation",
      description: "Share workout tips and stay motivated",
      members: 42,
      icon: "💪",
      type: "public",
      lastMessage: {
        sender: "David Brown",
        text: "Just completed a 5K run! Personal best time.",
        time: "Monday",
      },
      messages: [
        {
          id: 1,
          sender: {
            name: "Emily Davis",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "What's everyone's favorite post-workout meal?",
          time: "Monday, 10:00 AM",
        },
        {
          id: 2,
          sender: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "I usually go for a protein shake with a banana. Quick and effective!",
          time: "Monday, 10:05 AM",
        },
        {
          id: 3,
          sender: {
            name: "Jessica Wilson",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "Greek yogurt with honey and nuts is my go-to. Delicious and nutritious!",
          time: "Monday, 10:10 AM",
        },
        {
          id: 4,
          sender: {
            name: "David Brown",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "Just completed a 5K run! Personal best time.",
          time: "Monday, 10:15 AM",
        },
      ],
    },
    {
      id: 4,
      name: "Photography Tips",
      description: "Share photography tips and showcase your work",
      members: 36,
      icon: "📷",
      type: "public",
      lastMessage: {
        sender: "Sarah Johnson",
        text: "Check out this sunset shot I took yesterday!",
        time: "Sunday",
      },
      messages: [
        {
          id: 1,
          sender: {
            name: "Michael Smith",
            avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "What camera do you all use for landscape photography?",
          time: "Sunday, 2:00 PM",
        },
        {
          id: 2,
          sender: {
            name: "David Brown",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "I use a Canon EOS R5. It's fantastic for landscapes, especially with a wide-angle lens.",
          time: "Sunday, 2:05 PM",
        },
        {
          id: 3,
          sender: {
            name: "Emily Davis",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "I actually just use my iPhone 13 Pro. The camera quality is amazing for casual photography!",
          time: "Sunday, 2:10 PM",
        },
        {
          id: 4,
          sender: {
            name: "Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "Check out this sunset shot I took yesterday!",
          time: "Sunday, 2:15 PM",
        },
      ],
    },
    {
      id: 5,
      name: "Foodies Unite",
      description: "Share recipes and restaurant recommendations",
      members: 53,
      icon: "🍕",
      type: "private",
      lastMessage: {
        sender: "Alex Johnson",
        text: "I tried that pasta recipe you shared. It was delicious!",
        time: "Last week",
      },
      messages: [
        {
          id: 1,
          sender: {
            name: "Jessica Wilson",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "I found this amazing Italian restaurant downtown. Their carbonara is to die for!",
          time: "Last week, 1:00 PM",
        },
        {
          id: 2,
          sender: {
            name: "Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "Thanks for the recommendation! I'll have to check it out this weekend.",
          time: "Last week, 1:05 PM",
        },
        {
          id: 3,
          sender: {
            name: "Michael Smith",
            avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "Has anyone tried making sourdough bread at home? I'm thinking of giving it a shot.",
          time: "Last week, 1:10 PM",
        },
        {
          id: 4,
          sender: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          text: "I tried that pasta recipe you shared. It was delicious!",
          time: "Last week, 1:15 PM",
        },
      ],
    },
  ]

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSendMessage = () => {
    if (message.trim() === "") return

    // In a real app, you would send this message to a backend
    console.log("Sending message to group:", activeGroup?.name, message)
    
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

  // Create Group Form
  const CreateGroupForm = () => {
    const [groupName, setGroupName] = useState("")
    const [groupDescription, setGroupDescription] = useState("")
    const [groupType, setGroupType] = useState("public")
    const [groupIcon, setGroupIcon] = useState("🌍")

    const handleCreateGroup = (e) => {
      e.preventDefault()
      // In a real app, you would send this data to a backend
      console.log("Creating group:", { groupName, groupDescription, groupType, groupIcon })
      setShowCreateGroup(false)
    }

    const iconOptions = ["🌍", "📚", "💪", "📷", "🍕", "🎮", "🎵", "🎨", "🏠", "🚗"]

    return (
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Create New Group</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setShowCreateGroup(false)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleCreateGroup}>
          <div className="mb-4">
            <label htmlFor="group-name" className="block text-sm font-medium text-gray-700 mb-1">
              Group Name
            </label>
            <input
              type="text"
              id="group-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="group-description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="group-description"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="What's this group about?"
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Group Icon</label>
            <div className="flex flex-wrap gap-2">
              {iconOptions.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  className={`w-10 h-10 text-xl flex items-center justify-center rounded-md ${
                    groupIcon === icon ? "bg-pink-100 border-2 border-pink-500" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setGroupIcon(icon)}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Privacy</label>
            <div className="flex space-x-4">
              <div
                className={`flex items-center p-3 rounded-md cursor-pointer ${
                  groupType === "public" ? "bg-pink-50 border border-pink-200" : "bg-white border border-gray-200"
                }`}
                onClick={() => setGroupType("public")}
              >
                <Globe className="h-5 w-5 text-gray-500 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Public</p>
                  <p className="text-xs text-gray-500">Anyone can join and read messages</p>
                </div>
              </div>
              <div
                className={`flex items-center p-3 rounded-md cursor-pointer ${
                  groupType === "private" ? "bg-pink-50 border border-pink-200" : "bg-white border border-gray-200"
                }`}
                onClick={() => setGroupType("private")}
              >
                <Lock className="h-5 w-5 text-gray-500 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Private</p>
                  <p className="text-xs text-gray-500">Only invited members can join</p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none"
          >
            Create Group
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Group list - hidden on mobile when a group is active */}
      {(!isMobile || !activeGroup) && !showCreateGroup && (
        <div className="w-full md:w-1/3 border-r border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Group Chats</h2>
              <button
                className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                onClick={() => setShowCreateGroup(true)}
              >
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
                placeholder="Search groups"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <ul className="overflow-auto h-[calc(100%-7rem)]">
            {filteredGroups.map((group) => (
              <li
                key={group.id}
                className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                  activeGroup?.id === group.id ? "bg-pink-50" : ""
                }`}
                onClick={() => setActiveGroup(group)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-2xl">{group.icon}</div>
                    <div className="ml-3">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-900">{group.name}</p>
                        {group.type === "private" && (
                          <Lock className="ml-1 h-3 w-3 text-gray-500" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{group.members} members</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{group.lastMessage.time}</div>
                </div>
                <div className="mt-1 pl-10">
                  <p className="text-sm text-gray-500 truncate">
                    <span className="font-medium">{group.lastMessage.sender}:</span> {group.lastMessage.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Create Group Form */}
      {showCreateGroup && (
        <div className="w-full md:w-1/3 border-r border-gray-200 bg-white">
          <CreateGroupForm />
        </div>
      )}

      {/* Group chat area or empty state */}
      {activeGroup ? (
        <div className="flex-1 flex flex-col">
          {/* Group header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              {isMobile && (
                <button
                  className="mr-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setActiveGroup(null)}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              <div className="flex-shrink-0 text-2xl">{activeGroup.icon}</div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">{activeGroup.name}</h3>
                <div className="flex items-center text-xs text-gray-500">
                  <Users className="h-3 w-3 mr-1" />
                  <span>{activeGroup.members} members</span>
                  {activeGroup.type === "private" && (
                    <>
                      <span className="mx-1">•</span>
                      <Lock className="h-3 w-3 mr-1" />
                      <span>Private</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700">
                <User className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Settings className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {activeGroup.messages.map((msg) => (
                <div key={msg.id} className="flex">
                  <img
                    className="h-8 w-8 rounded-full mr-2 self-end"
                    src={msg.sender.avatar || "/placeholder.svg"}
                    alt={msg.sender.name}
                  />
                  <div className="max-w-xs lg:max-w-md">
                    <div className="flex items-center">
                      <p className="text-xs font-medium text-gray-900">{msg.sender.name}</p>
                      <p className="ml-2 text-xs text-gray-500">{msg.time}</p>
                    </div>
                    <div className="mt-1 bg-white px-4 py-2 rounded-lg text-gray-800 rounded-tl-none">
                      <p>{msg.text}</p>
                    </div>
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
                placeholder={`Message #${activeGroup.name}`}
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
      ) : !showCreateGroup ? (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <Hash className="h-12 w-12" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No group selected</h3>
            <p className="mt-1 text-sm text-gray-500">Select a group to start chatting</p>
            <div className="mt-6">
              <button
                onClick={() => setShowCreateGroup(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none"
              >
                <Plus className="-ml-1 mr-2 h-5 w-5" />
                Create New Group
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default GroupChat
