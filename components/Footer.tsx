import { ShieldCheck, Zap, Headphones, Heart } from "lucide-react";
import { Logo } from "@/components/Logo";

const TRUST = [
  { icon: ShieldCheck, label: "Secure & Trusted" },
  { icon: Zap, label: "Instant Access" },
  { icon: Headphones, label: "Community Support" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-8">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Logo variant="dark" />

          <div className="flex flex-wrap items-center justify-center gap-6">
            {TRUST.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 text-sm font-medium text-ink-900/70"
              >
                <t.icon className="h-4 w-4 text-brand-500" />
                {t.label}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
            <Heart className="h-4 w-4 fill-current" />
            Thank you for your support!
          </div>
        </div>

        <div className="mt-6 border-t border-black/5 pt-5 text-center text-xs text-ink-900/45">
          © {new Date().getFullYear()} Fiomax Digital Services. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
