export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'Software Developer',
      quote: 'This paywall has completely transformed how I monetize my open-source projects. The process is seamless and the community is amazing.',
      image: '/JohnDoe.jpg',
    },
    {
      name: 'Sarah Miller',
      title: 'DevOps Engineer',
      quote: 'I\'ve found so many high-quality Docker images and Helm charts here that saved me weeks of development time. Highly recommended!',
      image: '/SarahMiller.jpg',
    },
    {
      name: 'Alex Johnson',
      title: 'Full Stack Developer',
      quote: 'As a seller, I\'ve earned more in one month than I did in six months on other platforms. The payment system is reliable and fast.',
      image: '/AlexJohnson.jpg',
    },
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center">
          What Developers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-[#023347]/10 border border-gray-100 hover:border-[#023347] transition-all duration-300 p-6 sm:p-8 flex flex-col items-center text-center group"
            >
              {/* Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-[#023347] transition-colors duration-300">
                {testimonial.name}
              </h3>

              {/* Title */}
              <p className="text-gray-500 text-sm sm:text-base">
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

