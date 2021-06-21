/* eslint-disable */
/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

// let defaultConfig = require('tailwindcss/defaultConfig')()

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

let colors = {
    'transparent': 'transparent',
    'brand-blue': '#0070ba',
    'brand-footer': '#2e4d62',
    'brand-footer-dark': '#203d51',
    'brand-lightblue': '#46b4e5',
    'brand-darkblue': '#022e48',
    'brand-green': '#3cbc92',
    'brand-cyan': '#35cec8',
    'brand-cyan-dark': '#2fc2bc',
    'brand-violet': '#573cce',
    'brand-grey-darker': '#d8d8d8',
    'brand-grey': '#cccccc',
    'brand-grey-lightest': '#f9f9f9',
  
    'brand-discover': '#2364A5',
    'brand-discover-dark': '#194a89',
    'brand-discover-opacity-50': 'rgba(35, 100, 165, 0.5)',
    'brand-discover-grey': '#858585',
    'brand-discover-grey-transparent': 'rgba(133, 133, 133, 0.74)',
    'brand-customize': '#4a5897',
    'brand-legend-hover': '#eeeeee',
    'brand-legend-selected': '#4a90e2',
    'brand-scroll-bar': '#c0c0c0',
  
    'brand-lot-available': '#779e3c',
    'brand-lot-reserved': '#d78000',
    'brand-lot-sold': '#d35948',
    'brand-lot-model-home': '#4580c4',
    'brand-lot-inventory': '#945f9f',
    'brand-lot-future': '#828a8f',
  
    'white': '#ffffff',
    'white-transparent-20': 'rgba(255, 255, 255, 0.2)',
    'white-transparent-40': 'rgba(255, 255, 255, 0.4)',
  
    'black': '#22292f',
    'black-light': '#4a4a4a',
    'black-lightest': '#979797',
    'black-gery': '#515254',
    'black-transparent-10': 'rgba(0, 0, 0, 0.1)',
    'black-transparent-20': 'rgba(0, 0, 0, 0.2)',
    'black-transparent': 'rgba(0, 0, 0, 0.4)',
    'black-transparent-50': 'rgba(0, 0, 0, 0.4)',
    'black-transparent-60': 'rgba(0, 0, 0, 0.6)',
    'black-transparent-70': 'rgba(0, 0, 0, 0.7)',
    'black-opaque': 'rgba(0, 0, 0, 0.80)',
  
    'grey-darkest': '#3d4852',
    'grey-darker': '#606f7b',
    'grey-dark': '#8795a1',
    'grey': '#b8c2cc',
    'grey-light': '#dae1e7',
    'grey-lighter': '#f1f5f8',
    'grey-lightest': '#fafbfd',
    'grey-border': '#e8e8e8',
  
    'red-darkest': '#3b0d0c',
    'red-darker': '#621b18',
    'red-dark': '#cc1f1a',
    'red': '#e3342f',
    'red-light': '#ef5753',
    'red-lighter': '#f9acaa',
    'red-lightest': '#fcebea',
    'red-required': '#d0021b',
  
    'orange-darkest': '#462a16',
    'orange-darker': '#613b1f',
    'orange-dark': '#de751f',
    'orange': '#f6993f',
    'orange-light': '#faad63',
    'orange-lighter': '#fcd9b6',
    'orange-lightest': '#fff5eb',
  
    'yellow-darkest': '#453411',
    'yellow-darker': '#684f1d',
    'yellow-dark': '#f2d024',
    'yellow': '#ffed4a',
    'yellow-light': '#fff382',
    'yellow-lighter': '#fff9c2',
    'yellow-lightest': '#fcfbeb',
  
    'green-darkest': '#0f2f21',
    'green-darker': '#1a4731',
    'green-dark': '#1f9d55',
    'green': '#38c172',
    'green-light': '#51d88a',
    'green-lighter': '#a2f5bf',
    'green-lightest': '#e3fcec',
  
    'teal-darkest': '#0d3331',
    'teal-darker': '#20504f',
    'teal-dark': '#38a89d',
    'teal': '#4dc0b5',
    'teal-light': '#64d5ca',
    'teal-lighter': '#a0f0ed',
    'teal-lightest': '#e8fffe',
  
    'blue-darkest': '#12283a',
    'blue-darker': '#1c3d5a',
    'blue-dark': '#2779bd',
    'blue': '#3490dc',
    'blue-light': '#6cb2eb',
    'blue-lighter': '#bcdefa',
    'blue-lightest': '#e9eff6',
  
    'indigo-darkest': '#191e38',
    'indigo-darker': '#2f365f',
    'indigo-dark': '#5661b3',
    'indigo': '#6574cd',
    'indigo-light': '#7886d7',
    'indigo-lighter': '#b2b7ff',
    'indigo-lightest': '#e6e8ff',
  
    'purple-darkest': '#21183c',
    'purple-darker': '#382b5f',
    'purple-dark': '#794acf',
    'purple': '#9561e2',
    'purple-light': '#a779e9',
    'purple-lighter': '#d6bbfc',
    'purple-lightest': '#f3ebff',
  
    'pink-darkest': '#451225',
    'pink-darker': '#6f213f',
    'pink-dark': '#eb5286',
    'pink': '#f66d9b',
    'pink-light': '#fa7ea8',
    'pink-lighter': '#ffbbca',
    'pink-lightest': '#ffebef',
  
    'white-sign': '#fff5e5',
    'blue-sign': '#0070ba',
    'aqua-sign': '#35cec8',
    'green-sign': '#2bbd5b',
    'teal-sign': '#3e4a4f',
    'yellow-sign': '#ffcd0e',
    'orange-sign': '#fa781a',
    'red-sign': '#dd0d0f',
    'purple-sign': '#9b4bad',
    'grey-close': '#afafaf'
  }
  
  module.exports = {
  
    /*
    |-----------------------------------------------------------------------------
    | Colors                                  https://tailwindcss.com/docs/colors
    |-----------------------------------------------------------------------------
    |
    | The color palette defined above is also assigned to the "colors" key of
    | your Tailwind config. This makes it easy to access them in your CSS
    | using Tailwind's config helper. For example:
    |
    | .error { color: config('colors.red') }
    |
    */
  
    colors: colors,
  
  
    /*
    |-----------------------------------------------------------------------------
    | Screens                      https://tailwindcss.com/docs/responsive-design
    |-----------------------------------------------------------------------------
    |
    | Screens in Tailwind are translated to CSS media queries. They define the
    | responsive breakpoints for your project. By default Tailwind takes a
    | "mobile first" approach, where each screen size represents a minimum
    | viewport width. Feel free to have as few or as many screens as you
    | want, naming them in whatever way you'd prefer for your project.
    |
    | Tailwind also allows for more complex screen definitions, which can be
    | useful in certain situations. Be sure to see the full responsive
    | documentation for a complete list of options.
    |
    | Class name: .{screen}:{utility}
    |
    */
  
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Fonts                                    https://tailwindcss.com/docs/fonts
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your project's font stack, or font families.
    | Keep in mind that Tailwind doesn't actually load any fonts for you.
    | If you're using custom fonts you'll need to import them prior to
    | defining them here.
    |
    | By default we provide a native font stack that works remarkably well on
    | any device or OS you're using, since it just uses the default fonts
    | provided by the platform.
    |
    | Class name: .font-{name}
    |
    */
  
    fonts: {
      'sans': [
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ],
      'serif': [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif'
      ],
      'mono': [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Text sizes                         https://tailwindcss.com/docs/text-sizing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text sizes. Name these in whatever way
    | makes the most sense to you. We use size names by default, but
    | you're welcome to use a numeric scale or even something else
    | entirely.
    |
    | By default Tailwind uses the "rem" unit type for most measurements.
    | This allows you to set a root font size which all other sizes are
    | then based on. That said, you are free to use whatever units you
    | prefer, be it rems, ems, pixels or other.
    |
    | Class name: .text-{size}
    |
    */
  
    textSizes: {
      '4xs': '.5rem',   // 8px
      '3xs': '.625rem',   // 10px
      '2xs': '.6875rem',  // 11px
      'xs': '.75rem',     // 12px
      '2sm': '.8125rem',  // 13px
      'sm': '.875rem',    // 14px
      'md': '.9375rem',   // 15px
      'base': '1rem',     // 16px
      'lg': '1.125rem',   // 18px
      'xl': '1.25rem',    // 20px
      '2xl': '1.5rem',    // 24px
      '2xxl': '1.5625rem',// 25px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '4rem',      // 64px
      '6xxl': '4.5rem',   // 72px
      '7xl': '5.5rem',    // 88px
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Font weights                       https://tailwindcss.com/docs/font-weight
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your font weights. We've provided a list of
    | common font weight names with their respective numeric scale values
    | to get you started. It's unlikely that your project will require
    | all of these, so we recommend removing those you don't need.
    |
    | Class name: .font-{weight}
    |
    */
  
    fontWeights: {
      'hairline': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Leading (line height)              https://tailwindcss.com/docs/line-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your line height values, or as we call
    | them in Tailwind, leadings.
    |
    | Class name: .leading-{size}
    |
    */
  
    leading: {
      'none': 1,
      'tight': 1.25,
      'normal': 1.5,
      'loose': 2
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your letter spacing values, or as we call
    | them in Tailwind, tracking.
    |
    | Class name: .tracking-{size}
    |
    */
  
    tracking: {
      'tight': '-0.05em',
      'normal': '0',
      'small': '0.015em',
      'medium': '0.0175em',
      'semiwide': '0.02em',
      'wide': '0.05em'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Text colors                         https://tailwindcss.com/docs/text-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text colors. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Class name: .text-{color}
    |
    */
  
    textColors: colors,
  
    /*
    |-----------------------------------------------------------------------------
    | Background colors             https://tailwindcss.com/docs/background-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background colors. By default these use
    | the color palette we defined above, however you're welcome to set
    | these independently if that makes sense for your project.
    |
    | Class name: .bg-{color}
    |
    */
  
    backgroundColors: colors,
  
    /*
    |-----------------------------------------------------------------------------
    | Background sizes               https://tailwindcss.com/docs/background-size
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background sizes. We provide some common
    | values that are useful in most projects, but feel free to add other sizes
    | that are specific to your project here as well.
    |
    | Class name: .bg-{size}
    |
    */
  
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Border widths                     https://tailwindcss.com/docs/border-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border widths. Take note that border
    | widths require a special "default" value set as well. This is the
    | width that will be used when you do not specify a border width.
    |
    | Class name: .border{-side?}{-width?}
    |
    */
  
    borderWidths: {
      default: '1px',
      '1/2': '0.5px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Border colors                     https://tailwindcss.com/docs/border-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border colors. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Take note that border colors require a special "default" value set
    | as well. This is the color that will be used when you do not
    | specify a border color.
    |
    | Class name: .border-{color}
    |
    */
  
    borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),
  
    /*
    |-----------------------------------------------------------------------------
    | Border radius                    https://tailwindcss.com/docs/border-radius
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border radius values. If a `default` radius
    | is provided, it will be made available as the non-suffixed `.rounded`
    | utility.
    |
    | If your scale includes a `0` value to reset already rounded corners, it's
    | a good idea to put it first so other values are able to override it.
    |
    | Class name: .rounded{-side?}{-size?}
    |
    */
  
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      'default': '.25rem',
      'lg': '.5rem',
      'xl': '1rem',
      '2xl': '1.25rem',
      'full': '9999px',
      'filter': '13px',
      'modal': '0.625rem',
      'search-location-error': '0.75rem',
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Width                                    https://tailwindcss.com/docs/width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your width utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale, a percentage
    | based fraction scale, plus some other common use-cases. You
    | can, of course, modify these values as needed.
    |
    |
    | It's also worth mentioning that Tailwind automatically escapes
    | invalid CSS class name characters, which allows you to have
    | awesome classes like .w-2/3.
    |
    | Class name: .w-{size}
    |
    */
  
    width: {
      'auto': 'auto',
      'px': '1px',
      '0': '0px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '9/2': '1.125rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.125rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '22': '5.5rem',
      '23': '5.75rem',
      '24': '6rem',
      '25': '6.3rem',
      '27': '6.75rem',
      '28': '7rem',
      '30': '7.5rem',
      '31': '7.75rem',
      '32': '8rem',
      '33': '8.25rem',
      '34': '8.5rem',
      '38': '9.5rem',
      '40': '10rem',
      '44': '11rem',
      '45': '11.25rem',
      '48': '12rem',
      '50': '12.5rem',
      '52': '13rem',
      '53': '13.25rem',
      '55': '13.75rem',
      '56': '14rem',
      '61': '15.125rem',
      '64': '16rem',
      '68': '17rem',
      '72': '18rem',
      '76': '19rem',
      '77': '19.125rem',
      '80': '20rem',
      '81': '20.375rem',
      '85': '21.125rem',
      '86': '21.5625rem',
      '88': '22rem',
      '92': '23rem',
      '95': '23.75rem',
      '96': '24rem',
      '100': '25rem',
      '104': '26rem',
      '108': '27rem',
      '110': '30rem',
      '114': '31rem',
      '126': '34rem',
      '128': '36rem',
      '132': '37rem',
      '160': '40rem',
      '161': '40.25rem',
      '184': '46rem',
      '192': '52rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      '7/8': '87.33333%',
      '1/9': '11.11%',
      '8/9': '88.89%',
      'full': '100%',
      'max-content': 'max-content',
      'screen': '100vw',
      'with-sidebar-full': 'calc(100% - 550px)', // view port width - panel width
      'with-sidebar-narrow': 'calc(100% - 338px)'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Height                                  https://tailwindcss.com/docs/height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your height utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale plus some other
    | common use-cases. You can, of course, modify these values as
    | needed.
    |
    | Class name: .h-{size}
    |
    */
  
    height: {
      'auto': 'auto',
      'px': '1px',
      '0': '0px',
      '1': '0.25rem',
      '2': '0.5rem',
      '5/2': '0.625rem',
      '3': '0.75rem',
      '4': '1rem',
      '9/2': '1.125rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.375rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '14': '3.125rem',
      '15': '3.75rem',
      '16': '4rem',
      '17': '4.25rem',
      '18': '4.5rem',
      '20': '5rem',
      '21': '5.5rem',
      '24': '6rem',
      '28': '7rem',
      '30': '7.5rem',
      '32': '8rem',
      '33': '8.25rem',
      '35': '8.75rem',
      '38': '9.5rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '50': '13rem',
      '51': '13.5rem',
      '52': '14rem',
      '57': '14.25rem',
      '64': '16rem',
      '70': '17.5rem',
      '80': '20rem',
      '88': '22rem',
      '90': '22.5rem',
      '96': '24rem',
      '120': '30rem',
      '124': '31rem',
      'full': '100%',
      '90%': '90%',
      'screen-70': '70vh',
      'screen': '100vh'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Minimum width                        https://tailwindcss.com/docs/min-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .min-w-{size}
    |
    */
    minWidth: {
      '0': '0',
      '4': '1rem',
      '42': '10.50rem',
      'full': '100%'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Minimum height                      https://tailwindcss.com/docs/min-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | few common use-cases by default. You can, of course, modify these
    | values as needed.
    |
    | Class name: .min-h-{size}
    |
    */
  
    minHeight: {
      '0': '0',
      'full': '100%',
      'screen': '100vh',
      'icon': '3.125rem', //50px
      'map': '16rem'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Maximum width                        https://tailwindcss.com/docs/max-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based scale and a "full width" size,
    | which is basically a reset utility. You can, of course,
    | modify these values as needed.
    |
    | Class name: .max-w-{size}
    |
    */
  
    maxWidth: {
      '5xs': '4.2rem',
      '4xs': '5rem',
      '3xs': '10rem',
      '2xs': '12rem',
      'xs': '20rem',
      '2xs': '28rem',
      'sm': '30rem',
      '2sm': '32rem',
      '2md': '35rem',
      'md': '40rem',
      'lg': '50rem',
      'xl': '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      'full': '100%',
      'sidebar': '34.375rem',
      'sidebar-narrow': '21.125rem',
      'filter-popup': '22.5rem'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Maximum height                      https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .max-h-{size}
    |
    */
  
    maxHeight: {
      'full': '100%',
      'half': '50%',
      'screen': '100vh',
      'filter-popup': '400px',
      'plan-option-thumb-desktop': '8.25rem',
      'plan-option-thumb-mobile': '3.75rem',
      'single-lot': '11rem'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Padding                                https://tailwindcss.com/docs/padding
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your padding utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .p{side?}-{size}
    |
    */
  
    padding: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2/1': '0.33rem',
      '2': '0.5rem',
      '3/2': '0.58rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.875rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '24': '6rem',
      '25': '6.25rem',
      '28': '7rem',
      '32': '8rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '64': '16rem',
      '68': '17rem',
      '128': '32rem',
  
      // Aspect Ratio (e.g. pt-14/13)
      '9/13': '69.23%',
      '14/13': '108%'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Margin                                  https://tailwindcss.com/docs/margin
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your margin utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .m{side?}-{size}
    |
    */
  
    margin: {
      'auto': 'auto',
      'px': '1px',
      '0': '0',
      '05': '0.125rem',
      '1': '0.25rem',
      '3/2': '0.375rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.875rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '12': '3rem',
      '13': '3.375rem',
      '16': '4rem',
      '20': '5rem',
      '21': '5.25rem',
      '24': '6rem',
      '26': '6.5rem',
      '30': '7.1875rem',
      '31': '7.925rem',
      '32': '8rem',
      '34': '9.125rem',
      '37': '9.375rem',
      '41': '10.25rem',
      '66': '16.5rem',
      '69': '17.25rem'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Negative margin                https://tailwindcss.com/docs/negative-margin
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your negative margin utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By default we
    | provide matching values to the padding scale since these utilities
    | generally get used together. You can, of course, modify these
    | values as needed.
    |
    | Class name: .-m{side?}-{size}
    |
    */
  
    negativeMargin: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '77': '19.25rem',
      '89': '22.25rem',
      '1/5': '20%'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Shadows                                https://tailwindcss.com/docs/shadows
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your shadow utilities. As you can see from
    | the defaults we provide, it's possible to apply multiple shadows
    | per utility using comma separation.
    |
    | If a `default` shadow is provided, it will be made available as the non-
    | suffixed `.shadow` utility.
    |
    | Class name: .shadow-{size?}
    |
    */
  
    shadows: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      'top': '0 -2px 4px 0 rgba(0, 0, 0, 0.2)',
      'button-sm': '0 1px 4px 0 rgba(0, 0, 0, 0.2)',
      'modal': '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      'header': '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      'footer': '1px -2px 4px 0 rgba(0, 0, 0, 0.3)',
      'header-mobile': '1px 3px 6px 0 rgba(0, 0, 0, 0.3)',
      'scroll-top': '0 1px 3px 0 rgba(0, 0, 0, 0.5)',
      'scroll-bottom': '0 0 3px 0 rgba(0, 0, 0, 0.5)',
      'xs': '0 2px 4px 0 rgba(0,0,0,0.2)',
      'sm': '0 2px 4px 0 rgba(0,0,0,0.5)',
      'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'outline': '0 0 0 3px rgba(52,144,220,0.5)',
      'filter-box': '1px 3px 6px 0 rgba(211, 211, 211, 0.5)',
      'panel-header-top': 'inset 0px 3px 5px -3px rgba(0, 0, 0, .3)',
      'panel-header-bottom': '1px 6px 6px -3px rgba(0, 0, 0, 0.3)',
      'pos': '0px 1px 4px 0px rgba(0,0,0,0.5)',
      'none': 'none',
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Z-index                                https://tailwindcss.com/docs/z-index
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your z-index utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .z-{index}
    |
    */
  
    zIndex: {
      'auto': 'auto',
      '0': 0,
      '1': 1,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '45': 45,
      '50': 50,
      '1000': 1000
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Opacity                                https://tailwindcss.com/docs/opacity
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your opacity utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .opacity-{name}
    |
    */
  
    opacity: {
      '0': '0',
      '10': '.1',
      '25': '.25',
      '50': '.5',
      '69': '.69',
      '75': '.75',
      '80': '.8',
      '100': '1'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | SVG fill                                   https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG fill colors. By default we just provide
    | `fill-current` which sets the fill to the current text color. This lets you
    | specify a fill color using existing text color utilities and helps keep the
    | generated CSS file size down.
    |
    | Class name: .fill-{name}
    |
    */
  
    svgFill: {
      'current': 'currentColor'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | SVG stroke                                 https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG stroke colors. By default we just provide
    | `stroke-current` which sets the stroke to the current text color. This lets
    | you specify a stroke color using existing text color utilities and helps
    | keep the generated CSS file size down.
    |
    | Class name: .stroke-{name}
    |
    */
  
    svgStroke: {
      'current': 'currentColor'
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Modules                  https://tailwindcss.com/docs/configuration#modules
    |-----------------------------------------------------------------------------
    |
    | Here is where you control which modules are generated and what variants are
    | generated for each of those modules.
    |
    | Currently supported variants:
    |   - responsive
    |   - hover
    |   - focus
    |   - active
    |   - group-hover
    |
    | To disable a module completely, use `false` instead of an array.
    |
    */
  
    modules: {
      appearance: ['responsive'],
      backgroundAttachment: ['responsive'],
      backgroundColors: ['responsive', 'hover', 'focus'],
      backgroundPosition: ['responsive'],
      backgroundRepeat: ['responsive'],
      backgroundSize: ['responsive'],
      borderCollapse: [],
      borderColors: ['responsive', 'hover', 'focus'],
      borderRadius: ['responsive'],
      borderStyle: ['responsive'],
      borderWidths: ['responsive'],
      cursor: ['responsive'],
      display: ['responsive'],
      flexbox: ['responsive'],
      float: ['responsive'],
      fonts: ['responsive'],
      fontWeights: ['responsive', 'hover', 'focus'],
      height: ['responsive'],
      leading: ['responsive'],
      lists: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      minHeight: ['responsive'],
      minWidth: ['responsive'],
      negativeMargin: ['responsive'],
      opacity: ['responsive'],
      outline: ['focus'],
      overflow: ['responsive'],
      padding: ['responsive'],
      pointerEvents: ['responsive'],
      position: ['responsive'],
      resize: ['responsive'],
      shadows: ['responsive', 'hover', 'focus'],
      svgFill: [],
      svgStroke: [],
      textAlign: ['responsive'],
      textColors: ['responsive', 'hover', 'focus'],
      textSizes: ['responsive'],
      textStyle: ['responsive', 'hover', 'focus'],
      tracking: ['responsive'],
      userSelect: ['responsive'],
      verticalAlign: ['responsive'],
      visibility: ['responsive'],
      whitespace: ['responsive'],
      width: ['responsive'],
      zIndex: ['responsive']
    },
  
    /*
    |-----------------------------------------------------------------------------
    | Plugins                                https://tailwindcss.com/docs/plugins
    |-----------------------------------------------------------------------------
    |
    | Here is where you can register any plugins you'd like to use in your
    | project. Tailwind's built-in `container` plugin is enabled by default to
    | give you a Bootstrap-style responsive container component out of the box.
    |
    | Be sure to view the complete plugin documentation to learn more about how
    | the plugin system works.
    |
    */
  
    /*
    |-----------------------------------------------------------------------------
    | Advanced Options         https://tailwindcss.com/docs/configuration#options
    |-----------------------------------------------------------------------------
    |
    | Here is where you can tweak advanced configuration options. We recommend
    | leaving these options alone unless you absolutely need to change them.
    |
    */
  
    options: {
      prefix: '',
      important: false,
      separator: ':'
    }
  }