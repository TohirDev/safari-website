/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        muli: "Muli",
        secular: "Secular One",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateAreas: {
        wide: ["header header header", "aside main main", "aside main main"],

        slim: ["header", "aside", "main"],
      },
      gridTemplateColumns: {
        layout: "24rem 1fr 2rem",
      },
      gridTemplateRows: {
        layout: "6rem 3rem 1fr auto",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
  variants: {
    gridTemplateAreas: ["responsive"],
  },
};
