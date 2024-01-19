import { useMemo } from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Menu, { MenuProps } from '../screens/Menu';
import Item, { ItemProps } from '../screens/Item';

// #region types
export const menuStackRoutes = {
  StackMenu: Menu,
  StackItem: Item,
} as const;

export type MenuStackParamList = {
  StackMenu?: MenuProps;
  StackItem?: ItemProps;
};

export type MenuStackScreenProps = NativeStackScreenProps<MenuStackParamList>;
export type StackScreenProps<Screen extends keyof MenuStackParamList> =
  NativeStackScreenProps<MenuStackParamList, Screen>;
// #endregion

const Stack = createNativeStackNavigator<MenuStackParamList>();

export interface MenuStackNavigatorProps {}

const MainNavigator: React.FC<MenuStackNavigatorProps> = () => {
  const routes = useMemo(
    () =>
      Object.entries(menuStackRoutes) as [keyof typeof menuStackRoutes, any][],
    [menuStackRoutes]
  );

  return (
    <Stack.Navigator initialRouteName="StackMenu">
      {routes.map(([screen, component]) => (
        <Stack.Screen
          key={screen}
          name={screen}
          component={component}
          options={({ route }) => ({
            title:
              route.params && 'name' in route.params
                ? route.params.name
                : screen,
          })}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainNavigator;
