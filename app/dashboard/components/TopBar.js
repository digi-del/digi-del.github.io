'use client'

import Image from 'next/image'

export default function TopBar({ setSidebarOpen, pageHeading = 'Dashboard' }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-3 sm:gap-4 h-14 sm:h-16">
          {/* Page Heading + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-[#023347] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Open sidebar"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
              {pageHeading}
            </h1>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="p-1.5 sm:p-2 text-gray-600 hover:text-[#023347] hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            {/* Settings (Lucide-style icon) */}
            <button className="p-1.5 sm:p-2 text-gray-600 hover:text-[#023347] hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12a2 2 0 0 0 2 2h1.26a8 8 0 0 0 .58 1.4l-.89.89a2 2 0 1 0 2.83 2.83l.89-.89a8 8 0 0 0 1.4.58V20a2 2 0 0 0 4 0v-1.26a8 8 0 0 0 1.4-.58l.89.89a2 2 0 1 0 2.83-2.83l-.89-.89a8 8 0 0 0 .58-1.4H20a2 2 0 0 0 0-4h-1.26a8 8 0 0 0-.58-1.4l.89-.89a2 2 0 0 0-2.83-2.83l-.89.89a8 8 0 0 0-1.4-.58V4a2 2 0 0 0-4 0v1.26a8 8 0 0 0-1.4.58l-.89-.89a2 2 0 1 0-2.83 2.83l.89.89a8 8 0 0 0-.58 1.4H4a2 2 0 0 0-2 2Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="hidden xs:inline-flex p-1.5 sm:p-2 text-gray-600 hover:text-[#023347] hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button className="p-1.5 sm:p-2 text-gray-600 hover:text-[#023347] hover:bg-gray-100 rounded-full transition-colors">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white shadow-sm overflow-hidden relative">
                <Image
                  src="/AlexJohnson.jpg"
                  alt="Profile"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

