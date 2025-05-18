/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Button': '#581b28',
      },
      fontFamily: {
        'fancy': ['Berkshire Swash', 'serif'],
        'myfont': ["Modern Antiqua", 'serif'],
      },
      backgroundImage: {
        'og': "url('/src/assets/Orderpage.png')",
        'bg': "url('/src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
}
