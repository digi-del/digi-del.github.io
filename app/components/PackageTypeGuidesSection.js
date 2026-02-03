import Link from 'next/link'

export default function PackageTypeGuidesSection() {
  const packageTypes = [
    {
      badge: (
        <div className="absolute top-3 left-3 bg-[#CB3837] text-white px-2.5 py-1 rounded text-xs sm:text-sm font-semibold">
          npm
        </div>
      ),
      title: 'npm Packages',
      description: 'Monetize your private npm packages with token-based access control',
      features: [
        'Scoped package support',
        'Automated token generation',
        'Seamless npm integration',
      ],
      guideLink: '/guides/npm',
    },
    {
      badge: (
        <div className="absolute top-3 left-3 bg-[#2496ED] text-white px-2.5 py-1 rounded text-xs sm:text-sm font-semibold">
          Docker
        </div>
      ),
      title: 'Docker Images',
      description: 'Sell access to your private Docker images with registry tokens',
      features: [
        'Private registry support',
        'Multi-architecture images',
        'Automatic token management',
      ],
      guideLink: '/guides/docker',
    },
    {
      badge: (
        <div className="absolute top-3 left-3 bg-gray-900 text-white px-2.5 py-1 rounded text-xs sm:text-sm font-semibold">
          GitHub
        </div>
      ),
      title: 'GitHub Repositories',
      description: 'Monetize access to your private GitHub repositories',
      features: [
        'Automatic collaborator access',
        'Organization support',
        'Release-based access',
      ],
      guideLink: '/guides/github',
    },
  ]

  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Package Type Guides
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Detailed setup instructions for each package type
          </p>
        </div>

        {/* Package Type Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {packageTypes.map((packageType, index) => (
            <div
              key={index}
              className="group relative bg-[#F7FAFC] rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#023347]/20 transition-all duration-300 p-5 sm:p-6 md:p-7 flex flex-col"
            >
              {/* Badge */}
              {packageType.badge}

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-2.5 mt-10 sm:mt-12 group-hover:text-[#023347] transition-colors duration-300">
                {packageType.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 md:mb-5 leading-relaxed">
                {packageType.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2.5 sm:space-y-3 flex-grow mb-4 sm:mb-5">
                {packageType.features.map((feature, idx) => (
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

              {/* View Guide Link */}
              <Link
                href={packageType.guideLink}
                className="text-gray-700 hover:text-[#023347] font-medium text-sm sm:text-base transition-colors duration-300 inline-flex items-center gap-1 group/link"
              >
                View Guide
                <svg
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
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










