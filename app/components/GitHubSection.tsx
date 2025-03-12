"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const GitHubSection = () => {
  // Your GitHub username - update this to your actual username
  const githubUsername = "matheuarenivas";
  
  // Color themes for the GitHub contribution graph
  const [colorTheme, setColorTheme] = useState<string>("149dff"); // Default blue theme
  
  // Available themes
  const themes = [
    { name: "Blue", color: "149dff" },
    { name: "Purple", color: "8e44ad" },
    { name: "Teal", color: "1abc9c" },
    { name: "Green", color: "2ecc71" },
    { name: "Orange", color: "e67e22" },
  ];
  
  return (
    <div
      id="projects"
      className="flex-1 px-4 sm:px-8 lg:px-24 py-8 sm:py-12 lg:py-16"
    >
      {/* Section Title */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-6 sm:mb-8 text-center sm:text-left tracking-spacex">
        Projects
      </h2>

      {/* GitHub Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-transparent p-4 sm:p-6 rounded-lg border border-gray-800/20 overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          {/* GitHub Profile Link */}
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <FaGithub className="text-white/90 text-3xl" />
            <a 
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500/90 hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <span className="font-medium">@{githubUsername}</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
          
          {/* Theme Selector */}
          <div className="flex-1 text-center sm:text-right">
            <div className="flex flex-wrap justify-center sm:justify-end gap-2 mb-2">
              {themes.map((theme) => (
                <button
                  key={theme.color}
                  onClick={() => setColorTheme(theme.color)}
                  className={`w-5 h-5 rounded-full transition-transform ${
                    colorTheme === theme.color ? 'scale-125 ring-2 ring-white/30' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: `#${theme.color}` }}
                  aria-label={`Set ${theme.name} theme`}
                />
              ))}
            </div>
            <a 
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500/90 hover:text-blue-400 transition-colors text-sm"
            >
              View Full Profile
            </a>
          </div>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="mt-6 bg-transparent p-2 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-800/10">
          <a 
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src={`https://ghchart.rshah.org/${colorTheme}/${githubUsername}`} 
              alt="GitHub Contribution Graph"
              className="w-full h-auto rounded opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>
          <p className="text-center text-xs text-gray-400/80 mt-2">
            Click on the graph to view my GitHub profile
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubSection; 