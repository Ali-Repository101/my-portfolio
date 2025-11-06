/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // ✅ important line
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6", // blue
                secondary: "#9333ea", // purple
            },
        },
    },
    plugins: [],
};
