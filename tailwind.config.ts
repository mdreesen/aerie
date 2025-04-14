import type { Config } from "tailwindcss";

export default {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
        center: true,
        padding: "2rem",
        screens: {
            "2xl": "1400px"
        }
    },
    extend: {
        colors: {
            fill: {
                1: "rgba(255, 255, 255, 0.10)"
            },
            bankGradient: "#0179FE"
        },
        indigo: {
            500: "#6172FE"
        },
        success: {
            25: "#F6FEF9",
            50: "#ECFDF3",
            100: "#D1FADF",
            600: "#039855",
            700: "#027A48",
            900: "#054F31"
        }
    }
  },
  } satisfies Config;
