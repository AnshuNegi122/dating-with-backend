import { useState } from "react"
import { Check, X, Download, Shield, CreditCard, Crown, Sparkles, Zap, Star } from 'lucide-react'

const Settings = ({ toggleDarkMode, darkMode }) => {
  const [activeTab, setActiveTab] = useState("Account")
  const [settings, setSettings] = useState({
    publicProfile: true,
    onlineStatus: true,
    readReceipts: true,
    notifications: true,
    emailNotifications: false,
    pushNotifications: true,
  })

  const tabs = ["Account", "Privacy", "Notifications"]

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }



  const renderTabContent = () => {
    switch (activeTab) {
      case "Account":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Account Settings</h2>
              <p className="text-lg text-gray-600">Manage your personal information and preferences</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Jane Doe"
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    defaultValue="jane@example.com"
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Location</label>
                  <input
                    type="text"
                    defaultValue="New York, NY"
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <button className="mt-8 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Save Changes
              </button>
            </div>
          </div>
        )

      case "Privacy":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Privacy Settings</h2>
              <p className="text-lg text-gray-600">Control who can see your profile and information</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-pink-500" />
                Profile Visibility
              </h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">Public profile</h4>
                    <p className="text-gray-600 mt-1">Allow anyone to view your profile</p>
                  </div>
                  <button
                    onClick={() => toggleSetting("publicProfile")}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                      settings.publicProfile ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-lg ${
                        settings.publicProfile ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl border border-gray-200">
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">Online status</h4>
                    <p className="text-gray-600 mt-1">Show when you're online</p>
                  </div>
                  <button
                    onClick={() => toggleSetting("onlineStatus")}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                      settings.onlineStatus ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-lg ${
                        settings.onlineStatus ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl border border-gray-200">
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">Read receipts</h4>
                    <p className="text-gray-600 mt-1">Let others know when you've read their messages</p>
                  </div>
                  <button
                    onClick={() => toggleSetting("readReceipts")}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                      settings.readReceipts ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-lg ${
                        settings.readReceipts ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Blocked Users</h3>
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-6 text-lg">You haven't blocked any users yet</p>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-2xl transition-all duration-200 font-semibold">
                  Manage Blocked Users
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Data & Privacy</h3>
              <div className="space-y-4">
                <button className="flex items-center w-full p-6 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-2xl transition-all duration-200 border border-blue-200">
                  <Download className="w-6 h-6 text-blue-500 mr-4" />
                  <div className="text-left">
                    <span className="text-gray-800 font-semibold text-lg block">Download Your Data</span>
                    <span className="text-gray-600 text-sm">Get a copy of all your data</span>
                  </div>
                </button>
                <button className="flex items-center w-full p-6 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-2xl transition-all duration-200 border border-green-200">
                  <Shield className="w-6 h-6 text-green-500 mr-4" />
                  <div className="text-left">
                    <span className="text-gray-800 font-semibold text-lg block">Privacy Policy</span>
                    <span className="text-gray-600 text-sm">Learn how we protect your data</span>
                  </div>
                </button>
              </div>
            </div>

            <button className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Save Privacy Settings
            </button>
          </div>
        )

      case "Notifications":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Notification Settings</h2>
              <p className="text-lg text-gray-600">Choose what notifications you want to receive</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Notification Preferences</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">Push notifications</h4>
                    <p className="text-gray-600 mt-1">Receive notifications on your device</p>
                  </div>
                  <button
                    onClick={() => toggleSetting("pushNotifications")}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                      settings.pushNotifications ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-lg ${
                        settings.pushNotifications ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <div>
                    <h4 className="text-gray-800 font-bold text-lg">Email notifications</h4>
                    <p className="text-gray-600 mt-1">Receive notifications via email</p>
                  </div>
                  <button
                    onClick={() => toggleSetting("emailNotifications")}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                      settings.emailNotifications ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-lg ${
                        settings.emailNotifications ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Settings</h1>
          <p className="text-xl text-gray-600">Manage your account settings and preferences</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center bg-white rounded-2xl p-2 mb-12 border border-gray-200 shadow-lg overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">{renderTabContent()}</div>
      </div>
    </div>
  )
}

export default Settings
