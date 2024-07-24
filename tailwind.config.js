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
                '525': '525px',
                '[-260]': '-260px',
                '[-50]': '-50px',
                '360': '360px',
            },
            backgroundImage: {
                'gradient-pink': 'linear-gradient(to bottom left, #f6c7c5, #c27d7a)',
                'gradient-pink-delivery': 'linear-gradient(to bottom left, #f3c7c4, #541511)',
                'gradient-light-brown': 'linear-gradient(to bottom left, #fafafa, #541511)',
                'gradient-dark-brown': 'linear-gradient(to bottom left, #0a0909, #541511)'
            }
        },
    },
    plugins: [],
}