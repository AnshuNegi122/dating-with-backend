"use client"

import { useState } from "react"
import { Video, MessageSquare, User, Settings, Home, Heart, Crown } from "lucide-react"

const Sidebar = ({ activeTab, setActiveTab, darkMode }) => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const navItems = [
    { id: "lovehub", label: "Love Hub", icon: Home },
    { id: "video", label: "Video Chat", icon: Video },
    { id: "chat", label: "Messages", icon: MessageSquare },
    { id: "swipe", label: "Matches", icon: Heart },
    { id: "quiz", label: "Quiz", icon: Heart },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="w-16 md:w-64 h-full bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Logo */}
      <div className="p-3 md:p-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mr-0 md:mr-3">
            <Heart className="w-5 h-5 text-white" fill="white" />
          </div>
          <h1 className="text-heading-3 text-gray-800 hidden md:block font-bold">Love Connect</h1>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-1 py-4">
        <div className="px-2 md:px-4 mb-4 hidden md:block">
          <h2 className="text-caption text-gray-500">Main Menu</h2>
        </div>

        <nav className="px-1 md:px-2 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            const isHovered = hoveredItem === item.id

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative flex items-center px-2 md:px-4 py-3 text-body font-medium rounded-lg w-full transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                }`}
                title={item.label}
              >
                <Icon className="h-5 w-5 md:mr-3 mx-auto md:mx-0" />
                <span className="hidden md:block">{item.label}</span>

                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                )}
              </button>
            )
          })}
        </nav>
      </div>

      {/* User Profile */}
      <div className="p-2 md:p-4 border-t border-gray-200">
        <div className="flex items-center p-2 md:p-3 bg-gray-50 rounded-lg">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Profile"
            className="w-8 md:w-10 h-8 md:h-10 rounded-full mr-0 md:mr-3"
          />
          <div className="flex-1 min-w-0 hidden md:block">
            <p className="text-body font-semibold text-gray-800 truncate">Jane Doe</p>
            <p className="text-body-small text-gray-500">jane@example.com</p>
          </div>
          <Crown className="w-4 h-4 text-yellow-500 hidden md:block" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
