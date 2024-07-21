/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                'brown-primary': '#3C0E0E',
                'rose-primay': '#EB8E8E'
            },
            margin: {
                '[-40]': '-40px'
            },
            spacing: {
                '1216': '1216px',
                '550': '550px',
                '485': '485px',
                '[-260]': '-260px',
                '[-50]': '-50px',
            }
        },
    },
    plugins: [],
}