'use client'

export default function QuickActions() {
  return (
    <div className="lg:col-span-1">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Actions</h2>
      <div className="space-y-3 sm:space-y-4">
        <button className="group relative w-full bg-[#023347] text-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
          <div className="relative flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="font-semibold text-sm sm:text-base">Add License</span>
          </div>
        </button>
        
        <button className="w-full bg-white border-2 border-gray-200 text-gray-700 rounded-xl p-4 sm:p-5 shadow-sm hover:border-[#023347] hover:shadow-md transition-all">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#F7FAFC] rounded-lg text-[#023347]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-semibold text-sm sm:text-base">Add Invoice</span>
          </div>
        </button>
        
        <button className="w-full bg-white border-2 border-gray-200 text-gray-700 rounded-xl p-4 sm:p-5 shadow-sm hover:border-[#023347] hover:shadow-md transition-all">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#F7FAFC] rounded-lg text-[#023347]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="font-semibold text-sm sm:text-base">Withdraw</span>
          </div>
        </button>
      </div>
    </div>
  )
}













