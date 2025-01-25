"use client";

import { useState } from "react";
import Link from "next/link";

const HamburgerMenuSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold"></h1>

        {/* Hamburger Icon */}
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black bg-opacity-95 md:relative md:top-auto md:left-auto md:w-auto md:flex md:items-center md:space-x-6`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link
                href="#about"
                className="block px-6 py-3 text-lg hover:bg-gray-700 rounded md:px-3 md:py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="block px-6 py-3 text-lg hover:bg-gray-700 rounded md:px-3 md:py-2"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block px-6 py-3 text-lg hover:bg-gray-700 rounded md:px-3 md:py-2"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerMenuSection;