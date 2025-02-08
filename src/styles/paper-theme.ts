import {
	DefaultTheme,
	type Theme as NavigationTheme,
} from "@react-navigation/native";
import { MD3LightTheme } from "react-native-paper";

export const theme = {
	...MD3LightTheme,
	colors: {
		...MD3LightTheme.colors,
		primary: "#e02a27",
		secondary: "#ffcb05",
	},
};

export const navigationTheme: NavigationTheme = DefaultTheme;
