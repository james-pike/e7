/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
import flowbitePlugin from 'flowbite/plugin';
const plugin = require('tailwindcss/plugin');



module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-qwik/**/*.{cjs,mjs}",
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}"
  ],  
  theme: {
    extend: {
      spacing: {
        '0.75': '0.1875rem', // 3px (since 1rem = 16px, 3/16 = 0.1875rem)
      },
      animation: {
        'pulse-glow': 'pulseGlow 0.6s ease-out',
      },

      
        borderWidth: {
          '1.5': '1.5px',
        },

      '4.5xl': ['2.625rem', { lineHeight: '2.75rem' }],

      screens: {
        xs: '480px',
      },
          
          colors: {
                   primary: {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fbd5b0',
          300: '#f8b87d',
          400: '#f59347',
          500: '#f2751f',
          600: '#e35d14',
          700: '#bc4513',
          800: '#963817',
          900: '#7a3018',
          950: '#42160a',
        },
        secondary: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b1a3',
          400: '#7a8c7a',
          500: '#5f715f',
          600: '#4a5a4a',
          700: '#3d483d',
          800: '#333b33',
          900: '#2c322c',
          950: '#161a16',
        },
        clay: {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fbd5b0',
          300: '#f8b87d',
          400: '#f59347',
          500: '#f2751f',
          600: '#e35d14',
          700: '#bc4513',
          800: '#963817',
          900: '#7a3018',
          950: '#42160a',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b1a3',
          400: '#7a8c7a',
          500: '#5f715f',
          600: '#4a5a4a',
          700: '#3d483d',
          800: '#333b33',
          900: '#2c322c',
          950: '#161a16',
        },
        earth: {
          50: '#faf6f1',
          100: '#f2e8d9',
          200: '#e4d0b3',
          300: '#d1b285',
          400: '#bb8f5a',
          500: '#a67c45',
          600: '#8f6639',
          700: '#745131',
          800: '#5f4330',
          900: '#4f392a',
          950: '#2a1e15',
        },
            gray: {
              850: '#18202f', 
              750: '#2b3544',
              950: '#030712',
              920: "#0e131f",
              840: "#192231",
              80: "#f4f7fa",
              160: "#e8edf4",
              250: "#d6dee8",
               // A shade between gray-800 (#1e293b) and gray-900 (#0f172a)
            },
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            tertiary: {
              DEFAULT: 'hsl(var(--tertiary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            alert: {
              DEFAULT: 'hsl(var(--alert))',
              foreground: 'hsl(var(--alert-foreground))',
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))',
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))',
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))',
            },
          },


          borderRadius: {
            base: 'var(--border-radius)',
            sm: 'calc(var(--border-radius) + 0.125rem)',
            DEFAULT: 'calc(var(--border-radius) + 0.25rem)',
            md: 'calc(var(--border-radius) + 0.375rem)',
            lg: 'calc(var(--border-radius) + 0.5rem)',
            xl: 'calc(var(--border-radius) + 0.75rem)',
            '2xl': 'calc(var(--border-radius) + 1rem)',
            '3xl': 'calc(var(--border-radius) + 1.5rem)',
          },
          borderWidth: {
            base: 'var(--border-width)',
            DEFAULT: 'calc(var(--border-width) + 1px)',
            2: 'calc(var(--border-width) + 2px)',
            4: 'calc(var(--border-width) + 4px)',
            8: 'calc(var(--border-width) + 8px)',
          },
          boxShadow: {
            base: 'var(--shadow-base)',
            sm: 'var(--shadow-sm)',
            DEFAULT: 'var(--shadow)',
            md: 'var(--shadow-md)',
            lg: 'var(--shadow-lg)',
            xl: 'var(--shadow-xl)',
            '2xl': 'var(--shadow-2xl)',
            inner: 'var(--shadow-inner)',
          },
          strokeWidth: {
            0: '0',
            base: 'var(--stroke-width)',
            1: 'calc(var(--stroke-width) + 1px)',
            2: 'calc(var(--stroke-width) + 2px)',
          },


      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '4.5xl': ['2.625rem', { lineHeight: '2.75rem' }],
      },
      animation: {
        'from-left': 'slideFromLeft 0.2s 1',
        'from-right': 'slideFromRight 0.2s 1',
        'accordion-up': 'collapsible-up 0.2s ease-out 0s 1 normal forwards',
        'accordion-down': 'collapsible-down 0.2s ease-out 0s 1 normal forwards',
        'fade-up': 'fadeUp 0.5s ease-in forwards',
        shimmer: 'shimmer 2.5s linear infinite',

      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulseGlow: {
          '0%': {
            boxShadow: '0 0 0px hsl(var(--color-primary) / 0)',
          },
          '50%': {
            boxShadow: '0 0 20px hsl(var(--color-primary) / 0.6)',
          },
          '100%': {
            boxShadow: '0 0 0px hsl(var(--color-primary) / 0)',
          },
        },
        fadeUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--qwikui-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--qwikui-collapsible-content-height)' },
          to: { height: '0' },
        },
    },

    transitionTimingFunction: {
      step: 'cubic-bezier(0.6, 0.6, 0, 1)',
      jumpy: 'cubic-bezier(0.87, 0, 0.13, 1)',
    },
  },
  },
  plugins: [require("@tailwindcss/typography"),
    require('tailwindcss-animate'),
    require('tailwindcss-motion'),
    require('tailwindcss-intersect'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.press': {
          transform: 'var(--transform-press)',
        },
      });
    }),
     [flowbitePlugin]],
     
  darkMode: "class",
};
