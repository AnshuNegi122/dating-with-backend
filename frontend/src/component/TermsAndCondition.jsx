import { Link } from "react-router-dom"
import { ArrowLeft, Heart, FileText, AlertTriangle, Shield, Copyright, Users, Database, RefreshCw } from "lucide-react"

const TermsAndConditions = () => {
  const sections = [
    { id: "eligibility", title: "Eligibility", icon: <Users className="h-5 w-5" /> },
    { id: "user-conduct", title: "User Conduct", icon: <AlertTriangle className="h-5 w-5" /> },
    { id: "privacy", title: "Privacy", icon: <Shield className="h-5 w-5" /> },
    { id: "content-ownership", title: "Content Ownership", icon: <Copyright className="h-5 w-5" /> },
    { id: "platform-use", title: "Platform Use", icon: <Database className="h-5 w-5" /> },
    { id: "account-termination", title: "Account Termination", icon: <AlertTriangle className="h-5 w-5" /> },
    { id: "changes-to-terms", title: "Changes to Terms", icon: <RefreshCw className="h-5 w-5" /> },
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
            Terms & <span className="text-pink-600">Conditions</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            The rules and guidelines for using our platform.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-8 md:px-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Terms and Conditions</h2>
                <p className="mt-1 text-pink-100">Last Updated: May 15, 2025</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center">
                <FileText className="h-5 w-5 text-white mr-2" />
                <span className="text-white text-sm">Legal Agreement</span>
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
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        By using this platform, you agree to the following terms and conditions. Please read them
                        carefully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2
                id="eligibility"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <Users className="h-6 w-6 text-pink-500 mr-2" />
                1. Eligibility
              </h2>
              <p>
                You must be at least 18 years old to use our platform. By accessing the website, you confirm that you
                meet this age requirement.
              </p>

              <h2
                id="user-conduct"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <AlertTriangle className="h-6 w-6 text-pink-500 mr-2" />
                2. User Conduct
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mt-0">We want this to be a respectful and safe space for everyone. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use offensive, abusive, or discriminatory language.</li>
                  <li>Harass, threaten, or harm other users.</li>
                  <li>Share or request explicit content.</li>
                  <li>Impersonate others or create fake profiles.</li>
                </ul>
                <p className="mb-0 font-medium">Violations can result in warnings, bans, or account deletion.</p>
              </div>

              <h2 id="privacy" className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20">
                <Shield className="h-6 w-6 text-pink-500 mr-2" />
                3. Privacy
              </h2>
              <p>
                Your conversations are private and are not stored long-term. However, we reserve the right to monitor or
                remove content that violates our policies. Do not share personal information such as your address,
                passwords, or bank details.
              </p>
              <p>
                For more information, please review our{" "}
                <Link to="/privacy" className="text-pink-600 hover:text-pink-800">
                  Privacy Policy
                </Link>
                .
              </p>

              <h2
                id="content-ownership"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <Copyright className="h-6 w-6 text-pink-500 mr-2" />
                4. Content Ownership
              </h2>
              <p>
                You are responsible for any content you share. By using our platform, you agree not to upload anything
                that infringes on copyrights or violates any laws.
              </p>

              <h2
                id="platform-use"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <Database className="h-6 w-6 text-pink-500 mr-2" />
                5. Platform Use
              </h2>
              <p>
                Our website is meant for casual conversations and connection. Misuse, including using bots or automation
                tools, is not allowed.
              </p>

              <h2
                id="account-termination"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <AlertTriangle className="h-6 w-6 text-pink-500 mr-2" />
                6. Account Termination
              </h2>
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                <p className="mt-0 mb-0">
                  We reserve the right to suspend or delete accounts that violate our rules without notice.
                </p>
              </div>

              <h2
                id="changes-to-terms"
                className="flex items-center text-2xl font-bold mt-12 mb-4 text-gray-900 scroll-mt-20"
              >
                <RefreshCw className="h-6 w-6 text-pink-500 mr-2" />
                7. Changes to Terms
              </h2>
              <p>We may update these terms at any time. Continued use of the website means you accept the new terms.</p>

              <div className="mt-12 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600 mb-0">
                  If you have any questions about these Terms and Conditions, please contact us at{" "}
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

export default TermsAndConditions
