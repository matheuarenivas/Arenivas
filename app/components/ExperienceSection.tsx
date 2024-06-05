import React from 'react'
import Image from 'next/image';

interface Experience {
    icon: string;
    title: string;
    company: string;
    location: string;
    period: string;
    description?: string; // Optional if it's not always included
    responsibilities: string[];
}

const experiences: Experience[] = [
    {
        title: "Software Engineer Intern",
        company: "BCAMP",
        location: "United States",
        period: "June 2024 – Present",
        responsibilities: [
            "Specializing in Blockchain Development.",
        ],
        icon: "/images/BCAMP.jpeg" 
    },
    {
        title: "Founder & Website Designer",
        company: "SupaClean",
        location: "Phoenix, AZ",
        period: "May 2023 – Present",
        responsibilities: [
            "Designed SupaCleans websites tailored to desired requirements.",
            "Managed and implemented site deployments including supacleanaz.com."
        ],
        icon: "/images/supaclean.jpeg" 
    },
    {
        title: "Team Member",
        company: "Panera Bread",
        location: "Phoenix, AZ",
        period: "Nov 2021 – May 2023",
        responsibilities: [
            "Enhanced customer satisfaction through superior service and accurate preparation of diverse coffee and tea beverages.",
            "Worked with a team to uphold cleanliness and organization."
        ],
        icon: "/images/panera.jpeg" 
    },
    {
        title: "Team Member",
        company: "In-N-Out",
        location: "Phoenix, AZ",
        period: "Oct 2021 – Jan 2022",
        responsibilities: [
            "Increased efficiency by mastering digital ordering systems, reducing wait times with accurate processing of many daily transactions.",
            "Maintained cleanliness and organization with a team, ensuring adherence to health and safety standards."
        ],
        icon: "/images/innout.png" 
    },
    {
        title: "Team Lead Manager",
        company: "Chick-Fil-A",
        location: "Phoenix, AZ",
        period: "Nov 2020 – Sep 2021",
        responsibilities: [
            "Oversaw staff placement and conducted training, enhancing team performance and service quality.",
            "Collaborated with colleagues to keep the kitchen clean and organized, meeting health and safety guidelines."
        ],
        icon: "/images/chick.png" 
    }
];


const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
    return (
        <div className="bg-grey-800 p-5 flex-row items-center">
            <Image src={experience.icon} alt={`${experience.company} logo`} width={50} height={50} className="mr-4" />
            <div>
                <h3 className="font-bold text-xl">{experience.title}</h3>
                <p className="text-white">{experience.company}, {experience.location} | {experience.period}</p>
                <ul className="list-disc ml-5 mt-2 text-[#ADB7BE]">
                    {experience.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const ExperienceSection = () => {
    return (
        <div className="flex-1 px-4 lg:px-150 mt-6 lg:mt-10">
            <h2 className='text-2xl lg:text-3xl text-white font-bold'>
                Experience
            </h2>
            {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
            ))}
            <a href="https://drive.google.com/file/d/1N6OtAJAY5ujVA9tTOKFEKntVdxy96imd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="lg:mt-5 px-6 py-3 w-full sm:w-fit rounded-full bg-white text-black font-semibold">
                    View Full Resume
                </button>
            </a>
        </div>
    );
};



export default ExperienceSection;
