import { FaReact, FaServer } from "react-icons/fa";
import { FiCode, FiCloud, FiCpu } from "react-icons/fi";

// Categories and names follow the "Technical Skills" section of
// public/files/ArshadAli_CV.pdf. Earlier portfolio skills that the resume
// doesn't list (Tailwind CSS, Bootstrap, VSCode, Postman) are kept, not dropped.
// AI coding assistants from the resume (Antigravity, Trae, Kiro) are tooling,
// not project technologies, so they are intentionally not listed here.
export const skillCategories = [
    {
        title: "Languages",
        icon: <FiCode />,
        skills: [
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "HTML5" },
            { name: "CSS3" },
        ],
    },
    {
        title: "Frontend",
        icon: <FaReact />,
        skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "React Native" },
            { name: "Expo / EAS" },
            { name: "Redux" },
            { name: "Zustand" },
            { name: "TanStack Query" },
            { name: "React Hook Form" },
            { name: "Zod" },
            { name: "i18next" },
            { name: "React Native Paper" },
            { name: "Tailwind CSS" },
            { name: "Bootstrap" },
        ],
    },
    {
        title: "Backend & Data",
        icon: <FaServer />,
        skills: [
            { name: "Node.js" },
            { name: "Express.js" },
            { name: "REST APIs" },
            { name: "Socket.IO" },
            { name: "MongoDB" },
            { name: "PostgreSQL" },
            { name: "Drizzle ORM" },
            { name: "Redis" },
        ],
    },
    {
        title: "Cloud & Tools",
        icon: <FiCloud />,
        skills: [
            { name: "AWS (S3)" },
            { name: "Vercel" },
            { name: "Railway" },
            { name: "Shopify App Bridge" },
            { name: "React Router 7" },
            { name: "Cashfree" },
            { name: "DataForSEO" },
            { name: "Git" },
            { name: "GitHub" },
            { name: "NPM" },
            { name: "VSCode" },
            { name: "Postman" },
        ],
    },
    {
        title: "AI Engineering",
        icon: <FiCpu />,
        skills: [{ name: "Anthropic SDK" }, { name: "Claude" }],
    },
];
