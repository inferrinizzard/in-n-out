import { SafeAreaView, StyleSheet } from "react-native";
import {
	PaperProvider as ThemeProvider,
	adaptNavigationTheme,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./src/navigation/StackNavigator";
import { navigationRef } from "./src/navigation/navigatorRef";
import { BottomTabs } from "./src/navigation/components/BottomTabs";
import { theme, navigationTheme } from "./src/styles/theme";

const { LightTheme } = adaptNavigationTheme({
	reactNavigationLight: navigationTheme,
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView
				id="providerRoot"
				style={{ flex: 1, ...styles.androidSafeArea }}
			>
				<NavigationContainer theme={LightTheme} ref={navigationRef}>
					<MainNavigator />
					<BottomTabs />
				</NavigationContainer>
			</SafeAreaView>
		</ThemeProvider>
	);
};

export default App;

const styles = StyleSheet.create({
	androidSafeArea: {
		// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
