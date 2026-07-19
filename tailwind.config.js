/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#0A0A0A",
        bgCard: "#161616",
        textHeading: "#FFFFFF",
        textBody: "#D1D5DB",
        accentRed: "#E63946",
        accentBlue: "#0077B6",
        borderLight: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
