// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-purple': '#3e0bec'
      },
      keyframes: {
        shrink: {
          '0%': { width: '16.66%' },
          '100%': { width: '5%' }
        },
        grow: {
          '0%': { width: '5%' },
          '100%': { width: '16.66%' }
        }
      },
      animation: {
        shrink: 'shrink 0.5s ease-in-out',
        grow: 'grow 0.5s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}