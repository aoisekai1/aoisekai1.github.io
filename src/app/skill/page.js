"use client";
import Link from "next/link";
// Removed duplicate import
import { FaReact, FaNodeJs, FaPython, FaCode, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiPostgresql, SiMysql } from "react-icons/si";
import KeyboardNav from "../KeyboardNav";
import Image from "next/image";

const skills = [
	{
		name: "Nextjs",
		icon: (
			<SiNextdotjs className="text-4xl text-blue-200 animate-bounce" />
		),
	},
	{
		name: "Reactjs",
		icon: (
			<FaReact className="text-4xl text-cyan-200 animate-bounce" />
		),
	},
	{
		name: "React Native",
		icon: (
			<FaReact className="text-4xl text-indigo-200 animate-bounce" />
		),
	},
	{
		name: "Golang",
		icon: (
			<FaCode className="text-4xl text-blue-200 animate-bounce" />
		),
	},
	{
		name: "Nodejs",
		icon: (
			<FaNodeJs className="text-4xl text-green-200 animate-bounce" />
		),
	},
	{
		name: "Firebase",
		icon: (
			<SiFirebase className="text-4xl text-yellow-200 animate-bounce" />
		),
	},
	{
		name: "PostgreSQL",
		icon: (
			<SiPostgresql className="text-4xl text-blue-200 animate-bounce" />
		),
	},
	{
		name: "MySQL",
		icon: (
			<SiMysql className="text-4xl text-blue-200 animate-bounce" />
		),
	},
	{
		name: "Python",
		icon: (
			<FaPython className="text-4xl text-yellow-200 animate-bounce" />
		),
	},
];

export default function Skill() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900">
			<KeyboardNav />
			<Image
				src="/bg.jpg"
				alt="Background"
				fill
				priority
				className="object-cover -z-10 opacity-30"
			/>
			<div
				className="absolute inset-0 z-0 pointer-events-none"
				style={{
					background:
						"linear-gradient(120deg, #3b82f6 0%, #6366f1 40%, #fbbf24 100%)",
					opacity: 0.25,
					filter: "blur(12px)",
					animation: "gradientMove 8s ease-in-out infinite",
				}}
			/>
			{/* Animated floating shapes background */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<div className="absolute w-32 h-32 bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-400 rounded-full opacity-30 blur-2xl animate-float1" style={{ top: '10%', left: '8%' }} />
				<div className="absolute w-24 h-24 bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 rounded-full opacity-25 blur-2xl animate-float2" style={{ top: '60%', left: '70%' }} />
				<div className="absolute w-20 h-20 bg-gradient-to-br from-green-400 via-blue-400 to-blue-600 rounded-full opacity-20 blur-2xl animate-float3" style={{ top: '75%', left: '20%' }} />
				<div className="absolute w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full opacity-20 blur-2xl animate-float4" style={{ top: '30%', left: '80%' }} />
			</div>
			{/* Animated SVG object shapes background */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<svg width="120" height="120" className="absolute animate-float1" style={{ top: '12%', left: '10%' }}>
					<rect x="10" y="10" width="100" height="100" rx="24" fill="url(#grad1)" opacity="0.18" />
					<defs>
						<linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0%" stopColor="#3b82f6" />
							<stop offset="100%" stopColor="#6366f1" />
						</linearGradient>
					</defs>
				</svg>
				<svg width="80" height="80" className="absolute animate-float2" style={{ top: '65%', left: '75%' }}>
					<circle cx="40" cy="40" r="36" fill="url(#grad2)" opacity="0.15" />
					<defs>
						<linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0%" stopColor="#fbbf24" />
							<stop offset="100%" stopColor="#ef4444" />
						</linearGradient>
					</defs>
				</svg>
				<svg width="60" height="60" className="absolute animate-float3" style={{ top: '80%', left: '18%' }}>
					<polygon points="30,5 55,55 5,55" fill="url(#grad3)" opacity="0.13" />
					<defs>
						<linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0%" stopColor="#10b981" />
							<stop offset="100%" stopColor="#3b82f6" />
						</linearGradient>
					</defs>
				</svg>
				<svg width="50" height="50" className="absolute animate-float4" style={{ top: '35%', left: '85%' }}>
					<ellipse cx="25" cy="25" rx="22" ry="14" fill="url(#grad4)" opacity="0.12" />
					<defs>
						<linearGradient id="grad4" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0%" stopColor="#a78bfa" />
							<stop offset="100%" stopColor="#6366f1" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div
				className="relative max-w-2xl w-full mx-auto animate-fade-in"
				style={{ marginTop: "8vh", marginBottom: "8vh" }}
			>
				{/* Animated gradient border */}
				<div
					className="absolute inset-0 rounded-3xl pointer-events-none"
					style={{
						padding: "3px"
					}}
				/>
				{/* Card content with glass, floating, and interactive hover */}
				<div
					className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 w-full relative flex flex-col items-center transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:bg-white/20"
					style={{
						boxShadow:
							"0 24px 64px 0 rgba(31, 38, 135, 0.30), 0 0 48px 8px #3b82f6a0",
						border: "2px solid rgba(255,255,255,0.18)",
						backdropFilter: "blur(32px)",
						transform: "translateY(-16px)",
						position: "relative",
						overflow: "hidden",
					}}
				>
					<h2 className="text-3xl font-bold mb-8 text-white drop-shadow-lg text-center">
						My Skills
					</h2>
					<div className="flex flex-wrap gap-8 justify-center mb-8">
						{skills.map((skill, idx) => (
							<div
								key={idx}
								className="flex flex-col items-center bg-white/5 rounded-xl p-6 w-32 hover:scale-110 transition-transform shadow-lg group relative"
								style={{
									boxShadow: "0 4px 16px 0 rgba(31,38,135,0.12)",
								}}
							>
								<div className="relative">
									{skill.icon}
									<div
										className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none"
										style={{
											background:
												"linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 100%)",
											opacity: 0.5,
										}}
									/>
								</div>
								<span className="mt-2 font-semibold text-white drop-shadow group-hover:text-blue-300 transition-all">
									{skill.name}
								</span>
							</div>
						))}
					</div>
					<div className="flex justify-center gap-4 mt-8 mb-2 w-full">
						<Link href="/about" className="mr-2 w-full max-w-[120px]">
							<button
								type="button"
								className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition cursor-pointer w-full font-bold shadow-md flex items-center gap-2"
							>
								<FaArrowLeft size={18} /> Back
							</button>
						</Link>
						<Link href="/" className="mr-2 w-full max-w-[120px]">
							<button
								type="button"
								className="px-6 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition cursor-pointer w-full font-bold shadow-md flex items-center gap-2"
							>
								<FaHome size={18} /> Home
							</button>
						</Link>
						<Link href="/work-experience">
							<button
								type="button"
								className="px-6 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl cursor-pointer w-full font-bold flex items-center gap-2"
							>
								Next <FaArrowRight size={18} />
							</button>
						</Link>
					</div>
				</div>
			</div>
			<style jsx global>{`
				@keyframes gradientMove {
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
				@keyframes float1 {
					0% { transform: translateY(0) scale(1); }
					50% { transform: translateY(-30px) scale(1.08); }
					100% { transform: translateY(0) scale(1); }
				}
				@keyframes float2 {
					0% { transform: translateY(0) scale(1); }
					50% { transform: translateY(20px) scale(0.95); }
					100% { transform: translateY(0) scale(1); }
				}
				@keyframes float3 {
					0% { transform: translateY(0) scale(1); }
					50% { transform: translateY(-15px) scale(1.05); }
					100% { transform: translateY(0) scale(1); }
				}
				@keyframes float4 {
					0% { transform: translateY(0) scale(1); }
					50% { transform: translateY(25px) scale(0.92); }
					100% { transform: translateY(0) scale(1); }
				}
				.animate-float1 { animation: float1 6s ease-in-out infinite; }
				.animate-float2 { animation: float2 7s ease-in-out infinite; }
				.animate-float3 { animation: float3 5s ease-in-out infinite; }
				.animate-float4 { animation: float4 8s ease-in-out infinite; }
			`}</style>
		</div>
	);
}
