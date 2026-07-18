"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars = ["Student", "self growth", "Discipline", "Lifestyle"];

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
          <Image src="/images/gym.jpg" alt="Vinayak in a gym setting" width={1200} height={900} className="h-full w-full object-cover" />
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
            Built for discipline. Designed for longevity.
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            I’m Vinayak Soni, an engineering student, bodybuilder, and online coach helping ambitious people build strength, confidence, and a lifestyle that lasts beyond the gym.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {pillars.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
