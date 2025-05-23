"use client"

import { useState } from "react"
import {
  Camera,
  Edit2,
  MapPin,
  Calendar,
  Briefcase,
  Book,
  Save,
  Heart,
  Star,
  MessageSquare,
  Video,
  Gift,
  Shield,
  Users,
  TrendingUp,
  Eye,
  Globe,
  Instagram,
  Twitter,
  Award,
  Target,
  Zap,
  CheckCircle,
  Plus,
  Download,
  Share2,
  MoreHorizontal,
  Phone,
  Verified,
} from "lucide-react"

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
      },
      {
        title: "Conversation Starter",
        description: "Great at starting meaningful conversations",
        icon: MessageSquare,
        color: "text-green-500",
      },
      {
        title: "Verified Profile",
        description: "All information verified and authentic",
        icon: Shield,
        color: "text-purple-500",
      },
      {
        title: "Super Connector",
        description: "Excellent at building connections",
        icon: Users,
        color: "text-pink-500",
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
          <div className="space-y-6">
            {/* Professional Summary */}
            <div className="card">
              <div className="card-header">
                <div className="flex items-center justify-between">
                  <h3 className="text-heading-4">Professional Summary</h3>
                  <div className="flex items-center space-x-2">
                    <span className="badge badge-success">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </span>
                    <span className="badge bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Premium
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-content">
                {isEditing ? (
                  <textarea
                    defaultValue={user.bio}
                    rows={4}
                    className="form-input"
                    placeholder="Tell others about yourself..."
                  />
                ) : (
                  <p className="text-body text-gray-600 leading-relaxed">{user.bio}</p>
                )}
              </div>
            </div>

            {/* Skills & Endorsements */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-heading-4">Skills & Qualities</h3>
                <p className="text-body-small text-gray-500 mt-1">Endorsed by matches and connections</p>
              </div>
              <div className="card-content">
                <div className="space-y-4">
                  {user.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-body font-medium text-gray-800">{skill.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-body-small text-gray-500">{skill.endorsements} endorsements</span>
                          <span className="text-body-small font-semibold text-pink-600">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                {!isEditing && (
                  <button className="mt-4 btn-outline flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Endorse Skills</span>
                  </button>
                )}
              </div>
            </div>

            {/* Basic Info */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-heading-4">Professional Information</h3>
              </div>
              <div className="card-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Current Position</label>
                    {isEditing ? (
                      <input type="text" defaultValue={user.occupation} className="form-input" />
                    ) : (
                      <div className="flex items-center text-body text-gray-700">
                        <Briefcase className="h-4 w-4 mr-2 text-pink-500" />
                        <span>
                          {user.occupation} at {user.company}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Education</label>
                    {isEditing ? (
                      <input type="text" defaultValue={user.education} className="form-input" />
                    ) : (
                      <div className="flex items-center text-body text-gray-700">
                        <Book className="h-4 w-4 mr-2 text-pink-500" />
                        <span>{user.education}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Location</label>
                    {isEditing ? (
                      <input type="text" defaultValue={user.location} className="form-input" />
                    ) : (
                      <div className="flex items-center text-body text-gray-700">
                        <MapPin className="h-4 w-4 mr-2 text-pink-500" />
                        <span>{user.location}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Member Since</label>
                    <div className="flex items-center text-body text-gray-700">
                      <Calendar className="h-4 w-4 mr-2 text-pink-500" />
                      <span>{user.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-heading-4">Interests & Passions</h3>
              </div>
              <div className="card-content">
                <div className="flex flex-wrap gap-2">
                  {user.interests.map((interest, index) => (
                    <span key={index} className="badge badge-primary">
                      {interest}
                    </span>
                  ))}
                  {isEditing && (
                    <button className="badge border border-dashed border-pink-300 text-pink-500 hover:bg-pink-50 transition-colors">
                      + Add Interest
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-heading-4">Languages</h3>
              </div>
              <div className="card-content">
                <div className="space-y-2">
                  {user.languages.map((language, index) => (
                    <div key={index} className="flex items-center text-body text-gray-700">
                      <Globe className="h-4 w-4 mr-2 text-pink-500" />
                      <span>{language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Relationship Goals */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-heading-4">Relationship Goals</h3>
              </div>
              <div className="card-content">
                <div className="mb-4">
                  <label className="form-label">Looking For</label>
                  {isEditing ? (
                    <input type="text" defaultValue={user.lookingFor} className="form-input" />
                  ) : (
                    <p className="text-body text-gray-700">{user.lookingFor}</p>
                  )}
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="form-label">Goals</label>
                    <div className="flex flex-wrap gap-2">
                      {user.relationshipGoals.map((goal, index) => (
                        <span key={index} className="badge badge-secondary">
                          <Target className="h-3 w-3 mr-1" />
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Core Values</label>
                    <div className="flex flex-wrap gap-2">
                      {user.values.map((value, index) => (
                        <span key={index} className="badge badge-success">
                          <Heart className="h-3 w-3 mr-1" />
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-heading-4">Testimonials</h3>
                <p className="text-body-small text-gray-500 mt-1">What others say about Jamie</p>
              </div>
              <div className="card-content">
                <div className="space-y-4">
                  {user.testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-body font-semibold text-gray-800">{testimonial.name}</span>
                          <div className="flex items-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-yellow-500" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <span className="text-body-small text-gray-500">{testimonial.date}</span>
                      </div>
                      <p className="text-body text-gray-600 italic">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "photos":
        return (
          <div className="space-y-6">
            <div className="card">
              <div className="card-header">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-heading-4">Photo Gallery</h3>
                    <p className="text-body-small text-gray-500 mt-1">Showcase your personality with up to 6 photos</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="btn-outline flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                    <button className="btn-secondary flex items-center space-x-2">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {user.photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={photo || "/placeholder.svg"}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
                      />
                      {isEditing && (
                        <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="flex space-x-2">
                            <button className="p-2 bg-white rounded-full text-gray-700 hover:text-pink-600 transition-colors">
                              <Camera className="h-4 w-4" />
                            </button>
                            <button className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600 transition-colors">
                              <MoreHorizontal className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )}
                      {index === 0 && (
                        <div className="absolute top-2 left-2">
                          <span className="badge bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-medium">
                            <Star className="h-3 w-3 mr-1" />
                            Main Photo
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-2 right-2">
                        <span className="badge bg-black/70 text-white text-xs">
                          {index === 0 ? "Profile" : `Photo ${index + 1}`}
                        </span>
                      </div>
                    </div>
                  ))}
                  {isEditing && user.photos.length < 6 && (
                    <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-pink-400 transition-colors cursor-pointer group">
                      <div className="text-center">
                        <Camera className="h-8 w-8 text-gray-400 group-hover:text-pink-500 mx-auto mb-2 transition-colors" />
                        <p className="text-body-small text-gray-500 group-hover:text-pink-600 transition-colors">
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
          <div className="space-y-6">
            <div className="card">
              <div className="card-header">
                <h3 className="text-heading-4">Achievements & Badges</h3>
                <p className="text-body-small text-gray-500 mt-1">Recognition for outstanding profile performance</p>
              </div>
              <div className="card-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full bg-white shadow-sm ${achievement.color}`}>
                          <achievement.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-body font-semibold text-gray-800 mb-1">{achievement.title}</h4>
                          <p className="text-body-small text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-heading-4">Performance Metrics</h3>
              </div>
              <div className="card-content">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-heading-2 font-bold text-blue-600">{user.stats.responseRate}%</div>
                    <div className="text-body-small text-gray-600 mt-1">Response Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-heading-2 font-bold text-green-600">{user.stats.avgResponseTime}</div>
                    <div className="text-body-small text-gray-600 mt-1">Avg Response</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-heading-2 font-bold text-purple-600">{user.stats.profileViews}</div>
                    <div className="text-body-small text-gray-600 mt-1">Profile Views</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
                    <div className="text-heading-2 font-bold text-pink-600">{user.stats.matches}</div>
                    <div className="text-body-small text-gray-600 mt-1">Total Matches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "lifestyle":
        return (
          <div className="space-y-6">
            <div className="card">
              <div className="card-header">
                <h3 className="text-heading-4">Lifestyle Preferences</h3>
              </div>
              <div className="card-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(user.lifestyle).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <label className="text-body font-medium text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </label>
                      <span className="badge badge-secondary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-heading-4">Social Media & Contact</h3>
              </div>
              <div className="card-content">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center text-body text-gray-700">
                      <Instagram className="h-4 w-4 mr-2 text-pink-500" />
                      <span>{user.socialMedia.instagram}</span>
                    </div>
                    <button className="btn-outline text-xs">Connect</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center text-body text-gray-700">
                      <Twitter className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{user.socialMedia.twitter}</span>
                    </div>
                    <button className="btn-outline text-xs">Follow</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center text-body text-gray-700">
                      <Globe className="h-4 w-4 mr-2 text-green-500" />
                      <span>{user.socialMedia.website}</span>
                    </div>
                    <button className="btn-outline text-xs">Visit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "stats":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(user.stats).map(([key, value]) => (
                <div key={key} className="card text-center">
                  <div className="card-content">
                    <div className="text-heading-2 text-pink-600 font-bold">{value}</div>
                    <div className="text-body-small text-gray-600 capitalize mt-1">
                      {key.replace(/([A-Z])/g, " $1")}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Status */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-heading-4">Verification Status</h3>
                <p className="text-body-small text-gray-500 mt-1">Trust and safety verification</p>
              </div>
              <div className="card-content">
                <div className="space-y-3">
                  {Object.entries(user.verifications).map(([key, verified]) => (
                    <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-3 ${verified ? "bg-green-100" : "bg-yellow-100"}`}>
                          {verified ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Shield className="h-4 w-4 text-yellow-600" />
                          )}
                        </div>
                        <span className="text-body text-gray-700 capitalize font-medium">
                          {key.replace(/([A-Z])/g, " $1")} Verification
                        </span>
                      </div>
                      <span className={`badge ${verified ? "badge-success" : "badge-warning"}`}>
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Profile Header */}
        <div className="card mb-6">
          {/* Cover Photo */}
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-600 rounded-t-xl">
            <div className="absolute inset-0 bg-black/20 rounded-t-xl"></div>
            {isEditing && (
              <button className="absolute bottom-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
                <Camera className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Profile Info */}
          <div className="relative px-4 md:px-6 pt-16 md:pt-20 pb-6">
            {/* Profile Picture */}
            <div className="absolute -top-16 md:-top-20 left-4 md:left-6">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 p-2 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
                {/* Verification Badge */}
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                  <Verified className="h-3 w-3 text-white" />
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`btn-${isEditing ? "primary" : "outline"} flex items-center space-x-2`}
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4" />
                    <span className="hidden sm:inline">Save Changes</span>
                  </>
                ) : (
                  <>
                    <Edit2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Edit Profile</span>
                  </>
                )}
              </button>
            </div>

            {/* User Info */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="mb-4">
                  {isEditing ? (
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="text-heading-1 w-full border-b border-pink-300 pb-1 focus:outline-none focus:border-pink-500 bg-transparent"
                    />
                  ) : (
                    <h1 className="text-heading-1 text-gray-800">
                      {user.name}, {user.age}
                    </h1>
                  )}
                  <p className="text-body text-gray-500">{user.username}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-body-small text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-pink-500" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1 text-pink-500" />
                    <span>{user.occupation}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-pink-500" />
                    <span>Joined {user.joinDate}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-body-small">
                    <Eye className="h-4 w-4 mr-1 text-gray-400" />
                    <span className="font-semibold text-gray-700">{user.stats.profileViews}</span>
                    <span className="text-gray-500 ml-1">views</span>
                  </div>
                  <div className="flex items-center text-body-small">
                    <Heart className="h-4 w-4 mr-1 text-pink-500" />
                    <span className="font-semibold text-gray-700">{user.stats.likes}</span>
                    <span className="text-gray-500 ml-1">likes</span>
                  </div>
                  <div className="flex items-center text-body-small">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span className="font-semibold text-gray-700">{user.stats.superLikes}</span>
                    <span className="text-gray-500 ml-1">super likes</span>
                  </div>
                  <div className="flex items-center text-body-small">
                    <Zap className="h-4 w-4 mr-1 text-blue-500" />
                    <span className="font-semibold text-gray-700">{user.stats.responseRate}%</span>
                    <span className="text-gray-500 ml-1">response rate</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                <button className="btn-primary flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Message</span>
                </button>
                <button className="btn-secondary flex items-center space-x-2">
                  <Video className="h-4 w-4" />
                  <span>Video Call</span>
                </button>
                <button className="btn-outline flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </button>
                <button className="btn-outline flex items-center space-x-2">
                  <Gift className="h-4 w-4" />
                  <span>Send Gift</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="card mb-6">
          <div className="card-content p-0">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 md:px-6 py-4 text-body font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-pink-500 text-pink-600 bg-pink-50"
                        : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  )
}

export default UserProfile
