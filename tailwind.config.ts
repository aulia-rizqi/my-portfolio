import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    // Safelist all color combinations we use
    "bg-blue-100",
    "text-blue-600",
    "bg-indigo-100",
    "text-indigo-600",
    "bg-purple-100",
    "text-purple-600",
    "bg-green-100",
    "text-green-600",
    "bg-orange-100",
    "text-orange-600",
    "bg-pink-100",
    "text-pink-600",
    "bg-rose-100",
    "text-rose-600",
    "bg-teal-100",
    "text-teal-600",
    "bg-yellow-100",
    "text-yellow-600",
    "bg-red-100",
    "text-red-600",
    "bg-cyan-100",
    "text-cyan-600",
    "bg-emerald-100",
    "text-emerald-600",
    "bg-violet-100",
    "text-violet-600",
    "bg-fuchsia-100",
    "text-fuchsia-600",
    "bg-lime-100",
    "text-lime-600",
    "bg-amber-100",
    "text-amber-600",
  ],
}

export default config
