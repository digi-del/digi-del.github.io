import Link from 'next/link'

export default function ForDevelopersAffiliatesSection() {
  const cards = [
    {
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#023347] rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      ),
      title: "For Developers",
      features: [
        "No payment infrastructure to build",
        "Keep full control of hosting",
        "One integration, unlimited products",
        "Transparent fee structure",
      ],
      buttonText: "Start Selling →",
      buttonColor: "bg-[#023347]",
      buttonHover: "hover:shadow-lg hover:shadow-blue-900/30",
    },
    {
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#023347] rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      ),
      title: "For Affiliates",
      features: [
        "Promote developer tools",
        "Multiple earning models (PPC, commission, promo codes)",
        "Real-time tracking dashboard",
        "Automated payouts",
      ],
      buttonText: "Join Affiliate Program →",
      buttonColor: "bg-[#023347]",
      buttonHover: "hover:shadow-lg hover:shadow-blue-900/30",
    },
  ]

  return (
    <section className="bg-[#F7FAFC] py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#023347]/20 transition-all duration-300 p-6 sm:p-7 md:p-8 flex flex-col h-full"
            >
              {/* Header with Icon */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#023347] transition-colors duration-300">
                  {card.title}
                </h3>
              </div>

              {/* Features List */}
              <ul className="space-y-3 sm:space-y-3.5 md:space-y-4 mb-6 sm:mb-7 md:mb-8 flex-grow">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <svg
                        className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-500"
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
                    <span className="text-gray-700 text-sm sm:text-sm md:text-base leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={card.title === "For Developers" ? "/for-developers" : "/affiliates"}
                className={`group relative ${card.buttonColor} text-white rounded-xl overflow-hidden transition-all ${card.buttonHover} px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-center text-sm sm:text-base md:text-lg font-semibold`}
              >
                <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
                <span className="relative">{card.buttonText}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

