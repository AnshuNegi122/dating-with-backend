"use client"

import { useState } from "react"
import { Check, X, Download, Shield, CreditCard } from "lucide-react"

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

  const tabs = ["Account", "Privacy", "Notifications", "Appearance", "Subscription"]

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const SubscriptionComponent = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Subscription Plan</h2>
        <p className="text-gray-600">Manage your subscription and billing information</p>
      </div>

      {/* Free Plan */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 relative">
        <div className="absolute top-4 right-4">
          <span className="bg-pink-500 text-white text-xs font-medium px-2 py-1 rounded">Current Plan</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Plan</h3>
        <p className="text-gray-600 mb-4">Basic features with limited access</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center text-sm">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-gray-700">10 matches per day</span>
          </li>
          <li className="flex items-center text-sm">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-gray-700">Basic messaging</span>
          </li>
          <li className="flex items-center text-sm">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-gray-700">5 video chats per week</span>
          </li>
          <li className="flex items-center text-sm">
            <X className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-gray-500">See who likes you</span>
          </li>
          <li className="flex items-center text-sm">
            <X className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-gray-500">Priority matching</span>
          </li>
        </ul>
      </div>

      {/* Premium Plan */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-lg p-6 relative">
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-medium px-2 py-1 rounded">
            Recommended
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Premium Plan</h3>
        <p className="text-gray-600 mb-4">Unlock all features and benefits</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center text-sm">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-gray-700">Unlimited matches</span>
          </li>
          <li className="flex items-center text-sm">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-gray-700">Unlimited messaging</span>
          </li>
          <li className="flex items-center text-sm">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-gray-700">Unlimited video chats</span>
          </li>
          <li className="flex items-center text-sm">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-gray-700">See who likes you</span>
          </li>
          <li className="flex items-center text-sm">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-gray-700">Priority matching</span>
          </li>
        </ul>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-800">$14.99</span>
            <span className="text-gray-600"> / month</span>
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <CreditCard className="w-6 h-6 text-gray-500 mr-3" />
            <div>
              <p className="text-gray-800 font-medium">•••• •••• •••• 4242</p>
              <p className="text-gray-500 text-sm">Expires 12/25</p>
            </div>
          </div>
          <button className="text-pink-500 hover:text-pink-600 text-sm font-medium">Update</button>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case "Account":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Account Settings</h2>
              <p className="text-gray-600">Manage your account information and preferences</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Jane Doe"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="jane@example.com"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  defaultValue="New York, NY"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-pink-500"
                />
              </div>
            </div>

            <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Save Changes
            </button>
          </div>
        )

      case "Privacy":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Privacy Settings</h2>
              <p className="text-gray-600">Control who can see your profile and information</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Visibility</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-800 font-medium">Public profile</h4>
                    <p className="text-gray-600 text-sm">Allow anyone to view your profile</p>
                  </div>
                  <button
                    onClick={() => toggleSetting("publicProfile")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.publicProfile ? "bg-pink-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.publicProfile ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-800 font-medium">Online status</h4>
                    <p className="text-gray-600 text-sm">Show when you're online</p>
                  </div>
                  <button
                    onClick={() => toggleSetting("onlineStatus")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.onlineStatus ? "bg-pink-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.onlineStatus ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-800 font-medium">Read receipts</h4>
                    <p className="text-gray-600 text-sm">Let others know when you've read their messages</p>
                  </div>
                  <button
                    onClick={() => toggleSetting("readReceipts")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.readReceipts ? "bg-pink-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.readReceipts ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Blocked Users</h3>
              <p className="text-gray-600 mb-4">You haven't blocked any users yet</p>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                Manage Blocked Users
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Data & Privacy</h3>
              <div className="space-y-3">
                <button className="flex items-center w-full p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-800">Download Your Data</span>
                </button>
                <button className="flex items-center w-full p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <Shield className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-800">Privacy Policy</span>
                </button>
              </div>
            </div>

            <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Save Privacy Settings
            </button>
          </div>
        )

      case "Notifications":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Notification Settings</h2>
              <p className="text-gray-600">Choose what notifications you want to receive</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-800 font-medium">Push notifications</h4>
                    <p className="text-gray-600 text-sm">Receive notifications on your device</p>
                  </div>
                  <button
                    onClick={() => toggleSetting("pushNotifications")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.pushNotifications ? "bg-pink-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.pushNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-800 font-medium">Email notifications</h4>
                    <p className="text-gray-600 text-sm">Receive notifications via email</p>
                  </div>
                  <button
                    onClick={() => toggleSetting("emailNotifications")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.emailNotifications ? "bg-pink-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.emailNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      case "Appearance":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Appearance Settings</h2>
              <p className="text-gray-600">Customize how the app looks and feels</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Theme</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-gray-50 border-2 border-pink-500 rounded-lg">
                  <div className="w-full h-20 bg-white rounded mb-2 border border-gray-200"></div>
                  <p className="text-gray-800 text-sm font-medium">Light Theme</p>
                </button>
                <button className="p-4 bg-gray-50 border-2 border-gray-300 rounded-lg opacity-50">
                  <div className="w-full h-20 bg-gray-800 rounded mb-2"></div>
                  <p className="text-gray-800 text-sm font-medium">Dark Theme (Coming Soon)</p>
                </button>
              </div>
            </div>
          </div>
        )

      case "Subscription":
        return <SubscriptionComponent />

      default:
        return null
    }
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="flex-1 p-4 md:p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap space-x-1 bg-white rounded-lg p-1 mb-8 border border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-pink-500 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl">{renderTabContent()}</div>
      </div>
    </div>
  )
}

export default Settings
