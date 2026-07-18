"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Foundation",
    price: "₹499",
    description: "Perfect if you want structure, confidence, and momentum without the overwhelm.",
    features: ["Custom workout plan", "Form guidance", "7-day WhatsApp support"],
    button: "Start With Foundation",
    accent: false,
  },
  {
    name: "Signature",
    price: "₹999",
    description: "For people who want premium accountability, nutrition, and a serious transformation plan.",
    features: ["Training + nutrition plan", "Weekly check-ins", "Priority support", "Progress tracking", "Supplement guidance"],
    button: "Apply For Signature",
    accent: true,
  },
];

export default function Pricing() {
  return (
    <section id="plans" className="border-t border-white/10 py-20">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Pricing</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Choose the plan that matches your ambition.
        </h2>
        <p className="mt-4 text-base leading-8 text-zinc-400">
          Every plan is designed to feel premium, personal, and worth the investment in your physique and discipline.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className={`rounded-[2rem] border p-8 shadow-[0_25px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl ${
              plan.accent
                ? "border-white/20 bg-gradient-to-br from-white/12 via-white/8 to-zinc-900/95"
                : "border-white/10 bg-white/5"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm uppercase tracking-[0.32em] text-zinc-400">{plan.name}</p>
              {plan.accent && <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-zinc-300">Most loved</span>}
            </div>
            <h3 className="mt-5 text-4xl font-semibold text-white">{plan.price}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{plan.description}</p>

            <ul className="mt-8 space-y-3 text-sm text-zinc-300">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#payment"
              className={`mt-8 inline-flex items-center rounded-full px-5 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${
                plan.accent
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "border border-white/15 text-zinc-100 hover:border-white/30 hover:bg-white/5"
              }`}
            >
              {plan.button}
            </a>
          </motion.div>
        ))}
        <div className="h-20 bg-red-500 text-white flex items-center justify-center">
  PRICING END
</div>
      </div>
    </section>
  );
}
