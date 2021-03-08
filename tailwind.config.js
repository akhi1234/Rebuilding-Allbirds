const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                lime: colors.lime,
                gray: colors.trueGray,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}