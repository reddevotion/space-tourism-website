/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#0B0D17",
          2: "#D0D6F9",
          3: "#FFFFFF",
          4: "#181B25",
          5: "#0B0D17",

        }
      },
      fontFamily: {
        ballefair: ["var(--font-ballefair)", ...fontFamily.sans],
        barlow: "var(--font-barlow)",
        barlowcon: "var(--font-barlow-con)",
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply px-6 py-6 max-w-full md:px-10 md:py-[8rem] mx-auto lg:py-[128px]":
            {},
        },
        ".h1": {
          color: "#FFFFFF", 
          fontSize: "clamp(80px, 10vw, 144px)",
          lineHeight: "1.15em",
          fontWeight: "400", 
          letterSpacing: "0px",
        },
        ".h2": {
          color: "#D0D6F9",
          fontSize: "clamp(16px, 3vw, 28px)",
          lineHeight: "auto",
          fontWeight: "400", 
          letterSpacing: "clamp(0.15em, 0.1vh, 4px)",
        },
        ".h3": {
          "@apply text-color-1 tracking-normal text-[18px] font-normal":
            {},
        },
        ".main": {
          "@apply relative h-[100vh]  pt-[5.25rem] md:pt-[96px] lg:pt-[128px]":
            {},
        },
        ".section": {
          "@apply relative container h-full z-[2] grow flex flex-col items-center lg:items-end text-center max-w-[1220px]":
            {},
        },
        ".planet": {
          color: "#FFFFFF",
          fontSize: "clamp(56px, 8vw, 96px)",
          lineHeight: "1.15em",
          fontWeight: "400", 
          letterSpacing: "0px",
        },
        ".h4": {
          color: "#FFFFFF",
          fontSize: "clamp(24px, 5vw, 56px)",
          letterSpacing: "0px",
          lineHeight: "1em",
          fontWeight: "400",
        },
        ".h5": {
          color: "rgba(255,255,255,0.5)",
          fontSize: "clamp(18px, 3vw, 32px)",
          letterSpacing: "0px",
          lineHeight: "1em",
          fontWeight: "400",
        },
      })
    })
  ],
}