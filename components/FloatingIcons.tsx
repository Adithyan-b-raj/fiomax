"use client";

import { motion } from "framer-motion";
import { Play, Brush, Cloud, Gift, Settings, Zap } from "lucide-react";
import type { ReactNode } from "react";

type Tile = {
  icon: ReactNode;
  className: string; // positioning
  tint: string; // icon color
  delay: number;
  duration: number;
};

const TILES: Tile[] = [
  {
    icon: <Play className="h-7 w-7 fill-current" />,
    className: "left-[2%] top-[6%]",
    tint: "text-orange-400",
    delay: 0,
    duration: 5,
  },
  {
    icon: <Brush className="h-7 w-7" />,
    className: "left-[6%] top-[34%]",
    tint: "text-rose-300",
    delay: 0.6,
    duration: 6,
  },
  {
    icon: <Cloud className="h-7 w-7 fill-current" />,
    className: "left-[1%] top-[60%]",
    tint: "text-sky-300",
    delay: 1.1,
    duration: 5.5,
  },
  {
    icon: <Gift className="h-7 w-7" />,
    className: "right-[-4%] top-[8%]",
    tint: "text-amber-300",
    delay: 0.3,
    duration: 6.2,
  },
  {
    icon: <Settings className="h-7 w-7" />,
    className: "right-[1%] top-[38%]",
    tint: "text-white/80",
    delay: 0.9,
    duration: 5.2,
  },
  {
    icon: <Zap className="h-7 w-7 fill-current" />,
    className: "right-[4%] top-[66%]",
    tint: "text-amber-400",
    delay: 1.4,
    duration: 6.6,
  },
];

export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {TILES.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { delay: 0.6 + i * 0.1, duration: 0.5 },
            scale: { delay: 0.6 + i * 0.1, duration: 0.5 },
            y: {
              delay: t.delay,
              duration: t.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={`absolute ${t.className}`}
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink-950 shadow-float ring-1 ring-white/5 ${t.tint}`}
          >
            {t.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
