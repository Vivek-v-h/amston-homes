"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Building2 } from "lucide-react";

const features = [
  {
    title: "100% Price Assurance",
    description:
      "With our fixed price policy, you’re protected from unforeseen cost hikes—giving you total control and peace of mind throughout your project.",
    icon: <ShieldCheck className="h-10 w-10 text-[#004643]" />,
  },
  {
    title: "Energy-Efficient Spaces",
    description:
      "Amston Homes prioritizes sustainability—from thermal-efficient structures to smart eco-materials, our builds are made for a greener tomorrow.",
    icon: <Leaf className="h-10 w-10 text-[#004643]" />,
  },
  {
    title: "Architectural Excellence",
    description:
      "Our curated design approach blends functionality with refined aesthetics, ensuring every space feels elevated, intelligent, and timeless.",
    icon: <Building2 className="h-10 w-10 text-[#004643]" />,
  },
];

const WhyUs = () => {
  return (
    <section id="whyus" className="bg-[#fdfcf9] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl luxuryy-font font-semibold text-[#111827] tracking-wide mb-16"
        >
          Why Choose Amston?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-xl rounded-3xl p-8 border border-[#e5e7eb] hover:shadow-2xl transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#dff4f0] rounded-full">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
