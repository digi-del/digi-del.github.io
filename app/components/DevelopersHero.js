import Link from 'next/link'

export default function DevelopersHero() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 sm:mb-8">
            Sell Your npm, Docker, and GitHub Packages
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            Add a paywall in one line of code. Start earning today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6">
            <Link
              href="/signup"
              className="group relative px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 bg-[#023347] text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-900/30 font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
              <span className="relative">Get Started Free</span>
            </Link>

            <Link
              href="/docs"
              className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 bg-white text-[#023347] border-2 border-gray-200 rounded-xl font-semibold hover:border-[#023347] hover:bg-gray-50 transition-all duration-200 text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
