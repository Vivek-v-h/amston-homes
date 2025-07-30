"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MeetTheFounder = () => {
  return (
    <section className="bg-gradient-to-b from-[#fdfcf9] to-[#f1f0ec] py-20 px-6 md:px-12 text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#e8e6e2]">
            <Image
              src="/founder.jpg"
              alt="Founder"
              fill
              className="object-cover object-top" // 👈 Crops from bottom
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-bold luxury-font mb-4">Meet the CEO</h2>
          <p className="text-gray-700 text-lg mb-4">
            <span className="text-[#b3995d] font-semibold">Mr. Shine Simon</span>, Founder and CEO of Amston Homes, embodies over 12 years of excellence in the real estate and service sectors. With a vision rooted in integrity, sophistication, and thoughtful design, he has shaped Amston into a symbol of trust, quality, and enduring value.
          </p>
          <p className="text-gray-600 italic text-sm">
            His leadership is defined by strategic insight, a deep understanding of market dynamics, and an unwavering commitment to client satisfaction. From bespoke developments to investment advisory, Shine Simon champions a culture of clarity, reliability, and long-term growth — inspiring every space we create and every relationship we build.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheFounder;
