"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "About", href: "/about" },
  { name: "Skill", href: "/skill" },
  { name: "Work Experience", href: "/work-experience" },
  { name: "Contact", href: "/contact" },
];

export default function MenuAnimated() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center gap-6 mt-6 mb-2">
      {menuItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <span
            className={`relative px-5 py-2 rounded-xl font-semibold text-white transition-all duration-400 cursor-pointer bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl ${pathname === item.href ? "ring-2 ring-blue-400" : "opacity-80"}`}
            style={{
              boxShadow: pathname === item.href ? "0 0 16px 2px #3b82f6a0" : "0 2px 8px 0 rgba(31,38,135,0.12)",
              background: pathname === item.href ? "linear-gradient(90deg,#6366f1,#3b82f6)" : undefined,
            }}
          >
            <span className="block animate-menu-pop">{item.name}</span>
            {pathname === item.href && (
              <span className="absolute left-1/2 -bottom-2 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ transform: "translateX(-50%)" }} />
            )}
          </span>
        </Link>
      ))}
      <style jsx global>{`
        @keyframes menu-pop {
          0% { transform: scale(0.9); opacity: 0.7; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-menu-pop {
          animation: menu-pop 0.5s cubic-bezier(.68,-0.55,.27,1.55);
        }
      `}</style>
    </nav>
  );
}
