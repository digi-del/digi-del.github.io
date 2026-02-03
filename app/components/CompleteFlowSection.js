import React from 'react';

export default function CompleteFlowSection() {
  const columns = [
    {
      title: 'Developers',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      items: [
        'Create npm/Docker/GitHub packages',
        'Host on their own registries',
        'Set pricing and terms',
        'Add our "Buy Now" link',
      ],
    },
    {
      title: 'Caching & Integration',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      items: [
        'Provide platform access credentials',
        'We cache your assets securely',
        'Set pricing and license terms',
        'Assets sync automatically',
      ],
    },
    {
      title: 'Customers',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      items: [
        'Click "Buy Now" from dev site',
        'Complete payment through paywall',
        'Receive access credentials',
        'Install from our cached registry',
      ],
    },
    {
      title: 'Affiliates',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      items: [
        'Discover products to promote',
        'Get tracking links/codes',
        'Earn commissions automatically',
        'View real-time analytics',
      ],
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#023347] mb-3 sm:mb-4">
            The Complete Flow
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            How developers, affiliates, and customers interact through our platform
          </p>
        </div>

        {/* Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {columns.map((col) => (
            <div
              key={col.title}
              className="bg-gray-50 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#023347] rounded-full flex items-center justify-center text-white mb-4 sm:mb-6">
                {col.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#023347] mb-3 sm:mb-4">
                {col.title}
              </h3>

              {/* Features List */}
              <ul className="space-y-2 sm:space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600">
                    <svg 
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}