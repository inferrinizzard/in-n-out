import {
  NavigationContainer,
  RouteConfigComponent,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes, { RootStackParamList } from "./src/screens/routes";
import { ValueOf } from "./src/types/util";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
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
  );
};

export default App;
