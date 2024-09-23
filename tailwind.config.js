/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          primary: "#2D68F8",
          secondary: "#445275",
          tertiary: "#6677A2",
          stroke: "#DFE4EA",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        gray: {
          light: "#ABB1B8",
          light2: "#CED4DA",
          light3: "#DEE2E6",
          light4: "#E5E7EB",
          light5: "#F3F4F6",
          light6: "#F9FAFB",
        },
        blue: {
          dark: "#1C3FB7",
          light: "#5475E5",
          light2: "#8099EC",
          light3: "#ADBCF2",
          light4: "#C3CEF6",
          light5: "#E1E8FF",
          light6: "#EFF2FF",
          light7: "#F4F6FF",
        },
        green: {
          DEFAULT: "#22AD5C",
        },
        red: {
          DEFAULT: "#F23030",
          dark: "#E10E0E",
          light: "#F56060",
          light2: "#F89090",
          light3: "#FBC0C0",
          light4: "#FDD8D8",
          light5: "#FEEBEB",
          light6: "#FEF3F3",
        },
      },
    },
  },
  plugins: [],
};
