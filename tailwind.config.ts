import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
        // Oni Face palette
        cream:        "#F7F3EC",
        "cream-deep": "#EDE7D9",
        "cream-warm": "#E8E0D0",
        stone:        "#D9D2C4",
        "stone-dark": "#C4BAA8",
        sand:         "#A89D8C",
        mist:         "#8A8278",
        charcoal:     "#3C3831",
        ink:          "#1A1714",

        // Royal blue
        blue:         "#1B3A6B",
        "blue-mid":   "#2C4F8A",
        "blue-light": "#3D6299",
        "blue-pale":  "#EEF2F9",

        // Muted gold
        gold:         "#B8965A",
        "gold-light": "#D4B07A",
        "gold-pale":  "#F5EDD8",

        // Semantic
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
        xs:  "0 1px 2px rgba(27,58,107,0.04)",
        sm:  "0 2px 8px rgba(27,58,107,0.06)",
        md:  "0 4px 16px rgba(27,58,107,0.08)",
        lg:  "0 8px 32px rgba(27,58,107,0.10)",
        xl:  "0 16px 48px rgba(27,58,107,0.12)",
        blue: "0 4px 16px rgba(27,58,107,0.25)",
        "blue-lg": "0 6px 24px rgba(27,58,107,0.35)",
        gold: "0 4px 16px rgba(184,150,90,0.25)",
        "gold-lg": "0 6px 24px rgba(184,150,90,0.35)",
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
        "butterfly-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)", opacity: "0.04" },
          "50%":      { transform: "translateY(-12px) rotate(2deg)", opacity: "0.07" },
        },
      },
      animation: {
        "accordion-down":   "accordion-down 0.2s ease-out",
        "accordion-up":     "accordion-up 0.2s ease-out",
        "fade-in":          "fade-in 0.5s ease both",
        "fade-up":          "fade-up 0.7s ease both",
        float:              "float 6s ease-in-out infinite",
        "butterfly-float":  "butterfly-float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
