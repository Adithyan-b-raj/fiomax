import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand orange / amber ramp pulled from the reference design
        brand: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FBA53C",
          500: "#F59E0B", // primary amber
          600: "#F5920B",
          700: "#EA7A0C",
          800: "#C2600A",
          900: "#7C3D06",
        },
        ink: {
          950: "#050505",
          900: "#0A0A0B",
          800: "#111113",
          700: "#18181B",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1Fb757",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #FBBF24 0%, #F59E0B 45%, #EA7A0C 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, #FCD34D 0%, #F59E0B 55%, #F5920B 100%)",
        "hero-glow":
          "radial-gradient(60% 60% at 78% 42%, rgba(245,158,11,0.35) 0%, rgba(245,158,11,0.08) 40%, rgba(0,0,0,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(245,158,11,0.55)",
        "glow-lg": "0 0 80px -10px rgba(245,158,11,0.5)",
        card: "0 10px 30px -12px rgba(0,0,0,0.12)",
        "card-hover": "0 22px 50px -18px rgba(245,158,11,0.35)",
        float: "0 20px 45px -15px rgba(0,0,0,0.6)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
