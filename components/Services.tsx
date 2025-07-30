"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaTools,
  FaBuilding,
  FaHome,
  FaPencilRuler,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaCouch,
  FaRoad,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Construction",
    icon: <FaTools />,
    description:
      "Residential & commercial construction, renovations, and AMC maintenance delivered with lasting craftsmanship and attention to detail.",
  },
  {
    title: "Real Estate",
    icon: <FaBuilding />,
    description:
      "Comprehensive solutions: plot, flat, villa, apartment, and commercial space sales, with seamless property management services.",
  },
  {
    title: "Property Management",
    icon: <FaHome />,
    description:
      "Protect and grow your asset value with full-service property maintenance, tenant coordination, and hassle-free operations.",
  },
  {
    title: "Architect Consultation",
    icon: <FaPencilRuler />,
    description:
      "Collaborate with visionary architects to design purposeful, elegant, and sustainable spaces that reflect your dreams.",
  },
  {
    title: "Rental Resale",
    icon: <FaHandshake />,
    description:
      "End-to-end rental and resale support tailored for homeowners, investors, and tenants seeking optimal value.",
  },
  {
    title: "Contracting",
    icon: <FaChartLine />,
    description:
      "Efficient execution through material and project sub-contracting, ensuring timely delivery with quality and compliance.",
  },
  {
    title: "Channel Partnering",
    icon: <FaUsers />,
    description:
      "Join our trusted partner network and grow with us through collaborative opportunities in real estate and construction.",
  },
  {
    title: "Interior Design",
    icon: <FaCouch />,
    description:
      "Interior excellence across residential flats, villas, and commercial spaces – where function meets refined aesthetics.",
  },
  {
    title: "Infrastructure Development",
    icon: <FaRoad />,
    description:
      "From utilities, we create foundational infrastructure that uplifts communities and enables future-ready living.",
  },
];

const Services = () => {
  const router = useRouter();

  return (
    <section
      id="services"
      className="bg-[#0f0f0f] text-white py-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide"
        >
          Our <span className="text-[#e2b866]">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() =>
                router.push(
                  `/services/${service.title.toLowerCase().replace(/ /g, "-")}`
                )
              }
              className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-700 shadow-xl hover:shadow-[#e2b866]/30 hover:scale-[1.03] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#262626] rounded-full text-[#e2b866] text-2xl group-hover:text-white group-hover:bg-[#e2b866] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-wide text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Services;
