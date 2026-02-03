import Link from 'next/link'

export default function CategorySection() {
  const categories = [
    {
      title: 'Docker Images',
      description: 'Containerized applications and environments ready to deploy',
      icon: (
        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
          <img src="/docker.svg" alt="Docker" className="w-10 h-10" />
        </div>
      ),
      href: '/docker-assets',
    },
    {
      title: 'GitHub Repos',
      description: 'Source code repositories for various programming languages',
      icon: (
        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-gray-900">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
          </svg>
        </div>
      ),
      href: '/github-repos',
    },
    {
      title: 'npm Packages',
      description: 'JavaScript libraries and tools for Node.js and browsers',
      icon: (
        <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
          <img src="/npm.svg" alt="npm" className="w-10 h-10" />
        </div>
      ),
      href: '/npm-packages',
    },
    {
      title: 'PyPI Packages',
      description: 'Python libraries and tools for data science, web dev, and more',
      icon: (
        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
          <img src="/pypi.svg" alt="PyPI" className="w-10 h-10 object-contain" />
        </div>
      ),
      href: '/pypi-packages',
    },
    {
      title: 'Helm Charts',
      description: 'Kubernetes application packages for easy deployment',
      icon: (
        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
          <img src="/helm.svg" alt="Helm" className="w-10 h-10 object-contain" />
        </div>
      ),
      href: '/helm-charts',
    },
    {
      title: 'CLI Tools',
      description: 'Command-line utilities to enhance your development workflow',
      icon: (
        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      ),
      href: '/cli-tools',
    },
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center">
          Explore by Category
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-[#023347]/10 border border-gray-100 hover:border-[#023347] transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col hover:scale-[1.02] cursor-pointer overflow-hidden"
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#023347]/0 to-[#023347]/0 group-hover:from-[#023347]/5 group-hover:to-transparent transition-all duration-300 rounded-xl"></div>
              
              {/* Icon */}
              <div className="mb-3 sm:mb-4 relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                <div className="[&>div]:w-12 [&>div]:h-12 sm:[&>div]:w-14 sm:[&>div]:h-14 md:[&>div]:w-16 md:[&>div]:h-16 [&>div]:group-hover:bg-[#023347]/10 [&>div]:group-hover:shadow-md transition-all duration-300">
                  {category.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#023347] transition-colors duration-300 mb-2 relative z-10">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 flex-grow relative z-10">
                {category.description}
              </p>

              {/* Browse Link */}
              <Link
                href={category.href}
                className="relative z-10 text-[#023347] font-medium text-xs sm:text-sm group-hover:font-semibold transition-all duration-300 flex items-center gap-1 group/link"
              >
                Browse
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-300 group-hover/link:translate-x-2 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

