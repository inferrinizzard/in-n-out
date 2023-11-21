import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import { BottomNavigation, Icon } from 'react-native-paper';

import { type BaseTabParamList, baseTabRoutes } from '../screens/routes';

const Tab = createBottomTabNavigator<BaseTabParamList>();

const baseTabsIcons: Record<keyof BaseTabParamList, string> = {
  Menu: 'silverware',
  Cart: 'cart-outline',
  Account: 'account',
};

export interface BottomTabsProps {}

const BottomTabs: React.FC<BottomTabsProps> = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
      {/* // todo: memo */}
      {(
        Object.entries(baseTabRoutes) as [keyof typeof baseTabRoutes, any][]
      ).map(([name, component]) => (
        <Tab.Screen
          key={`BottomTabs:${name}`}
          name={name}
          component={component}
          options={{
            tabBarLabel: name,
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon source={baseTabsIcons[name]} size={size} color={color} />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabs;
