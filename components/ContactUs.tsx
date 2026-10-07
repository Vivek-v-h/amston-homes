"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Instagram,
  PhoneCall,
  Youtube,
} from "lucide-react";
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
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(
      `New Enquiry from ${name} - Amston Homes`
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`
    );

    const mailtoLink = `mailto:contact@amstonhomes.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast.success("Redirecting to your email client...");

    form.reset();
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#0f0f0f] text-white py-20 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* =====================================================
            LEFT PANEL
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Heading */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-[#e2b866] mb-3">
              Let's Talk
            </p>

            <h2
              id="contact-heading"
              className="text-4xl md:text-5xl font-bold tracking-wide text-white"
            >
              Let’s Build{" "}
              <span className="text-[#e2b866]">Something Great</span>
            </h2>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            Whether you are looking to build, buy, sell, rent, or manage a
            property, our team is ready to understand your requirements and
            help you find the right way forward.
          </p>

          {/* Contact Information */}
          <div className="space-y-5 text-gray-300">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin
                className="text-[#e2b866] mt-1 shrink-0"
                size={22}
              />

              <p>
                <span className="font-medium text-white">
                  Amston Homes Office
                </span>
                <br />
                Kowdiar, Trivandrum,
                <br />
                Kerala 695003
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail
                className="text-[#e2b866] mt-1 shrink-0"
                size={22}
              />

              <a
                href="mailto:contact@amstonhomes.com"
                className="hover:text-[#e2b866] transition-colors"
              >
                contact@amstonhomes.com
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-3">
              <PhoneCall
                className="text-[#e2b866] mt-1 shrink-0"
                size={22}
              />

              <div className="space-y-1">
                <a
                  href="tel:+919633668594"
                  className="block hover:text-[#e2b866] transition-colors"
                >
                  🇮🇳 <span className="ml-1">+91 96336 68594</span>
                </a>

                <a
                  href="tel:+919895105999"
                  className="block hover:text-[#e2b866] transition-colors"
                >
                  🇮🇳 <span className="ml-1">+91 98951 05999</span>
                </a>

                <a
                  href="tel:+971507557686"
                  className="block hover:text-[#e2b866] transition-colors"
                >
                  🇦🇪 <span className="ml-1">+971 50 755 7686</span>
                </a>
              </div>
            </div>
          </div>

          {/* Call Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {[
              {
                label: "Call India",
                number: "+919633668594",
                flag: "🇮🇳",
              },
              {
                label: "Call UAE",
                number: "+971507557686",
                flag: "🇦🇪",
              },
            ].map(({ label, number, flag }) => (
              <motion.a
                key={label}
                href={`tel:${number}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#e2b866] hover:bg-[#cba956] text-black flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition-all shadow-lg"
              >
                <span className="text-lg">{flag}</span>

                <PhoneCall
                  size={18}
                  className="animate-pulse"
                />

                {label}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-2">
            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:contact@amstonhomes.com"
              aria-label="Email Amston Homes"
              className="bg-[#e2b866] hover:bg-[#cba956] text-black p-3 rounded-full transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>

            {/* Instagram */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/amstonhomes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amston Homes on Instagram"
              className="bg-[#e2b866] hover:bg-[#cba956] text-black p-3 rounded-full transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>

            {/* YouTube */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.youtube.com/@AmstonHomes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amston Homes on YouTube"
              className="bg-[#e2b866] hover:bg-[#cba956] text-black p-3 rounded-full transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Map */}
          <div className="pt-6">
            <iframe
              title="Amston Homes Office Location - Kowdiar, Trivandrum"
              className="w-full h-64 rounded-2xl border-none"
              loading="lazy"
              src="https://www.google.com/maps/embed?..."
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT PANEL - QUOTE FORM
        ====================================================== */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] p-7 md:p-9 rounded-3xl shadow-xl space-y-6"
        >
          {/* Form Heading */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-[#e2b866] mb-2">
              Start Your Project
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Get Your Quote
            </h3>

            <p className="text-gray-400 mt-2 leading-relaxed">
              Tell us what you have in mind. Our team will get back to you to
              discuss your requirements.
            </p>
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-gray-400 mb-2"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              autoComplete="name"
              className="w-full bg-[#262626] border border-gray-700 focus:border-[#e2b866] focus:ring-1 focus:ring-[#e2b866] outline-none text-white rounded-lg px-4 py-3 transition-all"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm text-gray-400 mb-2"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              autoComplete="tel"
              inputMode="tel"
              className="w-full bg-[#262626] border border-gray-700 focus:border-[#e2b866] focus:ring-1 focus:ring-[#e2b866] outline-none text-white rounded-lg px-4 py-3 transition-all"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-400 mb-2"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full bg-[#262626] border border-gray-700 focus:border-[#e2b866] focus:ring-1 focus:ring-[#e2b866] outline-none text-white rounded-lg px-4 py-3 transition-all"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-gray-400 mb-2"
            >
              How Can We Help?
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your property, construction project, or requirement..."
              className="w-full bg-[#262626] border border-gray-700 focus:border-[#e2b866] focus:ring-1 focus:ring-[#e2b866] outline-none text-white rounded-lg px-4 py-3 h-32 resize-none transition-all"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#e2b866] hover:bg-[#cba956] text-black font-semibold py-3.5 rounded-lg transition-all shadow-lg hover:shadow-[#e2b866]/20"
          >
            Get Your Quote
          </button>

          {/* Privacy / reassurance */}
          <p className="text-xs text-gray-500 text-center">
            Your details are used only to respond to your enquiry.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;