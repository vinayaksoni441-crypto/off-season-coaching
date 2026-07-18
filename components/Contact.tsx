"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    goal: "",
    email: "",
    instagram: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Application Submitted Successfully!");

        setForm({
          name: "",
          age: "",
          goal: "",
          email: "",
          instagram: "",
        });
      } else {
        setMessage(data.message || "❌ Something went wrong.");
      }
    } catch {
      setMessage("❌ Server Error.");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="border-t border-white/10 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-10"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Let's Build Your Best Version.
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
          />

          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            required
            className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
          />

          <input
            name="goal"
            value={form.goal}
            onChange={handleChange}
            placeholder="Goal"
            required
            className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
          />

          <input
            name="instagram"
            value={form.instagram}
            onChange={handleChange}
            placeholder="Instagram"
            required
            className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none md:col-span-2"
          />

          <div className="md:col-span-2 mt-4 flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-300 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            <a
              href="mailto:vinayaksoni8818@gmail.com"
              className="text-sm text-zinc-400 hover:text-white"
            >
              vinayaksoni8818@gmail.com
            </a>
          </div>

          {message && (
            <p className="md:col-span-2 mt-4 text-sm text-green-400">
              {message}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
