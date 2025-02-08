import { createTheme } from "@shopify/restyle";

const palette = {
	redLight: "#E02A27",
	redDark: "#B60000",

	yellow: "#FFCB05",

	greyDark: "#999999",
	greyLight: "#D9D9D9",

	black: "#000000",
	white: "#FFFFFF",
};

const theme = createTheme({
	colors: {
		mainBackground: palette.white,
		cardPrimaryBackground: palette.white,
	},
	spacing: {
		s: 8,
		m: 16,
		l: 24,
	},
	textVariants: {
		header: {
			fontWeight: "bold",
			fontSize: 24,
			fontFamily: "HelveticaNeueCondensedBold",
		},
		bold: {
			fontWeight: "bold",
			fontSize: 16,
			fontFamily: "HelveticaNeueBold",
		},
		body: {
			fontSize: 16,
			lineHeight: 24,
			fontFamily: "HelveticaNeueRegular",
		},
		defaults: {
			fontFamily: "HelveticaNeue",
		},
	},
});

export type Theme = typeof theme;
export default theme;
