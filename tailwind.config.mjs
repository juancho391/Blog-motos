import animations from "@midudev/tailwind-animations";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        nav: "#939292e4",
        redes: "#00000080",
      },
      margin: {
        medioy: "50%",
      },
    },
  },
  plugins: [animations],
};
