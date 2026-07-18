"use client";

import { motion } from "framer-motion";
import { Dumbbell, MessageCircleMore, Sparkles, Users2 } from "lucide-react";

const features = [
  {
    title: "Personal Workout Plan",
    description: "Structured training built around your goals, schedule and recovery.",
    icon: Dumbbell,
  },
  {
    title: "Nutrition Guidance",
    description: "Simple, sustainable nutrition support that fits real life and performance.",
    icon: Sparkles,
  },
  {
    title: "Weekly Check-ins",
    description: "Consistent feedback and accountability to keep progress steady and clear.",
    icon: Users2,
  },
  {
    title: "WhatsApp Support",
    description: "Fast communication and guidance whenever you need direction or motivation.",
    icon: MessageCircleMore,
  },
  {
    title: "Student Friendly",
    description: "Flexible coaching for busy schedules, academic life and long-term consistency.",
    icon: Users2,
  },
  {
    title: "Sustainable Results",
    description: "A calm, realistic system designed for strength, confidence and habit building.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-white/10 py-20">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Features</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Why Choose OFF SEASON Coaching?
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-[1.6rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-300 hover:border-white/25"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{feature.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
