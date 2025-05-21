import { useState } from "react"
import { Link } from "react-router-dom"
import { Home, User, MessageCircle, Users, Video, Bell, Settings, LogOut, Menu, X, Search, Heart } from 'lucide-react'
import Overview from "./dashboard/Overview"
import Profile from "./dashboard/Profile"
import Chats from "./dashboard/Chats"
import GroupChat from "./dashboard/GroupChat"
import VideoChat from "./dashboard/VideoChat"
import Header from "./Header"

const DashboardSection = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tabs = [
    { id: "overview", label: "Overview", icon: <Home className="w-5 h-5" /> },
    { id: "profile", label: "Profile", icon: <User className="w-5 h-5" /> },
    { id: "chats", label: "Chats", icon: <MessageCircle className="w-5 h-5" /> },
    { id: "group-chat", label: "Group Chat", icon: <Users className="w-5 h-5" /> },
    { id: "video-chat", label: "Video Chat", icon: <Video className="w-5 h-5" /> },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />
      case "profile":
        return <Profile />
      case "chats":
        return <Chats />
      case "group-chat":
        return <GroupChat />
      case "video-chat":
        return <VideoChat />
      default:
        return <Overview />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navigation */}
      <Header />

      <div className="flex-1 flex overflow-hidden mt-16">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
            <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {tabs.map((tab) => (
                  <a
                    key={tab.id}
                    href={`#${tab.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveTab(tab.id)
                    }}
                    className={`${
                      activeTab === tab.id
                        ? "bg-pink-50 text-pink-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <div
                      className={`${
                        activeTab === tab.id ? "text-pink-500" : "text-gray-400 group-hover:text-gray-500"
                      } mr-3`}
                    >
                      {tab.icon}
                    </div>
                    {tab.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">Sarah Johnson</p>
                    <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Mobile tab navigation */}
              <div className="md:hidden mb-6 overflow-x-auto">
                <div className="flex space-x-4 pb-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`${
                        activeTab === tab.id
                          ? "bg-pink-100 text-pink-700 border-pink-500"
                          : "text-gray-500 hover:text-gray-700 border-transparent"
                      } flex items-center px-3 py-2 text-sm font-medium rounded-md border-b-2 whitespace-nowrap`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab content */}
              {renderTabContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardSection
