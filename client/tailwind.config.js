/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main:{
          bg: "#EEF0F4",
          input: "#F2F6FA",
          button:"#319DFF",
          textInput:"#7D8FA9",
          textMain:"#3B4758",
        }
      },
    },
  },
  plugins: [],
};
