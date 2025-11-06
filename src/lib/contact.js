import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaWhatsapp,
    FaInstagram,
} from "react-icons/fa";

export const contactInfo = [
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        content: "Sector 45 Burail, Chandigarh, India",
        link: "https://maps.app.goo.gl/jb9BupBx9cjQqVwF7",
        delay: 0.1,
    },
    {
        icon: <FaPhone />,
        title: "Phone",
        content: "+91 7814767071",
        link: "tel:+917814767071",
        delay: 0.2,
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        content: "arshadalik526@gmail.com",
        link: "mailto:arshadalik526@gmail.com",
        delay: 0.3,
    },
];

export const socialLinks = [
    {
        href: "https://in.linkedin.com/in/arshad-ali-682729250",
        icon: <FaLinkedin />,
        color: "hover:bg-[#0A66C2]",
    },
    {
        href: "https://github.com/Ali-Repository101",
        icon: <FaGithub />,
        color: "hover:bg-gray-900",
    },
    {
        href: "whatsapp://send?text=Hey Arshad!&phone=+917814767071",
        icon: <FaWhatsapp />,
        color: "hover:bg-[#25D366]",
    },
    {
        href: "https://www.instagram.com/",
        icon: <FaInstagram />,
        color: "hover:bg-[#E4405F]",
    },
];
