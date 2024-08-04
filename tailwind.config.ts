import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          0: "#5932EA"
        },
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB'
        }
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: { shimmer: 'shimmer 4s 1' },
      backgroundImage: {
        'gradient-shimmer': 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent)'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
