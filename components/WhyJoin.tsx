"use client";

import { IndianRupee, ShieldCheck, Zap, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const FEATURES = [
  {
    icon: IndianRupee,
    title: "Best Prices",
    desc: "Get premium subscriptions at affordable prices.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Products",
    desc: "Only genuine and trusted services.",
  },
  {
    icon: Zap,
    title: "Latest Updates",
    desc: "Be the first to know about new deals.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    desc: "Get help, share ideas and stay updated.",
  },
];

export function WhyJoin() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-[42px]">
            Why Join Our Community?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="card-surface group flex h-full items-start gap-4 p-6 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card-hover">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink-900">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-900/60">
                    {f.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
