"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const currentTime = new Date().toLocaleString();

    try {
      await emailjs.send(
       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formRef.current.user_name.value,
          email: formRef.current.user_email.value,
          subject: formRef.current.subject.value,
          message: formRef.current.message.value,
          time: currentTime,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({ ok: true, msg: "Message sent successfully." });
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        ok: false,
        msg: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative" data-aos="fade-up">
      {/* Light source behind the elevated surface (decorative) */}
      <div aria-hidden="true" className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.18),transparent)] blur-2xl" />
    <Card className="shadow-depth relative overflow-hidden rounded-3xl border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm sm:p-10">
      <div aria-hidden="true" className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
        Send Me a Message
      </h3>

      {/* Live region stays mounted so screen readers announce status changes */}
      <div role="status" aria-live="polite">
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-6 rounded-md border px-4 py-3 text-sm",
              status.ok
                ? "border-green-600/25 bg-green-600/5 text-green-800 dark:border-green-400/25 dark:bg-green-400/5 dark:text-green-300"
                : "border-red-600/25 bg-red-600/5 text-red-800 dark:border-red-400/25 dark:bg-red-400/5 dark:text-red-300"
            )}
          >
            {status.msg}
          </motion.div>
        )}
      </div>

      <form ref={formRef} onSubmit={handleSubmit} aria-busy={isSubmitting} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Your Name *"
            name="user_name"
            placeholder="Enter your name"
            required
          />
          <Input
            label="Your Email *"
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>

        <Input
          label="Subject"
          name="subject"
          placeholder="Regarding a project opportunity"
        />
        <Textarea
          label="Your Message *"
          name="message"
          placeholder="Drop a message..."
          required
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="h-12 w-full rounded-full text-[15px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_40px_-10px_rgba(96,165,250,0.55)] transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_16px_50px_-10px_rgba(96,165,250,0.75)] disabled:cursor-wait"
        >
          {isSubmitting ? (
            <>
              <svg
                className="size-4 animate-spin"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <FiSend className="size-4" aria-hidden="true" /> Send Message
            </>
          )}
        </Button>
      </form>
    </Card>
    </div>
  );
};

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors hover:border-white/20 focus-visible:border-ring";

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
    {children}
  </label>
);

const Input = ({ label, name, type = "text", placeholder, required = false }) => (
  <div>
    <Label htmlFor={`contact-${name}`}>{label}</Label>
    <input
      id={`contact-${name}`}
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className={cn(fieldClass, "h-12")}
    />
  </div>
);

const Textarea = ({ label, name, placeholder, required = false }) => (
  <div>
    <Label htmlFor={`contact-${name}`}>{label}</Label>
    <textarea
      id={`contact-${name}`}
      name={name}
      rows="5"
      required={required}
      placeholder={placeholder}
      className={cn(fieldClass, "min-h-36 resize-y py-3 leading-6")}
    ></textarea>
  </div>
);

export default ContactForm;
