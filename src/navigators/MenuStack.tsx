import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { type MenuStackParamList, menuStackRoutes } from '../screens/routes';

const Stack = createNativeStackNavigator<MenuStackParamList>();

export interface MenuStackNavigatorProps {}

const MenuStackNavigator: React.FC<MenuStackNavigatorProps> = () => {
  return (
    <Stack.Navigator initialRouteName="Menu">
      {(
        Object.entries(menuStackRoutes) as [keyof typeof menuStackRoutes, any][]
      ).map(([screen, component]) => (
        <Stack.Screen
          key={screen}
          name={screen as keyof typeof menuStackRoutes}
          component={component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MenuStackNavigator;
