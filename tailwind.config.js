/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        translateUp: {
          '0%': { transform: 'translateY(400px)' },
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-400px)' },
        },
        translateDown: {
          '0%': { transform: 'translateY(-400px)' },
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(400px)' },
        },
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
      animation: {
        'translateUp': 'translateUp 8s linear infinite',
        'translateDown': 'translateDown 8s linear infinite',
        'text': 'text 5s ease infinite',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        "primary": "#00c4f4", //Light Blue
        "secondary": "#3b82f6", //Blue 500
        "hover_color": "#5f30e2;", // when hover over a button
        "secondary_hover": "#2563eb", //Blue 600
        "menu_gray": "#867e8d", //Menu Item
        "light": "white",
        "dark": "black",
        "starColor": "#e38b01", //Rating's color
        "learn_more": "#e38b01", //Learn More Button
      },
      fontFamily: {
        Arial: ["Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
} 