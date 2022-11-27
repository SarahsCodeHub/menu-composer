/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js,vue}", "./public/index.html"],
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['Roboto Serif', 'serif']
        },
        extend: {
            colors: {
                'highlight': '#F514E6',
                'highlight-light': '#F514E688',
                'grey-lightest': '#F3F3F3'
            }
        }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
}
