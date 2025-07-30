"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Building2,
  CheckCircle2,
  Clock,
  Settings2,
} from "lucide-react";

const features = [
  {
    title: "100% Price Assurance",
    description:
      "Fixed pricing keeps you protected from surprises—offering clarity and peace of mind.",
    icon: <ShieldCheck className="h-8 w-8 text-[#004643]" />,
  },
  {
    title: "Energy-Efficient Spaces",
    description:
      "From thermal designs to smart materials, we build with sustainability in mind.",
    icon: <Leaf className="h-8 w-8 text-[#004643]" />,
  },
  {
    title: "Architectural Excellence",
    description:
      "Our spaces balance form and function—refined, intelligent, and timeless.",
    icon: <Building2 className="h-8 w-8 text-[#004643]" />,
  },
  {
    title: "Quality Assurance",
    description:
      "Every detail is reviewed to meet high standards of durability and finish.",
    icon: <CheckCircle2 className="h-8 w-8 text-[#004643]" />,
  },
  {
    title: "On-Time Delivery",
    description:
      "Strict timelines with transparent updates—so you take possession right on time.",
    icon: <Clock className="h-8 w-8 text-[#004643]" />,
  },
  {
    title: "Customization & Flexibility",
    description:
      "We tailor layouts and finishes to match your lifestyle and taste.",
    icon: <Settings2 className="h-8 w-8 text-[#004643]" />,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-2xl p-5 border border-[#e5e7eb] hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#dff4f0] rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-base font-semibold text-[#1f2937] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-snug">
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
