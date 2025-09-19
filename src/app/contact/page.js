"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <Image src="/bg.jpg" alt="Background" fill priority className="object-cover -z-10" />
      <div className="bg-transparent rounded-xl p-12 flex flex-col items-center shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-white">Contact Me</h2>
        <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="border rounded px-3 py-2 bg-transparent text-white border-white placeholder-white" />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="border rounded px-3 py-2 bg-transparent text-white border-white placeholder-white" />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required className="border rounded px-3 py-2 bg-transparent text-white border-white placeholder-white" />
          <div className="flex">
            <Link href="/work-experience" className="w-full" style={{ marginRight: '5px' }}>
              <button type="button" className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition w-full cursor-pointer">Back</button>
            </Link>
            <button type="submit" className="px-6 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl cursor-pointer w-full">Send</button>
          </div>
        </form>
  {status && <p className="mt-4 text-white">{status}</p>}
      </div>
    </div>
  );
}
