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
  title: "Amston Homes | Luxury Real Estate & Construction",
  description:
    "Amston Homes offers luxury real estate, construction, and property management services. Explore our premium homes, apartments, and villas.",
  keywords: "luxury real estate, construction, property management, villas, apartments, homes, Kerala real estate, property development",
  author: "Amston Homes Team",
  openGraph: {
    title: "Amston Homes | Luxury Real Estate & Construction",
    description:
      "Amston Homes offers luxury real estate, construction, and property management services. Explore our premium homes, apartments, and villas.",
    url: "https://www.amstonhomes.com", // Update this to your actual URL
    site_name: "Amston Homes",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AmstonHomes", // Add your Twitter handle
    title: "Amston Homes | Luxury Real Estate & Construction",
    description:
      "Amston Homes offers luxury real estate, construction, and property management services. Explore our premium homes, apartments, and villas.",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Amston Homes Team" />
        <meta name="description" content="Amston Homes offers luxury real estate, construction, and property management services." />
        <meta name="keywords" content="luxury real estate, construction, property management, villas, apartments, homes, Kerala real estate, property development" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.amstonhomes.com" /> {/* Replace with your actual website URL */}
        <title>Amston Homes | Luxury Real Estate & Construction</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
