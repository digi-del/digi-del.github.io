import Link from 'next/link'

export default function MostDownloadedSection() {
  const downloads = [
    {
      rank: 1,
      name: 'Alpine Linux',
      type: 'Docker',
      typeColor: 'bg-blue-500',
      icon: (
        <img src="/docker.svg" alt="Docker" className="w-6 h-6 object-contain" />
      ),
      downloads: '5.2K',
    },
    {
      rank: 2,
      name: 'React Router',
      type: 'npm',
      typeColor: 'bg-red-500',
      icon: (
        <img src="/npm.svg" alt="npm" className="w-6 h-6 object-contain" />
      ),
      downloads: '4.8K',
    },
    {
      rank: 3,
      name: 'VS Code Theme',
      type: 'GitHub',
      typeColor: 'bg-gray-900',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-900">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      ),
      downloads: '3.9K',
    },
    {
      rank: 4,
      name: 'Pandas Pro',
      type: 'PyPI',
      typeColor: 'bg-blue-500',
      icon: (
        <img src="/pypi.svg" alt="PyPI" className="w-6 h-6 object-contain" />
      ),
      downloads: '3.5K',
    },
    {
      rank: 5,
      name: 'Kafka Cluster',
      type: 'Helm',
      typeColor: 'bg-blue-600',
      icon: (
        <img src="/helm.svg" alt="Helm" className="w-6 h-6 object-contain" />
      ),
      downloads: '2.8K',
    },
  ]

  return (
    <section className="bg-[#F7FAFC] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center">
          Most Downloaded This Week
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {downloads.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-[#023347]/10 border border-gray-100 hover:border-[#023347] transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col items-center w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] hover:scale-105 cursor-pointer"
            >
              {/* Rank Badge */}
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-8 h-8 sm:w-10 sm:h-10 bg-[#023347] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg shadow-lg">
                #{item.rank}
              </div>

              {/* Type Tag and Icon */}
              <div className="flex flex-col sm:flex-row items-center gap-2 mb-3 sm:mb-4 mt-1 sm:mt-2">
                <span className={`inline-block px-2 sm:px-3 py-1 rounded-md text-xs font-semibold text-white ${item.typeColor}`}>
                  {item.type}
                </span>
                <div className="flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 text-center group-hover:text-[#023347] transition-colors duration-300 line-clamp-2">
                {item.name}
              </h3>

              {/* Downloads */}
              <div className="flex items-center gap-1 text-gray-600 text-xs sm:text-sm mt-auto">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="font-semibold">{item.downloads} downloads</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

