import Image from "next/image";
import Link from "next/link";
import KeyboardNav from "../KeyboardNav";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <KeyboardNav />
      <Image src="/bg.jpg" alt="Background" fill priority className="object-cover -z-10" />
      <div className="bg-transparent rounded-xl p-8 sm:p-12 flex flex-col sm:flex-row items-center shadow-lg w-full max-w-2xl mx-auto mt-16">
        <div className="flex flex-col items-center sm:items-start sm:flex-row w-full">
          <Image src="/profile.jpg" alt="Profile" width={150} height={150} className="rounded-full object-cover border-4 border-white mb-4 sm:mb-0" />
          <div className="flex flex-col gap-2 items-center sm:items-start sm:ml-8 text-center sm:text-left">
            <h2 className="text-3xl font-bold text-white">Taufik</h2>
            <p className="text-white">Email: taufik@email.com</p>
            <p className="text-blue-200 font-semibold">Full Stack Developer</p>
            <p className="mt-2 text-white">Saya adalah seorang full stack developer yang berpengalaman dalam membangun aplikasi web dan mobile menggunakan berbagai teknologi modern.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/" className="mr-2">
          <button type="button" className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition cursor-pointer">Back</button>
        </Link>
        <Link href="/skill">
          <button type="button" className="px-6 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl cursor-pointer">Next</button>
        </Link>
      </div>
    </div>
  );
}
