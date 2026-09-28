"use client";

import {
  PenNibIcon,
  FilmSlateIcon,
  BrainIcon,
  CloudArrowUpIcon,
  PopcornIcon,
  PuzzlePieceIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

/**
 * Phosphor's duotone weight is used here on purpose: the 20%-opacity underlay
 * gives each glyph a hand-drawn, two-tone feel instead of a flat outline.
 */
const CATEGORIES: {
  icon: typeof PenNibIcon;
  title: string;
  desc: string;
  tint: string;
  bg: string;
}[] = [
  {
    icon: PenNibIcon,
    title: "Design Tools",
    desc: "For creative work and design projects",
    tint: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    icon: FilmSlateIcon,
    title: "Video Editing Tools",
    desc: "For content creators and video editors",
    tint: "text-violet-500",
    bg: "bg-violet-100",
  },
  {
    icon: BrainIcon,
    title: "AI Tools",
    desc: "For productivity and automation",
    tint: "text-emerald-500",
    bg: "bg-emerald-100",
  },
  {
    icon: CloudArrowUpIcon,
    title: "Cloud & Storage",
    desc: "For file storage and productivity",
    tint: "text-sky-500",
    bg: "bg-sky-100",
  },
  {
    icon: PopcornIcon,
    title: "Entertainment",
    desc: "For movies, shows and OTT content",
    tint: "text-rose-500",
    bg: "bg-rose-100",
  },
  {
    icon: PuzzlePieceIcon,
    title: "And More",
    desc: "Many other premium tools and services",
    tint: "text-slate-500",
    bg: "bg-slate-100",
  },
];

export function PopularSubscriptions() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-[42px]">
            Popular Digital Subscriptions
          </h2>
          <p className="mt-4 text-base text-ink-900/60">
            Access top digital tools and services at affordable prices. New
            deals and offers updated regularly in our community.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="card-surface group h-full p-5 text-center hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card-hover">
                <span
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${c.bg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <c.icon
                    weight="duotone"
                    aria-hidden
                    className={`h-9 w-9 ${c.tint}`}
                  />
                </span>
                <h3 className="text-sm font-bold text-ink-900">{c.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-900/55">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
