import { useState } from "react"
import { Crown, Check, X, Star, Heart, Zap, Shield, Eye, MessageCircle, Video, Users, Sparkles, Gift, TrendingUp, Award, Infinity } from 'lucide-react'

const Premium = () => {
  const [selectedPlan, setSelectedPlan] = useState("premium")
  const [billingCycle, setBillingCycle] = useState("monthly")

  const plans = [
    {
      id: "basic",
      name: "Basic",
      description: "Perfect for getting started",
      monthlyPrice: 0,
      yearlyPrice: 0,
      color: "from-gray-400 to-gray-600",
      popular: false,
      features: [
        { name: "10 likes per day", included: true },
        { name: "Basic messaging", included: true },
        { name: "5 video chats per week", included: true },
        { name: "Standard profile visibility", included: true },
        { name: "See who likes you", included: false },
        { name: "Unlimited likes", included: false },
        { name: "Priority matching", included: false },
        { name: "Read receipts", included: false },
        { name: "Advanced filters", included: false },
        { name: "Profile boost", included: false },
      ],
    },
    {
      id: "premium",
      name: "Premium",
      description: "Most popular choice for serious daters",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      color: "from-pink-500 to-purple-600",
      popular: true,
      features: [
        { name: "Unlimited likes", included: true },
        { name: "Unlimited messaging", included: true },
        { name: "Unlimited video chats", included: true },
        { name: "See who likes you", included: true },
        { name: "Priority matching", included: true },
        { name: "Read receipts", included: true },
        { name: "Advanced filters", included: true },
        { name: "5 profile boosts per month", included: true },
        { name: "Rewind last swipe", included: true },
        { name: "Travel mode", included: false },
      ],
    },
    {
      id: "platinum",
      name: "Platinum",
      description: "Ultimate dating experience",
      monthlyPrice: 34.99,
      yearlyPrice: 349.99,
      color: "from-yellow-400 to-orange-500",
      popular: false,
      features: [
        { name: "Everything in Premium", included: true },
        { name: "Message before matching", included: true },
        { name: "Priority likes", included: true },
        { name: "See who read your messages", included: true },
        { name: "Unlimited profile boosts", included: true },
        { name: "Travel mode", included: true },
        { name: "VIP customer support", included: true },
        { name: "Exclusive events access", included: true },
        { name: "Profile verification badge", included: true },
        { name: "Advanced analytics", included: true },
      ],
    },
  ]

  const premiumFeatures = [
    {
      icon: Heart,
      title: "Unlimited Likes",
      description: "Like as many profiles as you want without daily limits",
      color: "text-pink-500",
    },
    {
      icon: Eye,
      title: "See Who Likes You",
      description: "Know who's interested before you swipe",
      color: "text-purple-500",
    },
    {
      icon: Zap,
      title: "Priority Matching",
      description: "Get matched faster with priority algorithm placement",
      color: "text-yellow-500",
    },
    {
      icon: MessageCircle,
      title: "Advanced Messaging",
      description: "Read receipts, message reactions, and priority delivery",
      color: "text-blue-500",
    },
    {
      icon: Video,
      title: "Unlimited Video Dates",
      description: "Connect face-to-face with unlimited video chat sessions",
      color: "text-green-500",
    },
    {
      icon: Shield,
      title: "Enhanced Privacy",
      description: "Control who sees your profile and when you're online",
      color: "text-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "Profile Boost",
      description: "Get 10x more profile views with regular boosts",
      color: "text-orange-500",
    },
    {
      icon: Award,
      title: "Exclusive Badges",
      description: "Stand out with premium verification and achievement badges",
      color: "text-rose-500",
    },
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      age: 28,
      text: "Premium helped me find my soulmate! The advanced filters and unlimited likes made all the difference.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Michael R.",
      age: 32,
      text: "Being able to see who likes me saved so much time. Found my girlfriend within the first month!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Emma L.",
      age: 26,
      text: "The video chat feature is amazing. I could really get to know people before meeting in person.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ]

  const getPrice = (plan) => {
    if (plan.monthlyPrice === 0) return "Free"
    const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice / 12
    return `$${price.toFixed(2)}`
  }

  const getSavings = (plan) => {
    if (plan.monthlyPrice === 0) return null
    const monthlyCost = plan.monthlyPrice * 12
    const yearlyCost = plan.yearlyPrice
    const savings = ((monthlyCost - yearlyCost) / monthlyCost * 100).toFixed(0)
    return billingCycle === "yearly" ? `Save ${savings}%` : null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Billing Toggle */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                plan.popular ? "ring-4 ring-pink-500 ring-opacity-50" : ""
              } ${selectedPlan === plan.id ? "ring-4 ring-purple-500" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 text-sm font-medium">
                  <Star className="inline h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{getPrice(plan)}</span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-gray-600">/{billingCycle === "monthly" ? "month" : "month"}</span>
                    )}
                  </div>
                  {getSavings(plan) && (
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {getSavings(plan)}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                    plan.id === "basic"
                      ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg transform hover:scale-105`
                  }`}
                >
                  {plan.id === "basic" ? "Current Plan" : `Choose ${plan.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </div>
  )
}

export default Premium
