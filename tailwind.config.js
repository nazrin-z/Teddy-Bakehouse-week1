/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'edeae4': '#edeae4',
      '2c1c25': '#2c1c25',
      'eba1a2': '#eba1a2',
      'a78577': '#a78577',
      'ffcbcd': '#ffcbcd',
      'dcd3e8': '#dcd3e8',
      'ffe4fb': '#ffe4fb',
      'ffe3f0': '#ffe3f0',
      'd7d3d2':'#d7d3d2',
      'ffffff':'#ffffff',
      'ffe5ec':'#ffe5ec',
      'e7d7d9':'#e7d7d9',},
    extend: { 
      fontFamily:{
'fancy': ['"Lugrasimo", cursive'],
'myfont': ['MyFont', 'sans-serif'],
},

backgroundImage:{
  'Bg': "url('./src/assets/Bg.jpg')",
  'delivery':"url('src/assets/delivery.jpg')"
}
    },
  },
  plugins: [],
}
