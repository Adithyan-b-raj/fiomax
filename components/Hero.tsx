"use client";

import { motion } from "framer-motion";
import { Crown, Tag, ShieldCheck, Zap, Headphones } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WhatsAppButton, AvatarStack } from "@/components/ui";
import { PhoneMockup } from "@/components/PhoneMockup";
import { FloatingIcons } from "@/components/FloatingIcons";

const PILLS = [
  { icon: Tag, label: "Affordable\nPrices" },
  { icon: ShieldCheck, label: "Trusted &\nVerified" },
  { icon: Zap, label: "Instant\nAccess" },
  { icon: Headphones, label: "Support\n& Guidance" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink-950 text-white">
      {/* Ambient glow + grid */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-grid-faint opacity-60" />
      <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-page relative z-10 flex flex-1 flex-col pb-10 pt-5 lg:pb-8">
        {/* Top bar */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <Logo variant="light" className="xl:-ml-10 2xl:-ml-16" />
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-whatsapp" />
            </span>
            Trusted by 2,500+ Users
          </div>
        </motion.header>

        {/* Main grid */}
        <div className="mt-8 grid flex-1 items-center gap-10 lg:mt-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4">
          {/* Left: copy */}
          <div className="max-w-2xl xl:-ml-10 2xl:-ml-16">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-sm font-bold uppercase tracking-wide text-ink-950 shadow-glow"
            >
              <Crown className="h-4 w-4" />
              Premium Tools at Low Prices
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[2.9rem] xl:text-[3.25rem]"
            >
              Need Digital
              Subscriptions <br className="hidden sm:block" />
              <span className="text-gradient sm:whitespace-nowrap">at Affordable Prices?</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 max-w-xl text-base leading-relaxed text-white/70 xl:text-lg"
            >
              Get access to premium digital tools, productivity apps,
              entertainment subscriptions and more — all in one place at the
              best prices.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 sm:flex sm:flex-nowrap sm:gap-5"
            >
              {PILLS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-500/40 bg-brand-500/10 text-brand-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="whitespace-pre-line text-sm font-semibold leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-7"
            >
              <WhatsAppButton className="w-full py-3.5 text-base sm:w-auto" />
            </motion.div>

            {/* Social proof */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 flex items-center gap-4"
            >
              <AvatarStack count={5} />
              <div className="leading-tight">
                <p className="text-lg font-bold">2,500+ Happy Members</p>
                <p className="text-sm text-white/60">
                  Join and get the latest offers now!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: phone + floating icons */}
          <div className="relative min-h-[680px] lg:min-h-0 lg:h-[84svh] lg:max-h-[760px]">
            <FloatingIcons />
            <div className="relative z-10 flex h-full items-center justify-center">
              <PhoneMockup />
            </div>

            {/* "Join Now!" handwritten annotation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute bottom-6 right-2 hidden sm:block"
            >
              <span className="font-display text-2xl font-bold italic text-brand-400">
                Join
                <br />
                Now!
              </span>
              <svg
                viewBox="0 0 60 40"
                className="mt-1 h-8 w-14 -scale-x-100 text-brand-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M4 4c6 18 20 30 50 28" />
                <path d="M42 30l12 2-4 -11" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/5" />
    </section>
  );
}
