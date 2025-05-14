import { Link } from "react-router-dom"
import { ArrowLeft, Users, Heart, MessageCircle, Globe } from "lucide-react"

const AboutUs = () => {
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
            About <span className="text-pink-600">Us</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            The story behind our mission to create meaningful connections.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-8 md:px-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Our Story</h2>
                <p className="mt-1 text-pink-100">A team of passionate teenagers with a vision</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-flex rounded-md shadow">
                  <Link
                    to="/love-quiz"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-pink-600 bg-white hover:bg-pink-50"
                  >
                    Try Our Quiz
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className="px-6 py-10 md:p-10">
            <div className="prose prose-pink prose-lg max-w-none">
              <p className="lead text-xl text-gray-500 font-light">
                We are a group of passionate teenagers from Delhi with a shared dream—to build a space where people can
                truly connect beyond just profiles and pictures.
              </p>

              <div className="my-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="bg-pink-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-100 rounded-full p-2">
                      <Users className="h-6 w-6 text-pink-600" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600">
                    To connect people not just through technology, but through real emotions, stories, and shared
                    moments.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 rounded-full p-2">
                      <Heart className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-600">
                    A world where digital connections foster genuine relationships and meaningful interactions.
                  </p>
                </div>
              </div>

              <p>
                In today's digital world, many platforms focus only on appearances, but we wanted to create something
                deeper and more interactive.
              </p>

              <p>
                Our website is designed to help people meet new faces, talk freely, and build real connections. Whether
                you're looking for friendship, meaningful conversations, or something more, you can start with a chat
                and move to voice or video calls—all in one place.
              </p>

              <blockquote className="border-l-4 border-pink-500 pl-4 italic">
                We've blended the excitement of spontaneous chatting with the depth of face-to-face interaction, giving
                users a chance to break the ice and form bonds naturally. No pressure, no swiping—just people getting to
                know each other, one conversation at a time.
              </blockquote>

              <p>
                We may be young, but we're driven by the idea of making the internet a friendlier, more human space.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-pink-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900">Meaningful Conversations</h4>
                      <p className="mt-1 text-sm text-gray-500">Focus on quality interactions over quantity</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Globe className="h-5 w-5 text-pink-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900">Global Connections</h4>
                      <p className="mt-1 text-sm text-gray-500">Connect with people from all walks of life</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl font-medium text-center text-gray-900 my-8">
                Let's turn strangers into friends—and maybe more—one conversation at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16">
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 md:order-2 mb-4 md:mb-0">
                <Link to="/privacy" className="text-gray-500 hover:text-gray-900">
                  Privacy
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

export default AboutUs
