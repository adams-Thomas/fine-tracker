/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gainsboro': '#dcdcdc',
        'dark-cyan': '#2d93ad',
        'red': '#ef2d2f',
        'black-cyan': '#1e2d2f',
        'pearl-cyan': '#041f1e'
      },
      boxShadow: {
        '3xl': '0 25px 50px -12px #2d94ad',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn': {
          backgroundColor: 'transparent',
          border: 'solid 0.125rem #2d93ad',
          borderRadius: '0.5rem',
          minWidth: '2.625rem',
          minHeight: '2.625rem',
          color: '#2d93ad',

          '&:hover': {
            backgroundColor: '#2d93ad',
            color: '#1e2d2f'
          },
        },
        '.btn-solid': {
          backgroundColor: '#2d93ad',
          color: '#1e2d2f',

          '&:hover': {
            backgroundColor: 'transparent',
            color: '#dcdcdc'
          }
        },
        '.btn-no-border': {
          border: 'none'
        },
        'h1': {
          fontWeight: '700',
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
          color: '#dcdcdc'
        },
        'h2': {
          fontWeight: '500',
          fontSize: '1.5rem',
          color: '#dcdcdc',
        },
        'h3': {
          color: '#dcdcdc',
          fontWeight: 700
        },
        '.ellipsis': {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        '.inline-input': {
          color: '#dcdcdc',
          background: 'transparent',
          borderBottom: '1px solid #2d93ad',

          '&_header': {
            fontWeight: '700',
            fontSize: '2.25rem',
          },

          '&:focus-visible': {
            outline: 'none'
          }
        }
      })
    })
  ],
}
