"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Who is this coaching for?",
    answer: "Students, beginners and busy professionals who want a clear path to improve their body and habits.",
  },
  {
    question: "Is it fully online?",
    answer: "Yes. Programming, nutrition guidance and check-ins are delivered remotely with support built around your schedule.",
  },
  {
    question: "Do you provide nutrition guidance?",
    answer: "Absolutely. Meal structure, macro guidance and sustainable habits are part of the process.",
  },
  {
    question: "How do I get started?",
    answer: "Apply through the contact form and I’ll guide you through the onboarding process and next steps.",
  },
  {
    question: "Can I join if I am a complete beginner?",
    answer: "Yes. The coaching is designed to be approachable, practical and encouraging for first-time clients.",
  },
  {
    question: "Will this fit around college or work?",
    answer: "Yes. The plans are built around flexibility, consistency and realistic routines that fit busy weeks.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-white/10 py-20">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Questions before you apply?
        </h2>
      </div>

      <div className="mt-10 space-y-4">
        {faqs.map((item, index) => (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-[1.35rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
