/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(farthest-side at 0% 0%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'poetsen-one': ['"Poetsen One"', 'cursive', 'sans-serif'],
        'sofia-condensed': ['"Sofia Sans Condensed"', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto-fill-w-80': 'repeat(auto-fill, minmax(20rem, auto))',
      },
      colors: {
        'atlantis': {
          '50': '#f7fbea',
          '100': '#eaf5d2',
          '200': '#d8ebab',
          '300': '#bcdd79',
          '400': '#9dc946',
          '500': '#83b131',
          '600': '#668d23',
          '700': '#4e6c1f',
          '800': '#40561e',
          '900': '#374a1d',
          '950': '#1b280b',
          '950-a0.8': 'rgba(27, 40, 11, 0.8)',
        },
        'parchment': {
          '50': '#f9f7ed',
          '100': '#f0ead2',
          '200': '#e2d4a6',
          '300': '#d1b773',
          '400': '#c39d4c',
          '500': '#b38a3f',
          '600': '#9a6d34',
          '700': '#7c522c',
          '800': '#68442b',
          '900': '#5a3a29',
          '950': '#341e14',
        },
      },
    },
  },
  plugins: [],
}
