/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['"Recursive Variable"', 'sans-serif'],
		},
		extend: {
			colors: {
				silver: '#BAB9B5ff',
				'silver-two': '#B9B7B8ff',
				viridian: '#3A8878ff',
				'rich-black': '#050912ff',
				'walnut-brown': '#524F48ff',
				gunmetal: '#163631',
				'white-plum-grey': '#E5E4E6',
				'white-grey': '#DCDDDD',
				unohana: '#F7FCFE',
			},
		},
	},

	plugins: [],
};

module.exports = config;
