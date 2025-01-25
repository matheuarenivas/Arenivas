"use client";
import React, { Component } from "react";

class AboutMeSection extends Component {
  render() {
    return (
      <div
        id="about" // Added ID for navigation
        className="flex-1 px-4 sm:px-8 lg:px-24 py-8 sm:py-12 lg:py-16"
      >
        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-6 sm:mb-8 text-center sm:text-left">
          About
        </h2>

        {/* About Me Content */}
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-[#ADB7BE] text-sm sm:text-base mb-4">
            Welcome to my website! I am currently a Computer Science student at
            Arizona State University with a strong aspiration to excel in the
            field of Software Engineering.
          </p>
          <p className="text-[#ADB7BE] text-sm sm:text-base">
            “We&#39;ve always defined ourselves by the ability to overcome the
            impossible. And we count these moments. These moments when we dare
            to aim higher, to break barriers, to reach for the stars, to make
            the unknown known. We count these moments as our proudest
            achievements. But we lost all that. Or perhaps we&#39;ve just
            forgotten that we are still pioneers. And we&#39;ve barely begun.
            And that our greatest accomplishments cannot be behind us, because
            our destiny lies above us.”
            <br />
            ― Cooper - <em>Interstellar</em>
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMeSection;



