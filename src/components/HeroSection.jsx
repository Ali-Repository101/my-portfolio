"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
import { socialLinks, typedRoles, floatingCircles } from "@/lib/hero";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4 relative overflow-hidden"
    >
      {/* Floating Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingCircles.map((circle, i) => (
          <div
            key={i}
            data-aos="fade"
            data-aos-delay={circle.delay}
            className={`absolute rounded-full bg-primary/5 dark:bg-secondary/5 ${circle.style}`}
          />
        ))}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
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
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <div data-aos="fade-up">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary">
                Hello, I'm
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Arshad{" "}
              <span className="text-primary dark:text-secondary">Ali</span>
            </h1>

            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300"
            >
              I'm a{" "}
              <ReactTyped
                strings={typedRoles}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="text-primary dark:text-secondary font-medium"
              />
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
            >
              A passionate Full Stack Developer with 3+ years of experience
              building scalable, modern web applications.
            </p>

            {/* Social Links */}
            <div
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 transition-all duration-300 ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a
                href="#contact"
                className={`px-8 py-3 bg-gradient-to-r from-[#3b82f6] to-[#9333ea]
  text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                Contact Me
              </a>

              <a
                href="#projects"
                className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div
            className="md:w-1/2 flex justify-center relative"
            data-aos="fade-left"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 dark:border-secondary/20">
                <Image
                  src="/images/arshad.jpg"
                  alt="Arshad Ali"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <span className="font-bold text-primary">3+</span> Years
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx global>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(15px) translateX(-15px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
