/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        'navy-dark': '#0a192f',
        'navy-light': '#112240',
        'navy-lighter': '#1a365d',
        'slate': '#8892b0',
        'slate-light': '#a8b2d1',
        'white': '#e6f1ff',
        
        // Light mode colors
        'light-bg': '#f0f9ff',
        'light-secondary': '#e0f2fe',
        'light-blue': '#0ea5e9',
        'light-blue-dark': '#0284c7',
        
        // Accent colors
        'accent-cyan': '#64ffda',
        'accent-blue': '#57cbff',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { 
            boxShadow: '0 0 5px #64ffda, 0 0 10px #64ffda, 0 0 15px #64ffda',
          },
          'to': { 
            boxShadow: '0 0 10px #64ffda, 0 0 20px #64ffda, 0 0 30px #64ffda',
          },
        },
        slideUp: {
          'from': { transform: 'translateY(100px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          'from': { transform: 'translateY(-100px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
}
