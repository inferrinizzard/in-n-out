import { useMemo } from "react";
import {
	type NativeStackNavigationProp,
	type NativeStackScreenProps,
	createNativeStackNavigator,
} from "@react-navigation/native-stack";

import Menu, { type MenuProps } from "../screens/Menu";
import Item, { type ItemScreenParams } from "../screens/Item";
import Cart, { type CartProps } from "../screens/Cart";
import More, { type MoreProps } from "../screens/More";
import QrCode, { type QrCodeProps } from "../screens/QrCode";
import Account, { type AccountProps } from "../screens/Account";

import { ScreenKeys } from "./screens";

import Header from "./components/HeaderTitle";
import HeaderButton from "./components/HeaderButton";

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
	[ScreenKeys.Menu]: MenuProps;
	[ScreenKeys.Item]: ItemScreenParams;
	[ScreenKeys.Cart]: CartProps;
	[ScreenKeys.QrCode]: QrCodeProps;
	[ScreenKeys.Account]: AccountProps;
	[ScreenKeys.More]: MoreProps;
};

export type StackNavigationProps = NativeStackNavigationProp<StackParamList>;
export type StackScreenProps<Screen extends keyof StackParamList> =
	NativeStackScreenProps<StackParamList, Screen>;
// #endregion

const Stack = createNativeStackNavigator<StackParamList>();

const MainNavigator = () => {
	const routes = useMemo(
		() => Object.entries(routesMap) as [keyof typeof routesMap, any][],
		[routesMap],
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
							route.params && "name" in route.params
								? route.params.name
								: screen,
					})}
				/>
			))}
		</Stack.Navigator>
	);
};

export default MainNavigator;
