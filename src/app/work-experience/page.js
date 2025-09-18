"use client";
import Link from "next/link";
import { useState } from "react";
import KeyboardNav from "../KeyboardNav";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa";

const experiences = [
	{
		company: "PT. STIA",
		title: "Full Stack Developer",
		date: "September 2018 - June 2021",
		desc: "Membangun dan mengembangkan aplikasi web dan mobile menggunakan Next.js, React Native, dan Node.js.",
		details: [
			"Membuat dan maintain aplikasi web dengan Next.js",
			"Membangun aplikasi mobile dengan React Native",
			"Integrasi backend dengan Node.js",
			"Kolaborasi tim dan code review",
			"Deployment ke Vercel dan Play Store",
		],
	},
	{
		company: "PT. Automata Neo Solutions",
		title: "Backend Developer",
		date: "January 2023 - Now",
		desc: "Mendesain dan mengimplementasikan API menggunakan Golang dan PostgreSQL.",
		details: [
			"Mendesain struktur database PostgreSQL",
			"Membuat REST API dengan Golang",
			"Optimasi query dan performa server",
			"Integrasi dengan frontend dan mobile",
			"Dokumentasi API dan unit testing",
		],
	},
];

export default function WorkExperience() {
	const [selected, setSelected] = useState(null);
	const handleCardClick = (idx) => {
		setSelected(idx);
	};
	const handleCloseModal = () => {
		setSelected(null);
	};
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
				<h2 className="text-3xl font-bold mb-8 text-white">
					Work Experience
				</h2>
				<div className="flex gap-8 flex-wrap justify-center">
					{experiences.map((exp, idx) => (
						<div
							key={idx}
							className={`backdrop-blur-md bg-white/10 border border-white/30 shadow-xl rounded-2xl p-6 w-72 cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-white/20 flex flex-col items-start relative overflow-hidden` + (selected === idx ? " ring-2 ring-blue-400" : "")}
							onClick={() => handleCardClick(idx)}
						>
							<div className="flex items-center gap-3 mb-2">
								<FaBuilding className="text-blue-200 text-2xl" />
								<h3 className="text-xl font-semibold text-white drop-shadow">
									{exp.company}
								</h3>
							</div>
							<p className="text-white font-medium mb-1">{exp.title}</p>
							<p className="text-blue-200 text-sm mb-2">{exp.date}</p>
							<span className="absolute top-2 right-4 text-xs text-blue-100 opacity-60">
								Click for details
							</span>
						</div>
					))}
				</div>
				<div className="flex justify-center mt-8">
					<Link href="/skill" className="mr-2">
						<button type="button" className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition cursor-pointer">Back</button>
					</Link>
					<Link href="/contact">
						<button type="button" className="px-6 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl cursor-pointer">Next</button>
					</Link>
				</div>
				{/* Modal for card details */}
				{selected !== null && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-300 animate-fade-in">
						<div className="bg-white/90 rounded-2xl p-8 max-w-md w-full relative shadow-2xl animate-modal-in">
							<button onClick={handleCloseModal} className="absolute top-3 right-3 text-black bg-white rounded-full px-3 py-1 shadow hover:bg-gray-200 cursor-pointer">✕</button>
							<h3 className="text-2xl font-bold text-blue-900 mb-2 flex items-center gap-2">
								<FaBuilding className="text-blue-400 text-2xl" />
								{experiences[selected].company}
							</h3>
							<p className="text-lg font-semibold text-blue-700 mb-1">{experiences[selected].title}</p>
							<p className="text-blue-500 text-sm mb-2">{experiences[selected].date}</p>
							<div className="mb-2 text-gray-800">{experiences[selected].desc}</div>
							<ul className="list-disc ml-5 text-gray-700">
								{experiences[selected].details.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

/* Add to global CSS or in a <style jsx global> block:
@keyframes modal-in {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
.animate-modal-in {
  animation: modal-in 0.3s ease;
}
*/
