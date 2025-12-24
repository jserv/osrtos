/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Primary brand color (Indigo/Purple) - Main brand identity
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',   // Light badge backgrounds
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#667eea',   // Gradient start color
                    600: '#4f46e5',   // Main primary color - buttons, links
                    700: '#4338ca',   // Hover states
                    800: '#3730a3',   // Dark badge text
                    900: '#312e81',
                    950: '#1e1b4b',
                },
                // Accent color (Emerald/Green) - Projects and success states
                accent: {
                    50: '#f0fdf4',    // Summary backgrounds
                    100: '#dcfce7',   // License badges
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#10b981',   // Main accent color - project highlights
                    600: '#059669',
                    700: '#047857',
                    800: '#166534',   // License badge text
                    900: '#065f46',   // Summary text
                    950: '#022c22',
                },
                // Warning color (Amber) - Stars and alerts
                warning: {
                    50: '#fefce8',
                    100: '#fef3c7',   // "More" badges background
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',   // Star ratings, warnings
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',   // "More" badge text
                    900: '#78350f',
                    950: '#451a03',
                },
                // Secondary color (Blue) - Links and secondary elements
                secondary: {
                    50: '#eff6ff',
                    100: '#dbeafe',   // Version badges, RTOS badges background
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',   // Nav link hover color
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',   // Badge text
                    900: '#1e3a8a',
                    950: '#172554',
                },
                // Purple shades for gradients
                purple: {
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#764ba2',   // Gradient end color
                    700: '#7c3aed',
                },
            },
        },
    },
    plugins: [],
};
