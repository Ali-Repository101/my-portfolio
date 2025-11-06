"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { skillCategories } from "@/lib/skillsData";

const Skills = () => {
  const controls = useAnimation();
  const containerRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration: 30, ease: "linear" },
    });
  }, [controls]);

  const repeatedSkills = skillCategories.flatMap((cat) => cat.skills);

  return (
    <section
      id="Skills"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary mb-4">
            TECH STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300">
            My <span className="text-primary dark:text-secondary">Web Dev</span> Toolkit
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The technologies and tools I use to build modern, high-performance web apps.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200/30 dark:border-gray-700/50 hover:border-primary/30"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <span className="mr-2 text-2xl">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Auto-scrolling skill row */}
        <div className="overflow-hidden py-10" data-aos="fade-up">
          <motion.div
            className="flex gap-6 w-max"
            animate={controls}
            ref={containerRef}
          >
            {[...repeatedSkills, ...repeatedSkills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="min-w-[120px] bg-white/80 dark:bg-gray-800/90 p-5 rounded-xl shadow-sm flex flex-col items-center border border-gray-200/30 dark:border-gray-700/50"
              >
                <div className="mb-3 text-3xl">{skill.icon}</div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 text-center">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
