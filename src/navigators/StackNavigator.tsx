import { useMemo } from 'react';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Menu, { MenuProps } from '../screens/Menu';
import Item, { ItemProps } from '../screens/Item';
import Cart, { CartProps } from '../screens/Cart';
import More, { MoreProps } from '../screens/More';
import QrCode, { QrCodeProps } from '../screens/QrCode';
import Account, { AccountProps } from '../screens/Account';

import Header from '../components/navigation/HeaderTitle';
import HeaderButton from '../components/navigation/HeaderButton';

import { ScreenKeys } from '../consts/screens';

// #region types
export const routesMap = {
  [ScreenKeys.Menu]: Menu,
  [ScreenKeys.Item]: Item,
  [ScreenKeys.Cart]: Cart,
  [ScreenKeys.QrCode]: QrCode,
  [ScreenKeys.Account]: Account,
  [ScreenKeys.More]: More,
} as const;

export type StackParamList = {
  [ScreenKeys.Menu]?: MenuProps;
  [ScreenKeys.Item]?: ItemProps;
  [ScreenKeys.Cart]?: CartProps;
  [ScreenKeys.QrCode]?: QrCodeProps;
  [ScreenKeys.Account]?: AccountProps;
  [ScreenKeys.More]?: MoreProps;
};

export type StackNavigationProps = NativeStackNavigationProp<StackParamList>;
export type StackScreenProps<Screen extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, Screen>;
// #endregion

const Stack = createNativeStackNavigator<StackParamList>();

export interface MenuStackNavigatorProps {}

const MainNavigator: React.FC<MenuStackNavigatorProps> = () => {
  const routes = useMemo(
    () => Object.entries(routesMap) as [keyof typeof routesMap, any][],
    [routesMap]
  );

  return (
    <Stack.Navigator
      initialRouteName={ScreenKeys.Menu}
      screenOptions={{
        headerLeft: (props) => (props.canGoBack ? <HeaderButton /> : null),
        headerTitle: ({ children, tintColor }) => <Header>{children}</Header>,
      }}
    >
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
