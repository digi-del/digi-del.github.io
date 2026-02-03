"use client"
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] lg:py-16 py-10 ">
      
      {/* 1. Custom Animation Styles: The Fix is applied in the .delay-100 and .delay-300 definitions */}
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
        /* Custom Tailwind class definitions for animations */
        .animate-orbit-cw { animation: orbit-cw 15s linear infinite; } 
        .animate-orbit-ccw { animation: orbit-ccw 25s linear infinite; } 
        .animate-float { animation: float-vertical 4s ease-in-out infinite; }
        
        /* FIX: Change positive delays to negative delays to prevent initial centering jump */
        .delay-100 { animation-delay: -1s; } /* Fixes GitHub icon jump */
        .delay-200 { animation-delay: -2s; } 
        .delay-300 { animation-delay: -3s; } /* Fixes npm icon jump */
      `}</style>

      {/* Background Gradients (Updated Colors) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Dark Blue/Teal Ambient Blob */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#023347]/10 rounded-full blur-3xl animate-pulse"></div>
        {/* Light Cyan Ambient Blob */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Content (Order 1 on all screen sizes) */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-6">
Monetize Your Digital Assets
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
Payment processing, secure asset delivery, and affiliate tracking for GitHub repositories, Docker images, and npm packages—with built-in caching and distribution.
            </p>
            
            {/* Buttons with "Slide/Skew" Animation */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              
              <Link
                href="/for-developers"
                className="group relative px-8 py-4 bg-[#023347] text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-900/30"
              >
                <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
                <span className="relative font-semibold text-lg">For Developers</span>
              </Link>
              
              <Link
                href="/affiliates"
                className="px-8 py-4 bg-white text-[#023347] border-2 border-gray-200 rounded-xl font-semibold hover:border-[#023347] hover:bg-gray-50 transition-all duration-200"
              >
                For Affiliates
              </Link>
            </div>

            {/* Social Proof - No animation */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4"> 
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-4 border-[#F7FAFC]" src="https://i.pravatar.cc/100?img=11" alt="Dev" />
                <img className="w-12 h-12 rounded-full border-4 border-[#F7FAFC]" src="https://i.pravatar.cc/100?img=33" alt="Dev" />
                <img className="w-12 h-12 rounded-full border-4 border-[#F7FAFC]" src="https://i.pravatar.cc/100?img=12" alt="Dev" />
                <img className="w-12 h-12 rounded-full border-4 border-[#F7FAFC]" src="https://i.pravatar.cc/100?img=59" alt="Dev" />
                <div className="w-12 h-12 rounded-full border-4 border-[#F7FAFC] bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                  2k+
                </div>
              </div>
              <div className="text-sm font-medium text-gray-500">
                <span className="text-[#023347] font-bold">Trusted by developers</span> <br className="hidden sm:block"/>
                to buy & sell verified assets.
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Impactful Animation (Order 2 on all screen sizes) */}
          <div className="flex-1 w-full flex items-center justify-center relative min-h-[400px] lg:min-h-[500px] order-2 lg:order-2">
            
            {/* Background Rings */}
            <div className="absolute border border-[#47879E]/20 rounded-full w-[280px] h-[280px] md:w-[400px] md:h-[400px]"></div>
            <div className="absolute border border-[#47879E]/30 rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] animate-[spin_30s_linear_infinite]"></div>

            {/* Central Hub Logo */}
            <div className="relative z-20">
               {/* Pulsating glow effect */}
               <div className="absolute inset-0 m-auto w-full h-full bg-cyan-400/30 rounded-3xl opacity-30 blur-xl animate-pulse -z-10"></div>

              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center border-4 border-gray-50">
                <div className="text-center">
                  <span className="text-[10px] md:text-lg font-bold text-[#023347] block mt-1">DevAsset</span>
              
                                <div className="text-[#023347] text-2xl font-bold">&lt; /&gt;</div>

                  </div>
              </div>
            </div>

            {/* Orbiting Elements: Docker (Clockwise) */}
            <div className="absolute top-1/2 left-1/2 -mt-8 -ml-8 md:-mt-8 md:-ml-8 z-20 animate-orbit-cw">
              <div className="w-16 h-16 bg-white p-3 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform animate-float">
                <img 
                  src="/docker.svg" 
                  alt="Docker" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Orbiting Elements: GitHub (Counter-Clockwise) - NOW USING NEGATIVE DELAY */}
            <div className="absolute top-1/2 left-1/2 -mt-8 -ml-8 md:-mt-8 md:-ml-8 z-20 animate-orbit-ccw delay-100">
               <div className="w-16 h-16 bg-white p-3 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform animate-float">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full text-gray-800">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>

            {/* NEW Orbiting Element: npm (Clockwise with NEGATIVE delay) */}
            <div className="absolute top-1/2 left-1/2 -mt-8 -ml-8 md:-mt-8 md:-ml-8 z-20 animate-orbit-cw delay-300">
              <div className="w-16 h-16 bg-white p-3 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform animate-float">
                <img 
                  src="/npm.svg" 
                  alt="npm" 
                  className="w-full h-full object-contain"
                />
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}