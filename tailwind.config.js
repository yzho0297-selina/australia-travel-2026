/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E8",
        ink: "#1F2933",
        navy: "#183153",
        mist: "#D9EAF7",
        skysoft: "#BFD9EA",
        clay: "#C6815D"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(31, 41, 51, 0.12)",
        lift: "0 22px 70px rgba(24, 49, 83, 0.16)"
      }
    }
  },
  plugins: []
};
