"use client";
import { motion } from "framer-motion";

const ContactCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: item.delay }}
    viewport={{ once: true }}
    className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
  >
    <div className="text-primary dark:text-secondary p-4 bg-primary/10 dark:bg-secondary/20 rounded-lg mr-6">
      {item.icon}
    </div>
    <div>
      <h5 className="font-semibold text-lg text-gray-800 dark:text-white mb-1">
        {item.title}
      </h5>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
      >
        {item.content}
      </a>
    </div>
  </motion.div>
);

export default ContactCard;
