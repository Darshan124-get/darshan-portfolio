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
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        primary: "#FF6B00",
        secondary: "#111111",
        accent: {
          orange: "#FF6B00",
          yellow: "#FFD84D",
          green: "#7EE081",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glow-orange": "radial-gradient(circle, rgba(255,107,0,0.15) 0%, rgba(10,10,10,0) 70%)",
      },
      animation: {
        "scroll-infinite": "scroll 20s linear infinite",
        "slow-bounce": "bounce 3s infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
