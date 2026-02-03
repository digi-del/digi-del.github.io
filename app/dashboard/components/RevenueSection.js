'use client'

export default function RevenueSection({ timePeriod, setTimePeriod, chartData }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100 mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Revenue Over Time</h2>
        
        <div className="flex items-center space-x-2 bg-[#F7FAFC] rounded-lg p-1">
          {['Week', 'Month', 'Year'].map((period) => (
            <button
              key={period}
              onClick={() => setTimePeriod(period)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                timePeriod === period
                  ? 'bg-[#023347] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#023347]'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-1">Revenue</p>
        <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">$1,234</p>
        <p className="text-sm text-green-600 font-semibold">Last 30 days +12%</p>
      </div>

      <div className="h-48 sm:h-64 relative">
        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#023347" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#023347" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="0"
              y1={40 + i * 40}
              x2="400"
              y2={40 + i * 40}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          ))}
          <path
            d={`M 0,200 L 0,${200 - chartData[0] * 2} ${chartData
              .map((val, i) => `L ${(i + 1) * (400 / chartData.length)},${200 - val * 2}`)
              .join(' ')} L 400,200 Z`}
            fill="url(#gradient)"
          />
          <path
            d={`M 0,${200 - chartData[0] * 2} ${chartData
              .map((val, i) => `L ${(i + 1) * (400 / chartData.length)},${200 - val * 2}`)
              .join(' ')}`}
            fill="none"
            stroke="#023347"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {chartData.map((val, i) => (
            <circle
              key={i}
              cx={(i + 1) * (400 / chartData.length)}
              cy={200 - val * 2}
              r="4"
              fill="#023347"
            />
          ))}
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs text-gray-500">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    </div>
  )
}













