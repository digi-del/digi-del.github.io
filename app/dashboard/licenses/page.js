'use client'

import { useState } from 'react'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'

export default function LicensesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  // Sample license data
  const licenses = [
    {
      id: 1,
      licenseNumber: '#12345',
      productName: 'Premium Security Suite',
      status: 'Active',
      subscriptionType: 'Monthly',
      price: '$29.99',
      buyer: 'Sarah Miller',
      image: '/docker.svg'
    },
    {
      id: 2,
      licenseNumber: '#12346',
      productName: 'Analytics Pro',
      status: 'Active',
      subscriptionType: 'Yearly',
      price: '$199.99',
      buyer: 'Michael Chen',
      image: '/npm.svg'
    },
    {
      id: 3,
      licenseNumber: '#12347',
      productName: 'Cloud Storage Plus',
      status: 'Suspended',
      subscriptionType: 'One-time',
      price: '$99.99',
      buyer: 'Emma Wilson',
      image: '/nginx-icon.svg'
    },
    {
      id: 4,
      licenseNumber: '#12348',
      productName: 'Team Collaboration',
      status: 'Active',
      subscriptionType: 'Monthly',
      price: '$49.99',
      buyer: 'James Taylor',
      image: '/kubernetes-svgrepo-com.svg'
    },
    {
      id: 5,
      licenseNumber: '#12349',
      productName: 'Developer Tools',
      status: 'Active',
      subscriptionType: 'Yearly',
      price: '$149.99',
      buyer: 'Jessica Taylor',
      image: '/pypi.svg'
    },
    {
      id: 6,
      licenseNumber: '#12350',
      productName: 'Cloud Infrastructure',
      status: 'Active',
      subscriptionType: 'Monthly',
      price: '$29.99',
      buyer: 'David Wilson',
      image: '/helm.svg'
    }
  ]

  // Filter tabs
  const filters = ['All', 'Active', 'Suspended', 'Monthly', 'Yearly']

  // Filter licenses based on active filter
  const filteredLicenses = licenses.filter(license => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Active' || activeFilter === 'Suspended') {
      return license.status === activeFilter
    }
    if (activeFilter === 'Monthly' || activeFilter === 'Yearly') {
      return license.subscriptionType === activeFilter
    }
    return true
  })

  // Search filter
  const searchFilteredLicenses = filteredLicenses.filter(license =>
    license.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    license.licenseNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    license.buyer.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
      ),
      active: true
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
      )
    }
  ]

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navItems={navItems} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar setSidebarOpen={setSidebarOpen} pageHeading="Licenses" />

        <main className="flex-1 px-6 lg:px-8 xl:px-12 py-6 lg:py-8 overflow-y-auto bg-white">
          {/* Search Bar */}
          <div className="mb-6 lg:mb-8 max-w-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search licenses"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl bg-[#F7FAFC] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#023347] focus:border-transparent text-base"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mb-8 lg:mb-10">
            <div className="flex space-x-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    px-6 py-2.5 rounded-full text-base font-medium whitespace-nowrap
                    transition-all duration-200
                    ${activeFilter === filter
                      ? 'bg-[#023347] text-white shadow-sm'
                      : 'bg-[#F7FAFC] text-gray-700 hover:bg-[#023347]/10 hover:text-[#023347]'}
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* License Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {searchFilteredLicenses.length > 0 ? (
              searchFilteredLicenses.map((license) => (
                <div
                  key={license.id}
                  className="bg-[#F7FAFC] rounded-2xl p-3 sm:p-4 lg:p-5 flex gap-3 sm:gap-4 lg:gap-5 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#023347]/20 hover:bg-white transition-all duration-200 overflow-hidden"
                >
                  {/* Image Placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden relative">
                      <Image
                        src={license.image}
                        alt={license.productName}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-1.5"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* License Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1.5 break-words">
                        {license.productName}
                      </h3>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`
                          text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap
                          ${license.subscriptionType === 'Monthly'
                            ? 'bg-[#023347]/10 text-[#023347]'
                            : license.subscriptionType === 'Yearly'
                            ? 'bg-[#023347]/15 text-[#023347]'
                            : 'bg-[#023347]/20 text-[#023347]'}
                        `}>
                          {license.subscriptionType}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 mb-2 break-words">
                        {license.price}{license.subscriptionType === 'Monthly' ? '/month' : license.subscriptionType === 'Yearly' ? '/year' : ''}
                      </p>
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${license.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="text-xs text-gray-600">
                          {license.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 break-words">
                        Buyer: {license.buyer}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-4 justify-end">
                      <button className="px-3 py-1.5 sm:py-2 bg-[#F7FAFC] text-[#023347] rounded-full text-xs font-medium hover:bg-[#023347]/10 hover:text-[#023347] transition-colors flex items-center gap-1.5 border border-[#023347]/20">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>View</span>
                      </button>
                      {license.status === 'Suspended' ? (
                        <button className="px-3 py-1.5 sm:py-2 bg-[#F7FAFC] text-[#023347] rounded-full text-xs font-medium hover:bg-[#023347]/10 hover:text-[#023347] transition-colors flex items-center gap-1.5 border border-[#023347]/20">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Activate</span>
                        </button>
                      ) : (
                        <button className="px-3 py-1.5 sm:py-2 bg-[#F7FAFC] text-[#023347] rounded-full text-xs font-medium hover:bg-[#023347]/10 hover:text-[#023347] transition-colors flex items-center gap-1.5 border border-[#023347]/20">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Suspend</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-gray-500 text-base">No licenses found</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

