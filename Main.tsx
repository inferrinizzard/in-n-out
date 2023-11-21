import { NavigationContainer } from '@react-navigation/native';
import {
  PaperProvider as ThemeProvider,
  adaptNavigationTheme,
} from 'react-native-paper';

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
        <NavigationContainer theme={LightTheme}>
          <BottomTabsNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
