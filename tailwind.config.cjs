/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      container:{
        center: true,
        screens:{
          xs: '100%',
          md: '48rem',
          lg: '64rem',
          xl: '70rem',
          '2xl': '80rem'
        }
      },
      screens:{
        'xs': '25rem',
        'sm': '40rem',
        'md': '48rem',
        'lg': '64rem',
        'xl': '80rem',
        '2xl': '96rem'
      },
      fontFamily: {
        'agencyfb': "Agency FB"
      },
    },
  },
  plugins: [],
}
