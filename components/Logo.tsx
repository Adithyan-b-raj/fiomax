import Image from "next/image";
import logoLight from "@/public/logo-light.png";
import logoDark from "@/public/logo-dark.png";

type LogoProps = {
  /** "light" = white ink for dark backgrounds, "dark" = ink for light backgrounds */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Fiomax brand word-mark. Both variants are alpha-trimmed derivatives of
 * public/logo.png (see scripts/make-logo-variants.ps1), so they share the same
 * aspect ratio and can be sized by height alone.
 */
export function Logo({ variant = "light", className }: LogoProps) {
  return (
    <Image
      src={variant === "light" ? logoLight : logoDark}
      alt="Fiomax Digital Services"
      priority={variant === "light"}
      sizes="240px"
      className={`h-10 w-auto select-none sm:h-11 ${className ?? ""}`}
    />
  );
}
