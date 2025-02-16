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
		...palette,
		mainBackground: palette.white,
		cardPrimaryBackground: palette.white,
	},
	spacing: {
		xs: 4,
		s: 8,
		m: 16,
		l: 24,
	},
	textVariants: {
		header: {
			fontWeight: "bold",
			fontSize: 24,
			fontFamily: "HelveticaNeueCondensedBold",
			letterSpacing: "-0.06em",
		},
		bold: {
			fontWeight: "bold",
			fontSize: 14,
			fontFamily: "HelveticaNeueBold",
		},
		medium: {
			fontSize: 12,
			fontFamily: "HelveticaNeueMedium",
			letterSpacing: "-0.01em",
		},
		body: {
			fontSize: 12,
			lineHeight: 24,
			fontFamily: "HelveticaNeueRegular",
		},
		script: {
			fontWeight: 500,
			fontSize: 16,
			lineHeight: 12,
			fontFamily: "Brush Script MT",
		},
		defaults: {
			fontFamily: "HelveticaNeueRegular",
		},
	},
});

export type Theme = typeof theme;
export default theme;
