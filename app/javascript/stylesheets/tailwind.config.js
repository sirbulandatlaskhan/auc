module.exports = {
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: "#1A3050",
      'blue-hover': '#293F5E',
      'blue-child': '#1B9AD6',
      'light-blue': '#1579A912',
      'light-blue-background': 'rgba(21, 121, 169, 0.07)',
      'border': '#C4C4C4',
      lightBlue: '#293F5E',
      white: '#FFFFFF',
      darkGrey: '#5C6B80'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
