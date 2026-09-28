"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Product-shot stage: ambient glow, offset back plate, browser chrome and a
 * perspective tilt that eases flat on hover. Scroll parallax is transform-only;
 * scroll-linked values aren't covered by MotionConfig, so reduced motion is
 * handled explicitly here (ranges collapse to zero).
 */
export default function DepthFrame({ children, label, side = "left", className }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [28, -28]);
  const plateY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [20, -20]);
  const tilt = {
    left: "[transform:rotateY(9deg)_rotateX(3deg)]",
    right: "[transform:rotateY(-9deg)_rotateX(3deg)]",
    center: "[transform:rotateX(12deg)] origin-bottom",
  }[side];

  return (
    <div ref={ref} className={cn("relative [perspective:2000px]", className)}>
      {/* Ambient glow behind the product */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.3),transparent)] opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
      />
      {/* Back plate */}
      <motion.div
        aria-hidden="true"
        style={{ y: plateY }}
        className={cn(
          "absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.02]",
          { left: "-translate-x-6 translate-y-6", right: "translate-x-6 translate-y-6", center: "translate-y-8 scale-x-[0.96]" }[side]
        )}
      />
      <motion.div style={{ y }}>
        <div
          className={cn(
            "shadow-depth overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e12] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)_translateY(-6px)]",
            tilt
          )}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-white/[0.07] bg-white/[0.03] px-4 py-3">
            <span aria-hidden="true" className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
            </span>
            {label && (
              <span className="mx-auto truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-zinc-400">
                {label}
              </span>
            )}
            <span aria-hidden="true" className="w-[42px]" />
          </div>
          <div className="relative aspect-[37/20] overflow-hidden">{children}</div>
        </div>
      </motion.div>
    </div>
  );
}
