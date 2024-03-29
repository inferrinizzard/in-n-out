import { SafeAreaView, StyleSheet } from 'react-native';
import {
  PaperProvider as ThemeProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import ReduxProvider from './src/redux/Provider';

import MainNavigator from './src/navigators/StackNavigator';
import { navigationRef } from './src/navigators/navigatorRef';
import { BottomTabs } from './src/components/navigation/BottomTabs';
import { theme, navigationTheme } from './src/styles/theme';

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: navigationTheme,
});

const App = () => {
  return (
    <ReduxProvider>
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
    </ReduxProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  androidSafeArea: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
