import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts"
import { ArrowUp, ArrowDown, Users, MessageCircle, Video, Clock, Calendar } from 'lucide-react'

const Overview = () => {
  const [timeRange, setTimeRange] = useState("week")

  // Mock data for charts
  const activityData = [
    { name: "Mon", messages: 40, calls: 24, matches: 5 },
    { name: "Tue", messages: 30, calls: 13, matches: 7 },
    { name: "Wed", messages: 20, calls: 18, matches: 3 },
    { name: "Thu", messages: 27, calls: 28, matches: 6 },
    { name: "Fri", messages: 18, calls: 24, matches: 4 },
    { name: "Sat", messages: 23, calls: 30, matches: 9 },
    { name: "Sun", messages: 34, calls: 26, matches: 8 },
  ]

  const userTypeData = [
    { name: "New Users", value: 400 },
    { name: "Returning", value: 300 },
    { name: "Premium", value: 200 },
    { name: "Inactive", value: 100 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  const engagementData = [
    { name: "Jan", engagement: 4000 },
    { name: "Feb", engagement: 3000 },
    { name: "Mar", engagement: 2000 },
    { name: "Apr", engagement: 2780 },
    { name: "May", engagement: 1890 },
    { name: "Jun", engagement: 2390 },
    { name: "Jul", engagement: 3490 },
  ]

  const timeSpentData = [
    { name: "Mon", chat: 40, video: 24, quiz: 10 },
    { name: "Tue", chat: 30, video: 13, quiz: 15 },
    { name: "Wed", chat: 20, video: 18, quiz: 8 },
    { name: "Thu", chat: 27, video: 28, quiz: 12 },
    { name: "Fri", chat: 18, video: 24, quiz: 9 },
    { name: "Sat", chat: 23, video: 30, quiz: 18 },
    { name: "Sun", chat: 34, video: 26, quiz: 20 },
  ]

  // Stats cards data
  const stats = [
    {
      id: 1,
      name: "Total Users",
      stat: "12,492",
      change: "12%",
      changeType: "increase",
      icon: <Users className="h-6 w-6 text-pink-600" />,
    },
    {
      id: 2,
      name: "Active Chats",
      stat: "2,340",
      change: "5.4%",
      changeType: "increase",
      icon: <MessageCircle className="h-6 w-6 text-indigo-600" />,
    },
    {
      id: 3,
      name: "Video Calls",
      stat: "854",
      change: "3.2%",
      changeType: "decrease",
      icon: <Video className="h-6 w-6 text-purple-600" />,
    },
    {
      id: 4,
      name: "Avg. Session",
      stat: "24m 13s",
      change: "7%",
      changeType: "increase",
      icon: <Clock className="h-6 w-6 text-green-600" />,
    },
  ]

  // Recent activity data
  const recentActivity = [
    {
      id: 1,
      user: "Alex Johnson",
      action: "started a video chat",
      time: "5 minutes ago",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
    {
      id: 2,
      user: "Emily Davis",
      action: "joined Love Group #42",
      time: "10 minutes ago",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
    {
      id: 3,
      user: "Michael Smith",
      action: "completed the compatibility quiz",
      time: "25 minutes ago",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
    {
      id: 4,
      user: "Jessica Wilson",
      action: "sent 5 new messages",
      time: "1 hour ago",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
    {
      id: 5,
      user: "David Brown",
      action: "updated their profile",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
  ]

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Speed Dating Event",
      date: "Tomorrow, 7:00 PM",
      participants: 24,
    },
    {
      id: 2,
      title: "Relationship Workshop",
      date: "May 25, 2:00 PM",
      participants: 18,
    },
    {
      id: 3,
      title: "Singles Mixer",
      date: "May 28, 8:00 PM",
      participants: 42,
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setTimeRange("week")}
            className={`px-3 py-1 text-sm font-medium rounded-md ${
              timeRange === "week"
                ? "bg-pink-100 text-pink-700"
                : "bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setTimeRange("month")}
            className={`px-3 py-1 text-sm font-medium rounded-md ${
              timeRange === "month"
                ? "bg-pink-100 text-pink-700"
                : "bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setTimeRange("year")}
            className={`px-3 py-1 text-sm font-medium rounded-md ${
              timeRange === "year"
                ? "bg-pink-100 text-pink-700"
                : "bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            }`}
          >
            Year
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((item) => (
          <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{item.stat}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <div className="flex items-center">
                  {item.changeType === "increase" ? (
                    <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span
                    className={`font-medium ${
                      item.changeType === "increase" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.change}
                  </span>
                  <span className="text-gray-500 ml-1">from previous period</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mb-8">
        {/* Activity Chart */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">User Activity</h3>
            <div className="mt-2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={activityData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="messages" fill="#8884d8" />
                  <Bar dataKey="calls" fill="#82ca9d" />
                  <Bar dataKey="matches" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* User Type Chart */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">User Distribution</h3>
            <div className="mt-2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={userTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {userTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Engagement Chart */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">User Engagement</h3>
            <div className="mt-2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={engagementData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="engagement" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Time Spent Chart */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Time Spent (minutes)</h3>
            <div className="mt-2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={timeSpentData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="chat" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="video" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="quiz" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity and Upcoming Events */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="bg-white overflow-hidden shadow rounded-lg lg:col-span-2">
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {recentActivity.map((activity) => (
                  <li key={activity.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img className="h-8 w-8 rounded-full" src={activity.image || "/placeholder.svg"} alt="" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{activity.user}</p>
                        <p className="text-sm text-gray-500 truncate">{activity.action}</p>
                      </div>
                      <div className="flex-shrink-0 text-sm text-gray-500">{activity.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View all
              </a>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Upcoming Events</h3>
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {upcomingEvents.map((event) => (
                  <li key={event.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Calendar className="h-6 w-6 text-pink-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{event.title}</p>
                        <p className="text-sm text-gray-500 truncate">{event.date}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {event.participants} participants
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
