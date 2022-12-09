/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '0',
      'sidebar-breakpoint': '62rem',
      showSidebar: '960px',
      ...defaultTheme.screens
    },

    extend: {
      colors: {
        'neutral-950': '#0a0a0a',
        'gray-150': '#ECEEF1',
        'theme-blue': '#007FFF',
        'accent-main': '#FF0000',
        'accent-main-hover': '#BB0000',
        'neutral-150': '#EDEDED'
      },
      width: {
        34: '8.5rem',
        54: '13.5rem',
        84: '21rem',
        sidebar: '28%',
        sidebar_xs: '30%'
      },
      minWidth: {
        4: '24rem',
        xs: '18rem',
        sm: '20rem'
      },
      minHeight: {
        post: '20rem'
      },
      height: {
        34: '8.5rem',
        0.75: '.875rem',
        6.5: '1.625rem',
        22: '5.5rem',
        104: '26rem'
      },
      fontSize: {
        custom_base: '1.0625rem',
        card_title: '1.1875rem',
        sidebar_card_title: '0.9375rem',
        '1.5xl': '1.275rem',
        '2.5xl': '1.6875rem'
      },
      maxWidth: {
        72: '18rem',
        xxs: '18.5rem',
        '2.5xl': '45rem',
        '6.5xl': '76rem',
        page: '81.5rem',
        sidebar: '21.5rem'
      },
      margin: {
        6.5: '1.75rem'
      },
      boxShadow: {
        dropdown: '0 35px 60px -15px rgba(0, 0, 0 / 0.3)'
      },
      scale: {
        103: '1.03'
      }
    }
  },
  plugins: []
}
