/** @type {import('tailwindcss').Config} */

// .theme-custom {
//   --gradient: #1D2B64;
//   --background: 242 97.75% 98.5%;
//   --foreground: 242 5.5% 1%;

//   --muted: 242 5.5% 92.5%;
//   --muted-foreground: 242 2.75% 42.5%;

//   --popover: 242 46% 92.5%;
//   --popover-foreground: 242 5.5% 1.25%;

//   --card: 242 46% 92.5%;
//   --card-foreground: 242 5.5% 1.25%;

//   --border: 242 10.5% 90%;
//   --input: 242 10.5% 90%;

//   --primary: 242 55% 25%;
//   --primary-foreground: 242 1.1% 92.5%;

//   --secondary: 242 2.75% 96.25%;
//   --secondary-foreground: 242 4.300000000000001% 12.5%;

//   --accent: 242 2.75% 96.25%;
//   --accent-foreground: 242 4.300000000000001% 12.5%;

//   --destructive: 0 84.2% 60.2%;
//   --destructive-foreground: 0 0% 98%;

//   --ring: 242 55% 25%;

//   --radius: 0.5rem;
// }
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "theme": {
          gradient: "var(--gradient)",
          background: "hsl(242 97.75% 98.5%)",
          foreground: "hsl(242 1.1% 92.5%)",
          muted: "var(--muted)",
          "muted-foreground": "var(--muted-foreground)",
          popover: "var(--popover)",
          "popover-foreground": "var(--popover-foreground)",
          card: "var(--card)",
          "card-foreground": "var(--card-foreground)",
          border: "var(--border)",
          input: "var(--input)",
          primary: "#1E1D40",
          "primary-foreground": "var(--primary-foreground)",
          secondary: "var(--secondary)",
          "secondary-foreground": "var(--secondary-foreground)",
          accent: "var(--accent)",
          "accent-foreground": "var(--accent-foreground)",
          destructive: "var(--destructive)",
          "destructive-foreground": "var(--destructive-foreground)",
          ring: "var(--ring)",
          radius: "var(--radius)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
