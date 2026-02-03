'use client'

import { useState } from 'react'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'

export default function OrdersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  // Sample orders data
  const orders = [
    {
      id: 1,
      orderNumber: '#ORD-7842',
      date: 'May 15, 2025',
      customer: {
        name: 'Sarah Miller',
        email: 'sarah.m@example.com',
        avatar: '/SarahMiller.jpg'
      },
      itemsCount: 3,
      status: 'Pending',
      price: '$124.99'
    },
    {
      id: 2,
      orderNumber: '#ORD-7843',
      date: 'May 16, 2025',
      customer: {
        name: 'Alex Johnson',
        email: 'alex.j@example.com',
        avatar: '/AlexJohnson.jpg'
      },
      itemsCount: 2,
      status: 'Complete',
      price: '$89.50'
    },
    {
      id: 3,
      orderNumber: '#ORD-7844',
      date: 'May 17, 2025',
      customer: {
        name: 'Emily Carter',
        email: 'emily.c@example.com',
        avatar: '/EmilyCarter.jpg'
      },
      itemsCount: 1,
      status: 'Shipped',
      price: '$45.75'
    },
    {
      id: 4,
      orderNumber: '#ORD-7845',
      date: 'May 18, 2025',
      customer: {
        name: 'Michael Chen',
        email: 'michael.c@example.com',
        avatar: '/MichaelChen.jpg'
      },
      itemsCount: 5,
      status: 'Pending',
      price: '$234.50'
    },
    {
      id: 5,
      orderNumber: '#ORD-7846',
      date: 'May 19, 2025',
      customer: {
        name: 'Jessica Taylor',
        email: 'jessica.t@example.com',
        avatar: '/JessicaTaylor.jpg'
      },
      itemsCount: 2,
      status: 'Complete',
      price: '$156.00'
    },
    {
      id: 6,
      orderNumber: '#ORD-7847',
      date: 'May 20, 2025',
      customer: {
        name: 'David Wilson',
        email: 'david.w@example.com',
        avatar: '/DavidWilson.jpg'
      },
      itemsCount: 4,
      status: 'Shipped',
      price: '$189.25'
    },
    {
      id: 7,
      orderNumber: '#ORD-7848',
      date: 'May 21, 2025',
      customer: {
        name: 'John Doe',
        email: 'john.d@example.com',
        avatar: '/JohnDoe.jpg'
      },
      itemsCount: 2,
      status: 'Pending',
      price: '$98.50'
    },
    {
      id: 8,
      orderNumber: '#ORD-7849',
      date: 'May 22, 2025',
      customer: {
        name: 'Olivia',
        email: 'olivia@example.com',
        avatar: '/Olivia.jpg'
      },
      itemsCount: 3,
      status: 'Complete',
      price: '$167.99'
    },
    {
      id: 9,
      orderNumber: '#ORD-7850',
      date: 'May 23, 2025',
      customer: {
        name: 'Arthur',
        email: 'arthur@example.com',
        avatar: '/Arthur.jpg'
      },
      itemsCount: 1,
      status: 'Shipped',
      price: '$76.25'
    }
  ]

  // Filter tabs
  const filters = ['All', 'Pending', 'Complete', 'Shipped']

  // Filter orders based on active filter
  const filteredOrders = orders.filter(order => {
    if (activeFilter === 'All') return true
    return order.status === activeFilter
  })

  // Search filter
  const searchFilteredOrders = filteredOrders.filter(order =>
    order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-orange-500'
      case 'Complete':
        return 'bg-green-500'
      case 'Shipped':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
    }
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
      ),
      active: true
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
        <TopBar setSidebarOpen={setSidebarOpen} pageHeading="Orders" />

        <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 py-6 lg:py-8 overflow-y-auto bg-white">
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
                placeholder="Search orders"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl bg-[#F7FAFC] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#023347] focus:border-transparent text-base"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mb-6 lg:mb-8">
            <div className="flex space-x-3 overflow-x-auto pb-2">
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

          {/* Orders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {searchFilteredOrders.length > 0 ? (
              searchFilteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-[#F7FAFC] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#023347]/20 hover:bg-white transition-all duration-200 flex flex-col"
                >
                  {/* Order Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        {order.orderNumber}
                      </h3>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(order.status)}`}></div>
                      <span className="text-sm font-medium text-gray-700">{order.status}</span>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-200 overflow-hidden relative">
                        <Image
                          src={order.customer.avatar}
                          alt={order.customer.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                        {order.customer.name}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        {order.itemsCount} {order.itemsCount === 1 ? 'item' : 'items'}
                      </p>
                      <p className="text-sm text-gray-600 break-all">
                        {order.customer.email}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">
                      {order.price}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <button className="w-full px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm sm:text-base font-medium flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </button>
                    <button className="w-full px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm sm:text-base font-medium flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                      Print
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-gray-500 text-base">No orders found</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

