import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import MenuStackNavigator from '../navigators/MenuStack';

import Account, { type AccountProps } from './Account';
import Cart, { type CartProps } from './Cart';
import Item, { type ItemProps } from './Item';
import Menu, { type MenuProps } from './Menu';

export const baseTabRoutes = {
  Menu: MenuStackNavigator,
  Cart: Cart,
  Account: Account,
} as const;

export type BaseTabParamList = {
  Menu?: MenuProps;
  Cart?: CartProps;
  Account?: AccountProps;
};

export type BaseTabScreenProps = NativeStackScreenProps<BaseTabParamList>;
export type TabScreenProps<Screen extends keyof BaseTabParamList> =
  BottomTabScreenProps<BaseTabParamList, Screen>;

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
