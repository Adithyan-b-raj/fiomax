"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Gift } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const BENEFITS = [
  "Premium tool giveaways",
  "Early access to deals",
  "Verified and genuine offers",
  "Tips and tutorials",
  "Active community support",
];

function GiftGraphic() {
  return (
    <div className="relative flex items-center justify-center">
      {/* glow */}
      <div className="absolute h-40 w-40 rounded-full bg-brand-500/30 blur-3xl" />
      {/* confetti bits */}
      {[
        "left-2 top-4",
        "right-6 top-2",
        "left-6 bottom-6",
        "right-2 bottom-10",
        "left-1/2 top-0",
      ].map((pos, i) => (
        <motion.span
          key={i}
          className={`absolute h-2 w-2 rounded-[2px] ${
            i % 2 ? "bg-brand-400" : "bg-amber-200"
          } ${pos}`}
          animate={{ y: [0, -8, 0], rotate: [0, 45, 0] }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-40 w-40 items-center justify-center rounded-3xl bg-gradient-to-br from-ink-700 to-ink-950 shadow-glow-lg ring-1 ring-brand-500/30"
      >
        <Gift className="h-20 w-20 text-brand-400" strokeWidth={1.4} />
      </motion.div>
    </div>
  );
}

export function Giveaways() {
  return (
    <section className="bg-white pb-6">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-12 sm:px-12 sm:py-14">
            <div className="absolute inset-0 bg-hero-glow opacity-80" />
            <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,0.9fr)]">
              {/* Left: gift + copy */}
              <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr]">
                <GiftGraphic />
                <div className="text-white">
                  <span className="inline-block rounded-md bg-brand-gradient px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-950">
                    Exclusive for Members
                  </span>
                  <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-[40px]">
                    Regular <span className="text-gradient">Giveaways!</span>
                  </h2>
                  <p className="mt-3 max-w-md text-white/70">
                    Get a chance to win free subscriptions and other exciting
                    rewards by joining our WhatsApp community.
                  </p>
                </div>
              </div>

              {/* Divider (desktop only) */}
              <div className="hidden h-full w-px bg-white/10 lg:block" />

              {/* Right: checklist */}
              <ul className="space-y-4">
                {BENEFITS.map((b, i) => (
                  <Reveal key={b} delay={i * 0.08}>
                    <li className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-400" />
                      <span className="text-base font-medium">{b}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
