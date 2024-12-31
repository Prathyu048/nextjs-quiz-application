'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a0733] text-white flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center space-y-8 animate-fadeIn my-8">
        <div className="relative">
          <h1 className="text-4xl font-bold mb-2 relative z-10
            bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
            bg-clip-text text-transparent
            drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            Welcome to Quiz
          </h1>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px]
            bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>

        <div className="space-y-6 text-purple-200">
          <p className="text-xl font-light tracking-wide
            bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200
            bg-clip-text text-transparent">
            Embark on a Journey of Knowledge
          </p>
          
          <div className="bg-purple-900/20 backdrop-blur-sm border-2 border-purple-500/30 
            rounded-xl p-6 space-y-4 transform hover:scale-[1.02] transition-all duration-300
            hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <h2 className="text-xl font-semibold bg-gradient-to-r 
              from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Quiz Features
            </h2>
            <ul className="space-y-3 text-left list-none">
              {[
                "5 Challenging Questions",
                "Multiple Choice Format",
                "Instant Score Tracking",
                "Interactive UI Design"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 group">
                  <span className="text-purple-400 text-lg">✦</span>
                  <span className="text-base text-purple-100 group-hover:text-white
                    transition-colors duration-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-purple-900/20 backdrop-blur-sm border-2 border-purple-500/30 
            rounded-xl p-4 transform hover:scale-[1.02] transition-all duration-300">
            <p className="text-sm bg-gradient-to-r from-purple-200 to-pink-200 
              bg-clip-text text-transparent font-medium">
              Ready to challenge yourself? Begin your quest for knowledge!
            </p>
          </div>
        </div>

        <Link 
          href="/quiz"
          className="relative inline-flex items-center px-8 py-3 
            bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
            rounded-full text-lg font-semibold text-white shadow-lg
            transform hover:scale-105 transition-all duration-300
            hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            active:scale-95 group
            before:absolute before:inset-0 before:rounded-full
            before:bg-gradient-to-r before:from-cyan-600 before:via-blue-600 before:to-purple-600
            before:opacity-0 before:transition-opacity hover:before:opacity-100"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 
            rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300" />
          <span className="relative flex items-center gap-2">
            Start Quiz
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}