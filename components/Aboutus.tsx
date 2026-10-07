"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Aboutus = () => {
  return (
    <section
      id="aboutus"
      aria-labelledby="aboutus-heading"
      className="w-full px-6 py-20 md:py-28 bg-gradient-to-br from-[#ffffe3] to-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base tracking-[0.3em] font-medium text-[#b3995d] uppercase mb-3">
            An Amston Approach
          </p>

          <h2
            id="aboutus-heading"
            className="text-4xl md:text-6xl font-semibold tracking-wide text-[#111827] luxuryy-font"
          >
            MORE THAN BUILDINGS
          </h2>
        </motion.div>

        {/* Main Content Layout */}
        <div className="relative grid md:grid-cols-2 gap-14 items-center">

          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#1f1f1f] leading-relaxed"
          >
            <p className="text-lg md:text-xl font-light tracking-wide mb-6 text-[#2e2e2e]">
              At{" "}
              <span className="font-semibold text-[#111827] luxuryy-font">
                Amston Homes
              </span>
              , we believe every property is more than a structure. It is a
              place to live, a space to grow, and an investment in the future.
            </p>

            <p className="text-lg md:text-xl font-light tracking-wide mb-6 text-[#2e2e2e]">
              With a foundation in{" "}
              <span className="font-medium">
                real estate and construction
              </span>
              , we bring together property development, architectural
              consultation, property management, rental and resale services
              under one roof.
            </p>

            <p className="text-lg md:text-xl font-light tracking-wide text-[#2e2e2e]">
              From the first idea to the finished space, we focus on
              thoughtful planning, clear communication and quality execution —
              creating spaces and property solutions built for lasting value.
            </p>

            {/* Brand Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mt-6 font-medium tracking-wide text-[#b3995d]"
            >
              “Built on trust, backed by excellence.”
            </motion.p>
          </motion.div>

          {/* Right Side - Image Block */}
          <div className="relative w-full h-full">

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="overflow-hidden rounded-3xl shadow-2xl border border-[#d4cfc7]"
            >
              <Image
                src="/assets/aboutus2.png"
                alt="Amston Homes luxury residential interior"
                width={650}
                height={450}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="absolute -bottom-10 -left-10 w-56 md:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-xl border-[5px] border-white"
            >
              <Image
                src="/assets/aboutus1.jpg"
                alt="Amston Homes modern residential architecture"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;