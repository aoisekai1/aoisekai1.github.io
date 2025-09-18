"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const pageOrder = ["/", "/about", "/skill", "/work-experience", "/contact"];

export default function KeyboardNav() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/contact") return;
    const handleKey = (e) => {
      const idx = pageOrder.indexOf(pathname);
      if (e.key === "ArrowRight" && idx !== -1 && idx < pageOrder.length - 1) {
        router.push(pageOrder[idx + 1]);
      }
      if (e.key === "ArrowLeft" && idx > 0) {
        router.push(pageOrder[idx - 1]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [pathname, router]);
  return null;
}
