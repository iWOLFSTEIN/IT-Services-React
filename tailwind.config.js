/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#71C9CE",
        surface: "#E3FDFD",
      },
      fontFamily: {
        fredoka: ["Fredoka"],
      },
    },
  },
  plugins: [],
};
