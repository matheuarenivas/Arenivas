import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';

const SocialLinks = () => {
    return (
        <div className="flex justify-left space-x-8">
            <a href="https://www.instagram.com/uehtam/" className="text-gray-400 hover:text-gray-100" aria-label="Instagram">
                <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/matthew-arenivas-505b47255/" className="text-gray-400 hover:text-gray-100" aria-label="LinkedIn">
                <FaLinkedinIn size={30} />
            </a>
            <a href="https://github.com/matheuarenivas" className="text-gray-400 hover:text-gray-100" aria-label="GitHub">
                <FaGithub size={30} />
            </a>
            <a href="mailto:arenivasmatheu@gmail.com" className="text-gray-400 hover:text-gray-100" aria-label="Gmail">
                <AiFillGoogleCircle size={30} />
            </a>
        </div>
    );
};

export default SocialLinks;

