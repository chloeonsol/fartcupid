/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          valentineRed: "#ff4d6d",
          valentinePink: "#ff758f",
          softWhite: "#fff5f5",
        },
      },
    },
    plugins: [],
  };
  