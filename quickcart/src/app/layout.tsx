// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CartBar from "@/components/CartBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bismillah Grocery",
  description: "Scan & shop fast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Your pages render here */}
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          {/* Your page-level footers can remain in page components */}
        </div>

        {/* Sticky mobile cart bar */}
        <CartBar />
      </body>
    </html>
  );
}