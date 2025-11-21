/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        smartan: {
          orange: '#f7961d',
          blue: '#0076c6',
          pink: '#ec297b',
          teal: '#1b9a72',
          gray: '#a3a6ab',
          navy: '#08263f',
          purple: '#90278e',
          red: '#db4d26',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #f7961d, 0 0 10px #f7961d' },
          '100%': { boxShadow: '0 0 20px #f7961d, 0 0 30px #f7961d' },
        }
      }
    },
  },
  plugins: [],
}