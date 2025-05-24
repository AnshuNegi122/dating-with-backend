import { useState } from "react"
import { Camera, Edit2, MapPin, Calendar, Briefcase, Book, Save, Heart, Star, MessageSquare, Video, Gift, Shield, Users, TrendingUp, Eye, Globe, Instagram, Twitter, Award, Target, Zap, CheckCircle, Plus, Download, Share2, MoreHorizontal, Phone, Verified, Sparkles, Crown, Flame } from 'lucide-react'

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("about")

  const user = {
    name: "Jamie Smith",
    username: "@jamiesmith",
    location: "Los Angeles, CA",
    age: 28,
    bio: "Passionate about life, love, and meaningful connections. I believe in authentic relationships built on trust, communication, and shared values. Looking for someone who appreciates both quiet moments and grand adventures.",
    joinDate: "January 2023",
    occupation: "Creative Director",
    company: "Design Studio Inc.",
    education: "Art Institute of Los Angeles",
    interests: ["Photography", "Travel", "Cooking", "Hiking", "Art", "Music", "Reading", "Yoga"],
    lookingFor: "Long-term relationship, marriage-minded",
    relationshipGoals: ["Marriage", "Family", "Travel Together", "Build a Home"],
    values: ["Honesty", "Loyalty", "Adventure", "Growth", "Kindness"],
    languages: ["English (Native)", "Spanish (Conversational)", "French (Basic)"],
    achievements: [
      {
        title: "Top 1% Profile Views",
        description: "Your profile is in the top 1% most viewed",
        icon: Eye,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
      },
      {
        title: "Conversation Starter",
        description: "Great at starting meaningful conversations",
        icon: MessageSquare,
        color: "text-green-500",
        bgColor: "bg-green-50",
      },
      {
        title: "Verified Profile",
        description: "All information verified and authentic",
        icon: Shield,
        color: "text-purple-500",
        bgColor: "bg-purple-50",
      },
      {
        title: "Super Connector",
        description: "Excellent at building connections",
        icon: Users,
        color: "text-pink-500",
        bgColor: "bg-pink-50",
      },
    ],
    skills: [
      { name: "Communication", level: 95, endorsements: 24 },
      { name: "Empathy", level: 88, endorsements: 18 },
      { name: "Humor", level: 92, endorsements: 31 },
      { name: "Adventure", level: 85, endorsements: 15 },
      { name: "Creativity", level: 90, endorsements: 22 },
      { name: "Reliability", level: 94, endorsements: 28 },
    ],
    lifestyle: {
      smoking: "Never",
      drinking: "Socially",
      exercise: "Regularly",
      diet: "Vegetarian",
      pets: "Dog Lover",
      kids: "Want Kids",
    },
    socialMedia: {
      instagram: "@jamie.creates",
      twitter: "@jamiesmith",
      website: "jamiesmith.design",
    },
    stats: {
      matches: 24,
      chats: 156,
      videoChats: 48,
      profileViews: 1247,
      likes: 89,
      superLikes: 12,
      responseRate: 94,
      avgResponseTime: "2 hours",
    },
    photos: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    verifications: {
      email: true,
      phone: true,
      photo: true,
      identity: true,
      background: true,
    },
    testimonials: [
      {
        id: 1,
        name: "Alex M.",
        text: "Jamie is an amazing conversationalist and has such a positive energy. Highly recommend!",
        rating: 5,
        date: "2 weeks ago",
      },
      {
        id: 2,
        name: "Sarah K.",
        text: "One of the most genuine people I've met on this platform. Great sense of humor!",
        rating: 5,
        date: "1 month ago",
      },
    ],
  }

  const tabs = [
    { id: "about", label: "About", icon: Users },
    { id: "photos", label: "Photos", icon: Camera },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "lifestyle", label: "Lifestyle", icon: Heart },
    { id: "stats", label: "Analytics", icon: TrendingUp },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="space-y-8">
            {/* Professional Summary */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Summary</h3>
                    <p className="text-gray-600">Tell the world about yourself</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg">
                      <Crown className="h-3 w-3 mr-1" />
                      Premium
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                {isEditing ? (
                  <textarea
                    defaultValue={user.bio}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                    placeholder="Tell others about yourself..."
                  />
                ) : (
                  <p className="text-gray-700 leading-relaxed text-lg">{user.bio}</p>
                )}
              </div>
            </div>


            {/* Basic Info */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Information</h3>
                <p className="text-gray-600">Career and education details</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Current Position</label>
                    {isEditing ? (
                      <input type="text" defaultValue={user.occupation} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                    ) : (
                      <div className="flex items-center text-lg text-gray-700 bg-gray-50 p-4 rounded-xl">
                        <Briefcase className="h-5 w-5 mr-3 text-pink-500" />
                        <span>
                          {user.occupation} at {user.company}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Education</label>
                    {isEditing ? (
                      <input type="text" defaultValue={user.education} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                    ) : (
                      <div className="flex items-center text-lg text-gray-700 bg-gray-50 p-4 rounded-xl">
                        <Book className="h-5 w-5 mr-3 text-pink-500" />
                        <span>{user.education}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Location</label>
                    {isEditing ? (
                      <input type="text" defaultValue={user.location} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                    ) : (
                      <div className="flex items-center text-lg text-gray-700 bg-gray-50 p-4 rounded-xl">
                        <MapPin className="h-5 w-5 mr-3 text-pink-500" />
                        <span>{user.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Member Since</label>
                    <div className="flex items-center text-lg text-gray-700 bg-gray-50 p-4 rounded-xl">
                      <Calendar className="h-5 w-5 mr-3 text-pink-500" />
                      <span>{user.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Interests & Passions</h3>
                <p className="text-gray-600">What makes you unique</p>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3">
                  {user.interests.map((interest, index) => (
                    <span key={index} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full font-medium border border-pink-200 hover:shadow-md transition-all duration-200">
                      <Sparkles className="h-4 w-4 mr-2" />
                      {interest}
                    </span>
                  ))}
                  {isEditing && (
                    <button className="inline-flex items-center px-4 py-2 border-2 border-dashed border-pink-300 text-pink-500 rounded-full hover:bg-pink-50 transition-all duration-200 font-medium">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Interest
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Languages</h3>
                <p className="text-gray-600">Communication skills</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {user.languages.map((language, index) => (
                    <div key={index} className="flex items-center text-lg text-gray-700 bg-gray-50 p-4 rounded-xl">
                      <Globe className="h-5 w-5 mr-3 text-pink-500" />
                      <span>{language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Relationship Goals */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Relationship Goals</h3>
                <p className="text-gray-600">What you're looking for</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 block">Looking For</label>
                  {isEditing ? (
                    <input type="text" defaultValue={user.lookingFor} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                  ) : (
                    <p className="text-lg text-gray-700 bg-gray-50 p-4 rounded-xl">{user.lookingFor}</p>
                  )}
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 block">Goals</label>
                    <div className="flex flex-wrap gap-3">
                      {user.relationshipGoals.map((goal, index) => (
                        <span key={index} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full font-medium border border-blue-200">
                          <Target className="h-4 w-4 mr-2" />
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 block">Core Values</label>
                    <div className="flex flex-wrap gap-3">
                      {user.values.map((value, index) => (
                        <span key={index} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full font-medium border border-green-200">
                          <Heart className="h-4 w-4 mr-2" />
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )

      case "photos":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Photo Gallery</h3>
                    <p className="text-gray-600">Showcase your personality with up to 6 photos</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                    <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {user.photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={photo || "/placeholder.svg"}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-56 object-cover rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                      />
                      {isEditing && (
                        <div className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="flex space-x-3">
                            <button className="p-3 bg-white rounded-full text-gray-700 hover:text-pink-600 transition-colors shadow-lg">
                              <Camera className="h-5 w-5" />
                            </button>
                            <button className="p-3 bg-white rounded-full text-gray-700 hover:text-red-600 transition-colors shadow-lg">
                              <MoreHorizontal className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      )}
                      {index === 0 && (
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg">
                            <Crown className="h-3 w-3 mr-1" />
                            Main Photo
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white backdrop-blur-sm">
                          {index === 0 ? "Profile" : `Photo ${index + 1}`}
                        </span>
                      </div>
                    </div>
                  ))}
                  {isEditing && user.photos.length < 6 && (
                    <div className="w-full h-56 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center hover:border-pink-400 transition-all duration-300 cursor-pointer group bg-gradient-to-br from-gray-50 to-pink-50">
                      <div className="text-center">
                        <Camera className="h-10 w-10 text-gray-400 group-hover:text-pink-500 mx-auto mb-3 transition-colors" />
                        <p className="text-gray-500 group-hover:text-pink-600 transition-colors font-medium">
                          Add Photo
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )

      case "achievements":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Achievements & Badges</h3>
                <p className="text-gray-600">Recognition for outstanding profile performance</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {user.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`${achievement.bgColor} rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-2xl bg-white shadow-lg ${achievement.color}`}>
                          <achievement.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Performance Metrics</h3>
                <p className="text-gray-600">Your dating app statistics</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{user.stats.responseRate}%</div>
                    <div className="text-sm text-gray-600 font-medium">Response Rate</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">{user.stats.avgResponseTime}</div>
                    <div className="text-sm text-gray-600 font-medium">Avg Response</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{user.stats.profileViews}</div>
                    <div className="text-sm text-gray-600 font-medium">Profile Views</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl border border-pink-200">
                    <div className="text-3xl font-bold text-pink-600 mb-2">{user.stats.matches}</div>
                    <div className="text-sm text-gray-600 font-medium">Total Matches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "lifestyle":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Lifestyle Preferences</h3>
                <p className="text-gray-600">Your daily habits and preferences</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(user.lifestyle).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
                      <label className="text-lg font-semibold text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </label>
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full font-medium border border-pink-200">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Social Media & Contact</h3>
                <p className="text-gray-600">Connect on other platforms</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-200">
                    <div className="flex items-center text-lg text-gray-700">
                      <Instagram className="h-6 w-6 mr-3 text-pink-500" />
                      <span className="font-medium">{user.socialMedia.instagram}</span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                      Connect
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                    <div className="flex items-center text-lg text-gray-700">
                      <Twitter className="h-6 w-6 mr-3 text-blue-500" />
                      <span className="font-medium">{user.socialMedia.twitter}</span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                      Follow
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <div className="flex items-center text-lg text-gray-700">
                      <Globe className="h-6 w-6 mr-3 text-green-500" />
                      <span className="font-medium">{user.socialMedia.website}</span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "stats":
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(user.stats).map(([key, value]) => (
                <div key={key} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl text-pink-600 font-bold mb-2">{value}</div>
                  <div className="text-sm text-gray-600 capitalize font-medium">
                    {key.replace(/([A-Z])/g, " $1")}
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Status */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Verification Status</h3>
                <p className="text-gray-600">Trust and safety verification</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {Object.entries(user.verifications).map(([key, verified]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-full mr-4 ${verified ? "bg-green-100" : "bg-yellow-100"}`}>
                          {verified ? (
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          ) : (
                            <Shield className="h-6 w-6 text-yellow-600" />
                          )}
                        </div>
                        <span className="text-lg text-gray-700 capitalize font-semibold">
                          {key.replace(/([A-Z])/g, " $1")} Verification
                        </span>
                      </div>
                      <span className={`inline-flex items-center px-4 py-2 rounded-full font-medium ${verified
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                        }`}>
                        {verified ? "Verified" : "Pending"}
                      </span>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl shadow-2xl mb-8 overflow-hidden border border-gray-100">
          {/* Cover Photo */}
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-600 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-rose-600/30"></div>
            <div className="absolute inset-0 bg-black/10"></div>
            {isEditing && (
              <button className="absolute bottom-6 right-6 p-3 bg-black/50 rounded-2xl text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm">
                <Camera className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Profile Info */}
          <div className="relative px-6 md:px-8 pt-16 md:pt-20 pb-8">
            {/* Profile Picture */}
            <div className="absolute -top-16 md:-top-20 left-6 md:left-8">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-3xl border-4 border-white shadow-2xl object-cover"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 p-2 bg-pink-500 rounded-2xl text-white hover:bg-pink-600 transition-all duration-300 shadow-lg">
                    <Camera className="h-5 w-5" />
                  </button>
                )}
                {/* Verification Badge */}
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 border-2 border-white shadow-lg">
                  <Verified className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`inline-flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${isEditing
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/25"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-lg"
                  }`}
              >
                {isEditing ? (
                  <>
                    <Save className="h-5 w-5 mr-2" />
                    <span className="hidden sm:inline">Save Changes</span>
                  </>
                ) : (
                  <>
                    <Edit2 className="h-5 w-5 mr-2" />
                    <span className="hidden sm:inline">Edit Profile</span>
                  </>
                )}
              </button>
            </div>

            {/* User Info */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="mb-6">
                  {isEditing ? (
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="text-4xl font-bold w-full border-b-2 border-pink-300 pb-2 focus:outline-none focus:border-pink-500 bg-transparent"
                    />
                  ) : (
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                      {user.name}, {user.age}
                    </h1>
                  )}
                  <p className="text-lg text-gray-500 font-medium">{user.username}</p>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <MapPin className="h-5 w-5 mr-2 text-pink-500" />
                    <span className="font-medium">{user.location}</span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <Briefcase className="h-5 w-5 mr-2 text-pink-500" />
                    <span className="font-medium">{user.occupation}</span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <Calendar className="h-5 w-5 mr-2 text-pink-500" />
                    <span className="font-medium">Joined {user.joinDate}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="font-bold text-gray-700 text-lg">{user.stats.profileViews}</span>
                    <span className="text-gray-500 ml-1">views</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-pink-500" />
                    <span className="font-bold text-gray-700 text-lg">{user.stats.likes}</span>
                    <span className="text-gray-500 ml-1">likes</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    <span className="font-bold text-gray-700 text-lg">{user.stats.superLikes}</span>
                    <span className="text-gray-500 ml-1">super likes</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-blue-500" />
                    <span className="font-bold text-gray-700 text-lg">{user.stats.responseRate}%</span>
                    <span className="text-gray-500 ml-1">response rate</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-6 lg:mt-0">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Message
                </button>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                  <Video className="h-5 w-5 mr-2" />
                  Video Call
                </button>
                <button className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call
                </button>
                <button className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Gift className="h-5 w-5 mr-2" />
                  Send Gift
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden border border-gray-100">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 px-6 md:px-8 py-6 font-semibold border-b-3 transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                      ? "border-pink-500 text-pink-600 bg-gradient-to-t from-pink-50 to-transparent"
                      : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  )
}

export default UserProfile
