import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

/*
 * Single source of truth for personal contact details and social profiles.
 * Every component (header, hero, contact, footer) reads from here.
 *
 * ⚠️ UNRESOLVED DATA CONFLICTS — please confirm:
 *
 * 1. Phone / WhatsApp number
 *    Before consolidation two numbers were in use:
 *      - +91 7814767071 → shown on the Contact card (tel: link) and Contact-section WhatsApp link
 *      - +91 8052121367 → Hero and Footer WhatsApp links
 *    Kept: +91 7814767071 (the number visibly displayed on the site).
 *    If WhatsApp should use the other number, change `whatsappNumber` only.
 *
 * 2. Instagram
 *    The Contact section linked to the bare "https://www.instagram.com/" (placeholder);
 *    the Footer linked to "https://www.instagram.com/mr._ali_101/".
 *    Kept: the Footer profile URL. Please confirm this is the account you want public.
 */

const phoneNumber = "+917814767071";
const whatsappNumber = "917814767071"; // digits only, country code first (wa.me format)
const email = "arshadalik526@gmail.com";

export const siteConfig = {
  name: "Arshad Ali",
  email,
  phone: {
    display: "+91 7814767071",
    href: `tel:${phoneNumber}`,
  },
  location: {
    display: "Sector 45 Burail, Chandigarh, India",
    href: "https://maps.app.goo.gl/jb9BupBx9cjQqVwF7",
  },
  resume: "/files/ArshadAli_CV.pdf",
  links: {
    email: `mailto:${email}`,
    whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hey Arshad!")}`,
    linkedin: "https://in.linkedin.com/in/arshad-ali-682729250",
    github: "https://github.com/Ali-Repository101",
    instagram: "https://www.instagram.com/mr._ali_101/",
  },
};

export const socialProfiles = {
  linkedin: { label: "LinkedIn", href: siteConfig.links.linkedin, Icon: FaLinkedin },
  github: { label: "GitHub", href: siteConfig.links.github, Icon: FaGithub },
  whatsapp: { label: "WhatsApp", href: siteConfig.links.whatsapp, Icon: FaWhatsapp },
  instagram: { label: "Instagram", href: siteConfig.links.instagram, Icon: FaInstagram },
  email: { label: "Email", href: siteConfig.links.email, Icon: HiOutlineMail },
};
