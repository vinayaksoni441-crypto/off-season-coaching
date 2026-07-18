"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center py-8 lg:py-0">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-sm text-zinc-300 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="uppercase tracking-[0.28em]">Engineering Student • bodybuilder • Coach</span>
          </div>

          <h1 className="mt-6 text-5xl font-semibold uppercase leading-[0.82] tracking-[0.2em] text-white sm:text-6xl lg:text-8xl">
            Become the version
            <br />
            of you that wins.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Premium coaching for ambitious people who want real strength, better discipline, and a physique that feels expensive — without sacrificing their life or their standards.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
            >
              Start Coaching
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#plans"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/5"
            >
              View Plans
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Tailored nutrition</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Weekly accountability</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Premium support</span>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, x: 24 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
  className="relative flex min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
>
  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800" />

  <Image
    src="/images/hero.png"
    alt="Hero"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

  <div className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
    <p className="text-[11px] uppercase tracking-[0.34em] text-zinc-400">
      Private Coaching
    </p>

    <p className="mt-2 text-lg font-medium text-white">
      Built for discipline, strength, and longevity.
    </p>
  </div>
</motion.div>
