import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider as ThemeProvider } from 'react-native-paper';

import theme from './src/styles/theme';
import routes, { RootStackParamList } from './src/screens/routes';
import { type ValueOf } from './src/types/util';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
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
