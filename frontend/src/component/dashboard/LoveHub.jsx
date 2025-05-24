"use client"

import { useState } from "react"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import {
  ArrowUp,
  ArrowDown,
  Users,
  MessageCircle,
  Video,
  Heart,
  Eye,
  TrendingUp,
  Bell,
  Star,
  Sparkles,
  Zap,
} from "lucide-react"

const LoveHub = () => {
  const [timeRange, setTimeRange] = useState("week")

  // Enhanced mock data for charts
  const weeklyData = [
    { name: "Mon", matches: 8, messages: 45, views: 32, videoCalls: 3, likes: 12 },
    { name: "Tue", matches: 12, messages: 38, views: 28, videoCalls: 2, likes: 18 },
    { name: "Wed", matches: 6, messages: 42, views: 35, videoCalls: 4, likes: 15 },
    { name: "Thu", matches: 15, messages: 52, views: 41, videoCalls: 3, likes: 22 },
    { name: "Fri", matches: 9, messages: 35, views: 38, videoCalls: 5, likes: 19 },
    { name: "Sat", matches: 18, messages: 48, views: 45, videoCalls: 6, likes: 28 },
    { name: "Sun", matches: 14, messages: 41, views: 39, videoCalls: 4, likes: 24 },
  ]

  const engagementData = [
    { name: "Likes Sent", value: 52, color: "#ec4899" },
    { name: "Likes Received", value: 38, color: "#8b5cf6" },
    { name: "Super Likes", value: 12, color: "#f59e0b" },
    { name: "Matches", value: 24, color: "#10b981" },
  ]

  const COLORS = ["#ec4899", "#8b5cf6", "#f59e0b", "#10b981"]

  // Enhanced stats cards data
  const stats = [
    {
      id: 1,
      name: "Active Matches",
      stat: "48",
      change: "18%",
      changeType: "increase",
      icon: <Heart className="h-6 w-6" />,
      description: "New matches this week",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      name: "Profile Views",
      stat: "2,847",
      change: "12.4%",
      changeType: "increase",
      icon: <Eye className="h-6 w-6" />,
      description: "People viewed your profile",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 3,
      name: "Video Dates",
      stat: "23",
      change: "8.2%",
      changeType: "increase",
      icon: <Video className="h-6 w-6" />,
      description: "Video calls completed",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      name: "Messages Sent",
      stat: "284",
      change: "15%",
      changeType: "increase",
      icon: <MessageCircle className="h-6 w-6" />,
      description: "Messages exchanged",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  // Enhanced recent activity data
  const recentActivity = [
    {
      id: 1,
      user: "Emma Wilson",
      action: "super liked your photo",
      time: "2 minutes ago",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      type: "superlike",
    },
    {
      id: 2,
      user: "Alex Johnson",
      action: "sent you a message",
      time: "5 minutes ago",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      type: "message",
    },
    {
      id: 3,
      user: "Sofia Rodriguez",
      action: "viewed your profile",
      time: "10 minutes ago",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      type: "view",
    },
    {
      id: 4,
      user: "Michael Chen",
      action: "liked your photo",
      time: "15 minutes ago",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      type: "like",
    },
    {
      id: 5,
      user: "Jessica Taylor",
      action: "started a video chat",
      time: "1 hour ago",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      type: "video",
    },
  ]

  // Enhanced recent messages data
  const recentMessages = [
    {
      id: 1,
      user: "Emma Wilson",
      message: "Hey! How was your weekend? 😊",
      time: "2 min ago",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      unread: true,
      isMatch: true,
    },
    {
      id: 2,
      user: "Alex Johnson",
      message: "That restaurant you recommended was amazing! 🍝",
      time: "1 hour ago",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      unread: true,
      isMatch: true,
    },
    {
      id: 3,
      user: "Sofia Rodriguez",
      message: "Would love to chat more about travel! ✈️",
      time: "3 hours ago",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      unread: false,
      isMatch: true,
    },
  ]

  // Enhanced notifications data
  const notifications = [
    {
      id: 1,
      title: "New Match! 💕",
      message: "You and Emma have liked each other",
      time: "5 min ago",
      type: "match",
      unread: true,
    },
    {
      id: 2,
      title: "Profile Boost Active ⚡",
      message: "Your profile is being boosted for 30 minutes",
      time: "2 hours ago",
      type: "boost",
      unread: true,
    },
    {
      id: 3,
      title: "Weekly Summary 📊",
      message: "You had 18 new matches this week!",
      time: "1 day ago",
      type: "summary",
      unread: false,
    },
  ]

  const getActivityIcon = (type) => {
    switch (type) {
      case "like":
        return <Heart className="h-4 w-4 text-pink-500" />
      case "message":
        return <MessageCircle className="h-4 w-4 text-blue-500" />
      case "view":
        return <Eye className="h-4 w-4 text-gray-500" />
      case "superlike":
        return <Star className="h-4 w-4 text-yellow-500" />
      case "video":
        return <Video className="h-4 w-4 text-purple-500" />
      default:
        return <Users className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
            Love Hub Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Your complete dating analytics and activity overview</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["week", "month", "year"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                timeRange === range
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 border border-gray-200"
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Stats cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-white overflow-hidden shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${item.gradient}`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd>
                      <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4">
              <div className="text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {item.changeType === "increase" ? (
                      <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={`font-medium ${item.changeType === "increase" ? "text-green-600" : "text-red-600"}`}
                    >
                      {item.change}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs">{item.description}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Charts */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Weekly Activity Chart */}
        <div className="bg-white overflow-hidden shadow-xl rounded-2xl border border-gray-100">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Weekly Activity Analytics</h3>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                <span className="text-sm text-gray-500">Live Data</span>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="colorMatches" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="matches"
                    stroke="#ec4899"
                    fillOpacity={1}
                    fill="url(#colorMatches)"
                    name="Matches"
                  />
                  <Area
                    type="monotone"
                    dataKey="messages"
                    stroke="#8b5cf6"
                    fillOpacity={1}
                    fill="url(#colorMessages)"
                    name="Messages"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Enhanced Engagement Distribution */}
        <div className="bg-white overflow-hidden shadow-xl rounded-2xl border border-gray-100">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Engagement Distribution</h3>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-500">+12% this week</span>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={engagementData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {engagementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Activity and Messages */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="bg-white overflow-hidden shadow-xl rounded-2xl border border-gray-100">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
              <Bell className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-100">
                {recentActivity.map((activity) => (
                  <li
                    key={activity.id}
                    className="py-4 hover:bg-gray-50 rounded-lg px-2 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 relative">
                        <img
                          className="h-10 w-10 rounded-full object-cover border-2 border-pink-200"
                          src={activity.image || "/placeholder.svg"}
                          alt=""
                        />
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                          {getActivityIcon(activity.type)}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{activity.user}</p>
                        <p className="text-sm text-gray-500 truncate flex items-center">
                          <span className="ml-1">{activity.action}</span>
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-xs text-gray-400">{activity.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white overflow-hidden shadow-xl rounded-2xl border border-gray-100">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Recent Messages</h3>
              <MessageCircle className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-100">
                {recentMessages.map((message) => (
                  <li key={message.id} className="py-4 hover:bg-gray-50 rounded-lg px-2 transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 relative">
                        <img
                          className="h-10 w-10 rounded-full object-cover border-2 border-purple-200"
                          src={message.image || "/placeholder.svg"}
                          alt=""
                        />
                        {message.unread && (
                          <span className="absolute -top-1 -right-1 block h-3 w-3 rounded-full bg-pink-500 ring-2 ring-white animate-pulse" />
                        )}
                        {message.isMatch && (
                          <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1">
                            <Star className="h-2 w-2 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{message.user}</p>
                        <p className="text-sm text-gray-500 truncate">{message.message}</p>
                      </div>
                      <div className="flex-shrink-0 text-xs text-gray-400">{message.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white overflow-hidden shadow-xl rounded-2xl border border-gray-100">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Notifications</h3>
              <div className="flex items-center space-x-2">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">2 new</span>
              </div>
            </div>
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-100">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className="py-4 hover:bg-gray-50 rounded-lg px-2 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`p-2 rounded-full ${
                            notification.type === "match"
                              ? "bg-pink-100"
                              : notification.type === "boost"
                                ? "bg-purple-100"
                                : "bg-blue-100"
                          }`}
                        >
                          {notification.type === "match" ? (
                            <Heart className="h-4 w-4 text-pink-600" />
                          ) : notification.type === "boost" ? (
                            <Zap className="h-4 w-4 text-purple-600" />
                          ) : (
                            <TrendingUp className="h-4 w-4 text-blue-600" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                          {notification.unread && (
                            <span className="block h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoveHub
