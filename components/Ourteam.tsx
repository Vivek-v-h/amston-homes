"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Shine Simon",
    designation: "Founder & CEO",
    image: "/founder.png",
  },
  {
    name: "Anagha T P",
    designation: "Architect",
    image: "/anaghatp.jpeg",
  },
  {
    name: "Neethu K L",
    designation: "Architect",
    image: "/neethukl.jpeg",
  },
  {
    name: "Anoop N P",
    designation: "Agronomist",
    image: "/anoop.jpeg",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-gradient-to-b from-[#fdfcf9] to-[#f1f0ec] py-20 px-6 md:px-12 text-[#1a1a1a]">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#b3995d] uppercase tracking-[0.3em] text-sm font-semibold mb-3"
        >
          The People Behind Amston
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold luxury-font"
        >
          Our Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mt-5 text-gray-600 text-base md:text-lg"
        >
          A dedicated team bringing together experience, expertise and a
          shared vision for creating exceptional spaces.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{ y: -8 }}
            className="group"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#e8e6e2] border border-[#e8e6e2] shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent opacity-70" />

              {/* Gold accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#b3995d] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </div>

            {/* Details */}
            <div className="pt-5 text-center">
              <h3 className="text-xl font-semibold text-[#1a1a1a]">
                {member.name}
              </h3>

              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-[#b3995d] font-medium">
                {member.designation}
              </p>

              <div className="w-8 h-[1px] bg-[#004643] mx-auto mt-4 transition-all duration-300 group-hover:w-14" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;