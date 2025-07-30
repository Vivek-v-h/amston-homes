"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Instagram, PhoneCall } from "lucide-react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="bg-[#0f0f0f] text-white py-20 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Panel: Info + Map + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold tracking-wide text-white mb-4">
            Let’s Build <span className="text-[#e2b866]">Something Great</span>
          </h2>

          <p className="text-lg text-gray-300">
            Reach out to us for consultations, collaborations, or just a hello.
            We're always open to visionaries!
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#e2b866]" />
              <p>AMSTON Office, Kowadiar,Trivandrum, Kerala 695003</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-[#e2b866]" />
              <p>contact@amstonhomes.com</p>
            </div>
            <div className="flex items-start gap-3">
              <PhoneCall className="text-[#e2b866]" />
              <p>96336668594</p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex space-x-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/9633668594"
              className="bg-[#e2b866] hover:bg-[#cba956] text-black p-3 rounded-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0 11.91 11.91 0 0 0 3.48 3.48 11.91 11.91 0 0 0 0 12c0 2.1.55 4.09 1.6 5.88L0 24l6.3-1.65a12.3 12.3 0 0 0 5.7 1.47c6.62 0 12-5.38 12-12s-5.38-12-12-12a11.91 11.91 0 0 0-8.52 3.48zM12 22c-1.71 0-3.34-.39-4.82-1.17l-.34-.17-3.73.98.99-3.63-.22-.36A9.96 9.96 0 1 1 22 12c0 5.52-4.48 10-10 10zm5.6-7.2-.77-1.1c-.2-.3-.6-.5-.94-.4l-1.2.28a8.34 8.34 0 0 1-2.76-2.7l.25-1.23c.07-.34-.1-.7-.4-.9l-1.06-.8c-.4-.3-.96-.2-1.24.2-.6.8-.93 1.77-.92 2.77a9.56 9.56 0 0 0 9.56 9.56c1 0 2-.3 2.8-.9.4-.3.5-.9.2-1.3z" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:contact@amstonhomes.com"
              className="bg-[#e2b866] hover:bg-[#cba956] text-black p-3 rounded-full"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/amstonhomes"
              className="bg-[#e2b866] hover:bg-[#cba956] text-black p-3 rounded-full"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Embedded Map */}
          <div className="pt-6">
            <iframe
              className="w-full h-64 rounded-2xl border-none"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7891.552346306873!2d76.9564823407154!3d8.521099266085242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbd44fe25f35%3A0xff3e9d11fd5c770b!2sKowdiar%2C%20Thiruvananthapuram%2C%20Kerala%20695003!5e0!3m2!1sen!2sin!4v1753803274999!5m2!1sen!2sin"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Right Panel: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl space-y-6"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#262626] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e2b866]"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-[#262626] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e2b866]"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea
              placeholder="What would you like to discuss?"
              className="w-full bg-[#262626] border border-gray-700 text-white rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#e2b866]"
              required
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-[#e2b866] hover:bg-[#cba956] text-black font-semibold py-3 rounded-lg transition-all"
          >
            Send Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
