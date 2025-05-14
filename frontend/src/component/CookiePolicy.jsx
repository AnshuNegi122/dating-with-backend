import { Link } from "react-router-dom"
import { ArrowLeft, Heart, Cookie, Settings, BarChart, Layers, ExternalLink, RefreshCw } from "lucide-react"

const CookiePolicy = () => {
  const sections = [
    { id: "what-are-cookies", title: "What Are Cookies", icon: <Cookie className="h-5 w-5" /> },
    { id: "why-we-use", title: "Why We Use Cookies", icon: <Settings className="h-5 w-5" /> },
    { id: "types-of-cookies", title: "Types of Cookies", icon: <Layers className="h-5 w-5" /> },
    { id: "managing-cookies", title: "Managing Cookies", icon: <BarChart className="h-5 w-5" /> },
    { id: "updates", title: "Updates to This Policy", icon: <RefreshCw className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center">
                <Heart className="h-8 w-8 text-pink-500" />
                <span className="ml-2 text-xl font-bold text-gray-900">Love Quiz</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Cookie <span className="text-pink-600">Policy</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">How we use cookies to improve your experience.</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-8 md:px-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Cookie Policy</h2>
                <p className="mt-1 text-pink-100">Last Updated: May 15, 2025</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center">
                <Cookie className="h-5 w-5 text-white mr-2" />
                <span className="text-white text-sm">Browser Data</span>
              </div>
            </div>
          </div>

          <div className="px-6 py-10 md:p-10">
            {/* Table of Contents */}
            <div className="mb-10 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Table of Contents</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="flex items-center text-pink-600 hover:text-pink-800">
                      <span className="mr-2">{section.icon}</span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose prose-pink prose-lg max-w-none">
              <p>
                This Cookies Policy explains how our website uses cookies and similar technologies to improve your
                experience.
              </p>

              <h2
                id="what-are-cookies"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <Cookie className="h-6 w-6 text-pink-500 mr-2" />
                1. What Are Cookies?
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mt-0 mb-0">
                  Cookies are small text files stored on your device when you visit a website. They help websites
                  remember your preferences, login status, and how you interact with different features.
                </p>
              </div>

              <h2
                id="why-we-use"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <Settings className="h-6 w-6 text-pink-500 mr-2" />
                2. Why We Use Cookies
              </h2>
              <p>We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep you logged in during your session</li>
                <li>Remember your preferences (like language or theme)</li>
                <li>Understand how users interact with our site (for analytics)</li>
                <li>Improve performance and speed</li>
                <li>Provide a smoother, personalized experience</li>
              </ul>

              <h2
                id="types-of-cookies"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <Layers className="h-6 w-6 text-pink-500 mr-2" />
                3. Types of Cookies We Use
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 text-sm mb-0">
                    Required for core functionality like login and navigation.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700 text-sm mb-0">
                    Help us analyze how people use the website (e.g., page visits, clicks).
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Functionality Cookies</h3>
                  <p className="text-gray-700 text-sm mb-0">Remember your settings and preferences.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Third-Party Cookies</h3>
                  <p className="text-gray-700 text-sm mb-0">
                    May be used by tools like video chat services or analytics providers.
                  </p>
                </div>
              </div>

              <h2
                id="managing-cookies"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <BarChart className="h-6 w-6 text-pink-500 mr-2" />
                4. Managing Cookies
              </h2>
              <p>
                You can control or disable cookies through your browser settings at any time. However, turning off
                certain cookies may affect how the website works.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How to Manage Cookies in Popular Browsers</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-pink-500 mr-2" />
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-pink-500 mr-2" />
                    <a
                      href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-pink-500 mr-2" />
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800"
                    >
                      Safari
                    </a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-pink-500 mr-2" />
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>

              <h2 id="updates" className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20">
                <RefreshCw className="h-6 w-6 text-pink-500 mr-2" />
                5. Updates to This Policy
              </h2>
              <p>
                We may update this Cookies Policy from time to time. Any changes will be posted here with an updated
                effective date.
              </p>

              <div className="mt-12 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600 mb-0">
                  If you have any questions about our Cookie Policy, please contact us at{" "}
                  <a href="mailto:support@lovequiz.com" className="text-pink-600 hover:text-pink-800">
                    support@lovequiz.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16">
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 md:order-2 mb-4 md:mb-0">
                <Link to="/about" className="text-gray-500 hover:text-gray-900">
                  About Us
                </Link>
                <Link to="/privacy" className="text-gray-500 hover:text-gray-900">
                  Privacy
                </Link>
                <Link to="/terms" className="text-gray-500 hover:text-gray-900">
                  Terms
                </Link>
              </div>
              <p className="text-gray-500 text-sm md:order-1">
                &copy; {new Date().getFullYear()} Love Quiz. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default CookiePolicy
