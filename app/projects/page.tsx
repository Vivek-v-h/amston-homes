"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const allProjects = [
  {
    title: "The Amston Skye",
    location: "Kochi",
    image: "/skye.jpg",
    description: "Rising above the urban buzz, The Amston Skye sets a benchmark for refined vertical living. With eco-conscious architecture and contemporary design, it’s a statement of modern luxury with a sustainable soul.",
  },
  {
    title: "Amston Haven Villas",
    location: "Kerala",
    image: "/haven.jpg",
    description: "Nestled in greenery yet close to urban convenience, these villas offer a lifestyle of peaceful indulgence. Crafted with architectural finesse, each home is a private haven of comfort and class.",
  },
  {
    title: "Urban Crown Residency",
    location: "Kerala",
    image: "/crown.jpg",
    description: "Merging innovation with elegance, this urban project integrates smart home features and sophisticated design, creating homes that are both future-ready and visually captivating.",
  },
  {
    title: "Golden Valley Homes",
    location: "Kerala",
    image: "/valley.jpg",
    description: "A community-focused development combining timeless design with practical layouts, Golden Valley Homes evokes warmth, reliability, and family-centric living in a scenic setting.",
  },
  {
    title: "Skyline Greenscape",
    location: "Kerala",
    image: "/greenscape.jpg",
    description: "A contemporary marvel that emphasizes natural light, open spaces, and architectural boldness. Skyline Greenscape is where modernism meets environmental consciousness.",
  },
  {
    title: "Amston Plaza",
    location: "Kerala",
    image: "/plaza.jpg",
    description: "A bold fusion of stone, wood, and geometry, Amston Plaza exemplifies modern commercial architecture. Ideal for upscale offices or lifestyle businesses seeking a distinguished address.",
  },
];


export default function ProjectsPage() {
  const [cameFromPortfolio, setCameFromPortfolio] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Capture the previous hash (if available) from browser history
    if (document.referrer.includes("#portfolio")) {
      setCameFromPortfolio(true);
    }
  }, []);

  const handleBack = () => {
    if (cameFromPortfolio) {
      history.back();
      setTimeout(() => history.back(), 100); // delay ensures correct execution
    } else {
      history.back();
    }
  };

  return (
    <section className="bg-[#f8f8f6] text-[#1a1a1a] py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="text-sm font-semibold text-[#b3995d] hover:text-[#8d7642] transition duration-200 px-4 py-2 border border-[#b3995d] rounded-full hover:shadow-md"
          >
            ← Back
          </button>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 luxury-font"
        >
          Full Project Showcase
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Explore our complete portfolio of luxurious, innovative, and architecturally significant developments that reflect our dedication to quality and vision.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
          {allProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-[#1a1a1a] luxury-font">
                  {project.title}
                </h3>
                <p className="text-[#b3995d] uppercase tracking-wide text-sm">
                  {project.location}
                </p>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
