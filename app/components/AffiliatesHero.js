"use client"
import Link from 'next/link'
import Image from 'next/image'

export default function AffiliatesHero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      
      {/* 1. Animation Logic */}
      <style>{`
        @keyframes orbit-cw {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes orbit-ccw {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(120px) rotate(360deg); }
        }
        @keyframes float-vertical {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-orbit-cw { animation: orbit-cw 18s linear infinite; } 
        .animate-orbit-ccw { animation: orbit-ccw 22s linear infinite; } 
        .animate-float { animation: float-vertical 4s ease-in-out infinite; }
        
        .delay-negative-1 { animation-delay: -3s; }
        .delay-negative-2 { animation-delay: -7s; } 
      `}</style>

      {/* Ambient Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#023347]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#023347] leading-tight mb-6">
              Earn by Promoting <span className="text-[#023347]">Developer Assets</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Join our affiliate program and monetize your audience by promoting npm packages, Docker images, GitHub repos, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Link
                href="/signup"
                className="group relative px-8 py-4 bg-[#023347] text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-900/30 text-center"
              >
                <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
                <span className="relative font-semibold text-lg">Become an Affiliate</span>
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 bg-white text-[#023347] border-2 border-[#023347] rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Simple Social Proof */}
            <div className="mt-10 flex items-center gap-3">
               <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  ))}
               </div>
               <p className="text-sm text-gray-500 font-medium">
                 Join <span className="text-[#023347] font-bold">500+ affiliates</span> earning weekly.
               </p>
            </div>
          </div>

          {/* Right Side: Animated Visual */}
          <div className="flex-1 w-full flex items-center justify-center relative min-h-[450px] order-2">
            
            {/* Background Orbit Rings */}
            <div className="absolute border border-gray-100 rounded-full w-[300px] h-[300px] md:w-[380px] md:h-[380px]"></div>
            <div className="absolute border border-dashed border-gray-200 rounded-full w-[220px] h-[220px] md:w-[280px] md:h-[280px] animate-[spin_50s_linear_infinite]"></div>

            {/* Central Hub: Money Hand Image on White BG */}
            <div className="relative z-20">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 m-auto w-32 h-32 bg-[#023347]/5 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute inset-0 m-auto w-24 h-24 border border-[#023347]/10 rounded-full animate-ping opacity-20"></div>

              {/* Main Container for the Image */}
              <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white relative overflow-hidden">
                <Image 
                  src="/affiliate.png" // Replace with your actual image path
                  alt="Earnings and Payouts"
                  width={70}
                  height={70}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Orbiting Tech Logos */}
            <div className="absolute top-1/2 left-1/2 -mt-10 -ml-10 z-20 animate-orbit-cw">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white p-3 rounded-2xl shadow-lg border border-gray-50 flex items-center justify-center animate-float">
                <Image src="/docker.svg" alt="Docker" width={40} height={40} className="object-contain" />
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -mt-10 -ml-10 z-20 animate-orbit-ccw delay-negative-1">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-white p-3 rounded-2xl shadow-lg border border-gray-50 flex items-center justify-center animate-float">
                <Image src="/github.svg" alt="GitHub" width={40} height={40} className="object-contain" />
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -mt-10 -ml-10 z-20 animate-orbit-cw delay-negative-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white p-3 rounded-2xl shadow-lg border border-gray-50 flex items-center justify-center animate-float">
                <Image src="/npm.svg" alt="npm" width={40} height={40} className="object-contain" />
             </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}