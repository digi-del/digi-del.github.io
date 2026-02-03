import Link from 'next/link'
import { Cookie } from 'lucide-react'

export default function ThreeEarningModelsSection() {
  const models = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: 'Pay Per Click (PPC)',
      description: 'Earn money whenever someone clicks your affiliate link — no purchase needed.',
      features: [
        'Get paid for every valid click',
        'No conversion required',
        'Great for high-traffic sites',
      ],
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: 'Cookie + Sales Commission',
      description: 'We track purchases through long-duration cookies. When a user buys, you get a commission.',
      features: [
        '30-day cookie duration',
        'Up to 30% commission',
        'Recurring commissions on subscriptions',
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: 'Promo Code Revenue Share',
      description: 'Give your followers a discount with your promo code and earn guaranteed net revenue per sale.',
      features: [
        'Custom discount codes',
        'Guaranteed revenue share',
        'Higher conversion rates',
      ],
    },
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5">
            Three Earning Models
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Choose the model that works best for your audience
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#023347]/20 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#023347] rounded-2xl flex items-center justify-center mb-6 text-white">
                {model.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {model.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 flex-grow">
                {model.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link
                href="#"
                className="text-[#023347] font-semibold text-base sm:text-lg hover:text-[#023347]/80 transition-colors inline-flex items-center gap-2 group"
              >
                Learn More
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

