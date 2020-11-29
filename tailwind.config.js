module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "accent-1": "#264653",
      "greenish-1": "#2a9d8f",
      "orangish-1": "#e76f51",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      "greenish-1": "#2a9d8f",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      "orangish-1": "#e9c46a",
      "orangish-2": "#f4a261",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
