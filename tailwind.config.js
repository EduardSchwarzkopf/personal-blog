module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#ff7000",
        "primary-light": "#ffe2cc",
        "hl-color": "#111111",
        "accents-1": "#fafafa",
        "accents-2": "#eaeaea",
        "accents-3": "#999999",
        "accents-4": "#888888",
        "accents-5": "#666666",
        "accents-6": "#444444",
        "accents-7": "#333333",
        "accents-8": "#111111",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
};
