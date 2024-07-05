/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'half-gradient': 'linear-gradient(to bottom, #F5F5F5 65%, white 30%)',
        'half-gradient-2': 'linear-gradient(to bottom, #F5F5F5 50%, white 50%)',
      }
    },
  },
  plugins: [],
}

