"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import {
  WhatsAppIcon,
  WHATSAPP_CONTACT_URL,
  INSTAGRAM_URL,
} from "@/components/ui";

/**
 * Floating action buttons (bottom right):
 * - Instagram button (top): directs to @fiomax_store
 * - WhatsApp contact button (bottom): directs to +91 85909 67062
 */
export function FloatingSocials() {
  return (
    <aside
      aria-label="Quick contact links"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6"
    >
      {/* Instagram Button */}
      <motion.a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        title="Follow us on Instagram"
        initial={{ opacity: 0, scale: 0.6, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-[0_8px_20px_rgba(238,42,123,0.38)] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(238,42,123,0.6)] sm:h-13 sm:w-13"
      >
        <Instagram className="h-6 w-6 transition-transform duration-300 group-hover:scale-105" />
        {/* Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-ink-950/90 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          Instagram
        </span>
      </motion.a>

      {/* WhatsApp Contact Button */}
      <motion.a
        href={WHATSAPP_CONTACT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        title="Contact us on WhatsApp"
        initial={{ opacity: 0, scale: 0.6, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(37,211,102,0.48)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(37,211,102,0.7)] sm:h-13 sm:w-13"
      >
        <WhatsAppIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-105" />
        {/* Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-ink-950/90 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </motion.a>
    </aside>
  );
}
