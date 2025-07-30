"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
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
];


const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-[#fdfcf9] to-[#f1f0ec] text-[#1a1a1a] py-20 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide mb-4 luxury-font">
            Our <span className="text-[#b3995d]">Signature Projects</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            A showcase of our architectural finesse, thoughtful design, and unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
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

        {/* View More Button */}
        <div className="text-center pt-10">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 cursor-pointer rounded-lg bg-[#b3995d] hover:bg-[#9f864b] text-white font-semibold tracking-wide transition-colors"
            >
              View More Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
