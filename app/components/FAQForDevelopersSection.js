'use client'

import { useState } from 'react'

export default function FAQForDevelopersSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Do I need to move my packages to your platform?',
      answer: 'No! DevAsset is not a hosting platform. Your packages stay on npm, Docker Hub, GitHub, or any registry you choose. We simply handle the payment and access control layer.',
    },
    {
      question: 'How long does integration take?',
      answer: 'Most developers can integrate DevAsset in under 5 minutes. Simply create a listing, add our "Buy Now" link to your documentation, and you\'re ready to start selling.',
    },
    {
      question: 'What fees do you charge?',
      answer: 'We charge a simple transaction fee of 5% + $0.30 per sale. There are no monthly fees, setup costs, or hidden charges. You only pay when you earn.',
    },
    {
      question: 'How do I handle customer support?',
      answer: 'You maintain full control over customer support for your packages. We handle payment-related inquiries, but you\'re responsible for product support and access issues.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            FAQ for Developers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Common questions about using DevAsset
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left group hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 pr-4 group-hover:text-[#023347] transition-colors duration-200">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pt-0">
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

