export default function ComparisonSection() {
  const withoutPaywall = [
    "Build payment processing from scratch",
    "Handle PCI compliance and security",
    "Create affiliate tracking system",
    "Manage license key generation",
    "Calculate commissions manually",
    "Handle refunds and disputes",
    "Maintain uptime and reliability",
    "Build caching and delivery infrastructure",
  ]

  const withPaywall = [
    "One-line integration",
    "Instant payment processing",
    "Built-in affiliate system",
    "Automated access control",
    "Real-time dashboard",
    "$0 upfront cost",
    "5-minute setup",
    "Built-in caching and delivery",
  ]

  return (
    <section className="bg-[#F7FAFC] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Infrastructure You Don't Want to Build
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Focus on your core product, not payment infrastructure
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {/* Without Our Paywall */}
          <div className="bg-white rounded-lg sm:rounded-xl border-2 border-red-100 shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col h-full">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-600 mb-4 sm:mb-5 md:mb-6">
              Without Our Paywall
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 md:space-y-3.5 lg:space-y-4 flex-grow">
              {withoutPaywall.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <span className="flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* With Our Paywall */}
          <div className="bg-white rounded-lg sm:rounded-xl border-2 border-green-100 shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col h-full">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-600 mb-4 sm:mb-5 md:mb-6">
              With Our Paywall
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 md:space-y-3.5 lg:space-y-4 flex-grow">
              {withPaywall.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <span className="flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
