"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

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

      setStatus({ ok: true, msg: "Message sent successfully 🎉" });
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        ok: false,
        msg: "Failed to send message 😕 Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Send Me a Message
      </h3>

      {status && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-4 rounded-lg border ${
            status.ok
              ? "bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-200 dark:border-green-800"
              : "bg-red-50 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-200 dark:border-red-800"
          }`}
        >
          {status.msg}
        </motion.div>
      )}

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
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
          className="mb-6"
        />
        <Textarea
          label="Your Message *"
          name="message"
          placeholder="Drop a message..."
          required
        />

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-[#3b82f6] to-[#9333ea] text-white font-medium py-4 px-6 rounded-lg flex items-center justify-center shadow hover:shadow-md transition-all"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
              <FaPaperPlane className="mr-3" /> Send Message
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

// 🔹 Input component
const Input = ({ label, name, type = "text", placeholder, required = false }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 outline-none transition-all hover:border-gray-400 dark:hover:border-gray-500"
    />
  </div>
);

// 🔹 Textarea component
const Textarea = ({ label, name, placeholder, required = false }) => (
  <div className="mb-10 mt-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <textarea
      name={name}
      rows="5"
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 outline-none transition-all hover:border-gray-400 dark:hover:border-gray-500"
    ></textarea>
  </div>
);

export default ContactForm;
