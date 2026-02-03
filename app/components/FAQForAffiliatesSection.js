'use client'

import { useState } from 'react'

export default function FAQForAffiliatesSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How much can I earn as an affiliate?',
      answer: 'Earnings vary based on the model you choose. PPC affiliates earn $0.10-0.50 per click, commission affiliates earn 20-30% of sales, and promo code affiliates earn a guaranteed 15-25% revenue share. Top affiliates earn over $5,000 per month.',
    },
    {
      question: 'How and when do I get paid?',
      answer: 'We pay affiliates via PayPal, bank transfer, or cryptocurrency. Payments are processed monthly with a minimum threshold of $50. You\'ll receive your earnings within 15 days after the end of each month.',
    },
    {
      question: 'Is there an approval process to join?',
      answer: 'No approval is needed! Anyone can join our affiliate program instantly. However, we do monitor for fraudulent activity and reserve the right to terminate accounts that violate our terms.',
    },
    {
      question: 'Can I use multiple earning models?',
      answer: 'Yes! You can use any combination of earning models that works best for your audience. Many affiliates use PPC for general links and promo codes for specific campaigns.',
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
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Everything you need to know about our affiliate program
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left group hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 pr-4 group-hover:text-[#023347] transition-colors duration-200">
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
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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

