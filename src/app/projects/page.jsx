"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import AOS from "aos";
import "aos/dist/aos.css";
import { Dialog } from "@headlessui/react";

import { projectsData } from "@/lib/projectsData";

const ProjectCard = ({ project, index }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleUnavailable = (type) => {
    setModalText(
      type === "demo"
        ? "The live demo is currently unavailable due to client confidentiality."
        : "Source code access is restricted for this project."
    );
    setOpenModal(true);
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay={200 + index * 100}
        className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transform group-hover:scale-110 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>

          <span className="absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            {project.type}
          </span>
          <span className="absolute bottom-4 left-4 text-xs font-medium flex items-center gap-1 bg-black/70 text-white px-3 py-1 rounded-full backdrop-blur-sm">
            <FaStar className="text-yellow-400" /> {project.stars}
          </span>

          <h3 className="absolute bottom-4 right-4 text-lg font-semibold text-white drop-shadow-md">
            {project.title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-5">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 tracking-wider">
              TECH STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  data-tooltip-id={`tooltip-${index}-${i}`}
                  data-tooltip-content={tech}
                  className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                >
                  {tech}
                  <Tooltip id={`tooltip-${index}-${i}`} />
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary rounded-lg hover:bg-primary/20 dark:hover:bg-secondary/30 border border-primary/20 dark:border-secondary/20 transition-all"
              >
                <FaExternalLinkAlt className="text-sm" />
                Live Demo
              </a>
            ) : (
              <button
                onClick={() => handleUnavailable("demo")}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 rounded-lg cursor-not-allowed border border-gray-200 dark:border-gray-600"
              >
                <FaExternalLinkAlt className="text-sm" />
                Live Demo
              </button>
            )}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 transition-all"
              >
                <FaGithub className="text-sm" />
                Source Code
              </a>
            ) : (
              <button
                onClick={() => handleUnavailable("code")}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 rounded-lg cursor-not-allowed border border-gray-200 dark:border-gray-600"
              >
                <FaGithub className="text-sm" />
                Source Code
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl text-center">
            <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Access Restricted
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-600 dark:text-gray-300 mb-5">
              {modalText}
            </Dialog.Description>
            <button
              onClick={() => setOpenModal(false)}
              className="px-4 py-2 bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary rounded-lg hover:bg-primary/20 dark:hover:bg-secondary/30 transition-all"
            >
              Got it
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span
            data-aos="fade-up"
            className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary mb-4 shadow-sm"
          >
            PROJECT PORTFOLIO
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300"
          >
            My <span className="text-primary dark:text-secondary">Creative</span> Work
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A collection of my most innovative projects that showcase modern design and clean code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
