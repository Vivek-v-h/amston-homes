"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const serviceDetails: Record<
  string,
  {
    title: string;
    details: string;
    extended?: string;
    image?: string;
  }
> = {
  construction: {
    title: "Construction",
    details:
      "End-to-end residential and commercial construction, from planning and site preparation to finishing and handover.",
    extended:
      "Building a property is a major investment, and the quality of the process matters as much as the finished space. Amston Homes provides residential and commercial construction services with a focus on practical planning, quality execution, clear communication, and dependable project coordination.\n\nOur construction services cover new home construction, villas, residential buildings, commercial spaces, renovations, extensions, and AMC maintenance. We coordinate the different stages of a project so that clients have a clearer understanding of what is being built, how it is progressing, and what comes next.\n\nFrom site assessment and initial planning to structural work, electrical and plumbing coordination, finishing, and final handover, our approach is built around attention to detail and responsible execution. We work to balance design requirements, functionality, budget considerations, material selection, and long-term durability.\n\nWhether you are planning a new home, developing a residential property, renovating an existing building, or undertaking a commercial project, Amston Homes brings construction and property expertise together under one roof.\n\nOur goal is simple: to make the construction journey more organised, transparent, and dependable while delivering a space built for long-term use.",
    image: "/construction.png",
  },

  "real-estate": {
    title: "Real Estate",
    details:
      "Professional real estate solutions for buying and selling plots, villas, apartments, flats, homes, and commercial properties.",
    extended:
      "Finding the right property is about more than finding a building at the right price. Location, property condition, documentation, connectivity, future potential, and the purpose of the investment all play an important role in making a sound real estate decision.\n\nAmston Homes helps buyers, sellers, homeowners, and investors navigate the property market with practical guidance and a clear understanding of their requirements. Our real estate services cover residential properties, villas, apartments, flats, plots, land, and commercial spaces.\n\nFor buyers, we help identify properties that align with their requirements, budget, preferred location, and intended use. For property owners and sellers, we provide support in presenting and positioning their property to reach relevant buyers.\n\nWe believe real estate transactions should be handled with clarity and professionalism. That means communicating relevant property information clearly, coordinating between the parties involved, and helping clients understand the next steps throughout the transaction.\n\nWhether you are looking for a home, purchasing land, exploring a property investment, selling an existing asset, or searching for a commercial property, Amston Homes aims to make the process simpler and more informed.",
    image: "/real-estate.png",
  },

  "property-management": {
    title: "Property Management",
    details:
      "Reliable property management services covering maintenance, tenant coordination, inspections, and day-to-day property care.",
    extended:
      "Owning a property should be an asset, not a constant responsibility. Amston Homes provides property management services designed to help owners maintain their properties, coordinate tenants, address maintenance requirements, and manage day-to-day property operations more efficiently.\n\nOur property management approach is built around communication, timely coordination, and consistent attention to the condition of the property. We help property owners stay connected to what is happening with their asset without having to personally manage every operational detail.\n\nOur services can include property inspections, maintenance coordination, tenant communication, rental coordination, issue resolution, and general property care, depending on the requirements of the property and owner.\n\nFor owners living away from their property or managing multiple properties, professional property management can provide greater convenience and better operational oversight. We work to protect the condition of the property while supporting a positive experience for both owners and tenants.\n\nFrom individual homes and apartments to larger residential or commercial properties, Amston Homes provides practical property management support focused on care, communication, and long-term asset value.",
    image: "/property-management.png",
  },

  "architect-consultation": {
    title: "Architect Consultation",
    details:
      "Architectural planning and consultation for residential and commercial spaces focused on functionality, design, comfort, and long-term usability.",
    extended:
      "Good architecture begins with understanding how a space needs to work. Amston Homes provides architectural consultation to help homeowners, property developers, and businesses turn ideas and requirements into practical spaces.\n\nOur approach considers more than appearance. Site conditions, space planning, natural light, ventilation, movement, functionality, materials, lifestyle requirements, and long-term usability all contribute to a successful design.\n\nFor residential projects, architectural consultation can help shape everything from the overall layout and room planning to the relationship between indoor and outdoor spaces. For commercial projects, the focus can extend to functionality, circulation, customer experience, workspace requirements, and efficient use of available space.\n\nWe work with clients to understand their priorities before moving towards design decisions. This helps create a more considered relationship between architectural vision, construction requirements, budget, and everyday use.\n\nWhether you are planning a new house, villa, renovation, commercial building, or property development, professional architectural consultation can provide the clarity needed before construction begins.\n\nAt Amston Homes, we believe good design should not simply look impressive. It should work beautifully in real life.",
    image: "/architect.png",
  },

  "rental-and-resale": {
    title: "Rental & Resale",
    details:
      "End-to-end rental and resale support for property owners, buyers, tenants, and investors seeking a smoother property transaction.",
    extended:
      "Renting or reselling a property involves much more than putting up a listing. Effective property marketing, accurate information, enquiry management, communication, negotiation, and coordination all contribute to a successful outcome.\n\nAmston Homes provides rental and resale support for residential and commercial properties, helping property owners reach potential tenants or buyers while coordinating the different stages of the process.\n\nFor property owners, we can assist with presenting the property, marketing, handling enquiries, coordinating property visits, and facilitating communication with interested parties. For buyers and tenants, we help make property discovery and communication more straightforward.\n\nOur approach focuses on presenting properties clearly and connecting them with relevant opportunities rather than relying solely on volume. We understand that every property has different characteristics, and every buyer, tenant, and investor has different priorities.\n\nWhether you are looking to rent out a home, sell a villa, resell an apartment, lease a commercial space, or explore a property purchase, Amston Homes provides practical support throughout the property journey.",
    image: "/rental.png",
  },

  contracting: {
    title: "Contracting",
    details:
      "Professional contracting and project execution support for construction and development projects, with coordinated teams and quality-focused delivery.",
    extended:
      "Successful construction depends on coordination between people, materials, timelines, and multiple areas of work. Amston Homes provides contracting and project execution support to help construction and development projects move efficiently from one stage to the next.\n\nOur contracting services can support material coordination, project subcontracting, execution, and site-level requirements across residential and commercial construction. We work with the different professionals and teams involved in a project to maintain coordination and minimise unnecessary delays.\n\nQuality, compliance, communication, and timely execution are central to our approach. Rather than treating each construction activity as an isolated task, we focus on how individual stages contribute to the overall project.\n\nFor developers, property owners, contractors, and project stakeholders, reliable contracting support can make a significant difference to project efficiency. Clear responsibilities, appropriate material planning, coordination between trades, and regular progress monitoring all contribute to better execution.\n\nAmston Homes aims to provide dependable contracting support that complements architectural planning and construction requirements while keeping the wider project objectives in focus.",
    image: "/contracting.png",
  },

  "channel-partnering": {
    title: "Channel Partnering",
    details:
      "Collaborative channel partnerships connecting real estate and construction opportunities with trusted professionals and businesses.",
    extended:
      "Strong property businesses are built through strong professional relationships. Amston Homes works with channel partners, real estate professionals, consultants, contractors, and other businesses to create collaborative opportunities across the property and construction sectors.\n\nOur channel partnering model is designed around communication, professional coordination, and shared opportunities. Partners can work with Amston Homes to connect relevant property requirements, development opportunities, construction projects, and potential clients.\n\nWe believe successful partnerships should create value for everyone involved. That requires clear communication, responsible representation, reliable follow-up, and a shared understanding of the opportunity being pursued.\n\nOur network can support opportunities across property sales, real estate sourcing, construction, development, and related property services. The exact scope of each partnership can be shaped around the nature of the business relationship and project requirements.\n\nIf you are a real estate professional, property consultant, contractor, business, or industry partner looking to explore opportunities with Amston Homes, we welcome conversations built around long-term professional collaboration.",
    image: "/channel.png",
  },

  "interior-design": {
    title: "Interior Design",
    details:
      "Residential and commercial interior design focused on functional layouts, comfortable spaces, thoughtful materials, and refined aesthetics.",
    extended:
      "An interior should look good, but it should also work well. Amston Homes provides interior design solutions for homes, villas, apartments, offices, and commercial spaces, bringing together functionality, comfort, material selection, and visual character.\n\nOur interior design approach begins with understanding how the space will actually be used. Layout, storage, lighting, furniture, finishes, materials, colours, and circulation all need to work together to create an environment that feels natural and practical.\n\nFor residential interiors, we can help shape spaces around the lifestyle, preferences, and everyday requirements of the people who live there. For commercial interiors, the focus can include functionality, brand identity, customer experience, employee requirements, and efficient use of available space.\n\nFrom space planning and concept development to material selection and finishing details, each decision contributes to the final character of the space. We aim to create interiors that feel considered rather than simply decorated.\n\nWhether you are furnishing a new home, renovating an existing property, designing a villa interior, or developing a commercial space, Amston Homes can help bring the interior vision together with the wider property and construction process.",
    image: "/Interior.jpg",
  },

  "infrastructure-development": {
    title: "Infrastructure Development",
    details:
      "Infrastructure planning and development supporting residential, commercial, and property projects with practical, future-focused solutions.",
    extended:
      "Well-planned properties depend on more than buildings. Roads, access, utilities, drainage, connectivity, and supporting infrastructure all contribute to how successfully a development functions over time.\n\nAmston Homes approaches infrastructure development with a focus on practical requirements, coordination, usability, and long-term performance. Our work can support infrastructure needs associated with residential developments, commercial projects, property development, and larger planned spaces.\n\nInfrastructure planning requires coordination between site conditions, property requirements, construction activities, utilities, access, and the wider development plan. Addressing these elements early can help create properties that are not only visually appealing but also functional and easier to maintain.\n\nOur objective is to support development with infrastructure solutions that are practical, appropriately planned, and aligned with the requirements of the property and its users.\n\nFrom access and supporting systems to essential site infrastructure, Amston Homes brings a property-focused perspective to development — helping create spaces that are built not only for today, but with their future use in mind.",
    image: "/infrastructure.jpg",
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = serviceDetails[slug];

  if (!data) {
    return (
      <section className="min-h-screen py-24 px-6 text-center text-gray-500">
        <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        <Link href="/" className="text-[#e2b866] underline">
          Return to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-[#fdfcf9] text-[#1a1a1a] py-24 px-6 md:px-20">
      {/* Back button */}
      <div className="mb-10">
        <Link
          href="/#services"
          className="text-[#e2b866] text-sm font-semibold uppercase tracking-wider hover:underline"
        >
          ← Back to Services
        </Link>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12"
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold luxury-font mb-6">
            {data.title}
          </h1>
          <p className="text-lg text-gray-800 mb-4">{data.details}</p>
          <p className="text-base text-gray-600 leading-relaxed">
            {data.extended}
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden rounded-3xl shadow-md">
            <Image
              src={data.image || "/default-service.jpg"} // Fallback image if none provided
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
