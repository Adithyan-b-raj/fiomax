import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/ESFA9jQV7WkIidGXQlhP7v?mode=ac_t";
const WHATSAPP_CONTACT_URL = "https://wa.me/918590967062";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M16.003 3c-7.17 0-12.99 5.82-12.99 12.99 0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.73a12.94 12.94 0 0 0 6.32 1.62h.01c7.17 0 12.99-5.82 12.99-12.99 0-3.47-1.35-6.73-3.8-9.18A12.9 12.9 0 0 0 16.003 3Zm0 23.77h-.01a10.76 10.76 0 0 1-5.49-1.5l-.39-.23-4.07 1.05 1.09-3.96-.26-.41a10.75 10.75 0 0 1-1.65-5.73c0-5.95 4.84-10.79 10.8-10.79 2.88 0 5.59 1.12 7.63 3.16a10.72 10.72 0 0 1 3.16 7.64c0 5.95-4.84 10.79-10.8 10.79Zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.22.32-.84 1.06-1.03 1.28-.19.22-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.61-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55-.19-.01-.4-.01-.62-.01-.22 0-.56.08-.86.4-.3.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.11 1.31 3.33.16.22 2.27 3.47 5.5 4.86.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.92-.78 2.19-1.54.27-.76.27-1.4.19-1.54-.08-.14-.29-.22-.61-.38Z" />
    </svg>
  );
}

export function WhatsAppButton({
  label = "Join WhatsApp Community",
  contactLabel = "Contact",
  className,
}: {
  label?: string;
  contactLabel?: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-stretch overflow-hidden rounded-full bg-whatsapp shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(37,211,102,0.7)] ${
        className ?? ""
      }`}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-3 pl-4 pr-3 text-xs font-semibold text-white transition-colors hover:bg-black/10 focus:outline-none focus-visible:bg-black/15 sm:gap-2.5 sm:py-3.5 sm:pl-6 sm:pr-4 sm:text-base"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
        <span className="whitespace-nowrap">{label}</span>
      </a>

      {/* Divider matching sketch */}
      <div className="flex items-center" aria-hidden>
        <span className="h-5 w-[1.5px] rounded-full bg-white/35 sm:h-6" />
      </div>

      <a
        href={WHATSAPP_CONTACT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center py-3 pl-3 pr-4 text-xs font-semibold text-white transition-colors hover:bg-black/10 focus:outline-none focus-visible:bg-black/15 sm:py-3.5 sm:pl-4 sm:pr-6 sm:text-base"
      >
        <span className="whitespace-nowrap">{contactLabel}</span>
      </a>
    </div>
  );
}

const AVATAR_TONES = [
  "from-orange-200 to-orange-400",
  "from-amber-200 to-amber-500",
  "from-rose-200 to-orange-300",
  "from-yellow-200 to-amber-400",
  "from-orange-300 to-red-400",
];

/** Overlapping circular avatars used for social proof. */
export function AvatarStack({
  count = 5,
  borderColor = "border-white",
  className,
}: {
  count?: number;
  borderColor?: string;
  className?: string;
}) {
  return (
    <div className={`flex -space-x-2 sm:-space-x-2.5 ${className ?? ""}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`relative h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 ${borderColor} bg-gradient-to-br ${
            AVATAR_TONES[i % AVATAR_TONES.length]
          } shadow-sm`}
        >
          <svg viewBox="0 0 40 40" className="h-full w-full text-white/90">
            <circle cx="20" cy="15" r="7" fill="currentColor" opacity="0.85" />
            <path
              d="M6 38c0-8 6.5-13 14-13s14 5 14 13"
              fill="currentColor"
              opacity="0.85"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export { WHATSAPP_URL, WHATSAPP_CONTACT_URL };
