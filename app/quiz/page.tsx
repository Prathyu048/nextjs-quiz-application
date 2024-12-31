'use client'

import { useState } from "react";
import Link from 'next/link';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Fe", "Au", "Cu"],
    correctAnswer: "Au"
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);

  const handleAnswerClick = (selectedAnswer: string) => {
    setIsAnswering(true);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setIsAnswering(false);
    }, 300);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const isPerfectScore = score === questions.length;

  return (
    <div className="min-h-screen bg-[#1a0733] text-white flex items-center justify-center p-4">
      <div className="max-w-5xl w-full space-y-16 animate-fadeIn relative">
        {/* Home Button */}
        <Link
          href="/"
          className="absolute top-4 left-4 bg-transparent border border-purple-500/30 
            px-4 py-1.5 rounded-full text-sm text-purple-200 backdrop-blur-sm
            hover:border-purple-400/60 transition-all duration-300 hover:shadow-glow
            flex items-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Home
        </Link>

        {showScore ? (
          <div className={`text-center bg-purple-800/90 backdrop-blur-md rounded-lg p-8 animate-slideUp
            relative overflow-hidden ${isPerfectScore ? 'perfect-score-container' : ''}`}>
            {isPerfectScore && (
              <>
                <div className="absolute inset-0 perfect-score-bg" />
                <div className="confetti-container">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} 
                      className="confetti"
                      style={{ 
                        '--delay': `${i * 0.1}s`,
                        '--rotation': `${Math.random() * 360}deg`,
                        '--position': `${Math.random() * 100}%`
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              </>
            )}
            <div className="relative z-10">
              <h2 className={`text-3xl font-bold mb-4 animate-bounceIn 
                ${isPerfectScore ? 'perfect-score-text' : 'text-glow'}`}>
                {isPerfectScore ? '🌟 Perfect Score! 🌟' : 'Quiz Complete! 🎉'}
              </h2>
              <p className="text-xl mb-6 text-purple-200">
                You scored{' '}
                <span className={`${isPerfectScore ? 'perfect-score-number' : 'text-glow-purple'}`}>
                  {score}
                </span>{' '}
                out of{' '}
                <span className="text-glow-purple">{questions.length}</span>
              </p>
              {isPerfectScore && (
                <div className="achievement-badge mb-6">
                  <div className="badge-inner">
                    <span className="badge-text">Congratulations! Perfect Score Achievement Unlocked!</span>
                  </div>
                </div>
              )}
              <button
                onClick={handleRestart}
                className={`relative overflow-hidden px-8 py-3 rounded-full font-bold
                  transition-all duration-300 hover:scale-105 active:scale-95 group
                  ${isPerfectScore 
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 border-2 border-yellow-400/50' 
                    : 'bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 border-2 border-purple-400/30'
                  }
                  hover:shadow-lg hover:border-opacity-75
                  ${isPerfectScore 
                    ? 'hover:shadow-amber-500/20 hover:border-yellow-400/80' 
                    : 'hover:shadow-purple-500/20 hover:border-purple-400/60'
                  }`}
              >
                <div className={`absolute inset-0 ${isPerfectScore 
                  ? 'bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600' 
                  : 'bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700'} 
                  opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full`} 
                />
                <span className="relative flex items-center gap-2 group-hover:scale-105 transition-transform">
                  Play Again
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 transform rotate-0 group-hover:rotate-180 transition-transform duration-500" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" 
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </span>
                {isPerfectScore && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent 
                    via-yellow-400/20 to-transparent animate-shine" />
                )}
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Question Container */}
            <div className="relative">
              <div className="bg-transparent border-2 border-purple-500/30 rounded-[40px] p-8 
                relative overflow-hidden group animate-slideUp">
                <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-sm" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-center cyberpunk-text leading-relaxed">
                    {questions[currentQuestion].question}
                  </h2>
                </div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                  from-transparent via-purple-400/50 to-transparent" />
              </div>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 relative max-w-4xl mx-auto">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  disabled={isAnswering}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Option Button */}
                  <div className="bg-transparent border-2 border-purple-500/30 rounded-[30px]
                    relative overflow-hidden animate-fadeIn hover:border-purple-400/60
                    transition-all duration-300 group-hover:shadow-glow">
                    <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-sm
                      group-hover:bg-purple-900/30 transition-all duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-4 flex items-center gap-4">
                      <span className="text-purple-300 font-mono text-xl tracking-wider">
                        {String.fromCharCode(65 + index)}:
                      </span>
                      <span className="text-purple-100 text-lg tracking-wide
                        group-hover:text-glow-sm transition-all duration-300">
                        {option}
                      </span>
                    </div>

                    {/* Top Highlight */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                      from-transparent via-purple-400/50 to-transparent" />
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Score Counter */}
        <div className="absolute top-4 right-4 flex gap-3">
          <span className="bg-transparent border border-purple-500/30 px-4 py-1.5 rounded-full 
            text-sm text-purple-200 backdrop-blur-sm">
            Q<span className="text-glow-purple ml-1">{currentQuestion + 1}</span>/{questions.length}
          </span>
          <span className="bg-transparent border border-purple-500/30 px-4 py-1.5 rounded-full 
            text-sm text-purple-200 backdrop-blur-sm">
            Score: <span className="text-glow-purple">{score}</span>
          </span>
        </div>
      </div>
    </div>
  );
}