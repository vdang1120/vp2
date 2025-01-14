import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "./components/Head"
import Foot from "./components/Foot"
import InfoTag from "./components/Infotag";

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
    default: "Vision Palace | Arlington, TX",
    template: "%s | Vision Palace"
  },
  description: "Vision Palace offers comprehensive eye exams, prescription glasses, contact lenses, and eye care services in Arlington, Texas.",
  openGraph: {
    type: "website",
    url: "https://visionpalacetx.com/", // The canonical URL of the page
    title: "Vision Palace | Arlington, TX",
    description: "Vision Palace offers comprehensive eye exams, prescription glasses, contact lenses, and eye care services in Arlington, Texas.",
  },
  authors: {
    name: "Vincent Dang",
    url: "https://www.linkedin.com/in/vdanguta/"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head />
        {children}
        <InfoTag />
        <Foot />
      </body>
    </html>
  );
}
