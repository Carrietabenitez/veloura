/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBFAF8',
        mist: '#F4F1FA',
        lavender: {
          50: '#F8F6FC',
          100: '#EEE8F9',
          200: '#DCD0F1',
          300: '#C3AFE6',
          400: '#A688D6',
          500: '#8A69C2',
          600: '#6E4EA3',
          700: '#573D82',
          800: '#3E2C5E',
        },
        ink: '#211933',
        stone: '#6B6478',
        leaf: {
          400: '#6BB855',
          500: '#4F9D3A',
          600: '#3F7D2E',
          700: '#326523',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(87, 61, 130, 0.18)',
        card: '0 8px 30px -8px rgba(87, 61, 130, 0.12)',
        glow: '0 0 60px -10px rgba(138, 105, 194, 0.35)',
      },
      backgroundImage: {
        'lavender-radial': 'radial-gradient(circle at 30% 20%, #F8F6FC 0%, #EEE8F9 45%, #F4F1FA 100%)',
      },
    },
  },
  plugins: [],
  
}

