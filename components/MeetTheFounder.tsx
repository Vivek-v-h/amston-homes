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
              className="object-cover object-top"
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
            <span className="text-[#b3995d] font-semibold">Mr. Shine Simon</span>, Founder and CEO of Amston Homes, is a seasoned business professional and certified business analyst with over 12 years of expertise in real estate and service sectors across <span className="text-[#004643] font-medium">Kerala, Bangalore, the Middle East, and Dubai (UAE)</span>.
          </p>
          <p className="text-gray-600 italic text-sm">
            Guided by a vision of integrity, sophistication, and forward-thinking design, Shine has established Amston as a name synonymous with trust, luxury, and performance. His deep understanding of market dynamics and client-centric approach ensures that every project delivers exceptional value—financially and experientially.
          </p>
          <p className="text-gray-600 italic text-sm mt-3">
            Whether driving high-end developments or offering strategic investment guidance, Shine leads with precision, clarity, and a long-term growth mindset. His entrepreneurial spirit and commitment to architectural elegance continue to define the spaces Amston creates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheFounder;
