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
  Menu: Menu,
  Item: Item,
} as const;

export type MenuStackParamList = {
  Menu?: MenuProps;
  Item?: ItemProps;
};

export type MenuStackScreenProps = NativeStackScreenProps<MenuStackParamList>;
export type StackScreenProps<Screen extends keyof MenuStackParamList> =
  NativeStackScreenProps<MenuStackParamList, Screen>;
// #endregion

const Stack = createNativeStackNavigator<MenuStackParamList>();

export interface MenuStackNavigatorProps {}

const MenuStackNavigator: React.FC<MenuStackNavigatorProps> = () => {
  const dispatch = useAppDispatch();

  return (
    <Stack.Navigator initialRouteName="Menu">
      {(
        Object.entries(menuStackRoutes) as [keyof typeof menuStackRoutes, any][]
      ).map(([screen, component]) => (
        <Stack.Screen
          key={screen}
          name={screen as keyof typeof menuStackRoutes}
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
