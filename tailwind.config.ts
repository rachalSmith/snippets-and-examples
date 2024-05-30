import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: [
        "3.75rem",
        {
          lineHeight: "1.3",
          letterSpacing: "-0.02em",
        },
      ],
      h2: [
        "3rem",
        {
          lineHeight: "1.3",
          letterSpacing: "-0.02em",
        },
      ],
      h3: [
        "2.25rem",
        {
          lineHeight: "1.3",
          letterSpacing: "-0.02em",
        },
      ],
      h4: [
        "1.875rem",
        {
          lineHeight: "1.4",
          letterSpacing: "-0.01em",
        },
      ],
      h5: [
        "1.5rem",
        {
          lineHeight: "1.4",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.5",
          letterSpacing: "0em",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.6",
          letterSpacing: "0em",
        },
      ],
      md: [
        "1rem",
        {
          lineHeight: "1.6",
          letterSpacing: "0em",
        },
      ],
      sm: [
        ".875rem",
        {
          lineHeight: "1.6",
          letterSpacing: "0em",
        },
      ],
      xs: [
        ".75rem",
        {
          lineHeight: "1.6",
          letterSpacing: "0em",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
