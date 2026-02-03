'use client'

import { useState } from 'react'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import Link from 'next/link'

export default function ProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Sample user data
  const user = {
    name: 'Alex Walker',
    role: 'DevAsset Seller',
    email: 'alexwalker@example.com',
    phone: '+1 (555) 987-6543',
    company: 'Tech Solutions Inc.',
    address: '456 Innovation Ave, City, State',
    avatar: '/AlexJohnson.jpg'
  }

  // Navigation items
  const navItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'Licenses',
      href: '/dashboard/licenses',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      )
    },
    {
      name: 'Orders',
      href: '/dashboard/orders',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      name: 'Invoices',
      href: '/dashboard/invoices',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: 'Profile',
      href: '/dashboard/profile',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      active: true
    }
  ]

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navItems={navItems} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar setSidebarOpen={setSidebarOpen} pageHeading="Profile" />

        <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 py-6 lg:py-8 overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Profile Display Section */}
            <div className="text-center mb-8 lg:mb-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full border-4 border-white shadow-lg ring-4 ring-[#023347]/10 overflow-hidden relative">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={176}
                      height={176}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {user.name}
              </h2>
              <p className="text-base sm:text-lg text-[#023347] font-semibold">
                {user.role}
              </p>
            </div>

            {/* Account Information Section */}
            <div className="mb-8 lg:mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Account Information
              </h3>
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="space-y-5 sm:space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 pb-5 sm:pb-6 border-b border-gray-100 last:border-b-0">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#023347]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-gray-700 mb-1.5">
                        Email
                      </p>
                      <p className="text-sm sm:text-base text-[#023347] font-medium break-all">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-start gap-4 pb-5 sm:pb-6 border-b border-gray-100 last:border-b-0">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#023347]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-gray-700 mb-1.5">
                        Phone Number
                      </p>
                      <p className="text-sm sm:text-base text-[#023347] font-medium">
                        {user.phone}
                      </p>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex items-start gap-4 pb-5 sm:pb-6 border-b border-gray-100 last:border-b-0">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#023347]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-gray-700 mb-1.5">
                        Company
                      </p>
                      <p className="text-sm sm:text-base text-[#023347] font-medium">
                        {user.company}
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#023347]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-gray-700 mb-1.5">
                        Address
                      </p>
                      <p className="text-sm sm:text-base text-[#023347] font-medium">
                        {user.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings & Preferences Section */}
            <div className="mb-8 lg:mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Settings & Preferences
              </h3>
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <Link
                  href="/dashboard/profile/change-password"
                  className="flex items-center justify-between p-4 sm:p-6 hover:bg-[#F7FAFC] transition-colors border-b border-gray-100 last:border-b-0 group"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-[#023347] transition-colors">
                    Change Password
                  </span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#023347] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/dashboard/profile/notifications"
                  className="flex items-center justify-between p-4 sm:p-6 hover:bg-[#F7FAFC] transition-colors border-b border-gray-100 last:border-b-0 group"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-[#023347] transition-colors">
                    Notification Settings
                  </span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#023347] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/privacy-policy"
                  className="flex items-center justify-between p-4 sm:p-6 hover:bg-[#F7FAFC] transition-colors group"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-[#023347] transition-colors">
                    Privacy Policy
                  </span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#023347] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Log Out Button */}
            <div className="flex justify-center">
              <button className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#023347] text-white rounded-xl hover:bg-[#0A2E3A] transition-colors text-base sm:text-lg font-bold shadow-sm hover:shadow-md">
                Log Out
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

