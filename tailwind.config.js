/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12313f",
        slate: "#405565",
        paper: "#fbfaf7",
        ivory: "#f5f2eb",
        moss: "#2f6f5e",
        gold: "#c58a2b",
        rust: "#9b4d32",
        line: "#d9ded8",
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "serif"],
        body: ["Inter", "Aptos", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(18, 49, 63, 0.08)",
      },
    },
  },
  plugins: [],
};
