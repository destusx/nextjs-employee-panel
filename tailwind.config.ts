import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            backgroundImage: {
                'main-bg': "url('../public/main-bg.jpg')",
            },
            colors: {
                'base-color': '#6764F1',
                'second-color': '#6B6B7B',
                'base-bg-color': '#292930',
                'base-border-color': 'rgba(245, 245, 245, 0.08)',
            },
        },
    },
    plugins: [],
};
export default config;
