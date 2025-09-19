"use client";
import Link from "next/link";
import Image from "next/image";
import KeyboardNav from "./KeyboardNav";
import ThreeScene from "./ThreeScene";
import { FaUser, FaStar, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <KeyboardNav />
      <Image
        src="/bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover opacity-40 -z-10"
      />
      {/* Soft overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-indigo-900/40 to-transparent pointer-events-none -z-10" />
      <div className="flex flex-row items-center justify-center w-screen min-h-screen mx-auto relative z-10 gap-10 animate-fade-in">
        {/* Left stars */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6 pl-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <polygon
              points="16,2 20,12 31,12 22,18 25,29 16,23 7,29 10,18 1,12 12,12"
              fill="#fff"
              opacity="0.5"
            />
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <polygon
              points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"
              fill="#fff"
              opacity="0.3"
            />
          </svg>
        </div>
        {/* Right stars */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6 pr-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <polygon
              points="16,2 20,12 31,12 22,18 25,29 16,23 7,29 10,18 1,12 12,12"
              fill="#fff"
              opacity="0.5"
            />
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <polygon
              points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"
              fill="#fff"
              opacity="0.3"
            />
          </svg>
        </div>
        {/* Left: Welcome card with menu and firework object inside, now full width and full height */}
        <div className="flex-1 flex flex-col items-center justify-center w-full min-h-screen">
          <div className="relative w-full animate-fade-in flex flex-col items-center justify-center min-h-screen">
            <div
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-20 flex flex-col items-center justify-center shadow-2xl border border-white/30 w-full relative z-10"
              style={{
                boxShadow: "inset 0 2px 32px 0 #fff3, 0 8px 32px 0 #6366f1a0",
                minHeight: "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Firework particle object at top of card */}
              <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-0 flex items-center justify-center">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-full h-full"
                >
                  <circle cx="60" cy="40" r="2.5" fill="#fff" opacity="0.18" />
                  <circle cx="120" cy="60" r="1.5" fill="#fff" opacity="0.12" />
                  <circle cx="320" cy="30" r="2" fill="#fff" opacity="0.15" />
                  <circle cx="200" cy="70" r="1.8" fill="#fff" opacity="0.13" />
                  <circle cx="350" cy="20" r="2.2" fill="#fff" opacity="0.1" />
                </svg>
              </div>
              {/* 3D object inside card */}
              <div className="w-full h-48 mb-8 relative z-10 rounded-xl overflow-hidden flex items-center justify-center">
                <ThreeScene />
              </div>
              {/* Restored welcome area above menu, centered */}
              <h1 className="text-6xl font-extrabold mb-5 text-white drop-shadow-lg tracking-tight animate-fade-in relative z-10 text-center">
                Welcome
              </h1>
              <p className="mb-10 text-xl text-center max-w-md text-white/90 font-medium animate-fade-in relative z-10">
                Selamat datang di CV saya.<br />
                <span className="text-blue-200">
                  Silakan klik menu di bawah untuk mengenal lebih lanjut.
                </span>
              </p>
              {/* Menu buttons inside card, now styled as map location markers and responsive, centered */}
              <div className="flex flex-wrap justify-center items-center gap-8 w-full mb-4 relative z-10">
                <Link href="/about" className="group">
                  <button className="relative flex flex-col items-center justify-center w-16 h-24 mx-2 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-xl group-hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-7 bg-blue-600 rounded-b-full shadow-lg"
                      style={{ zIndex: 1 }}
                    />
                    <span
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white/30 border-2 border-blue-400 rounded-full shadow-lg group-hover:animate-bounce"
                      style={{ zIndex: 2 }}
                    />
                    <FaUser size={20} className="mt-6 text-white z-10" />
                    <span className="mt-1 text-white font-bold text-xs z-10">
                      About Me
                    </span>
                  </button>
                </Link>
                <Link href="/skill" className="group">
                  <button className="relative flex flex-col items-center justify-center w-16 h-24 mx-2 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-full shadow-xl group-hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-7 bg-purple-600 rounded-b-full shadow-lg"
                      style={{ zIndex: 1 }}
                    />
                    <span
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white/30 border-2 border-purple-400 rounded-full shadow-lg group-hover:animate-bounce"
                      style={{ zIndex: 2 }}
                    />
                    <FaStar size={20} className="mt-6 text-white z-10" />
                    <span className="mt-1 text-white font-bold text-xs z-10">
                      Skills
                    </span>
                  </button>
                </Link>
                <Link href="/work-experience" className="group">
                  <button className="relative flex flex-col items-center justify-center w-16 h-24 mx-2 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-xl group-hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400">
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-7 bg-pink-600 rounded-b-full shadow-lg"
                      style={{ zIndex: 1 }}
                    />
                    <span
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white/30 border-2 border-pink-400 rounded-full shadow-lg group-hover:animate-bounce"
                      style={{ zIndex: 2 }}
                    />
                    <FaBriefcase size={20} className="mt-6 text-white z-10" />
                    <span className="mt-1 text-white font-bold text-xs z-10">
                      Experience
                    </span>
                  </button>
                </Link>
                <Link href="/contact" className="group">
                  <button className="relative flex flex-col items-center justify-center w-16 h-24 mx-2 bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 rounded-full shadow-xl group-hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-7 bg-green-600 rounded-b-full shadow-lg"
                      style={{ zIndex: 1 }}
                    />
                    <span
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white/30 border-2 border-green-400 rounded-full shadow-lg group-hover:animate-bounce"
                      style={{ zIndex: 2 }}
                    />
                    <FaEnvelope size={20} className="mt-6 text-white z-10" />
                    <span className="mt-1 text-white font-bold text-xs z-10">
                      Contact
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Empty for spacing */}
        <div className="flex-1" />
      </div>
      {/* Left stars - 20 static positions */}
      <div className="absolute left-0 top-0 h-full z-20 flex flex-col gap-2 pl-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <svg
            key={i}
            width={i % 2 === 0 ? 18 : 28}
            height={i % 2 === 0 ? 18 : 28}
            viewBox={`0 0 ${i % 2 === 0 ? 18 : 28} ${i % 2 === 0 ? 18 : 28}`}
            fill="none"
            style={{ marginTop: `${(i * 4) % 80 + 8}px` }}
          >
            <polygon
              points={
                i % 2 === 0
                  ? "9,2 11,7 17,7 12,11 14,16 9,13 4,16 6,11 1,7 7,7"
                  : "14,2 16,8 26,8 18,13 20,24 14,19 8,24 10,13 2,8 12,8"
              }
              fill="#fff"
              opacity={i % 3 === 0 ? "0.5" : "0.3"}
            />
          </svg>
        ))}
      </div>
      {/* Right stars and moon - 20 static stars + moon */}
      <div className="absolute right-0 top-0 h-full z-20 flex flex-col gap-2 pr-2 items-end">
        {/* Moon SVG */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className="mb-4"
        >
          <circle cx="24" cy="24" r="20" fill="#fff" opacity="0.15" />
          <path
            d="M24 44c11.05 0 20-8.95 20-20 0-4.42-1.43-8.5-3.86-11.8C38.5 36.5 24 44 24 44z"
            fill="#fff"
            opacity="0.3"
          />
        </svg>
        {Array.from({ length: 20 }).map((_, i) => (
          <svg
            key={i}
            width={i % 2 === 0 ? 18 : 28}
            height={i % 2 === 0 ? 18 : 28}
            viewBox={`0 0 ${i % 2 === 0 ? 18 : 28} ${i % 2 === 0 ? 18 : 28}`}
            fill="none"
            style={{ marginTop: `${(i * 4) % 80 + 12}px` }}
          >
            <polygon
              points={
                i % 2 === 0
                  ? "9,2 11,7 17,7 12,11 14,16 9,13 4,16 6,11 1,7 7,7"
                  : "14,2 16,8 26,8 18,13 20,24 14,19 8,24 10,13 2,8 12,8"
              }
              fill="#fff"
              opacity={i % 3 === 0 ? "0.5" : "0.3"}
            />
          </svg>
        ))}
      </div>
      {/* Moon object next to welcome card, now at top and slightly more right */}
      <div className="absolute top-8 right-12 z-30 flex items-center justify-center overflow-hidden rounded-full" style={{ width: '320px', height: '320px' }}>
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <defs>
            <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#FFFDE4" />
              <stop offset="60%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.7" />
            </radialGradient>
          </defs>
          <circle cx="160" cy="160" r="140" fill="url(#moon-glow)" />
          <ellipse cx="210" cy="160" rx="70" ry="140" fill="#FFFDE4" opacity="0.18" />
          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="24" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <circle cx="160" cy="160" r="140" fill="url(#moon-glow)" filter="url(#glow)" />
        </svg>
      </div>
      <style jsx global>{`
        @keyframes gradient-border {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-border {
          animation: gradient-border 6s linear infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}
