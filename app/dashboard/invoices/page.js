'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'

export default function InvoicesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  // Sample invoices data
  const invoices = [
    {
      id: 1,
      invoiceNumber: '#INV-2025-001',
      date: 'May 20, 2025',
      frequency: 'Monthly',
      buyer: 'Sophia Clark',
      status: 'Paid',
      type: 'Recurring',
      amount: '$124.99'
    },
    {
      id: 2,
      invoiceNumber: '#INV-2025-002',
      date: 'May 20, 2025',
      frequency: 'Monthly',
      buyer: 'Alex Walker',
      status: 'Pending',
      type: 'One-time',
      amount: '$87'
    },
    {
      id: 3,
      invoiceNumber: '#INV-2025-003',
      date: 'May 20, 2025',
      frequency: 'Monthly',
      buyer: 'Emily Carter',
      status: 'Overdue',
      type: 'Usage-based',
      amount: '$44.99'
    },
    {
      id: 4,
      invoiceNumber: '#INV-2025-004',
      date: 'May 19, 2025',
      frequency: 'Yearly',
      buyer: 'Michael Chen',
      status: 'Paid',
      type: 'Recurring',
      amount: '$299.99'
    },
    {
      id: 5,
      invoiceNumber: '#INV-2025-005',
      date: 'May 18, 2025',
      frequency: 'Monthly',
      buyer: 'Jessica Taylor',
      status: 'Pending',
      type: 'One-time',
      amount: '$156.50'
    },
    {
      id: 6,
      invoiceNumber: '#INV-2025-006',
      date: 'May 17, 2025',
      frequency: 'Monthly',
      buyer: 'David Wilson',
      status: 'Overdue',
      type: 'Usage-based',
      amount: '$89.25'
    },
    {
      id: 7,
      invoiceNumber: '#INV-2025-007',
      date: 'May 16, 2025',
      frequency: 'Monthly',
      buyer: 'Sarah Miller',
      status: 'Paid',
      type: 'Recurring',
      amount: '$199.99'
    },
    {
      id: 8,
      invoiceNumber: '#INV-2025-008',
      date: 'May 15, 2025',
      frequency: 'Yearly',
      buyer: 'James Anderson',
      status: 'Paid',
      type: 'One-time',
      amount: '$450.00'
    }
  ]

  // Filter tabs
  const filters = ['All', 'Paid', 'Pending', 'Overdue', 'Recurring']

  // Filter invoices based on active filter
  const filteredInvoices = invoices.filter(invoice => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Recurring') {
      return invoice.type === 'Recurring'
    }
    return invoice.status === activeFilter
  })

  // Search filter
  const searchFilteredInvoices = filteredInvoices.filter(invoice =>
    invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.buyer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-700'
      case 'Pending':
        return 'bg-orange-100 text-orange-700'
      case 'Overdue':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  // Get type color
  const getTypeColor = (type) => {
    switch (type) {
      case 'Recurring':
        return 'bg-blue-100 text-blue-700'
      case 'One-time':
        return 'bg-green-100 text-green-700'
      case 'Usage-based':
        return 'bg-orange-100 text-orange-700'
      default:
        return 'bg-gray-100 text-gray-700'
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
      )
    },
    {
      name: 'Invoices',
      href: '/dashboard/invoices',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      active: true
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
        <TopBar setSidebarOpen={setSidebarOpen} pageHeading="Invoices" />

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
                placeholder="Search Invoices"
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

          {/* Invoices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {searchFilteredInvoices.length > 0 ? (
              searchFilteredInvoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="bg-[#F7FAFC] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#023347]/20 hover:bg-white transition-all duration-200 flex flex-col"
                >
                  {/* Invoice Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        {invoice.invoiceNumber}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{invoice.date}</p>
                      <p className="text-sm font-semibold text-gray-900 mb-2">{invoice.frequency}</p>
                    </div>
                    {/* Type Badge */}
                    <div className="flex-shrink-0 ml-2">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${getTypeColor(invoice.type)}`}>
                        {invoice.type}
                      </span>
                    </div>
                  </div>

                  {/* Buyer Info */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      Buyer: <span className="font-medium text-gray-900">{invoice.buyer}</span>
                    </p>
                  </div>

                  {/* Status Badge and Amount */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">
                      {invoice.amount}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <button className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm sm:text-base font-medium flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </button>
                    <button className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm sm:text-base font-medium flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-gray-500 text-base">No invoices found</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}








