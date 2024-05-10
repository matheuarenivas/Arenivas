import React from 'react'

const experiences = [
    {
        title: "Freelance Founder / Website Designer",
        company: "SupaClean",
        location: "Phoenix, AZ",
        period: "May 2023 – Present",
        responsibilities: [
            "Designed SupaCleans websites tailored to desired requirements.",
            "Managed and implemented site deployments including supacleanaz.com."
        ]
    },
    {
        title: "Team Member",
        company: "Panera Bread",
        location: "Phoenix, AZ",
        period: "Nov 2021 – May 2023",
        responsibilities: [
            "Enhanced customer satisfaction through superior service and accurate preparation of diverse coffee and tea beverages.",
            "Worked with a team to uphold cleanliness and organization."
        ]
    },
    {
        title: "Team Member",
        company: "In-N-Out",
        location: "Phoenix, AZ",
        period: "Oct 2021 – Jan 2022",
        responsibilities: [
            "Increased efficiency by mastering digital ordering systems, reducing wait times with accurate processing of many daily transactions.",
            "Maintained cleanliness and organization with a team, ensuring adherence to health and safety standards."
        ]
    },
    {
        title: "Team Lead Manager",
        company: "Chick-Fil-A",
        location: "Phoenix, AZ",
        period: "Nov 2020 – Sep 2021",
        responsibilities: [
            "Oversaw staff placement and conducted training, enhancing team performance and service quality.",
            "Collaborated with colleagues to keep the kitchen clean and organized, meeting health and safety guidelines."
        ]
    }
];


const ExperienceCard = ({ experience }) => {
    return (
        <div className="bg-grey-800 shadow-lg shadow-[#7d7dff] rounded-lg p-4 mb-4">
            <h3 className="font-bold text-xl">{experience.title}</h3>
            <p className="text-white">{experience.company}, {experience.location} | {experience.period}</p>
            <ul className="list-disc ml-5 mt-2">
                {experience.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const ExperienceSection = () => {
    return (
        <div className="flex-1 px-4 lg:px-150 mt-6 lg:mt-10">
            <h2 className='text-xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-300 to-pink-400 font-bold'>
                Experience
            </h2>
            {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
            ))}
            <a href="https://drive.google.com/file/d/1zO17JnMtUHz_8yk85OW-tYEMqiwrpNkC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="lg:mt-5 px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-red-300 to-pink-400 text-black font-semibold">
                    View Full Resume
                </button>
            </a>
        </div>
    );
};



export default ExperienceSection;
