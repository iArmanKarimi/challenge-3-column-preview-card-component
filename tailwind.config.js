/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		screens: {
			sm: "768px", // increased to tablet view
		},
		fontFamily: {
			"sans-serif": ["Lexend Deca", "sans-serif"],
			cursive: ["Big Shoulders Display", "cursive"],
		},
		fontSize: {
			"card-header": [
				"2.6rem",
				{
					fontWeight: "700",
				},
			],
		},
		extend: {
			colors: {
				primary: {
					"light-orange": "hsl(31, 77%, 52%)",
					"dark-cyan": "hsl(184, 100%, 22%)",
					"very-dark-cyan": "hsl(179, 100%, 13%)",
				},
				neutral: {
					"very-light-gray": "hsl(0, 0%, 95%)",
					"transparent-white": "hsla(0, 0%, 100%, 0.75)",
				},
			},
		},
	},
	plugins: [],
};
