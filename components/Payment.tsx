"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

export default function PaymentSection() {
  const [copied, setCopied] = useState(false);
  const upiId = "8839075436@ybl";

  const whatsappMessage = encodeURIComponent(
    `Hi Vinayak!

I have completed the payment for Off Season Coaching.

Plan: ₹499 / ₹999
Name:
Email:

I am attaching the payment screenshot.`
  );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <motion.section
      id="payment"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="py-20"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_60%)] p-8 shadow-[0_25px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Payment</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Reserve your spot with a premium payment experience.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
              Pay securely through UPI, copy your details instantly, and notify us with a single tap.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            Fast onboarding • Instant confirmation
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Foundation</p>
                  <p className="mt-2 text-4xl font-semibold text-white">₹499</p>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">
                  Starter plan
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Signature</p>
                  <p className="mt-2 text-4xl font-semibold text-white">₹999</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-zinc-300">
                  Full support
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/30 p-6 text-center sm:p-8">
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:h-80 sm:w-80">
              <Image src="/images/qr-code.jpg"
  alt="UPI QR"
  width={320}
  height={320}
  className="h-full w-full object-contain" />
            </div>

            <div className="mt-6 flex w-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:flex-row sm:justify-between">
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">UPI ID</p>
                <p className="mt-1 text-base font-semibold text-white">{upiId}</p>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-100 transition hover:border-white/30 hover:bg-white/10"
              >
                {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <a
              href={`https://wa.me/918839075436?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-zinc-200"
            >
              I&apos;ve Paid – Send Screenshot on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
