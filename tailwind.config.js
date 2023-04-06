/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: "#F96162",
			},
			fontFamily: {
				sans: ["GmarketSansMedium"],
			},
		},
	},
	plugins: [],
};
