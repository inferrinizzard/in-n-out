import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { PaperProvider, adaptNavigationTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ThemeProvider } from "@shopify/restyle";
import { DevTools } from "jotai-devtools";

import theme from "@src/styles/theme";

import MainNavigator from "./src/navigation/StackNavigator";
import { navigationRef } from "./src/navigation/navigatorRef";
import { BottomTabs } from "./src/navigation/components/BottomTabs";
import { theme as paperTheme, navigationTheme } from "./src/styles/paper-theme";

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

	useEffect(() => {
		if (process.env.NODE_ENV === "development") {
			// @ts-ignore
			import("jotai-devtools/styles.css");
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<PaperProvider theme={paperTheme}>
				<SafeAreaView id="providerRoot" style={{ flexGrow: 1 }}>
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
