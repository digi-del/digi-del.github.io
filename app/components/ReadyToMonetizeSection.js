import Link from 'next/link'

export default function ReadyToMonetizeSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-[#023347]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
            Ready to Monetize Your Packages?
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers who are earning from their work with DevAsset
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/signup"
              className="group relative px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 bg-white text-[#023347] rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-white/20 font-semibold text-base sm:text-lg md:text-xl w-full sm:w-auto"
            >
              <span className="relative">Get Started Free</span>
            </Link>

            {/* Additional Text */}
            <p className="text-sm sm:text-base text-white/80">
              No credit card required. 5-minute setup.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}









