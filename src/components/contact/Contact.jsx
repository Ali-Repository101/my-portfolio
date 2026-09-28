import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { contactInfo, socialLinks } from "@/lib/contact";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";

const Contact = () => (
  <Section id="contact">
    <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <div>
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let’s Connect"
          description="Have a project idea or collaboration in mind? Hit me up — I’m always open!"
        />

        <ul className="mt-10 divide-y divide-border border-y border-border" data-aos="fade-up">
          {contactInfo.map((item) => (
            <ContactCard key={item.title} item={item} />
          ))}
        </ul>

        {/* Socials */}
        <div className="mt-8" data-aos="fade-up">
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Follow Me
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={buttonVariants({ variant: "secondary", size: "icon" })}
                >
                  <Icon className="size-[18px]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ContactForm />
    </div>
  </Section>
);

export default Contact;
