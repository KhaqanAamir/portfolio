import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Khaqan Aamir — Full-Stack Engineer",
    template: "%s — Khaqan Aamir",
  },
  description:
    "Full-stack engineer building fast, accessible product experiences and the scalable systems behind them.",
  keywords: [
    "Khaqan Aamir",
    "Full-Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Three.js",
    "Product Engineering",
  ],
  authors: [{ name: "Khaqan Aamir" }],
  creator: "Khaqan Aamir",
  category: "technology",
  openGraph: {
    title: "Khaqan Aamir — Full-Stack Engineer",
    description:
      "Full-stack engineer turning complex systems into fast, accessible digital products.",
    type: "website",
    locale: "en_US",
    siteName: "Khaqan Aamir",
  },
  twitter: {
    card: "summary",
    title: "Khaqan Aamir — Full-Stack Engineer",
    description:
      "Full-stack engineer turning complex systems into fast, accessible digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
