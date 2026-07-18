"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center py-10 lg:py-0">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <Sparkles className="h-4 w-4" />
            <span>Engineering Student • Bodybuilder • Coach</span>
          </div>

          <h1 className="mt-8 text-5xl font-bold uppercase leading-none tracking-wider text-white lg:text-7xl">
            Become The
            <br />
            Version Of You
            <br />
            That Wins.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Premium online fitness coaching designed for students and busy
            people who want to build muscle, lose fat and become disciplined.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              Start Coaching
            </a>

            <a
              href="#plans"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
            >
              View Plans
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
              Tailored Nutrition
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
              Weekly Check-ins
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
              Premium Support
            </span>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex h-[650px] items-center justify-center rounded-[32px] border border-white/10 bg-zinc-900"
>
  <div className="text-center">
    <h2 className="text-4xl font-bold text-white">
      OFF SEASON
    </h2>

    <p className="mt-4 text-zinc-400">
      Premium Fitness Coaching
    </p>
  </div>
</motion.div>
          

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Private Coaching
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Built For Discipline, Strength & Longevity
            </h3>
          </div>      
            </motion.div>

      </div>
    </section>
  );
}