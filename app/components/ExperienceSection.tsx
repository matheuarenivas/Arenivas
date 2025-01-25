"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define the Experience interface
interface Experience {
  icon: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  responsibilities: string[];
}

// Data for the experiences
const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "BCAMP",
    location: "United States",
    period: "June 2024 – Present",
    responsibilities: [
      "Specializing in Blockchain Development.",
    ],
    icon: "/images/BCAMP.jpeg",
  },
  {
    title: "Team Lead Manager",
    company: "Chick-Fil-A",
    location: "Phoenix, AZ",
    period: "Nov 2020 – Sep 2021",
    responsibilities: [
      "Oversaw staff placement and conducted training, enhancing team performance and service quality.",
      "Collaborated with colleagues to keep the kitchen clean and organized, meeting health and safety guidelines.",
    ],
    icon: "/images/chick.png",
  },
];

// Card component for each experience
const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.8)", // Neutral shadow
      }}
      className=" p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-transform transform"
    >
      {/* Company Icon */}
      <Image
        src={experience.icon}
        alt={`${experience.company} logo`}
        width={60}
        height={60}
        className="rounded-full"
      />

      {/* Experience Details */}
      <div className="text-center sm:text-left flex-1">
        <h3 className="text-white font-bold text-lg sm:text-xl">{experience.title}</h3>
        <p className="text-white text-sm sm:text-base">
          {experience.company}, {experience.location} | {experience.period}
        </p>
        <ul className="list-disc ml-5 mt-2 text-[#ADB7BE] text-sm sm:text-base">
          {experience.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Main Experience Section
const ExperienceSection = () => {
  return (
    <div
      id="experience"
      className="flex-1 px-4 sm:px-8 lg:px-24 py-8 sm:py-12 lg:py-16"
    >
      {/* Section Title */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-6 sm:mb-8 text-center sm:text-left">
        Experience
      </h2>

      {/* Experience Cards */}
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>

      {/* Resume Button */}
      <a
        href="/images/Matheus_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-8 sm:mt-12 text-center"
      >
        <button className="px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto rounded-full bg-transparent text-blue-500 font-semibold hover:bg-gray-700 focus:outline-none">
          View Full Resume
        </button>
      </a>
    </div>
  );
};

export default ExperienceSection;

