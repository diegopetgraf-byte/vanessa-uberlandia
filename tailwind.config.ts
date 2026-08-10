import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm:  "640px",
        md:  "768px",
        lg:  "1024px",
        xl:  "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans:    ["DM Sans", "system-ui", "sans-serif"],
        heading: ["Cormorant Garamond", "Georgia", "serif"],
      },
      colors: {
        marble:  "#FAFAF8",
        "marble-warm": "#F5F3EF",
        stone:   "#EAE7E0",
        "stone-dark": "#D6D0C4",
        sand:    "#C8C0B4",
        oak:     "#9A9188",
        charcoal: "#3C3833",
        ink:     "#1E1B18",
        wine:    "#6B1E2E",
        "wine-light": "#8B3045",
        champagne: "#C9A96E",
        border:  "var(--color-border)",
        input:   "var(--color-input)",
        ring:    "var(--color-ring)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT:    "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT:    "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        destructive: {
          DEFAULT:    "var(--color-destructive)",
          foreground: "var(--color-destructive-foreground)",
        },
        muted: {
          DEFAULT:    "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT:    "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        popover: {
          DEFAULT:    "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
        card: {
          DEFAULT:    "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
      },
      borderRadius: {
        lg:  "0.75rem",
        xl:  "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        xs:  "0 1px 2px rgba(30,27,24,0.04)",
        sm:  "0 2px 8px rgba(30,27,24,0.06)",
        md:  "0 4px 16px rgba(30,27,24,0.08)",
        lg:  "0 8px 32px rgba(30,27,24,0.10)",
        xl:  "0 16px 48px rgba(30,27,24,0.12)",
        wine: "0 4px 16px rgba(107,30,46,0.25)",
        "wine-lg": "0 6px 24px rgba(107,30,46,0.35)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-in":  "fade-in 0.5s ease both",
        "fade-up":  "fade-up 0.7s ease both",
        float:      "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
