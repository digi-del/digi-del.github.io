import Link from 'next/link'

export default function HowItWorksForDevelopersSection() {
  const steps = [
    {
      number: 1,
      title: 'Create Your Package',
      description: 'Build your npm package, Docker image, or GitHub repository as usual',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'List on DevAsset',
      description: 'Create a listing with pricing, description, and access terms',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Add Paywall Link',
      description: "Embed our 'Buy Now' button or link in your documentation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      number: 4,
      title: 'Start Earning',
      description: 'Receive payments automatically when customers purchase access',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-[#F7FAFC] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5">
            How It Works for Developers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            From package creation to payment in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#023347] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white font-bold text-xl sm:text-2xl md:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-[#023347] group-hover:bg-[#023347] group-hover:text-white transition-all duration-300 shadow-sm">
                {step.icon}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#023347] transition-colors duration-300">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base max-w-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/signup"
            className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-[#023347] text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-900/30 text-base sm:text-lg md:text-xl font-semibold"
          >
            <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
            <span className="relative">Start Selling Today</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
