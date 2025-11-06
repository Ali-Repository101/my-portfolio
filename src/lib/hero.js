
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const typedRoles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Freelancer",
    "Designer",
];

export const socialLinks = [
    {
        icon: <FaLinkedin />,
        href: "https://in.linkedin.com/in/arshad-ali-682729250",
        color: "hover:bg-blue-500 hover:text-white",
    },
    {
        icon: <FaGithub />,
        href: "https://github.com/Ali-Repository101",
        color: "hover:bg-gray-900 hover:text-white",
    },
    {
        icon: <FaWhatsapp />,
        href: "whatsapp://send?text=Hey Arshad!&phone=+918052121367",
        color: "hover:bg-green-500 hover:text-white",
    },
    {
        icon: <HiOutlineMail />,
        href: "mailto:arshadalik526@gmail.com",
        color: "hover:bg-red-500 hover:text-white",
    },
];

export const floatingCircles = [
    { delay: 200, style: "top-1/4 left-10 w-32 h-32 animate-float1" },
    { delay: 400, style: "top-3/4 right-20 w-40 h-40 animate-float2" },
    { delay: 600, style: "bottom-10 left-1/3 w-24 h-24 animate-float3" },
];
