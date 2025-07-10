import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-light': '#F7E98E',
        'gold-dark': '#B8860B',
      },
      animation: {
        'gradient-y': 'gradient-y 15s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': { 
            'background-size': '400% 400%',
            'background-position': 'center top' 
          },
          '50%': { 
            'background-size': '200% 200%', 
            'background-position': 'center center' 
          },
        },
        'glow': {
          'from': { 
            'text-shadow': '0 0 20px #D4AF37, 0 0 30px #D4AF37, 0 0 40px #D4AF37' 
          },
          'to': { 
            'text-shadow': '0 0 30px #D4AF37, 0 0 40px #D4AF37, 0 0 50px #D4AF37' 
          },
        }
      }
    },
  },
  plugins: [],
}

export default config