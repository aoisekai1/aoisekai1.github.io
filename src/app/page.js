import Link from "next/link";
import Image from "next/image";
import KeyboardNav from "./KeyboardNav";

export default function Home() {
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
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 flex flex-col items-center shadow-2xl border border-white/30 max-w-xl w-full mx-4">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg tracking-tight">
          Welcome
        </h1>
        <p className="mb-8 text-lg text-center max-w-md text-white/90 font-medium">
          Selamat datang di CV saya.
          <br />
          <span className="text-blue-200">
            Silakan klik tombol di bawah untuk mengenal lebih lanjut.
          </span>
        </p>
        <Link href="/about">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transition-all duration-300 text-lg font-bold text-white cursor-pointer">
            About Me
          </button>
        </Link>
      </div>
    </div>
  );
}
