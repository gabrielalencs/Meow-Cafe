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
            }
        },
    },
    plugins: [],
}

