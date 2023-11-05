import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  PaperProvider as ThemeProvider,
  adaptNavigationTheme,
} from 'react-native-paper';

import theme from './src/styles/theme';
import routes, { RootStackParamList } from './src/screens/routes';
import { type ValueOf } from './src/types/util';

const Stack = createNativeStackNavigator<RootStackParamList>();

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={LightTheme}>
        <Stack.Navigator initialRouteName="Home">
          {Object.entries<ValueOf<typeof routes>>(routes).map(
            ([screen, component]) => (
              <Stack.Screen
                key={screen}
                name={screen as keyof typeof routes}
                // @ts-expect-error
                component={component}
              />
            )
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
