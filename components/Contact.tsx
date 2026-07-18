"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-10"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Let's Build Your Best Version.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <input className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500" placeholder="Name" />
          <input className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500" placeholder="Age" />
          <input className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500" placeholder="Goal" />
          <input className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500" placeholder="Email" />
          <input className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 md:col-span-2" placeholder="Instagram" />
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
            Submit
          </button>
          <a href="mailto:hello@offseasoncoaching.com" className="text-sm text-zinc-400 transition hover:text-white">
            hello@offseasoncoaching.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
