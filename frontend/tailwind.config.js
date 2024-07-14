/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: '#f3f4f6',
      },
      fontFamily: {
        roboto: 'Roboto',
      },
    },
  },
  plugins: [],
};
