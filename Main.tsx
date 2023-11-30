import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import {
  PaperProvider as ThemeProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import ReduxProvider from './src/redux/Provider';
import { theme, navigationTheme } from './src/styles/theme';
import BottomTabsNavigator from './src/navigators/BottomTabs';

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: navigationTheme,
});

const App = () => {
  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1, ...styles.androidSafeArea }}>
          <NavigationContainer theme={LightTheme}>
            <BottomTabsNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
