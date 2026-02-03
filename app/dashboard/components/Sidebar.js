'use client'

import Link from 'next/link'

export default function Sidebar({ sidebarOpen, setSidebarOpen, navItems }) {
  return (
    <>
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-[280px] sm:w-80 lg:w-64 xl:w-72
          max-w-[85vw] sm:max-w-[90vw] lg:max-w-none
          bg-white border-r border-gray-200 shadow-xl lg:shadow-none
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col h-full
        `}
      >
        {/* Sidebar Header with Logo */}
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20 px-4 sm:px-5 lg:px-6 border-b border-gray-200 flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0 min-w-0">
            <div className="text-[#023347] text-xl sm:text-2xl font-bold flex-shrink-0">&lt; /&gt;</div>
            <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 truncate">DevAsset</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#023347] hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 px-3 sm:px-4 lg:px-5 py-3 sm:py-4 lg:py-6 space-y-1.5 sm:space-y-2 overflow-y-auto min-h-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`
                flex items-center space-x-3 px-3 sm:px-4 lg:px-5 py-3 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl
                transition-all duration-200 text-sm sm:text-base
                ${item.active
                  ? 'bg-[#023347] text-white shadow-sm'
                  : 'text-gray-700 hover:bg-[#F7FAFC] hover:text-[#023347] active:bg-[#F7FAFC]'}
              `}
            >
              <span className={`flex-shrink-0 ${item.active ? 'text-white' : 'text-gray-500'}`}>
                {item.icon}
              </span>
              <span className="font-medium truncate">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer - Fixed at Bottom */}
        <div className="p-3 sm:p-4 lg:p-5 border-t border-gray-200 flex-shrink-0 bg-white">
          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center space-x-3 px-3 sm:px-4 lg:px-5 py-3 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl text-gray-700 hover:bg-[#F7FAFC] hover:text-[#023347] active:bg-[#F7FAFC] transition-all duration-200 text-sm sm:text-base"
          >
            <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium truncate">Back to Home</span>
          </Link>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  )
}

