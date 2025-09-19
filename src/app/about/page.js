"use client";
import Image from "next/image";
import Link from "next/link";
import KeyboardNav from "../KeyboardNav";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900">
      <KeyboardNav />
      <Image src="/bg.jpg" alt="Background" fill priority className="object-cover -z-10 opacity-40" />
      <div className="relative max-w-2xl w-full mx-auto animate-fade-in" style={{ marginTop: "8vh", marginBottom: "8vh" }}>
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
          padding: "3px"
        }} />
        {/* Card content with glass, floating, and interactive hover */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 w-full relative flex flex-col items-center transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:bg-white/20" style={{
          boxShadow: "0 24px 64px 0 rgba(31, 38, 135, 0.30), 0 0 48px 8px #3b82f6a0",
          border: "2px solid rgba(255,255,255,0.18)",
          backdropFilter: "blur(32px)",
          transform: "translateY(-16px)",
          position: "relative",
          overflow: "hidden"
        }}>
          <div className="flex flex-col sm:flex-row items-center w-full px-8 py-10">
            <div className="flex flex-col items-center sm:items-start sm:flex-row w-full">
              <div className="relative group flex items-center justify-center" style={{ minWidth: 170, minHeight: 170 }}>
                {/* Animated gradient ring */}
                <div className="absolute inset-0 rounded-full pointer-events-none" style={{
                  padding: "6px",
                  background: "conic-gradient(from 180deg at 50% 50%, #3b82f6, #6366f1, #fbbf24, #3b82f6)",
                  backgroundSize: "200% 200%",
                  animation: "gradientRing 4s linear infinite"
                }} />
                {/* Photo with glass shine and floating effect */}
                <Image src="/profile.jpg" alt="Profile" width={150} height={150} className="rounded-full object-cover border-4 border-white shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl" style={{ position: "relative", zIndex: 2, boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)" }} />
                <div className="absolute top-0 left-0 w-full h-full rounded-full pointer-events-none" style={{
                  background: "linear-gradient(120deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 100%)",
                  opacity: 0.5,
                  zIndex: 3
                }} />
              </div>
              <div className="flex flex-col gap-2 items-center sm:items-start sm:ml-8 text-center sm:text-left">
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">Taufik</h2>
                <p className="text-white">Email: taufik@email.com</p>
                <p className="text-blue-200 font-semibold">Full Stack Developer</p>
                <p className="mt-2 text-white">Saya adalah seorang full stack developer yang berpengalaman dalam membangun aplikasi web dan mobile menggunakan berbagai teknologi modern.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8 mb-2">
            <Link href="/" className="mr-2">
              <button type="button" className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition cursor-pointer font-bold shadow-md flex items-center gap-2"><FaArrowLeft size={18} /> Back</button>
            </Link>
            <Link href="/" className="mx-2">
              <button type="button" className="px-6 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition cursor-pointer font-bold shadow-md flex items-center gap-2"><FaHome size={18} /> Home</button>
            </Link>
            <Link href="/skill">
              <button type="button" className="px-6 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl cursor-pointer font-bold flex items-center gap-2">Next <FaArrowRight size={18} /></button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes gradientMove {
          0% {background-position:0% 50%}
          50% {background-position:100% 50%}
          100% {background-position:0% 50%}
        }
        @keyframes gradientRing {
          0% {transform: rotate(0deg);}
          100% {transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}
