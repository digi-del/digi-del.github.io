export default function PricingModelsSection() {
  const pricingModels = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'One-Time Purchase',
      description: 'Customers pay once for perpetual access to your package',
      features: [
        'Simple pricing structure',
        'No recurring billing',
        'Instant access after payment',
      ],
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Subscription',
      description: 'Recurring revenue with automatic renewals',
      features: [
        'Monthly or yearly billing',
        'Automatic access management',
        'Cancellation handling',
      ],
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#023347]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Team Licenses',
      description: 'Bulk pricing for teams and organizations',
      features: [
        'Seat-based pricing',
        'Team management dashboard',
        'Volume discounts',
      ],
    },
  ]

  return (
    <section className="bg-[#F7FAFC] py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Pricing Models You Can Offer
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Flexible options to monetize your packages
          </p>
        </div>

        {/* Pricing Model Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {pricingModels.map((model, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#023347]/20 transition-all duration-300 p-5 sm:p-6 md:p-7 flex flex-col"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#023347]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:bg-[#023347]/20 transition-colors duration-300">
                {model.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-2.5 group-hover:text-[#023347] transition-colors duration-300">
                {model.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 md:mb-5 leading-relaxed">
                {model.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2.5 sm:space-y-3 flex-grow">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-2.5">
                    <span className="flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500"
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
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

