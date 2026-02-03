'use client'

import Link from 'next/link'

const statusStyles = {
  Completed: 'bg-green-50 text-green-700 border border-green-100',
  Pending: 'bg-amber-50 text-amber-700 border border-amber-100',
  Failed: 'bg-red-50 text-red-700 border border-red-100'
}

export default function RecentOrders({ recentOrders }) {
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Recent Orders</h2>
        <Link href="/orders" className="text-sm sm:text-base text-[#023347] hover:underline font-medium">
          View All
        </Link>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-[#F7FAFC]">
              <tr className="text-left text-xs sm:text-sm font-semibold text-gray-700">
                <th className="px-4 sm:px-6 py-3">Order Id</th>
                <th className="px-4 sm:px-6 py-3">Customer</th>
                <th className="px-4 sm:px-6 py-3">Status</th>
                <th className="px-4 sm:px-6 py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-900 font-semibold">
                    {order.orderNumber}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <p className="font-medium text-gray-900">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${statusStyles[order.status] || 'bg-gray-100 text-gray-700'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right">
                    <p className="font-bold text-gray-900">{order.price}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

