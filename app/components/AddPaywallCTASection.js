import Link from 'next/link'

export default function AddPaywallCTASection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#023347] via-[#023347] to-[#0A2E3A]"></div>
      
      {/* Optional decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
            Add a paywall to your packages in minutes
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            No marketplace fees. No hosting requirements. Just payment infrastructure that works.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6">
            {/* Get Started Free Button */}
            <Link
              href="/signup"
              className="group relative px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 bg-white text-[#023347] rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-white/20 border-2 border-white font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full bg-[#023347]/5 group-hover:bg-[#023347]/10 transition-colors duration-300"></div>
              <span className="relative">Get Started Free</span>
            </Link>

            {/* View Documentation Button */}
            <Link
              href="/docs"
              className="group relative px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 bg-[#023347] text-white border-2 border-white/30 rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-white/20 hover:border-white font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
              <span className="relative">View Documentation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
