"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Aboutus = () => {
  return (
    <section
      id="aboutus"
      className="w-full px-6 py-20 md:py-28 bg-gradient-to-br from-[#ffffe3] to-[#ffff]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-semibold text-center mb-16 tracking-wide text-[#111827]"
        >
          OUR STORY
        </motion.h2>

        {/* Main Content Layout */}
        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#2c2c2c] leading-relaxed"
          >
            <p className="text-lg md:text-xl font-light tracking-wide mb-6">
              At <span className="font-medium text-[#111827]">Amston Homes</span>, we craft more than just buildings — we create luxurious, functional spaces that reflect precision, elegance, and lasting value. With a strong foundation in construction and real estate, our services span property management, architectural consultation, rental & resale, and contracting channel partnerships
            </p>
            <p className="text-lg md:text-xl font-light tracking-wide">
              From the first sketch to the final reveal, we approach every project with transparency, craftsmanship, and an unwavering commitment to excellence. At Amston, every home isn’t just built — it’s thoughtfully brought to life.
            </p>
          </motion.div>

          {/* Right Side - Image Block */}
          <div className="relative w-full h-full">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="overflow-hidden rounded-3xl shadow-2xl border border-[#d1d5db]"
            >
              <Image
                src="/assets/aboutus2.png" // Interior
                alt="Luxury Interior"
                width={650}
                height={450}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-10 -left-10 w-56 md:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-xl border-[4px] border-white"
            >
              <Image
                src="/assets/aboutus1.jpg" // Exterior
                alt="Modern Architecture"
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
