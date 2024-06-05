import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';

const SocialLinks = () => {
    return (
        <div className="flex justify-left space-x-8">
            <a href="https://www.instagram.com/uehtam/" className="text-[#fc4c87] hover:text-[#E1306C]" aria-label="Instagram">
                <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/matthew-arenivas-505b47255/" className="text-[#0077B5] hover:text-[#0077B5]" aria-label="LinkedIn">
                <FaLinkedinIn size={30} />
            </a>
            <a href="https://github.com/matheuarenivas" className="text-[#ffffff] hover:text-[#181717]" aria-label="GitHub">
                <FaGithub size={30} />
            </a>
            <a href="mailto:arenivasmatheu@gmail.com" className="text-[#f67469] hover:text-[#DB4437]" aria-label="Gmail">
                <AiFillGoogleCircle size={30} />
            </a>
        </div>
    );
};

export default SocialLinks;

