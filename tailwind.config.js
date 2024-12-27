/** @type {import('tailwindcss').Config} */
import textStroke from "@designbycode/tailwindcss-text-stroke"

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sega: ['SEGA LOGO FONT', 'sans-serif'],
            },
        },
    },
    plugins: [
        textStroke
    ],
}
