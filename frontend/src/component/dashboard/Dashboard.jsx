"use client"

import { useState, useEffect } from "react"
import {
  Users,
  Video,
  MessageSquare,
  Heart,
  Award,
  Sparkles,
  Gift,
  Calendar,
  Star,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Info,
} from "lucide-react"
import Header from "../Header"

const DashboardSection = () => {
  const [animateStats, setAnimateStats] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [activeChart, setActiveChart] = useState("matches")
  const [hoveredBar, setHoveredBar] = useState(null)

  useEffect(() => {
    // Trigger stats animation
    setAnimateStats(true)

    // Show notification after 2 seconds
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 2000)

    // Hide notification after 5 seconds
    const hideTimer = setTimeout(() => {
      setShowNotification(false)
    }, 7000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  const stats = [
    {
      id: 1,
      name: "Active Matches",
      value: "24",
      icon: Heart,
      color: "bg-gradient-to-br from-pink-500 to-rose-600 text-white",
      change: "+12%",
      trend: "up",
      description: "New matches this week",
    },
    {
      id: 2,
      name: "Profile Views",
      value: "1,423",
      icon: Users,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white",
      change: "+8%",
      trend: "up",
      description: "Total profile visits",
    },
    {
      id: 3,
      name: "Video Dates",
      value: "48",
      icon: Video,
      color: "bg-gradient-to-br from-purple-500 to-violet-600 text-white",
      change: "+15%",
      trend: "up",
      description: "Successful video calls",
    },
    {
      id: 4,
      name: "Messages Sent",
      value: "156",
      icon: MessageSquare,
      color: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white",
      change: "+23%",
      trend: "up",
      description: "Messages exchanged",
    },
  ]

  const recentMatches = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActive: "2 min ago",
      compatibility: "95%",
      status: "online",
      verified: true,
    },
    {
      id: 2,
      name: "Jamie Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActive: "15 min ago",
      compatibility: "88%",
      status: "away",
      verified: true,
    },
    {
      id: 3,
      name: "Taylor Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActive: "1 hour ago",
      compatibility: "92%",
      status: "online",
      verified: false,
    },
  ]

  const upcomingEvents = [
    { id: 1, title: "Coffee Date with Jamie", time: "Tomorrow, 3:00 PM", type: "In Person", priority: "high" },
    { id: 2, title: "Virtual Movie Night with Alex", time: "Friday, 8:00 PM", type: "Video Date", priority: "medium" },
    { id: 3, title: "Lunch Meeting with Taylor", time: "Sunday, 1:00 PM", type: "In Person", priority: "low" },
  ]

  const activityData = [
    { day: "Mon", matches: 4, messages: 12, views: 45, videoChats: 2 },
    { day: "Tue", matches: 6, messages: 18, views: 52, videoChats: 3 },
    { day: "Wed", matches: 3, messages: 8, views: 38, videoChats: 1 },
    { day: "Thu", matches: 8, messages: 25, views: 67, videoChats: 4 },
    { day: "Fri", matches: 5, messages: 15, views: 43, videoChats: 2 },
    { day: "Sat", matches: 7, messages: 22, views: 58, videoChats: 3 },
    { day: "Sun", matches: 4, messages: 10, views: 35, videoChats: 1 },
  ]

  const chartOptions = [
    { id: "matches", label: "Matches", color: "from-pink-500 to-rose-500" },
    { id: "messages", label: "Messages", color: "from-blue-500 to-indigo-500" },
    { id: "views", label: "Views", color: "from-purple-500 to-violet-500" },
    { id: "videoChats", label: "Video Chats", color: "from-emerald-500 to-teal-500" },
  ]

  const getMaxValue = () => {
    const values = activityData.map((data) => data[activeChart])
    return Math.max(...values)
  }

  const getBarHeight = (value) => {
    const maxValue = getMaxValue()
    return (value / maxValue) * 100
  }

  return (
    <div className="p-4 mt-16 md:p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <Header />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`${stat.color} rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 transform ${
              animateStats ? "animate-fade-in-up" : ""
            } group cursor-pointer`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-full shadow-inner">
                <stat.icon
                  className={`h-5 w-5 md:h-6 md:w-6 text-white ${animateStats ? "animate-bounce" : ""} group-hover:scale-110 transition-transform duration-300`}
                  style={{ animationDelay: `${index * 200}ms`, animationDuration: "1s" }}
                />
              </div>
              <div className="flex items-center text-white/90 text-body-small font-semibold">
                {stat.trend === "up" ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <div>
              <p className="text-body-small text-white/80 mb-1 font-medium">{stat.name}</p>
              <p className="text-heading-2 text-white font-bold mb-1">{stat.value}</p>
              <p className="text-body-small text-white/70">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Professional Activity Chart */}
        <div className="lg:col-span-2 card">
          <div className="card-header">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <BarChart3 className="h-5 w-5 mr-2 text-pink-500" />
                <div>
                  <h2 className="text-heading-3 text-gray-800">Weekly Activity Analytics</h2>
                  <p className="text-body-small text-gray-500">Track your engagement patterns</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Info className="h-4 w-4 text-gray-400" />
                <span className="text-body-small text-gray-500">Hover bars for details</span>
              </div>
            </div>

            {/* Chart Type Selector */}
            <div className="flex flex-wrap gap-2 mt-4">
              {chartOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveChart(option.id)}
                  className={`px-3 py-1.5 text-body-small rounded-full font-medium transition-all duration-200 ${
                    activeChart === option.id
                      ? `bg-gradient-to-r ${option.color} text-white shadow-md`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="card-content">
            {/* Professional Bar Chart */}
            <div className="relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-64 flex flex-col justify-between text-body-small text-gray-500 pr-2">
                <span>{getMaxValue()}</span>
                <span>{Math.round(getMaxValue() * 0.75)}</span>
                <span>{Math.round(getMaxValue() * 0.5)}</span>
                <span>{Math.round(getMaxValue() * 0.25)}</span>
                <span>0</span>
              </div>

              {/* Chart area */}
              <div className="ml-8 relative">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-t border-gray-200"></div>
                  ))}
                </div>

                {/* Bars */}
                <div className="h-64 flex items-end justify-between space-x-2 relative z-10">
                  {activityData.map((data, index) => {
                    const currentOption = chartOptions.find((opt) => opt.id === activeChart)
                    const value = data[activeChart]
                    const height = getBarHeight(value)

                    return (
                      <div key={data.day} className="flex-1 flex flex-col items-center relative">
                        {/* Tooltip */}
                        {hoveredBar === index && (
                          <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-body-small px-2 py-1 rounded shadow-lg z-20">
                            <div className="text-center">
                              <div className="font-semibold">{data.day}</div>
                              <div>
                                {currentOption?.label}: {value}
                              </div>
                            </div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                          </div>
                        )}

                        {/* Bar */}
                        <div
                          className="w-full bg-gray-100 rounded-t-lg relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md"
                          style={{ height: "200px" }}
                          onMouseEnter={() => setHoveredBar(index)}
                          onMouseLeave={() => setHoveredBar(null)}
                        >
                          <div
                            className={`absolute bottom-0 w-full bg-gradient-to-t ${currentOption?.color} rounded-t-lg transition-all duration-1000 ${
                              hoveredBar === index ? "opacity-90" : "opacity-100"
                            }`}
                            style={{
                              height: `${height}%`,
                              animationDelay: `${index * 100}ms`,
                            }}
                          ></div>

                          {/* Value label on hover */}
                          {hoveredBar === index && (
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-body-small font-bold">
                              {value}
                            </div>
                          )}
                        </div>

                        {/* Day label */}
                        <span className="text-body-small text-gray-600 mt-2 font-medium">{data.day}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* X-axis line */}
              <div className="ml-8 border-t border-gray-300 mt-2"></div>
            </div>

            {/* Chart Legend */}
            <div className="mt-4 flex items-center justify-center">
              <div className="flex items-center space-x-4 text-body-small text-gray-600">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded bg-gradient-to-r ${chartOptions.find((opt) => opt.id === activeChart)?.color} mr-2`}
                  ></div>
                  <span>Weekly {chartOptions.find((opt) => opt.id === activeChart)?.label}</span>
                </div>
                <div className="text-gray-400">•</div>
                <div>Total: {activityData.reduce((sum, data) => sum + data[activeChart], 0)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Matches */}
        <div className="card">
          <div className="card-header">
            <h2 className="text-heading-3 text-gray-800 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-pink-500" />
              Recent Matches
            </h2>
            <p className="text-body-small text-gray-500 mt-1">Your latest connections</p>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              {recentMatches.map((match) => (
                <div
                  key={match.id}
                  className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={match.avatar || "/placeholder.svg"}
                      alt={match.name}
                      className="h-12 w-12 rounded-full mr-3 border-2 border-gray-200 group-hover:border-pink-300 transition-all duration-300"
                    />
                    <div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        match.status === "online" ? "bg-green-500" : "bg-yellow-500"
                      }`}
                    ></div>
                    <div className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-body-small rounded-full px-1.5 py-0.5 flex items-center font-medium">
                      <Star className="h-3 w-3 mr-0.5 text-yellow-300" fill="currentColor" />
                      <span>{match.compatibility}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="text-body font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                        {match.name}
                      </h3>
                      {match.verified && (
                        <div className="ml-1 bg-blue-500 rounded-full p-0.5">
                          <Star className="h-2 w-2 text-white" fill="currentColor" />
                        </div>
                      )}
                    </div>
                    <p className="text-body-small text-gray-500">{match.lastActive}</p>
                  </div>
                  <div className="flex space-x-1">
                    <button className="text-pink-500 hover:text-pink-700 p-1.5 hover:bg-pink-50 rounded-full transition-colors duration-300">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                    <button className="text-pink-500 hover:text-pink-700 p-1.5 hover:bg-pink-50 rounded-full transition-colors duration-300">
                      <Video className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
              <button className="w-full py-3 text-body-small text-white font-semibold bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                View All Matches
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="card">
          <div className="card-header">
            <h2 className="text-heading-3 text-gray-800 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-pink-500" />
              Upcoming Events
            </h2>
            <p className="text-body-small text-gray-500 mt-1">Your scheduled dates</p>
          </div>
          <div className="card-content">
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start p-3 border border-gray-100 rounded-lg hover:border-pink-200 hover:shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`w-3 h-3 rounded-full mt-2 mr-3 ${
                      event.priority === "high"
                        ? "bg-red-500"
                        : event.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <h3 className="text-body font-semibold text-gray-800">{event.title}</h3>
                    <p className="text-body-small text-gray-500 mt-1">{event.time}</p>
                    <span className="inline-block mt-2 text-body-small px-2 py-0.5 bg-pink-100 text-pink-600 rounded-full font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
              <button className="w-full py-2 text-body-small bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-300 font-medium">
                View Full Calendar
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <div className="card-header">
            <h2 className="text-heading-3 text-gray-800 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-pink-500" />
              Quick Actions
            </h2>
            <p className="text-body-small text-gray-500 mt-1">Start connecting now</p>
          </div>
          <div className="card-content">
            <div className="space-y-3">
              <button className="w-full p-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600 transition-colors duration-300 flex items-center justify-center font-semibold shadow-md hover:shadow-lg">
                <Heart className="h-4 w-4 mr-2" />
                Start Matching
              </button>
              <button className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center font-semibold shadow-md hover:shadow-lg">
                <Video className="h-4 w-4 mr-2" />
                Video Chat
              </button>
              <button className="w-full p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center font-semibold shadow-md hover:shadow-lg">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Message
              </button>
              <button className="w-full p-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center font-semibold shadow-md hover:shadow-lg">
                <Gift className="h-4 w-4 mr-2" />
                Send Gift
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSection
