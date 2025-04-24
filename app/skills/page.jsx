import React from 'react';
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaPython, 
    FaReact, 
    FaNodeJs, 
    FaAws, 
    FaDocker, 
    FaCloudflare, 
    FaDigitalOcean,
    FaJava, 
    FaBootstrap,
    FaPhp,
    FaAndroid,
    FaFigma,
    FaCode} from 'react-icons/fa'; // Import icons from react-icons
import {
    SiTailwindcss, 
    SiNextdotjs, 
    SiMongodb, 
    SiPostgresql, 
    SiFirebase, 
    SiGraphql, 
    SiGit, 
    SiJira, 
    SiTypescript, 
    SiGnubash, 
    SiMysql, 
    SiSqlite, 
    SiAmazondynamodb, 
    SiGooglecloud,
    SiExpress,
    SiHono,
    SiTrpc,
    SiJavascript,
    SiApifox
} from 'react-icons/si';

import { TbBrandCpp, TbBrandGolang } from 'react-icons/tb'

const skillsData = {
    frontend: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> }
    ],
    languages: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'C/C++', icon: <TbBrandCpp /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Php', icon: <FaPhp /> }
    ],
    backend: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'REST APIs', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
    ],
    databases: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Firebase', icon: <SiFirebase /> }
    ],
    otherTools: [
        { name: 'VSCode', icon: <FaCode /> },
        { name: 'Android studio', icon: <FaAndroid /> },
        { name: 'Figma', icon: <FaFigma /> }
    ]
};

const SkillsSection = ({ title, skills }) => (
    <div className="mb-12">
        <h2 className=" text-xl text-yellow-100 my-4">{title}</h2>
        <ul className="flex flex-wrap gap-6">
            {skills.map((skill, index) => (
                <li key={index} className="flex flex-col items-center p-4 shadow-lg rounded-lg bg-white text-gray-700 w-28">
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <span>{skill.name}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Skills = () => {
    return (
        <div className="container mx-auto px-6 py-6">
            <h1 className="text-3xl font-semibold text-white mb-8"> Tools I Work With </h1>
            <p className='py-4 text-xl'>
                As you&apos;ve probably noticed by now, I work with a wide range of technologies. I don&apos;t restrict myself to any single tech stack. For me, being an engineer isn&apos;t just about the languages or frameworks—it&apos;s about using the right tools to get the job done. Here&apos;s a non-exhaustive list of the tools, languages, frameworks, and technologies I use regularly:
            </p>

            <SkillsSection title="Programming Languages" skills={skillsData.languages} />
            <SkillsSection title="Frontend Development" skills={skillsData.frontend} />
            <SkillsSection title="Backend Development" skills={skillsData.backend} />
            <SkillsSection title="Databases" skills={skillsData.databases} />
            <SkillsSection title="Other Tools" skills={skillsData.otherTools} />

        </div>
    );
};

export default Skills;
