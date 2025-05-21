import { useState } from "react"
import { Camera, Edit2, MapPin, Mail, Phone, Calendar, Globe, Instagram, Twitter, Facebook } from 'lucide-react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    bio: "Hi there! I'm Sarah, a 28-year-old graphic designer from New York. I love art, hiking, and meeting new people. Looking forward to connecting with like-minded individuals!",
    location: "New York, NY",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    birthdate: "April 15, 1995",
    website: "www.sarahjohnson.com",
    instagram: "@sarahj_designs",
    twitter: "@sarahj_designs",
    facebook: "sarahjohnsondesigns",
    interests: ["Art", "Hiking", "Photography", "Travel", "Music", "Reading", "Cooking", "Yoga"],
    relationshipStatus: "Single",
    lookingFor: "Meaningful connections",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfileData({
      ...profileData,
      [name]: value,
    })
  }

  const handleSave = () => {
    // In a real app, you would save the data to a backend here
    setIsEditing(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        {/* Cover Photo */}
        <div className="relative h-48 bg-gradient-to-r from-pink-400 to-purple-500">
          {isEditing && (
            <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
              <Camera className="h-5 w-5 text-gray-600" />
            </button>
          )}
        </div>

        {/* Profile Header */}
        <div className="relative px-4 sm:px-6 lg:px-8 pb-6">
          <div className="flex justify-end mt-4">
            {isEditing ? (
              <div className="space-x-3">
                <button
                  onClick={() => setIsEditing(false)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <Edit2 className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
                Edit Profile
              </button>
            )}
          </div>

          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 -mt-16 bg-white object-cover"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md border border-gray-200">
                      <Camera className="h-4 w-4 text-gray-600" />
                    </button>
                  )}
                </div>
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    className="text-xl font-bold text-gray-900 sm:text-2xl border-b border-gray-300 focus:border-pink-500 focus:outline-none pb-1 w-full"
                  />
                ) : (
                  <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">{profileData.name}</h1>
                )}
                <p className="text-sm font-medium text-gray-600">
                  {profileData.relationshipStatus} · {profileData.lookingFor}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            {/* Bio Section */}
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Bio</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    rows={4}
                    className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                ) : (
                  profileData.bio
                )}
              </dd>
            </div>

            {/* Contact Information */}
            <div>
              <dt className="text-sm font-medium text-gray-500">Contact Information</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <MapPin className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      <span className="ml-2 flex-1 w-0 truncate">
                        {isEditing ? (
                          <input
                            type="text"
                            name="location"
                            value={profileData.location}
                            onChange={handleInputChange}
                            className="focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        ) : (
                          profileData.location
                        )}
                      </span>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <Mail className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      <span className="ml-2 flex-1 w-0 truncate">
                        {isEditing ? (
                          <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                            className="focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        ) : (
                          profileData.email
                        )}
                      </span>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <Phone className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      <span className="ml-2 flex-1 w-0 truncate">
                        {isEditing ? (
                          <input
                            type="text"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleInputChange}
                            className="focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        ) : (
                          profileData.phone
                        )}
                      </span>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <Calendar className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      <span className="ml-2 flex-1 w-0 truncate">
                        {isEditing ? (
                          <input
                            type="text"
                            name="birthdate"
                            value={profileData.birthdate}
                            onChange={handleInputChange}
                            className="focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        ) : (
                          profileData.birthdate
                        )}
                      </span>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>

            {/* Social Media */}
            <div>
              <dt className="text-sm font-medium text-gray-500">Social Media</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <Globe className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      <span className="ml-2 flex-1 w-0 truncate">
                        {isEditing ? (
                          <input
                            type="text"
                            name="website"
                            value={profileData.website}
                            onChange={handleInputChange}
                            className="focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        ) : (
                          profileData.website
                        )}
                      </span>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <Instagram className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      <span className="ml-2 flex-1 w-0 truncate">
                        {isEditing ? (
                          <input
                            type="text"
                            name="instagram"
                            value={profileData.instagram}
                            onChange={handleInputChange}
                            className="focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        ) : (
                          profileData.instagram
                        )}
                      </span>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <Twitter className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      <span className="ml-2 flex-1 w-0 truncate">
                        {isEditing ? (
                          <input
                            type="text"
                            name="twitter"
                            value={profileData.twitter}
                            onChange={handleInputChange}
                            className="focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        ) : (
                          profileData.twitter
                        )}
                      </span>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <Facebook className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      <span className="ml-2 flex-1 w-0 truncate">
                        {isEditing ? (
                          <input
                            type="text"
                            name="facebook"
                            value={profileData.facebook}
                            onChange={handleInputChange}
                            className="focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        ) : (
                          profileData.facebook
                        )}
                      </span>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>

            {/* Interests */}
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Interests</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <div className="flex flex-wrap gap-2">
                  {profileData.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800"
                    >
                      {interest}
                    </span>
                  ))}
                  {isEditing && (
                    <button className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">
                      + Add
                    </button>
                  )}
                </div>
              </dd>
            </div>

            {/* Relationship Preferences */}
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Relationship Preferences</dt>
              <dd className="mt-1 text-sm text-gray-900 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                <div>
                  <p className="font-medium text-gray-500">Relationship Status</p>
                  {isEditing ? (
                    <select
                      name="relationshipStatus"
                      value={profileData.relationshipStatus}
                      onChange={handleInputChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
                    >
                      <option>Single</option>
                      <option>In a relationship</option>
                      <option>Engaged</option>
                      <option>Married</option>
                      <option>It's complicated</option>
                    </select>
                  ) : (
                    <p>{profileData.relationshipStatus}</p>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-500">Looking For</p>
                  {isEditing ? (
                    <select
                      name="lookingFor"
                      value={profileData.lookingFor}
                      onChange={handleInputChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
                    >
                      <option>Meaningful connections</option>
                      <option>Friendship</option>
                      <option>Dating</option>
                      <option>Long-term relationship</option>
                      <option>Marriage</option>
                    </select>
                  ) : (
                    <p>{profileData.lookingFor}</p>
                  )}
                </div>
              </dd>
            </div>
          </div>
        </div>

        {/* Photos Section */}
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Photos</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group">
                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/300x300?sig=${item}`}
                    alt=""
                    className="object-cover"
                  />
                  {isEditing && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 bg-white rounded-full">
                        <Edit2 className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isEditing && (
              <div className="aspect-w-1 aspect-h-1 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <button className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Add photo</span>
                  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
