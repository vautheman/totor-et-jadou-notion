const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ["var(--poppins-font)", ...fontFamily.sans],
                title: ["var(--playfair-display-font)", ...fontFamily.sans],
            },
            colors: {
                'blue-light': '#27355A',
                'blue-dark': '#0F182C',
                'gold': '#FDBD84',
                'gray': '#A2A8BA'
            },
            fontSize: {
                '5xl': ['2.5rem', {
                    lineHeight: '3.3rem',
                }],
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
};