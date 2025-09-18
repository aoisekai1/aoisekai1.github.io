"use client";
import Link from "next/link";
import { FaReact, FaNodeJs, FaPython, FaCode } from "react-icons/fa";
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
		<div className="min-h-screen flex items-center justify-center relative">
			<KeyboardNav />
			<Image
				src="/bg.jpg"
				alt="Background"
				fill
				priority
				className="object-cover -z-10"
			/>
			<div className="bg-transparent rounded-xl p-12 flex flex-col items-center shadow-lg">
				<h2 className="text-3xl font-bold mb-8 text-white">My Skills</h2>
				<div className="flex flex-wrap gap-8 justify-center mb-8">
					{skills.map((skill, idx) => (
						<div
							key={idx}
							className="flex flex-col items-center bg-transparent p-6 w-32 hover:scale-110 transition-transform"
						>
							{skill.icon}
							<span className="mt-2 font-semibold text-white">
								{skill.name}
							</span>
						</div>
					))}
				</div>
				<div className="flex justify-center mt-8 w-full">
					<Link href="/about" className="mr-2 w-full max-w-[120px]">
						<button
							type="button"
							className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition cursor-pointer w-full"
						>
							Back
						</button>
					</Link>
					<Link href="/work-experience">
						<button
							type="button"
							className="px-6 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl cursor-pointer"
						>
							Next
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
