import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/ESFA9jQV7WkIidGXQlhP7v?mode=ac_t";
const WHATSAPP_CONTACT_URL = "https://wa.me/918590967062";
const INSTAGRAM_URL = "https://www.instagram.com/fiomax_store?stkn=MWVlczM4bHVqYTV3dA==";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M16.003 3c-7.17 0-12.99 5.82-12.99 12.99 0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.73a12.94 12.94 0 0 0 6.32 1.62h.01c7.17 0 12.99-5.82 12.99-12.99 0-3.47-1.35-6.73-3.8-9.18A12.9 12.9 0 0 0 16.003 3Zm0 23.77h-.01a10.76 10.76 0 0 1-5.49-1.5l-.39-.23-4.07 1.05 1.09-3.96-.26-.41a10.75 10.75 0 0 1-1.65-5.73c0-5.95 4.84-10.79 10.8-10.79 2.88 0 5.59 1.12 7.63 3.16a10.72 10.72 0 0 1 3.16 7.64c0 5.95-4.84 10.79-10.8 10.79Zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.22.32-.84 1.06-1.03 1.28-.19.22-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.61-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55-.19-.01-.4-.01-.62-.01-.22 0-.56.08-.86.4-.3.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.11 1.31 3.33.16.22 2.27 3.47 5.5 4.86.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.92-.78 2.19-1.54.27-.76.27-1.4.19-1.54-.08-.14-.29-.22-.61-.38Z" />
    </svg>
  );
}

export function WhatsAppButton({
  label = "Join WhatsApp Community",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp group ${className ?? ""}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
      <span>{label}</span>
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

const AVATAR_IMAGES = [
  "/avatars/avatar-1.jpg",
  "/avatars/avatar-2.jpg",
  "/avatars/avatar-3.jpg",
  "/avatars/avatar-4.jpg",
  "/avatars/avatar-5.jpg",
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
          className={`relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full border-2 ${borderColor} bg-ink-800 shadow-sm`}
        >
          <Image
            src={AVATAR_IMAGES[i % AVATAR_IMAGES.length]}
            alt={`Community member ${i + 1}`}
            width={36}
            height={36}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export { WHATSAPP_URL, WHATSAPP_CONTACT_URL, INSTAGRAM_URL };
