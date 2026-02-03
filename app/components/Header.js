'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Developers', href: '/for-developers' },
    { name: 'Affiliates', href: '/affiliates' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Docs', href: '/docs' },
  ]

  const isActive = (href) => {
    if (href === '/for-developers') {
      return pathname === '/for-developers'
    }
    if (href === '/how-it-works') {
      return pathname === '/how-it-works'
    }
    return pathname === href
  }

  return (
    <header className="bg-[#F7FAFC] w-full sticky top-0 z-50 border-b border-gray-200">
      <nav className="w-full relative">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Logo - Pushed to far left */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-[#023347] text-2xl font-bold">&lt; /&gt;</div>
              <span className="text-xl md:text-2xl font-bold text-gray-900">DevAsset</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-1 justify-center">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 xl:px-4 py-2 text-sm xl:text-base transition-colors font-medium ${
                    active
                      ? 'text-[#023347] font-semibold'
                      : 'text-gray-700 hover:text-[#023347]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Desktop Auth Buttons - Pushed to far right */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <Link
              href="/login"
              className="px-4 xl:px-6 py-2 xl:py-2.5 h-10 xl:h-11 flex items-center justify-center border-2 border-gray-200 text-gray-700 rounded-xl hover:border-[#023347] hover:bg-gray-50 transition-all duration-200 text-sm xl:text-base font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="group relative px-4 xl:px-6 py-2 xl:py-2.5 h-10 xl:h-11 flex items-center justify-center bg-[#023347] text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-900/30 text-sm xl:text-base font-medium"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
              <span className="relative">Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Button - Right side */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#023347] focus:outline-none ml-auto"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 top-16 md:top-20"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            {/* Mobile Menu Dropdown */}
            <div className="lg:hidden absolute top-full left-0 right-0 bg-[#F7FAFC] border-b border-gray-200 shadow-lg z-50 pb-4">
              <div className="flex flex-col space-y-1 pt-4 px-4 sm:px-6">
                {navLinks.map((link) => {
                  const active = isActive(link.href)
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-2 text-base rounded-md transition-colors font-medium ${
                        active
                          ? 'text-[#023347] bg-gray-50 font-semibold'
                          : 'text-gray-700 hover:text-[#023347] hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                })}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Link
                    href="/login"
                    className="px-4 py-2.5 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-[#023347] hover:bg-gray-50 transition-all duration-200 text-base font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="group relative px-4 py-2.5 bg-[#023347] text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-900/30 text-base font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
                    <span className="relative">Get Started</span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}

