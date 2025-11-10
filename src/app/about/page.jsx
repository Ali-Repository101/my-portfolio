"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiAwslambda } from "react-icons/si";
import TimelineCard from "@/components/TimelineCard";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section
      id="About"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background grid pattern */}
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

      {/* Floating tech icons */}
      <div className="absolute top-1/4 left-10 opacity-20 dark:opacity-10 animate-float">
        <SiJavascript className="text-6xl text-yellow-400" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-20 dark:opacity-10 animate-float-delay">
        <SiReact className="text-6xl text-blue-400" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-20 dark:opacity-10 animate-float-delay-2">
        <SiNodedotjs className="text-6xl text-green-500" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 opacity-20 dark:opacity-10 animate-float">
        <SiMongodb className="text-6xl text-green-600" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary mb-4 shadow-sm"
            data-aos="fade-up"
          >
            MY CAREER TIMELINE
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            My <span className="text-primary dark:text-secondary">Journey</span> So Far
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            From late-night coding sessions during my BCA to building real-world MERN applications —
            here’s how my passion for development turned into a full-time career.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div data-aos="fade-right">
            <div className="flex justify-center mb-8">
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md inline-flex items-center border border-gray-200/50 dark:border-gray-700/50 group hover:border-primary/50 transition">
                <FaGraduationCap className="text-primary dark:text-secondary mr-3 text-xl group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
              </div>
            </div>

            <div className="space-y-10">
              <TimelineCard
                year="2019 - 2022"
                title="Bachelor of Computer Applications (BCA)"
                university="Sri Guru Gobind Singh College Chandigarh"
                subjects={[
                  "Programming Fundamentals",
                  "Database Systems",
                  "Software Engineering",
                  "Web Development",
                ]}
              />
            </div>
          </div>

          {/* Experience */}
          <div data-aos="fade-left">
            <div className="flex justify-center mb-8">
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md inline-flex items-center border border-gray-200/50 dark:border-gray-700/50 group hover:border-primary/50 transition">
                <FaBriefcase className="text-primary dark:text-secondary mr-3 text-xl group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Experience</h3>
              </div>
            </div>

            <TimelineCard
              year="Oct 2022 - Present"
              title="Full Stack Developer"
              university="SquadMinds Pvt. Ltd., Mohali"
              subjects={[
                "Building and maintaining full-stack MERN applications",
                "Developing interactive, optimized UIs using React and Tailwind CSS",
                "API integrations, server-side logic, and MongoDB data modeling",
                "AWS deployments and S3 integrations for cloud storage",
                "Collaborating in agile teams to deliver scalable web solutions",
              ]}
              tech={[
                { name: "React", icon: <SiReact className="text-blue-500" /> },
                { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
                { name: "AWS", icon: <SiAwslambda className="text-orange-400" /> },
              ]}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Passionate about building fast, reliable, and modern web apps — always exploring new
            technologies to create better digital experiences. 🚀
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
