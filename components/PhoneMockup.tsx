"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import phoneImg from "@/public/phone2-cutout.png";

/**
 * Angled iPhone mockup rendered from a generated transparent PNG.
 * Wrapped in a subtle entrance + idle-float animation with a warm glow behind.
 */
export function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-[279px] sm:w-[324px] lg:w-[min(356px,38.7svh)]"
    >
      {/* Warm ambient glow behind the device */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-3xl" />

      <motion.div
        initial={{ rotate: 10 }}
        animate={{ y: [0, -12, 0], rotate: [10, 15, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="drop-shadow-[0_35px_60px_rgba(0,0,0,0.55)]"
      >
        <Image
          src={phoneImg}
          alt="Fiomax Digital Hub WhatsApp community shown on an iPhone"
          priority
          placeholder="blur"
          className="h-auto w-full select-none"
          sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 400px"
        />
      </motion.div>
    </motion.div>
  );
}
