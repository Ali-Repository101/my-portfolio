"use client";
import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { contactInfo, socialLinks } from "@/lib/contact";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background pattern + blur */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-1.5 text-sm font-medium tracking-wider text-primary dark:text-secondary rounded-full bg-primary/10 dark:bg-secondary/20 mb-4 shadow-sm">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300">
            Let’s <span className="text-primary dark:text-secondary">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project idea or collaboration in mind? Hit me up — I’m always open!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {contactInfo.map((item, i) => (
              <ContactCard key={i} item={item} />
            ))}

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <h5 className="text-lg font-semibold mb-5 text-gray-800 dark:text-white">
                Follow Me
              </h5>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 ${link.color} hover:text-white border border-gray-200 dark:border-gray-600 transition-all duration-300`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
