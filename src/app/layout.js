import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My CV",
  description:
    "CV Taufik - Full Stack Developer, Next.js, React Native, Node.js, Golang, Firebase, PostgreSQL, MySQL, Python.",
  keywords: [
    "CV",
    "Curriculum Vitae",
    "Taufik",
    "Full Stack Developer",
    "Next.js",
    "React Native",
    "Node.js",
    "Golang",
    "Firebase",
    "PostgreSQL",
    "MySQL",
    "Python",
  ],
  authors: [{ name: "Taufik", url: "mailto:taufik@email.com" }],
  icons: {
    icon: "/profile.jpg",
  },
  openGraph: {
    title: "My CV - Taufik",
    description:
      "CV Taufik - Full Stack Developer, Next.js, React Native, Node.js, Golang, Firebase, PostgreSQL, MySQL, Python.",
    url: "https://your-domain.com",
    siteName: "My CV",
    images: [
      {
        url: "/profile.jpg",
        width: 400,
        height: 400,
        alt: "Profile Taufik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My CV - Taufik",
    description:
      "CV Taufik - Full Stack Developer, Next.js, React Native, Node.js, Golang, Firebase, PostgreSQL, MySQL, Python.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
