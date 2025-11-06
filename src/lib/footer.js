import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";


export const socialLinks = [
    {
        icon: <FaLinkedin size={20} />,
        url: "https://in.linkedin.com/in/arshad-ali-682729250",
        color: "hover:text-[#0A66C2]",
        label: "LinkedIn",
    },
    {
        icon: <FaGithub size={20} />,
        url: "https://github.com/Ali-Repository101",
        color: "hover:text-gray-800 dark:hover:text-gray-100",
        label: "GitHub",
    },
    {
        icon: <FaInstagram size={20} />,
        url: "https://www.instagram.com/mr._ali_101/",
        color: "hover:text-pink-500",
        label: "Instagram",
    },
    {
        icon: <FaWhatsapp size={20} />,
        url: "whatsapp://send?text=Hey Arshad!&phone=+918052121367",
        color: "hover:text-[#25D366]",
        label: "WhatsApp",
    },
];