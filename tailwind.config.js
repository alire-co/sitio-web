/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '',
                    dark: '#f2f2f2',
                    DEFAULT: '#f2f2f2',
                }
            },
            fontFamily: {
                primary: ['Roboto', 'ui-sans', 'sans'],
                code: ['Roboto Mono', 'ui-monospace', 'monospace']
            }
        },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
}