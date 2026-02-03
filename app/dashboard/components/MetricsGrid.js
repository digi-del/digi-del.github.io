'use client'

export default function MetricsGrid({ metrics }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-[#F7FAFC] rounded-lg text-[#023347]">
              {metric.icon}
            </div>
            <span
              className={`text-sm font-semibold ${
                metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {metric.change}
            </span>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">{metric.title}</h3>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">{metric.value}</p>
        </div>
      ))}
    </div>
  )
}













