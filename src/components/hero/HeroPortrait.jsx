"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Portrait staged as a lit, slightly rotated panel with a back plate and
 * floating metadata. Scroll parallax is transform-only; scroll-linked values
 * aren't covered by MotionConfig, so reduced motion collapses the ranges here.
 */
export default function HeroPortrait({ years, company }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);
  const plateY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 30]);
  const chipY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  return (
    <div
      ref={ref}
      className="animate-rise relative mx-auto w-full max-w-[19rem] [perspective:1600px] sm:max-w-[22rem] lg:mr-0 lg:max-w-none"
      style={{ animationDelay: "250ms" }}
    >
      {/* Back plate — offset layer that gives the panel physical depth */}
      <motion.div
        aria-hidden="true"
        style={{ y: plateY }}
        className="absolute inset-0 translate-x-5 translate-y-5 rounded-[28px] border border-white/10 bg-white/[0.02] lg:translate-x-8 lg:translate-y-8"
      />

      <motion.figure
        style={{ y: panelY }}
        className="shadow-depth relative aspect-[4/5] overflow-hidden rounded-[28px] ring-1 ring-white/10 [transform:rotateY(-7deg)_rotateX(2deg)]"
      >
        <Image
          src="/images/arshad.jpg"
          alt="Portrait of Arshad Ali"
          fill
          priority
          sizes="(min-width: 1280px) 420px, (min-width: 1024px) 34vw, (min-width: 640px) 352px, 304px"
          className="object-cover object-[50%_30%] brightness-[0.92] contrast-[1.05] saturate-[0.9]"
        />
        {/* Lighting: cool key light from the top right, falloff into the stage */}
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_80%_at_85%_0%,rgba(96,165,250,0.22),transparent_55%)] mix-blend-soft-light" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050507] via-[#050507]/55 to-transparent" />
        <div aria-hidden="true" className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />
      </motion.figure>

      {/* Floating metadata — factual, from the resume data */}
      <motion.div
        style={{ y: chipY }}
        className="absolute -left-4 bottom-10 rounded-xl border border-white/10 bg-[#0b0c10]/80 px-4 py-3 shadow-depth backdrop-blur-md sm:-left-8 lg:-left-14"
      >
        <p className="text-3xl leading-none font-semibold tracking-tight text-white">{years}</p>
        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">Years shipping</p>
      </motion.div>

      {company && (
        <motion.div
          style={{ y: chipY }}
          className="absolute -right-3 top-8 hidden max-w-[13rem] rounded-xl border border-white/10 bg-[#0b0c10]/80 px-4 py-3 shadow-depth backdrop-blur-md sm:block lg:-right-6"
        >
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
            Currently
          </p>
          <p className="mt-1.5 text-sm leading-5 font-medium text-white">{company}</p>
        </motion.div>
      )}
    </div>
  );
}
