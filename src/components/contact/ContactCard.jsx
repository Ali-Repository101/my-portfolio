/** One contact detail row (rendered inside a divided list). */
const ContactCard = ({ item }) => (
  <li className="flex items-start gap-4 py-5">
    <span
      className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground"
      aria-hidden="true"
    >
      {item.icon}
    </span>
    <div className="min-w-0">
      <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {item.title}
      </h3>
      <a
        href={item.link}
        {...(item.link.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
        className="mt-1 block break-words text-base text-foreground transition-colors hover:text-primary"
      >
        {item.content}
      </a>
    </div>
  </li>
);

export default ContactCard;
