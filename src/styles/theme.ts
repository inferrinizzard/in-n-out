import { createTheme } from "@shopify/restyle";
import { ValueOf } from "@src/types/util";

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
			fontSize: 24,
			fontFamily: "HelveticaNeueCondensedBold",
			letterSpacing: 24 * -0.06,
		},
		bold: {
			fontSize: 14,
			fontFamily: "HelveticaNeueBold",
			letterSpacing: 14 * -0.06,
		},
		boldItalic: {
			fontSize: 24,
			fontFamily: "HelveticaNeueBoldItalic",
		},
		medium: {
			fontSize: 12,
			fontFamily: "HelveticaNeueMedium",
			letterSpacing: 12 * -0.06,
		},
		body: {
			fontSize: 12,
			lineHeight: 24,
			fontFamily: "HelveticaNeueRegular",
		},
		script: {
			fontSize: 16,
			lineHeight: 16,
			fontFamily: "BrushScriptMT",
		},
		defaults: {
			fontFamily: "HelveticaNeueRegular",
		},
	},
});

export type Theme = typeof theme;
export default theme;
