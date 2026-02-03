'use client'

import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import MetricsGrid from './components/MetricsGrid'
import RevenueSection from './components/RevenueSection'
import QuickActions from './components/QuickActions'
import RecentOrders from './components/RecentOrders'

export default function DashboardPage() {
  const [timePeriod, setTimePeriod] = useState('Week')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Sample data
  const metrics = [
    {
      title: 'Sales Today',
      value: '$1,234',
      change: '+8%',
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Orders',
      value: '42',
      change: '+12%',
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: 'Licenses',
      value: '18',
      change: '↑ 3 new',
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      )
    },
    {
      title: 'Invoices',
      value: '24',
      change: '↓ 2 overdue',
      changeType: 'negative',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ]

  const recentOrders = [
    {
      id: 1,
      name: 'Kubernetes Cluster Blueprint',
      orderNumber: '#12345',
      price: '$249',
      payout: '$212',
      customer: 'Sarah',
      date: 'Mar 12, 2025',
      platform: 'Docker',
      paymentMethod: 'Visa •• 4242',
      items: 3,
      status: 'Completed',
      licenseType: 'Team',
      icon: (
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#023347]">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      name: 'GitHub Actions CI Template',
      orderNumber: '#67890',
      price: '$129',
      payout: '$110',
      customer: 'Emmah',
      date: 'Mar 11, 2025',
      platform: 'GitHub',
      paymentMethod: 'Mastercard •• 3011',
      items: 2,
      status: 'Pending',
      licenseType: 'Pro',
      icon: (
        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-[#6b21a8]">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.77.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0C16.7 5.68 17.7 6 17.7 6c.66 1.64.25 2.86.12 3.16.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.66-5.49 5.96.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 0z" />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      name: 'npm UI Component Pack',
      orderNumber: '#11223',
      price: '$89',
      payout: '$75',
      customer: 'James',
      date: 'Mar 10, 2025',
      platform: 'npm',
      paymentMethod: 'PayPal',
      items: 5,
      status: 'Completed',
      licenseType: 'Single',
      icon: (
        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#d00000]">
          <svg className="w-7 h-7" viewBox="0 0 780 250" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h780v250H0V0zm90 200V50h100v150H90zm120 0V50h100v150H210zm120 0V50h100v150H330zm120 0V50h100v150H450zm120 0V50h100v150H570zm120 0V50h100v150H690z" />
          </svg>
        </div>
      )
    }
  ]

  // Chart data points (simplified line chart)
  const chartData = [65, 70, 68, 75, 80, 85]

  // Navigation items
  const navItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      active: true
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
      )
    }
  ]

  return (
    <div className="h-screen bg-[#F7FAFC] flex overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navItems={navItems} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-y-auto">
          <div className="mb-6 sm:mb-8">
            <p className="text-lg text-gray-600">Welcome back, Alex!</p>
          </div>

          <MetricsGrid metrics={metrics} />
          <RevenueSection timePeriod={timePeriod} setTimePeriod={setTimePeriod} chartData={chartData} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <QuickActions />
            <RecentOrders recentOrders={recentOrders} />
          </div>
        </main>
      </div>
    </div>
  )
}

