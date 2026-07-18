"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const transformations = [
  { title: "Consistency", value: "3x/week" },
  { title: "Strength", value: "+18%" },
  { title: "Confidence", value: "Life-changing" },
];

export default function Results() {
  return (
    <section id="results" className="border-t border-white/10 py-20">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Results</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Real Progress. No Shortcuts.
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            The goal is not perfection. It is steady improvement built around discipline, recovery and habits that last.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {transformations.map((item) => (
              <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
        >
          <Image
            src="/images/sidepose.jpg"
            alt="Athlete showcasing progress and posture"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
