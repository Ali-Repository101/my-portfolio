"use client";

import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import "aos/dist/aos.css";
import { initAOS } from "@/lib/motion";

export default function Providers({ children }) {
  // One AOS instance for the whole page; disabled for reduced-motion users (see initAOS)
  useEffect(() => {
    initAOS({ duration: 600, easing: "ease-out-cubic", once: true, offset: 40 });
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {/* Framer Motion skips transform/layout animations when the OS asks for reduced motion */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
