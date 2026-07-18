"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
        >
          <Image
            src="/images/gym.jpg"
            alt="Fitness environment and training space"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Built by someone living the journey.
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            I'm Vinayak, a B.Tech student and fitness creator documenting my Off Season while helping students, beginners and busy people build confidence through fitness.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
