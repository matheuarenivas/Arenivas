"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaDotCircle, FaCode } from "react-icons/fa";
import { SiTensorflow, SiDotnet, SiSharp, SiJavascript, SiTypescript, SiPython, SiArduino } from "react-icons/si";
import { TbApi } from "react-icons/tb";

// Define the Technology interface
interface Technology {
  name: string;
  icon: React.ReactNode;
}

// Define the Experience interface
interface Experience {
  icon: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  responsibilities: string[];
  technologies: Technology[];
}

// Technology icons mapping
const techIcons = {
  react: <FaReact className="text-blue-400" />,
  dotnet: <SiDotnet className="text-purple-500" />,
  csharp: <SiSharp className="text-green-500" />,
  api: <TbApi className="text-yellow-400" />,
  tensorflow: <SiTensorflow className="text-orange-500" />,
  arduino: <SiArduino className="text-teal-400" />,
  javascript: <SiJavascript className="text-yellow-300" />,
  typescript: <SiTypescript className="text-blue-500" />,
  python: <SiPython className="text-blue-300" />,
  other: <FaCode className="text-gray-400" />,
};

// Data for the experiences
const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Swift Transportation",
    location: "Phoenix, Arizona, United States · Hybrid",
    period: "Feb 2025 - Present · 2 mos",
    responsibilities: [
      "🚚 Summer 2025 Mobile App Development",
    ],
    icon: "/images/swift.jpg",
    technologies: [
      { name: ".NET Framework", icon: techIcons.dotnet },
      { name: "C#", icon: techIcons.csharp },
      { name: "API", icon: techIcons.api },
    ],
  },
  {
    title: "Software Engineer",
    company: "Interplanetary Initiative at Arizona State University",
    location: "Tempe, Arizona, United States · Hybrid",
    period: "Mar 2025 - Present · 1 mo",
    responsibilities: [
      "🛰️ Sun Devil Satellite Laboratory: ASCEND Project",
      "Contributing to satellite development and space technology initiatives"
    ],
    icon: "/images/asulab.jpg",
    technologies: [
      { name: "Python", icon: techIcons.python },
      { name: "C++", icon: techIcons.other },
    ],
  },
  {
    title: "Software Engineer",
    company: "EPICS at ASU",
    location: "Tempe, Arizona, United States · Hybrid",
    period: "Aug 2024 - Present · 8 mos",
    responsibilities: [
      "🛬 Autonomous Drone Team",
      "Contributing to the development of an autonomous drone system designed to predict and map wildfires"
    ],
    icon: "/images/epics.webp",
    technologies: [
      { name: "TensorFlow", icon: techIcons.tensorflow },
      { name: "Arduino", icon: techIcons.arduino },
      { name: "Python", icon: techIcons.python },
    ],
  },
  {
    title: "Team Lead Manager",
    company: "Chick-fil-A Restaurants",
    location: "Goodyear, Arizona, United States · On-site",
    period: "Apr 2021 - Sep 2021 · 6 mos",
    responsibilities: [
      "🐔 Team Management",
      "Focused on Team Management, Team Leadership and Customer Service"
    ],
    icon: "/images/chick.png",
    technologies: [
      { name: "Team Management", icon: techIcons.other },
      { name: "Leadership", icon: techIcons.other },
    ],
  },
];

// Card component for each experience
const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Even more subtle shadow on hover
      }}
      className="bg-transparent p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-transform transform border border-gray-800/10"
    >
      {/* Company Icon */}
      <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full overflow-hidden bg-gray-800/30 flex-shrink-0">
        <Image
          src={experience.icon}
          alt={`${experience.company} logo`}
          width={60}
          height={60}
          className="rounded-full"
          onError={(e) => {
            // If image fails to load, replace with first letter of company name
            const target = e.target as HTMLElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = experience.company.charAt(0);
            target.parentElement!.style.fontSize = '24px';
            target.parentElement!.style.color = 'white';
            target.parentElement!.style.display = 'flex';
            target.parentElement!.style.alignItems = 'center';
            target.parentElement!.style.justifyContent = 'center';
          }}
        />
      </div>

      {/* Experience Details */}
      <div className="text-center sm:text-left flex-1">
        <h3 className="text-white font-bold text-lg sm:text-xl">{experience.title}</h3>
        <p className="text-white text-sm sm:text-base mb-2">
          {experience.company}
        </p>
        
        {/* Description */}
        <div className="mt-2 text-[#ADB7BE] text-sm sm:text-base">
          {experience.responsibilities.map((item, index) => (
            <p key={index} className="mb-1">{item}</p>
          ))}
        </div>
        
        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-3">
          {experience.technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-1 bg-transparent backdrop-blur-sm px-3 py-1 rounded-full text-xs hover:bg-gray-800/20 transition-colors duration-300 border border-gray-700/10"
            >
              <span className="text-lg">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
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
      <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-6 sm:mb-8 text-center sm:text-left tracking-spacex">
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
        <button className="px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto rounded-full bg-transparent text-blue-500 font-semibold hover:bg-gray-800/20 focus:outline-none border border-blue-500/50 transition-colors duration-300">
          VIEW FULL RESUME
        </button>
      </a>
    </div>
  );
};

export default ExperienceSection;

