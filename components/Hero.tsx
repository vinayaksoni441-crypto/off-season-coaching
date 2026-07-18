"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid min-h-[calc(100vh-5rem)] items-center gap-10 py-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-0">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300 backdrop-blur-sm">
          <span className="text-base">★</span>
          <span className="uppercase tracking-[0.25em]">1-on-1 Online Coaching</span>
        </div>

        <h1 className="mt-6 text-5xl font-semibold uppercase leading-[0.84] tracking-[0.16em] text-white sm:text-6xl lg:text-8xl">
          Off Season
          <br />
          Coaching
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-8 text-zinc-300 sm:text-2xl">
          Built for students, beginners and busy people who want to transform their body without sacrificing studies or work.
        </p>
        <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
          Personalized workout plans, nutrition guidance and weekly accountability to help you become stronger, healthier and more confident.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#plans"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/5"
          >
            View Plans
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="relative flex min-h-[480px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:min-h-[560px]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.09),_transparent_35%)]" />
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -0.5, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative z-10 h-full w-full"
        >
          <Image
            src="/images/hero.png"
            alt="Hero"
            width={500}
            height={700}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </motion.div>
    </section>
  );
}
