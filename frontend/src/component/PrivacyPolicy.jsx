import { Link } from "react-router-dom"
import { ArrowLeft, Heart, Shield, Lock, Eye, Server, UserCheck, RefreshCw } from "lucide-react"

const PrivacyPolicy = () => {
  const sections = [
    { id: "what-we-collect", title: "What We Collect", icon: <Eye className="h-5 w-5" /> },
    { id: "how-we-use", title: "How We Use Your Data", icon: <Server className="h-5 w-5" /> },
    { id: "data-security", title: "Data Security", icon: <Lock className="h-5 w-5" /> },
    { id: "cookies", title: "Cookies", icon: <Shield className="h-5 w-5" /> },
    { id: "third-party", title: "Third-Party Services", icon: <RefreshCw className="h-5 w-5" /> },
    { id: "your-control", title: "Your Control", icon: <UserCheck className="h-5 w-5" /> },
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
            Privacy <span className="text-pink-600">Policy</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            How we protect and handle your personal information.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-8 md:px-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
                <p className="mt-1 text-pink-100">Last Updated: May 15, 2025</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center">
                <Shield className="h-5 w-5 text-white mr-2" />
                <span className="text-white text-sm">Your data is protected</span>
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
                <li>
                  <a href="#policy-updates" className="flex items-center text-pink-600 hover:text-pink-800">
                    <span className="mr-2">
                      <RefreshCw className="h-5 w-5" />
                    </span>
                    <span>Policy Updates</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="prose prose-pink prose-lg max-w-none">
              <p>
                We value your privacy and are committed to keeping your personal information safe. This Privacy Policy
                explains how we collect, use, and protect your data when you use our website.
              </p>

              <h2
                id="what-we-collect"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <Eye className="h-6 w-6 text-pink-500 mr-2" />
                1. What We Collect
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mt-0">When you use our platform, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Basic details like username, age, and gender.</li>
                  <li>
                    Messages and media shared during conversations (temporarily stored if necessary for moderation).
                  </li>
                  <li>IP address and device information to improve user experience and security.</li>
                </ul>
                <p className="mb-0">
                  We do not collect sensitive personal data like passwords, payment information, or exact location
                  unless explicitly required (e.g., for safety or verification).
                </p>
              </div>

              <h2
                id="how-we-use"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <Server className="h-6 w-6 text-pink-500 mr-2" />
                2. How We Use Your Data
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mt-0">We use the information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Match you with other users.</li>
                  <li>Improve our platform and user experience.</li>
                  <li>Ensure community safety by monitoring misuse or abuse.</li>
                </ul>
                <p className="mb-0 font-medium">We never sell your data to third parties.</p>
              </div>

              <h2
                id="data-security"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <Lock className="h-6 w-6 text-pink-500 mr-2" />
                3. Data Security
              </h2>
              <p>
                We use industry-standard methods to protect your data. While no system is 100% secure, we do our best to
                keep your information safe.
              </p>

              <h2 id="cookies" className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20">
                <Shield className="h-6 w-6 text-pink-500 mr-2" />
                4. Cookies
              </h2>
              <p>
                We use cookies to remember your preferences and improve functionality. You can turn off cookies in your
                browser settings. For more details, please see our{" "}
                <Link to="/cookies" className="text-pink-600 hover:text-pink-800">
                  Cookie Policy
                </Link>
                .
              </p>

              <h2
                id="third-party"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <RefreshCw className="h-6 w-6 text-pink-500 mr-2" />
                5. Third-Party Services
              </h2>
              <p>
                We may use third-party tools (e.g., for analytics or video calling), but we ensure they follow proper
                privacy standards.
              </p>

              <h2
                id="your-control"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <UserCheck className="h-6 w-6 text-pink-500 mr-2" />
                6. Your Control
              </h2>
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                <p className="mt-0">
                  You can delete your account at any time. If you want your data removed or have questions, contact us
                  at
                  <a href="mailto:support@lovequiz.com" className="text-pink-600 hover:text-pink-800 ml-1">
                    support@lovequiz.com
                  </a>
                  .
                </p>
              </div>

              <h2
                id="policy-updates"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <RefreshCw className="h-6 w-6 text-pink-500 mr-2" />
                7. Policy Updates
              </h2>
              <p>
                We may update this Privacy Policy over time. Changes will be posted on this page with an updated
                effective date.
              </p>

              <div className="mt-12 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600 mb-0">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
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
                <Link to="/terms" className="text-gray-500 hover:text-gray-900">
                  Terms
                </Link>
                <Link to="/cookies" className="text-gray-500 hover:text-gray-900">
                  Cookies
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

export default PrivacyPolicy
