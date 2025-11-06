
"use client";

import { FaHeart, FaRegCopyright } from "react-icons/fa";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/footer";

const Footer = () => {

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm"
          >
            <FaRegCopyright className="mr-1" size={14} />
            <span>{new Date().getFullYear()} All Rights Reserved</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`text-gray-500 dark:text-gray-400 ${link.color} transition-colors duration-300`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm"
          >
            Built with
            <motion.span
              className="mx-1 text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart size={14} />
            </motion.span>
            by <span className="ml-1 font-semibold text-primary dark:text-secondary">Arshad Ali</span>
          </motion.div>
        </div>

        {/* Tech Stack Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-4 text-xs text-gray-400 dark:text-gray-500"
        >
          Built with Next.js ⚡ | Styled using Tailwind CSS 🎨 | Animated via Framer Motion 💫
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
