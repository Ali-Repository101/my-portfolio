import { FiArrowUpRight } from "react-icons/fi";

/** One contact method, set as a large typographic link row. */
const ContactCard = ({ item }) => (
  <li>
    <a
      href={item.link}
      {...(item.link.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
      className="group flex items-start gap-5 border-b border-white/10 py-6 transition-colors"
    >
      <span
        className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-colors duration-300 group-hover:border-primary/50 group-hover:text-primary"
        aria-hidden="true"
      >
        {item.icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{item.title}</span>
        <span className="mt-1.5 block text-xl break-words text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
          {item.content}
        </span>
      </span>
      <FiArrowUpRight
        aria-hidden="true"
        className="mt-6 size-5 shrink-0 text-muted-foreground transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
      />
    </a>
  </li>
);

export default ContactCard;
