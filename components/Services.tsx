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
      "Residential and commercial construction, renovations, and AMC services delivered with quality, precision, and dependable execution.",
  },
  {
    title: "Real Estate",
    icon: <FaBuilding />,
    description:
      "Buy and sell plots, villas, apartments, flats, and commercial properties with professional guidance from search to transaction.",
  },
  {
    title: "Property Management",
    icon: <FaHome />,
    description:
      "Professional property management covering maintenance, tenant coordination, and day-to-day care of your property.",
  },
  {
    title: "Architect Consultation",
    icon: <FaPencilRuler />,
    description:
      "Architectural planning and consultation focused on functional, practical, and thoughtfully designed residential and commercial spaces.",
  },
  {
    title: "Rental and Resale",
    icon: <FaHandshake />,
    description:
      "Reliable rental and resale support for property owners, buyers, tenants, and investors, from marketing to closure.",
  },
  {
    title: "Contracting",
    icon: <FaChartLine />,
    description:
      "Material and project subcontracting with coordinated execution, quality control, compliance, and timely delivery.",
  },
  {
    title: "Channel Partnering",
    icon: <FaUsers />,
    description:
      "Collaborative channel partnerships across real estate and construction, creating opportunities for businesses and professionals.",
  },
  {
    title: "Interior Design",
    icon: <FaCouch />,
    description:
      "Residential and commercial interior design that brings together functionality, comfort, and a refined sense of style.",
  },
  {
    title: "Infrastructure Development",
    icon: <FaRoad />,
    description:
      "Infrastructure solutions that support well-planned properties, communities, utilities, and long-term development.",
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
          What <span className="text-[#e2b866]"> we do</span>
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
