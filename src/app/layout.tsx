import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Darshan AB | Full Stack Developer",
  description: "Premium Portfolio of Darshan AB - Building scalable web and mobile applications, intelligent tools, and beautiful user experiences. Specializing in Flutter, React, Next.js, and Python.",
  keywords: ["Darshan AB", "Full Stack Developer", "Flutter Developer", "React Developer", "Next.js", "Software Engineer", "Portfolio", "Web Developer", "App Developer"],
  authors: [{ name: "Darshan AB" }],
  creator: "Darshan AB",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darshanab.com",
    title: "Darshan AB | Full Stack Developer",
    description: "Premium Portfolio of Darshan AB - Building scalable web and mobile applications, intelligent tools, and beautiful user experiences.",
    siteName: "Darshan AB Portfolio",
    images: [{
      url: "/darshan.jpeg",
      width: 800,
      height: 800,
      alt: "Darshan AB Profile Picture"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshan AB | Full Stack Developer",
    description: "Premium Portfolio of Darshan AB - Building scalable web and mobile applications, intelligent tools, and beautiful user experiences.",
    images: ["/darshan.jpeg"],
  },
  icons: {
    icon: "/darshan.jpeg",
    shortcut: "/darshan.jpeg",
    apple: "/darshan.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="font-sans antialiased selection:bg-primary/30 selection:text-white">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
