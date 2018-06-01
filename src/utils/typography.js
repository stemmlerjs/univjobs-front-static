import Typography from "typography";

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Roboto",
    "sans-serif",
  ],
  bodyFontFamily: ["Roboto", "sans-serif"],
});

typography.injectStyles()

export default typography;