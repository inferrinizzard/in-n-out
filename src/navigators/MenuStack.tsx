import { useMemo } from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { useAppDispatch } from '../redux/store';
import { clearActiveItem } from '../redux/slices/orderSlice';

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

const MenuStackNavigator: React.FC<MenuStackNavigatorProps> = () => {
  const dispatch = useAppDispatch();

  const routes = useMemo(
    () =>
      Object.entries(menuStackRoutes) as [keyof typeof menuStackRoutes, any][],
    [menuStackRoutes]
  );

  return (
    <Stack.Navigator
      initialRouteName="StackMenu"
      screenOptions={{ headerShown: false }}
    >
      {routes.map(([screen, component]) => (
        <Stack.Screen
          key={screen}
          name={screen}
          component={component}
          listeners={{
            beforeRemove: () => dispatch(clearActiveItem()),
          }}
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

export default MenuStackNavigator;
