"use client"

import { useState, useEffect } from "react"
import Sidebar from "../component/dashboard/Sidebar"
import DashboardSection from "../component/dashboard/Dashboard"
import VideoChat from "../component/dashboard/VideoChat"
import TextChat from "../component/dashboard/TextChat"
import SwipeMatch from "../component/dashboard/SwipeMatch"
import UserProfile from "../component/dashboard/UserProfile"
import Settings from "../component/dashboard/Settings"
import LoveQuiz from "../component/LoveQuiz"

function Dashboard() {
  const [activeTab, setActiveTab] = useState("lovehub")
  const [darkMode, setDarkMode] = useState(false) // Changed to light mode by default

  // Simulate loading screen
  useEffect(() => {

  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case "lovehub":
        return <DashboardSection />
      case "video":
        return <VideoChat />
      case "chat":
        return <TextChat />
      case "swipe":
        return <SwipeMatch />
      case "quiz":
        return <LoveQuiz />
      case "profile":
        return <UserProfile />
      case "settings":
        return <Settings toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      default:
        return <DashboardSection />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} darkMode={darkMode} />
      <main className="flex-1 overflow-auto">{renderContent()}</main>
    </div>
  )
}

export default Dashboard
