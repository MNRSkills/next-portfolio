module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {
      backgroundImage: {
        homePage:
          "url('https://res.cloudinary.com/mackr/image/upload/v1651111625/fyqwlmj88pqip9qayqzs.png')",
      },
      colors: {
        react: "#61DAFB",
        node: "#73AA63",
        markDown: "#46A2E3",
      },
    },
  },
  plugins: [],
};
