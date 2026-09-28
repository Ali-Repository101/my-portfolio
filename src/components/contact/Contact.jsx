import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { contactInfo, socialLinks } from "@/lib/contact";
import { Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Contact = () => (
  <Section id="contact" tone="dark" className="overflow-hidden bg-[#050507] pb-20 sm:pb-24 lg:pb-28">
    {/* Closing stage lighting (decorative) */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute -bottom-[26rem] left-1/2 size-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.2),transparent)]" />
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="bg-noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>

    {/* Closing statement */}
    <div data-aos="fade-up">
      <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-primary">04</span>
        <span aria-hidden="true" className="h-px w-10 bg-border" />
        Get in Touch
      </p>
      <h2 className="mt-8 text-[clamp(3.75rem,11vw,10rem)] leading-[0.85] font-semibold tracking-[-0.06em]">
        <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">Let’s Connect</span>
      </h2>
      <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
        Have a project idea or collaboration in mind? Hit me up — I’m always open!
      </p>
    </div>

    <div className="mt-20 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <ul className="border-t border-white/10" data-aos="fade-up">
          {contactInfo.map((item) => (
            <ContactCard key={item.title} item={item} />
          ))}
        </ul>

        {/* Socials */}
        <div className="mt-10" data-aos="fade-up">
          <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Follow Me
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "icon" }),
                    "size-11 rounded-full border-white/10 bg-white/[0.03] transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]"
                  )}
                >
                  <Icon className="size-[18px]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lg:col-span-7">
        <ContactForm />
      </div>
    </div>
  </Section>
);

export default Contact;
