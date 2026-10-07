import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/preloader";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata (for the headless export)
export const metadata: Metadata = {
  title: "Amston Homes | Luxury Real Estate & Construction",
  description:
    "Amston Homes offers luxury real estate, construction, and property management services. Explore our premium homes, apartments, and villas.",
  keywords:
    "luxury real estate, construction, property management, villas, apartments, homes, Kerala real estate, property development",
  authors: [{ name: "Amston Homes Team" }],
  openGraph: {
    title: "Amston Homes | Luxury Real Estate & Construction",
    description:
      "Amston Homes offers luxury real estate, construction, and property management services.",
    url: "https://www.amstonhomes.com",
    siteName: "Amston Homes",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amston Homes - Luxury Living",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amston Homes | Luxury Real Estate & Construction",
    description:
      "Luxury homes, villas, and construction services in Kerala and UAE.",
    images: ["/images/twitter-card.jpg"],
    creator: "@AmstonHomes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="Amston Homes" />

        <title>
          Amston Homes | Real Estate, Construction & Property Services
        </title>

        <meta
          name="description"
          content="Amston Homes provides real estate, construction, property management and property development services across Kerala and beyond. Explore properties, projects and professional property solutions."
        />

        <link rel="canonical" href="https://www.amstonhomes.com/" />

        <meta name="theme-color" content="#000000" />

        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Amston Homes | Real Estate, Construction & Property Services"
        />

        <meta
          property="og:description"
          content="Professional real estate, construction, property management and development services from Amston Homes."
        />

        <meta property="og:url" content="https://www.amstonhomes.com/" />

        <meta property="og:site_name" content="Amston Homes" />

        <meta
          property="og:image"
          content="https://www.amstonhomes.com/og-image.jpg"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Amston Homes | Real Estate, Construction & Property Services"
        />

        <meta
          name="twitter:description"
          content="Explore real estate, construction, property development and property management services from Amston Homes."
        />

        <meta
          name="twitter:image"
          content="https://www.amstonhomes.com/og-image.jpg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
