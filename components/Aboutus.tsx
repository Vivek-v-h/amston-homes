"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Aboutus = () => {
  return (
    <section
      id="aboutus"
      className="w-full px-6 py-20 md:py-28 bg-gradient-to-br from-[#ffffe3] to-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-semibold tracking-wide text-center mb-16 text-[#111827] luxuryy-font"
        >
          OUR STORY
        </motion.h2>

        {/* Main Content Layout */}
        <div className="relative grid md:grid-cols-2 gap-14 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#1f1f1f] leading-relaxed"
          >
            <p className="text-lg md:text-xl font-light tracking-wide mb-6 text-[#2e2e2e]">
              At{" "}
              <span className="font-semibold text-[#111827] luxuryy-font">
                Amston Homes
              </span>
              , we craft more than just buildings — we create luxurious,
              functional spaces that reflect precision, elegance, and lasting
              value.
            </p>
            <p className="text-lg md:text-xl font-light tracking-wide mb-6 text-[#2e2e2e]">
              With a strong foundation in construction and real estate, our
              services span property management, architectural consultation,
              rental & resale, and contracting channel partnerships.
            </p>
            <p className="text-lg md:text-xl font-light tracking-wide text-[#2e2e2e]">
              From the first sketch to the final reveal, we approach every
              project with transparency, craftsmanship, and an unwavering
              commitment to excellence. At Amston, every home isn’t just built —
              it’s thoughtfully brought to life.
            </p>
            <p className="text-lg mt-4 md:text-xl font-medium tracking-wide text-[#b3995d]">
              Built on trust, backed by excellence.
            </p>
          </motion.div>

          {/* Right Side - Image Block */}
          <div className="relative w-full h-full">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="overflow-hidden rounded-3xl shadow-2xl border border-[#d4cfc7]"
            >
              <Image
                src="/assets/aboutus2.png"
                alt="luxuryy Interior"
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
              className="absolute -bottom-10 -left-10 w-56 md:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-xl border-[5px] border-white"
            >
              <Image
                src="/assets/aboutus1.jpg"
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
