
"use client";
import React, { Component } from 'react';

class AboutMeSection extends Component {
    render() {
        return (
            <div className="flex-1 px-4 lg:px-150 mt-6 lg:mt-0">
                <span className='text-xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-300 to-pink-400 font-bold'>
                About Me
                </span>
                <p className="text-[#ADB7BE] mb-4">
                    Welcome to my website! I am currently a Computer Science student at Arizona State University with a strong aspiration to excel in the field of software engineering.
                </p>
                <p className="text-[#ADB7BE] mb-4">
                    My academic pursuits are driven by a keen interest in harnessing technology to solve complex problems and improve everyday life.
                </p>
                <p className="text-[#ADB7BE] mb-4">
                    Outside of my studies, I am deeply committed to personal growth, which I foster by spending cherished time with my family and engaging in Jiu Jitsu. This combination of technical skill development and personal well-being activities equips me with a unique blend of analytical prowess and resilience.
                </p>
                <p className="text-[#ADB7BE] mb-4">
                    I am eager to bring my diverse skill set and fresh perspectives to a forward-thinking team.
                </p>
            </div>
        );
    }
}

export default AboutMeSection;
