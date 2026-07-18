"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Plans", href: "#plans" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-4 z-50 mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6"
    >
      <a href="#top" className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
        OFFSEASON
      </a>

      <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="transition hover:text-white">
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
      >
        Apply Now
      </a>
      <a
  href="#payment"
  className="text-sm text-zinc-300 hover:text-white transition"
>
  Payment
</a>
    </motion.header>
  );
}
