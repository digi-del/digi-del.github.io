export default function DeveloperDashboardSection() {
  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Developer Dashboard
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Track sales, manage products, and view analytics
          </p>
        </div>

        {/* Dashboard Image */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="rounded-xl border border-gray-200 shadow-lg overflow-hidden bg-white">
            <img
              src="/dashboard.png"
              alt="Developer Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}










