
"use client";
import React, { Component } from 'react';
import { TypeAnimation } from 'react-type-animation';

class NameSection extends Component {
    render() {
        return (
            <div className=" mt-4 lg:mt-0"> {/* Center alignment and vertical spacing */}
                <h1 className='text-white text-2xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-300 to-pink-400'>
                        Hello, I'm
                    </span>
                </h1>
                <div className='text-white text-2xl sm:text-5xl lg:text-6xl font-extrabold' > {/* New line for TypeAnimation */}
                    <TypeAnimation
                        sequence={[
                            'Matthew Arenivas', 1000,
                            'a Software Engineer', 1000
                        ]}
                        wrapper="h1" // Use the same style as the line above
                        cursor={true}
                        speed={3}
                        repeat={Infinity}
                    />
                </div>
            </div>
        );
    }
}

export default NameSection;
