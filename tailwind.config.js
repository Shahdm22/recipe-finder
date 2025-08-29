import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: "#4CAF50",   // Primary green (adjust to match Figma)
                    dark: "#388E3C",
                },
                soft: "#F9FAFB",        // Background color
            },
            boxShadow: {
                card: "0 4px 10px rgba(0,0,0,0.05)", // Softer card shadow
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"], // Add your chosen font
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
