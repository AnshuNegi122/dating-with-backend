"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Heart,
  Video,
  MessageCircle,
  Users,
  User,
  Settings,
  Crown,
  Menu,
  X,
  Search,
  Bell,
  HelpCircle,
} from "lucide-react"
import LoveHub from "./LoveHub"
import VideoChat from "./VideoChat"
import Messages from "./Messages"
import Matches from "./Matches"
import Quiz from "./Quiz"
import Profile from "./UserProfile"
import SettingsPage from "./Settings"
import Premium from "./Premium"

const DashboardSection = () => {
  const [activeTab, setActiveTab] = useState("love-hub")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tabs = [
    { id: "love-hub", label: "Love Hub", icon: <Heart className="w-5 h-5" />, color: "text-pink-500" },
    { id: "video-chat", label: "Video Chat", icon: <Video className="w-5 h-5" />, color: "text-purple-500" },
    { id: "messages", label: "Messages", icon: <MessageCircle className="w-5 h-5" />, color: "text-blue-500" },
    { id: "matches", label: "Matches", icon: <Users className="w-5 h-5" />, color: "text-green-500" },
    { id: "quiz", label: "Quiz", icon: <HelpCircle className="w-5 h-5" />, color: "text-indigo-500" },
    { id: "profile", label: "Profile", icon: <User className="w-5 h-5" />, color: "text-gray-500" },
    { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" />, color: "text-gray-500" },
    { id: "subscription", label: "Premium", icon: <Crown className="w-5 h-5" />, color: "text-yellow-500" },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "love-hub":
        return <LoveHub />
      case "video-chat":
        return <VideoChat />
      case "messages":
        return <Messages />
      case "matches":
        return <Matches />
      case "quiz":
        return <Quiz />
      case "profile":
        return <Profile />
      case "settings":
        return <SettingsPage />
      case "subscription":
        return <Premium />
      default:
        return <LoveHub />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center">
                  <Heart className="h-8 w-8 text-pink-500" />
                  <span className="ml-2 text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                    LoveConnect
                  </span>
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white/50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  placeholder="Search"
                />
              </div>
              <button className="relative p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveTab(tab.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`${
                    activeTab === tab.id
                      ? "bg-pink-50 border-pink-500 text-pink-700"
                      : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                >
                  <div className="flex items-center">
                    <span className={`mr-3 ${tab.color}`}>{tab.icon}</span>
                    {tab.label}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 bg-white/80 backdrop-blur-md border-r border-gray-200">
            <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="mt-5 flex-1 px-2 space-y-2">
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
                        ? "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-r-2 border-pink-500"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    } group flex items-center px-3 py-3 text-sm font-medium rounded-l-lg transition-all duration-200`}
                  >
                    <div
                      className={`${activeTab === tab.id ? tab.color : "text-gray-400 group-hover:text-gray-500"} mr-3`}
                    >
                      {tab.icon}
                    </div>
                    {tab.label}
                    {tab.id === "subscription" && <Crown className="ml-auto h-4 w-4 text-yellow-500" />}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 rounded-full object-cover"
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
                <div className="flex space-x-2 pb-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                          : "text-gray-500 hover:text-gray-700 bg-white"
                      } flex items-center px-4 py-2 text-sm font-medium rounded-full border whitespace-nowrap transition-all duration-200`}
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
