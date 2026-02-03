export default function DeveloperPackagesSection() {
  const packages = [
    {
      badge: "npm",
      badgeColor: "bg-red-500",
      title: "npm Packages",
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-500/20 rounded-lg flex items-center justify-center">
          <img src="/npm.svg" alt="npm" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain" />
        </div>
      ),
      features: [
        "npmjs.com integration",
        "Token-based access control",
        "Private package support",
        "Scoped package handling",
      ],
    },
    {
      badge: "Docker",
      badgeColor: "bg-blue-500",
      title: "Docker Images",
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
          <img src="/docker.svg" alt="Docker" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain" />
        </div>
      ),
      features: [
        "Docker Hub compatible",
        "Private registry support",
        "Pull token generation",
        "Multi-arch support",
      ],
    },
    {
      badge: "GitHub",
      badgeColor: "bg-gray-900",
      title: "GitHub Repositories",
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-900/20 rounded-lg flex items-center justify-center">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-900">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
          </svg>
        </div>
      ),
      features: [
        "Private repo access",
        "Collaborator management",
        "Release-based licensing",
        "Organization support",
      ],
    },
  ]

  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Built for Developer Packages
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Seamless integration with popular package registries
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-3 sm:p-4 md:p-5 flex flex-col relative h-full"
            >
              {/* Badge - Top Left */}
              <div className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 ${pkg.badgeColor} text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-semibold`}>
                {pkg.badge}
              </div>

              {/* Icon - Top Right */}
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3">
                {pkg.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 mt-12 sm:mt-14 md:mt-16">
                {pkg.title}
              </h3>

              {/* Features List */}
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-2.5">
                    <span className="flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-600"
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
                    <span className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center">
          <p className="text-gray-600 text-sm sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6">
            Coming Soon: PyPI, Helm Charts, VS Code Extensions, CLI Tools
          </p>
          <button className="group relative px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-[#023347] text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-900/30 text-sm sm:text-sm md:text-base lg:text-lg font-semibold">
            <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
            <span className="relative">Get Notified</span>
          </button>
        </div>
      </div>
    </section>
  )
}

