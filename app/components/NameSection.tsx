
"use client";
import React, { Component } from 'react';
import { TypeAnimation } from 'react-type-animation';

class NameSection extends Component {
    render() {
        return (
            <div className="lg:mt-0">
                <h1 className='text-white text-2xl sm:text-5xl lg:text-6xl font-extrabold'> 
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-300 to-pink-400'>
                        Hello, I'm{" "} 
                    </span>
                    <br className="hidden lg:block" />
                    <TypeAnimation
                        sequence={[
                            'Matthew Arenivas',
                            1000,
                            'a Software Engineer ',
                            1000
                        ]}
                        wrapper="span"
                        speed={3}
                        repeat={Infinity}
                    />
                </h1>
            </div>
        );
    }
}

export default NameSection;
