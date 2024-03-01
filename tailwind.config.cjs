/** @type {import('tailwindcss').Config}*/
const config = {
	experimental: {
		optimizeUniversalDefaults: true,
	},

	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['"Recursive Variable"', 'sans-serif'],
		},
		extend: {
			colors: {
				'rich-black': '#050912ff',
				gunmetal: '#163631',
				unohana: '#F7FCFE',
			},
		},
	},

	plugins: [],
};

module.exports = config;
