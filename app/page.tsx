"use client";

import About from "../components/About";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Payment from "../components/Payment";
import Pricing from "../components/Pricing";
import Results from "../components/Results";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-[#030303] text-white">
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Results />
        <Pricing />
        <Payment />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}