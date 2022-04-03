module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts}','./src/**/**/*.{vue,js,ts}'],
    content: ['./src/**/*.{vue,js,ts}', './src/**/**/*.{vue,js,ts}'],
    darkMode: false,
    theme: {
      container: {
        center: true,
      },
      extend: {
        colors: {
          // brand: {
          //   900: '#800080',
          // },
          main: '#F3F7F9',
          'brand': {  
            DEFAULT: '#F16F2E',
            '50': '#FDE6DA',
            '100': '#FBD8C7',
            '200': '#F9BEA1',
            '300': '#F6A47A',
            '400': '#F48954',
            '500': '#F16F2E',
            '600': '#D8520E',
            '700': '#A43E0B',
            '800': '#6F2A07',
            '900': '#3B1604'
          },
        },
        animation: {
          'spin-slow': 'spin 10s linear infinite',
          'ping-slow': 'ping 2s linear infinite',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  