import Link from 'next/link'

export default function FeaturedSection() {
  const products = [
    {
      type: 'Docker',
      typeColor: 'bg-blue-500',
      icon: (
        <img 
          src="/nginx-icon.svg" 
          alt="Nginx" 
          className="w-16 h-16 object-contain"
        />
      ),
      title: 'Production-Ready Nginx',
      description: 'Optimized Nginx server with SSL support and caching',
      seller: 'by DevOps Solutions',
    },
    {
      type: 'GitHub',
      typeColor: 'bg-gray-900',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-16 h-16 text-gray-900">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'React Admin Dashboard',
      description: 'Complete admin template with dark mode support',
      seller: 'by UI Components',
    },
    {
      type: 'npm',
      typeColor: 'bg-red-500',
      icon: (
        <img 
          src="/npm.svg" 
          alt="npm" 
          className="w-16 h-16 object-contain"
        />
      ),
      title: 'Date Utils Pro',
      description: 'Advanced date manipulation library with timezone support',
      seller: 'by JS Tools',
    },
    {
      type: 'Helm',
      typeColor: 'bg-blue-600',
      icon: (
        <img 
          src="/kubernetes-svgrepo-com.svg" 
          alt="Kubernetes" 
          className="w-16 h-16 object-contain"
        />
      ),
      title: 'Kubernetes Monitor',
      description: 'Complete monitoring stack for Kubernetes clusters',
      seller: 'by CloudOps',
    },
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center">
          Featured by Our Developers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 p-4 sm:p-5 md:p-6 flex flex-col"
            >
              {/* Type Tag */}
              <div className="mb-3 sm:mb-4">
                <span className={`inline-block px-2 sm:px-3 py-1 rounded-md text-xs font-semibold text-white ${product.typeColor}`}>
                  {product.type}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-3 sm:mb-4 flex items-center justify-center h-16 sm:h-20 md:h-24">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                  {product.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-3">
                {product.description}
              </p>

              {/* Seller */}
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                {product.seller}
              </p>

              {/* View Product Button */}
              <Link
                href={`/product/${index + 1}`}
                className="group relative px-3 sm:px-4 py-2 sm:py-2.5 bg-[#023347] text-white rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-900/30 text-center text-xs sm:text-sm font-medium"
              >
                <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
                <span className="relative">View Product</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

