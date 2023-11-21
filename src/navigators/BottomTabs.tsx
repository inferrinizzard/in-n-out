import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import { BottomNavigation, Icon } from 'react-native-paper';

import { BaseTabParamList } from '../screens/routes';
import Account from '../screens/Account';
import Cart from '../screens/Cart';
import Menu from '../screens/Menu';

const Tab = createBottomTabNavigator<BaseTabParamList>();

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
            const label =
              options.tabBarLabel !== undefined
                ? (options.tabBarLabel as string)
                : options.title !== undefined
                ? options.title
                : route.name;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="cog" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
