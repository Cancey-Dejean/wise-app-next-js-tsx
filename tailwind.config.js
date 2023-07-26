/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        title: ["Wise Sans", "cursive"],
      },
      colors: {
        "color-body": "rgb(69, 71, 69)",
        "color-content-primary": "#0e0f0c",
        "color-content-secondary": "#454745",
        "color-interactive-accent": "#9fe870",
        "color-interactive-accent-hover": "#80e142",
        "color-interactive-primary": "#163300",
        "color-light-grey": "#edefeb",
        "color-content-link": "#163300",
        "color-green-hover": "#0d1f00",
        "color-neutral": "rgba(22,51,0,.078)",
        "color-neutral-hover": "rgba(22,51,0,.078)",
        "color-border-neutral": "rgba(14,15,12,.122)",
        "color-interactive-secondary-hover": "#6c6c6b",
      },
      transitionDuration: {
        15: ".15s",
      },
      dropShadow: {},
      backgroundImage: {},
      boxShadow: {
        "card-shadow": "2px 2px 19px 4px rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
}
