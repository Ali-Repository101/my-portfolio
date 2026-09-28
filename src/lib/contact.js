import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { siteConfig, socialProfiles } from "@/lib/site";

export const contactInfo = [
    {
        icon: <FiMapPin />,
        title: "Location",
        content: siteConfig.location.display,
        link: siteConfig.location.href,
    },
    {
        icon: <FiPhone />,
        title: "Phone",
        content: siteConfig.phone.display,
        link: siteConfig.phone.href,
    },
    {
        icon: <FiMail />,
        title: "Email",
        content: siteConfig.email,
        link: siteConfig.links.email,
    },
];

export const socialLinks = [
    socialProfiles.linkedin,
    socialProfiles.github,
    socialProfiles.whatsapp,
    socialProfiles.instagram,
];
