import { tictactoe, web } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    sunnybrooks,
    tailwindcss,
    cplusplus,
    tendercare
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "object-orientated",
    },
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Nursing Student Placement",
        company_name: "Tendercare",
        icon: tendercare,
        iconBg: "#FFFFFF",
        date: "September 2021 - December 2022",
        points: [
            "Collaborated with healthcare professionals to enhance patient experiences and ensure a high standard of care.",
            "Assisted in administrative tasks, contributing to the overall efficiency of the facility.",
            "Participated in multidisciplinary team meetings, contributing insights and observations.",
            "Engaged in the implementation of infection control protocols to maintain a safe and healthy environment.",
        ],
    },
    {
        title: "Internal Medicine Nursing Student Placement ",
        company_name: "Sunnybrook Health Science Centre",
        icon: sunnybrooks,
        iconBg: "#fbc3bc",
        date: "Jan 2022 - April 2022",
        points: [
            "Collaborated closely with medical teams in the internal medicine department, actively participating in patient rounds and case discussions.",
            "Engaged in medical charting and documentation, maintaining accurate and up-to-date patient records.",
            "Contributed to the implementation of patient education initiatives, providing information on post-discharge care and medication management.",
            "Supported healthcare professionals in various clinical procedures and examinations.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Carmen-jx',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: web,
        theme: 'btn-back-red',
        name: '3D web portfolio',
        description: 'Designed and implemented a captivating 3D web portfolio, seamlessly blending web development technologies and design principles to create an immersive and visually striking online showcase.',
        link: 'https://github.com/Carmen-jx/3D-portfolio/tree/main',
    },
    {
        iconUrl: tictactoe,
        theme: 'btn-back-green',
        name: 'Unbeatable AI tic-tac-toe',
        description: 'Created an unbeatable AI Tic Tac Toe game, demonstrate expertise in advanced algorithms to consistently outsmart opponents.',
        link: 'https://github.com/Carmen-jx/Tic-Tac-Toe-Minimax',
    }  
];