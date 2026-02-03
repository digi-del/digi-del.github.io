"use client"
import Link from 'next/link'

export default function TrendingSection() {
  const products = [
    {
      tag: 'Docker',
      tagColor: 'bg-blue-500 text-white',
      rating: 4.8,
      title: 'Node.js Runtime',
      description: 'Lightweight Node.js container with LTS support',
      downloads: '1.2K',
    },
    {
      tag: 'GitHub',
      tagColor: 'bg-gray-900 text-white',
      rating: 4.5,
      title: 'Vue.js E-commerce',
      description: 'Complete e-commerce solution with Vue.js',
      downloads: '890',
    },
    {
      tag: 'npm',
      tagColor: 'bg-red-500 text-white',
      rating: 4.9,
      title: 'Form Validator',
      description: 'Lightweight form validation library',
      downloads: '2.4K',
    },
    {
      tag: 'PyPI',
      tagColor: 'bg-blue-500 text-white',
      rating: 4.7,
      title: 'Data Science Toolkit',
      description: 'Essential tools for data science projects',
      downloads: '1.7K',
    },
    {
      tag: 'CLI',
      tagColor: 'bg-gray-200 text-gray-700',
      rating: 4.6,
      title: 'Git Helper',
      description: 'Simplify your Git workflow with this CLI tool',
      downloads: '950',
    },
    {
      tag: 'Helm',
      tagColor: 'bg-blue-600 text-white',
      rating: 4.4,
      title: 'WordPress on K8s',
      description: 'Deploy WordPress on Kubernetes easily',
      downloads: '620',
    },
    {
      tag: 'Docker',
      tagColor: 'bg-blue-500 text-white',
      rating: 4.9,
      title: 'PostgreSQL Cluster',
      description: 'High-availability PostgreSQL with replication',
      downloads: '1.1K',
    },
    {
      tag: 'npm',
      tagColor: 'bg-red-500 text-white',
      rating: 4.7,
      title: 'React Chart Library',
      description: 'Beautiful charts for React applications',
      downloads: '3.2K',
    },
  ]

  // Split products for bidirectional scrolling
  const topRow = products.slice(0, 4)
  const bottomRow = products.slice(4, 8)

  return (
    <section className="bg-[#F7FAFC] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative">
      
      {/* Inline Keyframes for Scrolling */}
      <style jsx>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
      `}</style>

      {/* Side Fade Effects */}
      <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-[#F7FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-[#F7FAFC] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12 relative z-20">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Trending Today
          </h2>
          
          {/* Animated "Live" Indicator */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-red-500"></span>
            </span>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg font-medium">
              Live Ecosystem Updates
            </p>
          </div>
        </div>
      </div>

      {/* Container for rows - Pauses on hover */}
      <div className="flex flex-col gap-6 sm:gap-8 group/track">
        
        {/* ROW 1: Moves Left */}
        <div className="flex w-max animate-scroll-left group-hover/track:[animation-play-state:paused]">
          {[...topRow, ...topRow, ...topRow].map((product, index) => (
            <Card key={`top-${index}`} product={product} index={index} />
          ))}
        </div>

        {/* ROW 2: Moves Right */}
        <div className="flex w-max animate-scroll-right group-hover/track:[animation-play-state:paused]">
          {[...bottomRow, ...bottomRow, ...bottomRow].map((product, index) => (
            <Card key={`bottom-${index}`} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ product, index }) {
  return (
    // Added padding bottom to ensure shadow/zoom doesn't get cut off
    <div className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] mx-2 sm:mx-3 pb-4 pt-4"> 
      <div className="
        bg-white 
        rounded-xl 
        shadow-sm 
        hover:shadow-xl 
        border border-gray-100 
        
        /* HOVER EFFECTS: Border Color & Scale Zoom */
        hover:border-[#1C485A] 
        hover:scale-[1.03] 
        
        p-4 sm:p-5 md:p-6 
        flex flex-col 
        h-full 
        transform 
        transition-all 
        duration-300 
        group/card 
        cursor-pointer
      ">
        
        {/* Tag & Rating */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-bold ${product.tagColor} transition-transform duration-300 group-hover/card:scale-105`}>
            {product.tag}
          </span>
          <div className="flex items-center gap-1 bg-gray-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg">
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <span className="text-xs font-bold text-gray-700">{product.rating}</span>
          </div>
        </div>

        {/* Title: Changes to Theme Color on Hover */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 truncate group-hover/card:text-[#1C485A] transition-colors duration-300">
          {product.title}
        </h3>
        
        <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span>{product.downloads}</span>
          </div>
          
          <Link
            href={`/product/trending-${index}`}
            className="flex items-center gap-1 text-[#1C485A] font-semibold text-xs sm:text-sm group/link"
          >
            View
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-300 group-hover/card:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}