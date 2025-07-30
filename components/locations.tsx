"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  { city: "Trivandrum", country: "India" },
  { city: "Kochi", country: "India" },
  { city: "Bangalore", country: "India" },
  { city: "Dubai", country: "UAE" },
];

const Locations = () => {
  return (
    <section className="bg-[#0f0f0f] border-y border-[#1f1f1f] py-10 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 uppercase tracking-widest text-sm md:text-base mb-4"
        >
          Our Service Locations
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center flex-wrap gap-6"
        >
          {locations.map((loc, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-[#e2b866] bg-[#1a1a1a] px-4 py-2 rounded-full shadow-md hover:bg-[#222]"
            >
              <FaMapMarkerAlt className="text-base md:text-lg" />
              <span className="font-semibold text-sm md:text-base tracking-wide">
                {loc.city} <span className="text-gray-400 text-xs md:text-sm">/ {loc.country}</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
