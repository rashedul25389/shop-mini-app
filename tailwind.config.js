/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // App Router
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                sans: ['Geist Sans', 'Arial', 'Helvetica', 'sans-serif'],
                mono: ['Geist Mono', 'monospace'],
            },
        },
    },
    plugins: [],
};
