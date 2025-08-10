module.exports = {
    theme: {
        extend: {
            keyframes: {
                stretch: {
                    '0%': { fontStretch: '75%' },
                    '50%': { fontStretch: '125%' },
                    '100%': { fontStretch: '75%' }
                },
            },
            animation: {
                'animate-stretch': 'stretch 2s ease-in-out infinite',
            },
            fontFamily: {
                pangolin: ['Pangolin', 'sans-serif'],
                giest: ['Giest', 'sans-serif'],
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.font-stretch-75': {
                    fontStretch: '75%',
                },
                '.font-stretch-100': {
                    fontStretch: '100%',
                },
                '.font-stretch-125': {
                    fontStretch: '125%',
                },
            }
            addUtilities(newUtilities);
        }
    ]
}
