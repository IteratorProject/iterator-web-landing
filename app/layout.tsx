import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/Navigation";
import { LanguageToggle } from "../components/LanguageToggle";
import { LanguageProvider } from "../context/LanguageContext";
import IntroAnimation from "../components/IntroAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Iterator Project",
  description: "Try -> Fail -> Learn -> Repeat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fbf8f6] text-[#181818] overflow-x-hidden`}
      >
        <LanguageProvider>
          <IntroAnimation />
          {children}
          <LanguageToggle />
          <Navigation />
        </LanguageProvider>
      </body>
    </html>
  );
}
