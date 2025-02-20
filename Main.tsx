import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { PaperProvider, adaptNavigationTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ThemeProvider } from "@shopify/restyle";
import { DevTools } from "jotai-devtools";

import theme, { type Theme } from "@src/styles/theme";

import MainNavigator from "./src/navigation/StackNavigator";
import { navigationRef } from "./src/navigation/navigatorRef";
import { BottomTabs } from "./src/navigation/components/BottomTabs";
import { theme as paperTheme, navigationTheme } from "./src/styles/paper-theme";

import "jotai-devtools/styles.css";

const { LightTheme } = adaptNavigationTheme({
	reactNavigationLight: navigationTheme,
});

const App = () => {
	const [loaded, error] = useFonts({
		HelveticaNeueBold: require("./assets/fonts/helvetica-neue/HelveticaNeueBold.ttf"),
		HelveticaNeueBoldItalic: require("./assets/fonts/helvetica-neue/HelveticaNeueBoldItalic.ttf"),
		HelveticaNeueCondensedBold: require("./assets/fonts/helvetica-neue/HelveticaNeueCondensedBold.ttf"),
		HelveticaNeueMedium: require("./assets/fonts/helvetica-neue/HelveticaNeueMedium.ttf"),
		HelveticaNeueRegular: require("./assets/fonts/helvetica-neue/HelveticaNeue-Roman.otf"),
	});

	return (
		<ThemeProvider theme={theme}>
			<PaperProvider theme={paperTheme}>
				<SafeAreaView
					id="providerRoot"
					style={{ flex: 1, ...styles.androidSafeArea }}
				>
					<DevTools position="top-right" />
					<NavigationContainer theme={LightTheme} ref={navigationRef}>
						<MainNavigator />
						<BottomTabs />
					</NavigationContainer>
				</SafeAreaView>
			</PaperProvider>
		</ThemeProvider>
	);
};

export default App;

const styles = StyleSheet.create({
	androidSafeArea: {
		// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
