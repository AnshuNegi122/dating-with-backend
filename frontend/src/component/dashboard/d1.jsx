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
  Sparkles,
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
    {
      id: "love-hub",
      label: "Love Hub",
      icon: <Heart className="w-5 h-5" />,
      color: "text-pink-500",
      bgColor: "from-pink-500 to-rose-500",
    },
    {
      id: "video-chat",
      label: "Video Chat",
      icon: <Video className="w-5 h-5" />,
      color: "text-purple-500",
      bgColor: "from-purple-500 to-indigo-500",
    },
    {
      id: "messages",
      label: "Messages",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "from-blue-500 to-cyan-500",
    },
    {
      id: "matches",
      label: "Matches",
      icon: <Users className="w-5 h-5" />,
      color: "text-green-500",
      bgColor: "from-green-500 to-emerald-500",
    },
    {
      id: "quiz",
      label: "Quiz",
      icon: <HelpCircle className="w-5 h-5" />,
      color: "text-indigo-500",
      bgColor: "from-indigo-500 to-purple-500",
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User className="w-5 h-5" />,
      color: "text-gray-500",
      bgColor: "from-gray-500 to-slate-500",
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="w-5 h-5" />,
      color: "text-gray-500",
      bgColor: "from-gray-500 to-slate-500",
    },
    {
      id: "subscription",
      label: "Premium",
      icon: <Crown className="w-5 h-5" />,
      color: "text-yellow-500",
      bgColor: "from-yellow-500 to-orange-500",
    },
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

  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  return (
    <div className="h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex flex-col overflow-hidden">
      {/* Fixed Top Navigation */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg z-50 flex-shrink-0">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center group">
                  <div className="relative">
                    <Heart className="h-8 w-8 text-pink-500 group-hover:scale-110 transition-transform duration-200" />
                    <div className="absolute inset-0 bg-pink-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-200"></div>
                  </div>
                  <span className="ml-3 text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
                    LoveConnect
                  </span>
                </Link>
              </div>
            </div>

            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-80 pl-12 pr-4 py-3 border border-gray-200 rounded-2xl leading-5 bg-white/70 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:bg-white transition-all duration-200 text-sm"
                  placeholder="Search for matches, messages..."
                />
              </div>

              <button className="relative p-3 rounded-2xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 block h-3 w-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 border-2 border-white"></span>
              </button>

              <div className="ml-3 relative">
                <button className="bg-white rounded-2xl p-1 flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 shadow-lg hover:shadow-xl transition-all duration-200">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-10 w-10 rounded-xl object-cover"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                  />
                </button>
              </div>
            </div>

            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition-all duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl">
            <div className="pt-2 pb-3 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-pink-50 to-purple-50 border-pink-500 text-pink-700"
                      : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  } w-full text-left pl-4 pr-4 py-3 border-l-4 text-base font-medium transition-all duration-200`}
                >
                  <div className="flex items-center">
                    <span className={`mr-3 ${activeTab === tab.id ? tab.color : "text-gray-400"}`}>{tab.icon}</span>
                    {tab.label}
                    {tab.id === "subscription" && <Crown className="ml-auto h-4 w-4 text-yellow-500" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Fixed Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-72 bg-white/90 backdrop-blur-xl border-r border-gray-200/50 shadow-xl">
            {/* Sidebar Header */}
            <div className="flex-shrink-0 px-6 py-6 border-b border-gray-200/50">
              <div className="flex items-center">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${activeTabData?.bgColor} shadow-lg`}>
                  <span className="text-white">{activeTabData?.icon}</span>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-bold text-gray-800">{activeTabData?.label}</h2>
                  <p className="text-sm text-gray-500">Navigate your journey</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 flex flex-col pt-6 pb-4 overflow-y-auto">
              <nav className="mt-2 flex-1 px-4 space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.bgColor} text-white shadow-lg transform scale-105`
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md"
                    } group flex items-center w-full px-4 py-4 text-sm font-semibold rounded-2xl transition-all duration-300 ease-out`}
                  >
                    <div
                      className={`${activeTab === tab.id ? "text-white" : `${tab.color} group-hover:scale-110`} mr-4 transition-transform duration-200`}
                    >
                      {tab.icon}
                    </div>
                    <span className="flex-1 text-left">{tab.label}</span>
                    {tab.id === "subscription" && (
                      <Crown className={`ml-2 h-4 w-4 ${activeTab === tab.id ? "text-white" : "text-yellow-500"}`} />
                    )}
                    {activeTab === tab.id && <Sparkles className="ml-2 h-4 w-4 text-white animate-pulse" />}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content Area - Scrollable */}
        <main className="flex-1 relative overflow-hidden bg-gradient-to-br from-gray-50/50 to-white/50">
          {/* Mobile tab navigation */}
          <div className="md:hidden bg-white/90 backdrop-blur-xl border-b border-gray-200/50 px-4 py-3 flex-shrink-0">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.bgColor} text-white shadow-lg`
                      : "text-gray-500 hover:text-gray-700 bg-white border border-gray-200"
                  } flex items-center px-4 py-3 text-sm font-semibold rounded-2xl whitespace-nowrap transition-all duration-200 flex-shrink-0`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                  {tab.id === "subscription" && (
                    <Crown className={`ml-2 h-4 w-4 ${activeTab === tab.id ? "text-white" : "text-yellow-500"}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Content Container */}
          <div className="h-full overflow-y-auto">
            <div className="min-h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
                {/* Content Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{activeTabData?.label}</h1>
                      <p className="text-lg text-gray-600">
                        {activeTab === "love-hub" && "Discover your perfect match"}
                        {activeTab === "video-chat" && "Connect face-to-face with your matches"}
                        {activeTab === "messages" && "Stay connected with your conversations"}
                        {activeTab === "matches" && "See who's interested in you"}
                        {activeTab === "quiz" && "Find compatibility through fun quizzes"}
                        {activeTab === "profile" && "Manage your dating profile"}
                        {activeTab === "settings" && "Customize your experience"}
                        {activeTab === "subscription" && "Unlock premium features"}
                      </p>
                    </div>
                    <div
                      className={`hidden md:flex p-4 rounded-2xl bg-gradient-to-r ${activeTabData?.bgColor} shadow-lg`}
                    >
                      <span className="text-white text-2xl">{activeTabData?.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Tab Content */}
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden">
                  <div className="p-6 md:p-8">{renderTabContent()}</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardSection
