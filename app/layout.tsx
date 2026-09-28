import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fiomax Digital Services — Premium Digital Subscriptions at Affordable Prices",
  description:
    "Get access to premium digital tools, productivity apps, entertainment subscriptions and more — all in one place at the best prices. Join our WhatsApp community.",
  keywords: [
    "digital subscriptions",
    "premium tools",
    "affordable prices",
    "OTT",
    "productivity apps",
    "Fiomax",
  ],
  openGraph: {
    title: "Fiomax Digital Services",
    description:
      "Premium digital subscriptions at affordable prices. Join 2,500+ happy members.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
