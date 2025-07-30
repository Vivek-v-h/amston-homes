"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const serviceDetails: Record<
  string,
  {
    title: string;
    details: string;
    extended?: string;
    image?: string;
  }
> = {
  "construction": {
    title: "Construction",
    details:
      "We specialize in Residential & Commercial construction, Renovation projects, and Annual Maintenance Contracts (AMC).",
    extended:
      "Our construction philosophy combines architectural integrity, premium-grade materials, and efficient project timelines. We ensure compliance, quality, and customer satisfaction across all our builds.",
    image: "/construction.png",
  },
  "real-estate": {
    title: "Real Estate",
    details:
      "We offer plot sales, flat & apartment deals, villa sales, and commercial space deals.",
    extended:
      "With deep market knowledge and a strong legal support system, we help our clients make secure and rewarding real estate investments. Our end-to-end solutions simplify property transactions for NRIs and locals alike.",
    image: "/real-estate.png",
  },
  "property-management": {
    title: "Property Management",
    details:
      "End-to-end management — from rent collection to maintenance and legal compliance.",
    extended:
      "We protect your property like it’s our own. Our system ensures transparency, steady returns, and asset value enhancement over time — perfect for absentee owners and busy professionals.",
    image: "/property-management.png",
  },
  "architect-consultation": {
    title: "Architect Consultation",
    details:
      "Collaborate with top architects for efficient, regulation-compliant, and luxurious designs.",
    extended:
      "We prioritize functionality, natural light, space optimization, and future scalability in every consultation, helping clients achieve visionary outcomes through smart design.",
    image: "/architect.png",
  },
  "rental-resale": {
    title: "Rental & Resale",
    details:
      "Connecting properties to ideal tenants and buyers through verified listings and marketing.",
    extended:
      "We navigate complex documentation, screening, and negotiation processes so you can focus on returns. Our transparency builds trust, ensuring long-term leasing or smooth resale outcomes.",
    image: "/rental.png",
  },
  "contracting": {
    title: "Contracting",
    details:
      "Turnkey material and subcontracting services delivered with precision and integrity.",
    extended:
      "We support large-scale projects and specialized trades through expert manpower and technology-backed execution plans, keeping client timelines and budgets intact.",
    image: "/contracting.png",
  },
  "channel-partnering": {
    title: "Channel Partnering",
    details:
      "Expand your business through strategic collaborations with trusted real estate and construction partners.",
    extended:
      "We provide a transparent partnership ecosystem, enabling agents and businesses to grow alongside us with shared resources, branding, and mutual trust.",
    image: "/channel.png",
  },
  "interior-design": {
    title: "Interior Design",
    details:
      "Where luxury meets practicality — tailored interiors for residences and workspaces.",
    extended:
      "Our team blends spatial logic, color harmony, and lifestyle-specific planning to create elegant, inspiring environments. We handle everything from material selection to final execution.",
    image: "/Interior.jpg",
  },
  "infrastructure-development": {
    title: "Infrastructure Development",
    details:
      "We build essential infrastructure — roads, utilities, and more — for sustainable urban expansion.",
    extended:
      "With civic responsibility at the core, we focus on long-term value through environmentally sound practices and smart engineering in every project.",
    image: "/infrastructure.jpg",
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = serviceDetails[slug];

  if (!data) {
    return (
      <section className="min-h-screen py-24 px-6 text-center text-gray-500">
        <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        <Link href="/" className="text-[#e2b866] underline">
          Return to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-[#fdfcf9] text-[#1a1a1a] py-24 px-6 md:px-20">
      {/* Back button */}
      <div className="mb-10">
        <Link
          href="/#services"
          className="text-[#e2b866] text-sm font-semibold uppercase tracking-wider hover:underline"
        >
          ← Back to Services
        </Link>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12"
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold luxury-font mb-6">
            {data.title}
          </h1>
          <p className="text-lg text-gray-800 mb-4">{data.details}</p>
          <p className="text-base text-gray-600 leading-relaxed">
            {data.extended}
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden rounded-3xl shadow-md">
            <Image
              src={data.image || "/default-service.jpg"} // Fallback image if none provided
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
