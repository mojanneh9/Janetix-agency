import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // ✅ Ensure correct path
import Navbar from "../components/Navbar"; // ✅ Ensure correct absolute path

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Janetix AI - AI-Powered Websites",
  description: "Build AI-driven websites with automation and customization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Navbar is placed here */}
        <Navbar />  
        <main>{children}</main> {/* ✅ Wrapped children in a <main> tag */}
      </body>
    </html>
  );
}