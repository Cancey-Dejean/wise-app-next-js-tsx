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
        title: ["Alfa Slab One", "cursive"],
      },
      colors: {
        "color-body": "rgb(69, 71, 69)",
        "color-content-primary": "#0e0f0c",
        "color-content-secondary": "#454745",
        "color-primary": "#9fe870",
        "color-interactive-accent-hover": "#80e142",
        "color-interactive-primary": "#163300",
        "color-green-hover": "#0d1f00",
        "color-neutral": "rgba(22,51,0,.078)",
        "color-neutral-hover": "rgba(22,51,0,.078)",
      },
      transitionDuration: {
        15: ".15s",
      },
      dropShadow: {
        // "text-shadow": "rgba(10, 5, 23, 0.12) 0px 4px 8px",
      },
      backgroundImage: {
        "nav-gradient":
          "linear-gradient(rgba(209, 209, 209, 0.15) 0%, rgba(102, 102, 102, 0.05) 100%)",
        "text-gradient":
          "linear-gradient(354deg, rgb(218, 143, 250) 0%, rgb(255, 255, 255) 100%)",
        "button-gradient":
          "linear-gradient(rgb(125, 102, 245) 0%, rgb(74, 41, 194) 100%)",
        "top-image-gradient":
          "linear-gradient(345deg, rgb(213, 61, 255) 0%, rgb(208, 57, 254) 16.5598%, rgb(194, 49, 252) 30.8455%, rgb(173, 43, 247) 43.7668%, rgb(150, 39, 241) 56.2332%, rgb(122, 39, 231) 69.1545%, rgb(102, 41, 224) 83.4402%, rgb(94, 43, 222) 100%)",
        "top-image-gradient-2":
          "linear-gradient(rgb(38, 31, 73) 0%, rgb(10, 5, 23) 100%);",
        "top-image": "url('/images/top-shape.svg')",
        "highlight-left": "url('/images/highlight-left.svg')",
        "highlight-right": "url('/images/highlight-right.svg')",
      },
      boxShadow: {
        nav: "rgba(0, 0, 0, 0.024) 0px 0.80621px 2.41863px -0.3125px, rgba(0, 0, 0, 0.024) 0px 1.91086px 5.73258px -0.625px, rgba(0, 0, 0, 0.024) 0px 3.48561px 10.4568px -0.9375px, rgba(0, 0, 0, 0.024) 0px 5.79481px 17.3844px -1.25px, rgba(0, 0, 0, 0.024) 0px 9.35815px 28.0745px -1.5625px, rgba(0, 0, 0, 0.024) 0px 15.3184px 45.9551px -1.875px, rgba(0, 0, 0, 0.024) 0px 26.3772px 79.1316px -2.1875px, rgba(0, 0, 0, 0.024) 0px 48px 144px -2.5px;",
      },
    },
  },
  plugins: [],
}
