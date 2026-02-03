'use client'
import Image from 'next/image'
import { useState } from 'react'

function AvatarImage({ src, alt, fallbackUrl }) {
  const [imageError, setImageError] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <div className="w-full h-full relative">
      {!imageError ? (
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="object-cover rounded-full"
          onError={() => {
            setImageError(true)
            setImgSrc(fallbackUrl)
          }}
          unoptimized
        />
      ) : (
        <img
          src={fallbackUrl}
          alt={alt}
          className="w-full h-full object-cover rounded-full"
        />
      )}
    </div>
  )
}

export default function SuccessStoriesAffiliatesSection() {
  const testimonials = [
    {
      name: 'Michael Kim',
      role: 'Tech Blogger',
      quote: "I've been promoting DevAsset on my tech blog for 6 months and now earn over $3,000/month. The PPC model works perfectly for my high-traffic site.",
      avatar: '/MichaelKim.jpg',
      rating: 5,
    },
    {
      name: 'Lisa Park',
      role: 'YouTube Creator',
      quote: "The promo code model is a game-changer! My viewers love getting a discount, and I earn a guaranteed revenue share. Win-win!",
      avatar: '/LisaPark.jpg',
      rating: 5,
    },
    {
      name: 'Robert Torres',
      role: 'Newsletter Publisher',
      quote: "The 30-day cookie duration means I get credit for sales even when my subscribers don't buy immediately. My earnings have doubled!",
      avatar: '/RobertTorres.jpg',
      rating: 5,
    },
  ]

  return (
    <section className="bg-[#F7FAFC] py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Success Stories from Our Affiliates
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Hear from affiliates who are earning with our program.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#023347]/20 transition-all duration-300 p-5 sm:p-6 md:p-7 flex flex-col"
            >
              {/* Avatar */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden mb-4 sm:mb-5 ring-2 ring-gray-100 group-hover:ring-[#023347]/30 transition-all duration-300 relative">
                <AvatarImage
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fallbackUrl={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=023347&color=fff&size=128`}
                />
              </div>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-1.5 group-hover:text-[#023347] transition-colors duration-300">
                {testimonial.name}
              </h3>

              {/* Title */}
              <p className="text-sm sm:text-base text-gray-500 mb-3 sm:mb-4">
                {testimonial.role}
              </p>

              {/* Quote */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 flex-grow italic">
                "{testimonial.quote}"
              </p>

              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

