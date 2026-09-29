"use client";

import { motion } from "framer-motion";
import { Crown, Tv, Palette, Sparkles, GraduationCap } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WhatsAppButton, AvatarStack } from "@/components/ui";
import { PhoneMockup } from "@/components/PhoneMockup";
import { FloatingIcons } from "@/components/FloatingIcons";

const PILLS = [
  { icon: Tv, label: "OTT Subscriptions" },
  { icon: Palette, label: "Designing tools" },
  { icon: Sparkles, label: "AI Tools" },
  { icon: GraduationCap, label: "Learning Tool" },
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

      <div className="container-page relative z-10 flex flex-1 flex-col pb-8 pt-4 sm:pt-5 lg:pb-8">
        {/* Top bar */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <Logo variant="light" className="xl:-ml-10 2xl:-ml-16" />
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/80 backdrop-blur-sm sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-whatsapp sm:h-2.5 sm:w-2.5" />
            </span>
            <span>Trusted by 2,500+</span>
          </div>
        </motion.header>

        {/* Main grid */}
        <div className="mt-5 grid flex-1 items-center gap-8 sm:mt-8 lg:mt-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4">
          {/* Left: copy */}
          <div className="max-w-2xl xl:-ml-10 2xl:-ml-16">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-400 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-1.5 sm:text-sm"
            >
              <Crown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Premium Tools at Low Prices
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-3.5 font-display text-[1.95rem] font-extrabold leading-[1.12] tracking-tight sm:mt-4 sm:text-5xl sm:leading-[1.05] lg:text-[2.9rem] xl:text-[3.25rem]"
            >
              Need Digital Subscriptions{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient sm:whitespace-nowrap">at Affordable Prices?</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-2.5 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base xl:text-lg"
            >
              Get premium OTT, design, and AI subscriptions at unbeatable prices.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3"
            >
              {PILLS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2 sm:px-3 sm:py-2 backdrop-blur-sm transition-colors hover:border-brand-500/40 hover:bg-white/[0.07]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs font-semibold text-white/90 sm:text-sm">
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
              className="mt-5 sm:mt-7"
            >
              <WhatsAppButton className="w-full sm:w-auto" />
            </motion.div>

            {/* Social proof */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 flex items-center gap-3 sm:mt-5 sm:gap-4"
            >
              <AvatarStack count={5} borderColor="border-ink-950" />
              <div className="leading-tight">
                <p className="text-sm font-bold text-white sm:text-base">2,500+ Happy Members</p>
                <p className="text-xs text-white/60 sm:text-sm">
                  Join to access exclusive daily deals
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: phone + floating icons */}
          <div className="relative mt-4 min-h-[460px] sm:mt-8 sm:min-h-[580px] lg:mt-0 lg:min-h-0 lg:h-[84svh] lg:max-h-[760px]">
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
