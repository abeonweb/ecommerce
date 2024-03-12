import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '428px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        'order': '-2px 32px 48px -30px rgba(18, 18, 18, 0.5)',
      },
      screens: {
        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        lato: ["var(--font-lato)"],
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightgray: {
          949: "rgba(24, 25, 31, 0.15)",
          950: "rgba(24, 25, 31, 0.25)",
          951: "rgba(24, 25, 31, 0.55)",
          952: "rgba(24, 25, 31, 0.35)",
          953: "rgba(108, 114, 117, 1)",
          954: "rgba(99, 115, 129, 1)",
          955: "rgba(96, 95, 95, 0.55)",
          956: "rgba(203, 203, 203, 1)",
          957: "rgba(196, 196, 196, 1)",
          958: "rgba(123, 123, 123, 1)",
        },
        stockgreen: {
          950: "rgba(45, 192, 113, 1)",
          951: "rgba(69, 178, 107, 1)",
          952: "rgba(56, 203, 137, 1)",
        },
        primaryblack: {
          950: "rgba(37, 43, 66, 1)",
          951: "rgba(33, 43, 54, 1)",
          955: "rgba(24, 25, 31, 1)",
        },
        primarypurple: { 950: "rgba(94, 96, 206, 1)", 951:"rgba(94, 96, 206, 0.25)" },
        primaryorange: { 950: "rgba(254, 143, 1, 1)" },
        primaryyellow: { 950: "rgba(255, 200, 49, 1)" },
        primaryred: { 950: "rgba(255, 0, 0, 1)" },
        offwhite: {
          950: "rgba(236, 236, 236, 1)",
          951: "rgba(243, 245, 247, 1)",
          952: "rgba(232, 236, 239, 1)",
        },
        productblue:{1:"rgba(35, 166, 240, 1)"}
      },
    },
  },
  plugins: [],
};
export default config;