module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				ourRed: "#C1243F",
				ourGray: "#878787",
				ourBlack: "#222222",
				ourPurple: "#521A52",

				matchingRed: "#C1243F",
				matchingViolet: "#BF3282",
				matchingPurple: "#945ABC",
				matchingBlue: "#0091D7",

				circleGray: "#f3f4f6"
			},
			fontFamily: {
				Roboto: ["Roboto",]
			}
		},
	},
	plugins: [],
};
