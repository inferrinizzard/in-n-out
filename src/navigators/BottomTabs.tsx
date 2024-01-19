import React, { useMemo } from 'react';
import { BottomNavigation, Icon, MenuProps } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import MenuStackNavigator from './MenuStack';
import Header from '../components/navigation/Header';
import Account, { type AccountProps } from '../screens/Account';
import Cart, { type CartProps } from '../screens/Cart';
import More, { type MoreProps } from '../screens/More';
import QrCode, { type QrCodeProps } from '../screens/QrCode';
import HeaderButton from '../components/navigation/HeaderButton';

// #region types
export const baseTabRoutes = {
  TabMenu: MenuStackNavigator,
  TabCart: Cart,
  TabQrCode: QrCode,
  TabAccount: Account,
  TabMore: More,
} as const;

export type BaseTabParamList = {
  TabMenu?: MenuProps;
  TabCart?: CartProps;
  TabQrCode?: QrCodeProps;
  TabAccount?: AccountProps;
  TabMore?: MoreProps;
};

export type BaseTabScreenProps = NativeStackScreenProps<BaseTabParamList>;
export type TabScreenProps<Screen extends keyof BaseTabParamList> =
  BottomTabScreenProps<BaseTabParamList, Screen>;
// #endregion

const Tab = createBottomTabNavigator<BaseTabParamList>();

const baseTabsIcons: Record<keyof BaseTabParamList, string> = {
  TabMenu: 'silverware',
  TabCart: 'cart-outline',
  TabQrCode: 'qrcode',
  TabAccount: 'account',
  TabMore: 'dots-horizontal',
};

export interface BottomTabsNavigatorProps {}

const BottomTabsNavigator: React.FC<BottomTabsNavigatorProps> = () => {
  const routes = useMemo(
    () => Object.entries(baseTabRoutes) as [keyof typeof baseTabRoutes, any][],
    [baseTabRoutes]
  );

  return (
    <Tab.Navigator
      initialRouteName="TabMenu"
      screenOptions={{
        headerLeft: (props) => <HeaderButton {...props} />,
        headerTitle: (props) => <Header {...props} />,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            return options.tabBarLabel as string;
          }}
        />
      )}
    >
      {routes.map(([name, component]) => (
        <Tab.Screen
          key={`BottomTabsNavigator:${name}`}
          name={name}
          component={component}
          options={{
            tabBarLabel: name.replace('Tab', ''),
            tabBarIcon: ({ color, size }) => (
              <Icon source={baseTabsIcons[name]} size={size} color={color} />
            ),
            title: name.replace('Tab', ''),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
