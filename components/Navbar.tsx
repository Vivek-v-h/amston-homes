"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "backdrop-blur-md bg-black/60 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 text-[#f5f6f7]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="flex items-end space-x-2">
            <span
              style={{
                fontFamily: "NeonTubes",
                letterSpacing: "0.25em",
              }}
              className="text-2xl sm:text-3xl font-normal tracking-widest leading-none"
            >
              AMSTON
            </span>
            <span className="text-lg sm:text-xl font-medium tracking-tight">
              Homes
            </span>
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["home", "aboutus", "services", "portfolio", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-gray-300 capitalize">
                {item.replace("us", " Us").replace("our", "Our ")}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black bg-opacity-95 backdrop-blur-md absolute top-20 left-0 w-full py-6 z-40"
          >
            <ul className="flex flex-col space-y-6 items-center font-medium text-white text-lg">
              {["home", "aboutus", "services", "portfolio", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-gray-300 capitalize"
                  >
                    {item.replace("us", " Us").replace("our", "Our ")}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
