/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      Bgcolors:{
        'theme-purple':'#45108A',
        'purple':'#923BE4',
        'dark-purple':'#360070',
        'purple-heading':'#AF09FF',
        'primary-gradient':'#231054',
        'deep-blue':'#230049',
        'dark-blue':'#0E003B',
        'light-blue':'#8FFFF7',
        'deep-purple':'#251E3C',
        'main-gradient':'linear-gradient(to right, #FF512F, #DD2476, #8204E9)',
        
      },
      colors: {
        "mtitle": "#F83A3A",
        "ctitle": "#4C4C4C",
        "cvalue": "",
        "cdesc": "",
        "chtitle":"",
        "chvalue":"",
        "chdesc":"",
      },
      fontSize: {
        'maintitle': '32px', // 10px
        'cardtitle': '20px', // 28px
        'cardvalue': '56px', // 10px
        'carddesc': '20px', // 28px
      },
      fontWeight: {
        'sbold': '500',
        'mbold': '600',
        'lbold': '700',
        'xlbold': '800',
      },
      fontFamily: {
        'custom': ['"Open Sans"', 'sans-serif'],
        'customtwo': ["'Poppins'", 'sans-serif'],
      },
      lineHeight: {
        'extra-tight': '1.1',
      },
      letterSpacing: {
        'widest': '.25em',
      },
    },
  },
  plugins: [],
}

