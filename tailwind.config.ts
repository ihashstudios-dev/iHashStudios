import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#245BFF",
          purple: "#7628E8",
          navy: "#0D132A",
          text: "#141B33",
          bg: "#F8FAFF",
          surface: "#FFFFFF",
          muted: "#5B647E",
          subtle: "#8B95B5",
          border: "#E2E8F0",
          cardBorder: "rgba(226, 232, 240, 0.8)",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #245BFF 0%, #7628E8 100%)",
        "gradient-brand-subtle": "linear-gradient(135deg, rgba(36, 91, 255, 0.06) 0%, rgba(118, 40, 232, 0.06) 100%)",
        "gradient-brand-hover": "linear-gradient(135deg, #1C4CE0 0%, #651FC9 100%)",
        "gradient-navy": "linear-gradient(180deg, #0D132A 0%, #151C3B 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        "subtle": "0 1px 3px 0 rgba(13, 19, 42, 0.04), 0 1px 2px -1px rgba(13, 19, 42, 0.02)",
        "card": "0 10px 30px -10px rgba(13, 19, 42, 0.05), 0 2px 6px -2px rgba(13, 19, 42, 0.02)",
        "card-hover": "0 20px 40px -15px rgba(36, 91, 255, 0.12), 0 4px 12px -2px rgba(13, 19, 42, 0.04)",
        "glow": "0 0 40px -10px rgba(36, 91, 255, 0.25)",
        "glow-purple": "0 0 40px -10px rgba(118, 40, 232, 0.25)",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
