const { colors } = require('./tailwind')
module.exports = {
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.vue",
  ],
  darkMode: false,
  theme: {
    screens: {
      'sm': '576px',
      'md': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      ...colors,
      blue: "#1A3050",
      'blue-hover': '#293F5E',
      'blue-child': '#1B9AD6',
      'light-blue': '#1579A912',
      'light-blue-background': 'rgba(21, 121, 169, 0.07)',
      'border': '#C4C4C4',
      lightBlue: '#293F5E',
      white: '#FFFFFF',
      darkGrey: '#5C6B80',
      lightGreen: '#C6F6D5',
      darkGreen: '#3A8D63',
      darkRed: '#DF0000',
      lightRed: 'rgba(223, 0, 0, 0.1)',
    },
    extend: {
      backgroundImage: theme => ({
        'steps-1': 'url("../../assets/images/steps-1.svg")',
        'steps-2': 'url("../../assets/images/steps-2.svg")',
        'steps-3': 'url("../../assets/images/steps-3.svg")',
        'offers': 'url("../../assets/images/offers.jpg")'
      }),
      spacing: {
        '92': '22rem',
        '100': '30rem',
        '18': '4.5rem',
        '4/7': '70%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
