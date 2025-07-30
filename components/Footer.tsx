"use client";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-[#eaeaea] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold luxury-font text-[#b3995d]">
            Amston Group
          </h3>
          <p className="text-sm text-gray-400">
            Building beyond bricks. Creating legacies rooted in trust, design, and quality.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[#b3995d] font-semibold text-lg mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="/projects">Portfolio</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[#b3995d] font-semibold text-lg mb-4">Contact</h4>
          <p className="text-sm text-gray-400">Amston Homes, Kowdiar, Tvm, Kerala</p>
          <p className="text-sm text-gray-400">+91 96336 68594</p>
          <p className="text-sm text-gray-400">+971 507557686</p>
          <p className="text-sm text-gray-400">contact@amstonhomes.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-[#b3995d] font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-[#b3995d]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Subsidiaries Section */}
      <div className="border-t border-gray-700 mt-12 pt-8">
        <h4 className="text-[#b3995d] font-semibold text-lg text-center mb-4">Amston Group</h4>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-300 text-center">
          <div>Amston Homes</div>
          <div>Amston Logistics</div>
          <div>Amston Asset Management</div>
          <div>Amston Digital Solutions</div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 pt-10">
        © {new Date().getFullYear()} Amston Homes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
