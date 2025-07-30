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
      "Modern architectural design fused with luxury construction — from villas to premium lifestyle homes.",
    extended:
      "We build for tomorrow with precision engineering, aesthetic integrity, and the finest materials. Our luxury builds reflect modern living ideals with seamless execution from foundation to finish.",
    image: "/construction.png",
  },
  "real-estate": {
    title: "Real Estate",
    details:
      "Premium property deals and curated lifestyle spaces designed to elevate modern living.",
    extended:
      "We connect clients with luxury villas, stylish flats, and investment-worthy plots — all aligned with premium urban lifestyles. Our process ensures safe, transparent, and growth-focused real estate decisions.",
    image: "/real-estate.png",
  },
  "property-management": {
    title: "Property Management",
    details:
      "Effortless ownership with full-service property care built for premium residences and luxury estates.",
    extended:
      "Our modern approach ensures lifestyle preservation and value growth through smart maintenance, tenant services, and seamless management of high-end properties.",
    image: "/property-management.png",
  },
  "architect-consultation": {
    title: "Architect Consultation",
    details:
      "Modern architectural excellence tailored for luxurious, elegant, and sustainable living spaces.",
    extended:
      "Our architects blend design intelligence with lifestyle sensibilities, creating spaces that define premium living — where form, function, and beauty coexist effortlessly.",
    image: "/architect.png",
  },
  "rental-resale": {
    title: "Rental & Resale",
    details:
      "Optimized solutions for premium property leasing and resale in today’s lifestyle-driven market.",
    extended:
      "We help you maximize returns from luxury properties, with targeted marketing, verified listings, and negotiation support for a smooth and profitable experience.",
    image: "/rental.png",
  },
  "contracting": {
    title: "Contracting",
    details:
      "Streamlined contracting built for modern projects, luxury builds, and architectural precision.",
    extended:
      "We deliver turnkey solutions for premium developments with expert teams, curated materials, and strict quality control aligned with lifestyle aspirations.",
    image: "/contracting.png",
  },
  "channel-partnering": {
    title: "Channel Partnering",
    details:
      "Grow with us in the luxury and premium real estate space through trusted partnerships.",
    extended:
      "Collaborate on high-value lifestyle projects and modern developments. Our partner ecosystem is designed for shared success and elevated standards.",
    image: "/channel.png",
  },
  "interior-design": {
    title: "Interior Design",
    details:
      "Designing interiors that reflect refined lifestyle, modern architecture, and luxury comfort.",
    extended:
      "From space planning to material curation, we create premium environments that celebrate personal style, functional elegance, and lifestyle harmony.",
    image: "/Interior.jpg",
  },
  "infrastructure-development": {
    title: "Infrastructure Development",
    details:
      "Future-ready infrastructure that supports modern architectural growth and luxury communities.",
    extended:
      "We engineer urban essentials — from roads to utilities — designed for scalable, eco-conscious living aligned with the aesthetics and function of modern life.",
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
