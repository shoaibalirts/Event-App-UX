/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Scan all HTML files in the root
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Add paths for your framework files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
