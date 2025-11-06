import {
    FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaServer, FaDatabase,
} from "react-icons/fa";
import {
    SiTailwindcss, SiRedux, SiPostgresql, SiSocketdotio, SiPostman,
    SiExpress, SiMongodb, SiGithub, SiNextdotjs, SiTypescript, SiAwslambda,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

export const skillCategories = [
    {
        title: "Frontend",
        icon: <FaReact className="text-xl" />,
        skills: [
            { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
            { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
            { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
            { icon: <FaBootstrap className="text-purple-500" />, name: "Bootstrap" },
            { icon: <FaReact className="text-blue-400" />, name: "React.js" },
            { icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js" },
            { icon: <SiRedux className="text-purple-400" />, name: "Redux" },
        ],
    },
    {
        title: "Backend",
        icon: <FaServer className="text-xl" />,
        skills: [
            { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
            { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
            { icon: <SiSocketdotio className="text-black dark:text-white" />, name: "Socket.io" },
        ],
    },
    {
        title: "Databases",
        icon: <FaDatabase className="text-xl" />,
        skills: [
            { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
            { icon: <SiPostgresql className="text-blue-600" />, name: "PostgreSQL" },
        ],
    },
    {
        title: "DevOps & Tools",
        icon: <FaGitAlt className="text-xl" />,
        skills: [
            { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
            { icon: <SiGithub className="text-gray-800 dark:text-gray-200" />, name: "GitHub" },
            { icon: <SiAwslambda className="text-orange-400" />, name: "AWS" },
            { icon: <DiVisualstudio className="text-blue-500" />, name: "VSCode" },
            { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
        ],
    },
];
