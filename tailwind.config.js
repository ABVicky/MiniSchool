export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A73E8",
        accent: "#FFB800",
        background: "#F3F8FF"
      },
      boxShadow: {
        soft: "8px 8px 20px rgba(26, 115, 232, 0.08), -8px -8px 20px rgba(255, 255, 255, 0.7)",
        glow: "0 8px 30px rgba(26,115,232,0.25)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};