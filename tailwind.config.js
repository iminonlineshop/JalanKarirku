/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primer1: '#0C356A',
        primer2: '#279EFF',
        primer3: '#CAE7FF',
        primer4: '#D5E5F2',
        white0: '#FCFCFC',
        black0: '#121619',
        gray1: '#4D5358',
        gray2: '#878D96',
      },
    },
  },
  plugins: [],
};
