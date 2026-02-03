'use client'

export default function SuccessStoriesSection() {
  const testimonials = [
    {
      image: '/AlexJohnson.jpg',
      name: 'Alex Singh',
      title: 'Creator of Pro Utils',
      quote: "DevAsset helped me monetize my npm package without building a payment system. I'm now earning $3,000/month from a package I built as a side project.",
      rating: 5,
    },
    {
      image: '/SarahMiller.jpg',
      name: 'Maria Johnson',
      title: 'DevOps Engineer',
      quote: 'Our Docker images were popular but we couldn\'t monetize them. With DevAsset, we now have a recurring revenue stream that supports our open-source work.',
      rating: 5,
    },
    {
      image: '/JohnDoe.jpg',
      name: 'Tom Chen',
      title: 'UI Components Creator',
      quote: 'The team licensing feature is perfect for our enterprise customers. We\'ve increased our revenue by 40% since switching to DevAsset.',
      rating: 5,
    },
  ]

  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Success Stories
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Hear from developers who are monetizing their packages
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden mb-4 sm:mb-5 ring-2 ring-gray-100 group-hover:ring-[#023347]/30 transition-all duration-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=023347&color=fff&size=128`
                  }}
                />
              </div>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-1.5 group-hover:text-[#023347] transition-colors duration-300">
                {testimonial.name}
              </h3>

              {/* Title */}
              <p className="text-sm sm:text-base text-gray-500 mb-3 sm:mb-4">
                {testimonial.title}
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

