"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Instagram, PhoneCall } from "lucide-react";
import toast from "react-hot-toast";
import { useRef } from "react";

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:contact@amstonhomes.com?subject=New%20Enquiry%20from%20${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = mailtoLink;

    toast.success("Redirecting to email client...");
    form.reset();
  };

  return (
    <section id="contact" className="bg-[#0f0f0f] text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Panel */}
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
              <p>AMSTON Office, Kowadiar, Trivandrum, Kerala 695003</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-[#e2b866]" />
              <p>contact@amstonhomes.com</p>
            </div>
            <div className="flex items-start gap-3">
              <PhoneCall className="text-[#e2b866]" />
              <div>
                <p>
                  🇮🇳 <span className="ml-1">+91 9633668594</span>
                </p>
                <p>
                  🇦🇪 <span className="ml-1">+971 507557686</span>
                </p>
              </div>
            </div>
          </div>

          {/* Call Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            {[
              { label: "Call India", number: "+919633668594", flag: "🇮🇳" },
              { label: "Call UAE", number: "+971507557686", flag: "🇦🇪" },
            ].map(({ label, number, flag }) => (
              <motion.a
                key={label}
                href={`tel:${number}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#e2b866] hover:bg-[#cba956] text-black flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all shadow-lg"
              >
                <span className="text-lg">{flag}</span>
                <svg
                  className="w-5 h-5 animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.73 19.73 0 0 1-8.63-3.06 19.5 19.5 0 0 1-6-6A19.73 19.73 0 0 1 2.08 4.18 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72c.12.81.32 1.6.58 2.36a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.26 1.55.46 2.36.58A2 2 0 0 1 22 16.92z" />
                </svg>
                {label}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:contact@amstonhomes.com"
              className="bg-[#e2b866] text-black p-3 rounded-full"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://instagram.com/amstonhomes"
              className="bg-[#e2b866] text-black p-3 rounded-full"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Map */}
          <div className="pt-6">
            <iframe
              className="w-full h-64 rounded-2xl border-none"
              loading="lazy"
              src="https://www.google.com/maps/embed?...Kowdiar"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Right Panel: Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl space-y-6"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#262626] border border-gray-700 text-white rounded-lg px-4 py-3"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full bg-[#262626] border border-gray-700 text-white rounded-lg px-4 py-3"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea
              name="message"
              placeholder="What would you like to discuss?"
              className="w-full bg-[#262626] border border-gray-700 text-white rounded-lg px-4 py-3 h-32 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#e2b866] hover:bg-[#cba956] text-black font-semibold py-3 rounded-lg"
          >
            Send Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
