import { useMemo } from "react";
import {
	type NativeStackNavigationProp,
	type NativeStackScreenProps,
	createNativeStackNavigator,
} from "@react-navigation/native-stack";

import Menu, { type MenuScreenParams } from "../screens/Menu";
import Item from "../screens/Item";
import Cart from "../screens/Cart";
import More from "../screens/More";
import QrCode from "../screens/QrCode";
import Account from "../screens/Account";

import { ScreenKeys } from "./screens";

import { Header } from "./components/Header";

type HeaderTitleParams = { title?: string };

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
	[ScreenKeys.Menu]?: MenuScreenParams & HeaderTitleParams;
	[ScreenKeys.Item]: HeaderTitleParams;
	[ScreenKeys.Cart]?: HeaderTitleParams;
	[ScreenKeys.QrCode]?: HeaderTitleParams;
	[ScreenKeys.Account]?: HeaderTitleParams;
	[ScreenKeys.More]?: HeaderTitleParams;
};

export type StackNavigationProps = NativeStackNavigationProp<StackParamList>;
export type StackScreenProps<Screen extends keyof StackParamList> =
	NativeStackScreenProps<StackParamList, Screen>;
// #endregion

const Stack = createNativeStackNavigator<StackParamList>();

const MainNavigator = () => {
	const routes = useMemo(
		() =>
			Object.entries(routesMap) as [
				keyof typeof routesMap,
				() => JSX.Element,
			][],
		[],
	);

	return (
		<Stack.Navigator
			initialRouteName={ScreenKeys.Menu}
			screenOptions={{ header: Header, contentStyle: { overflow: "scroll" } }}
		>
			{routes.map(([screen, Component]) => (
				<Stack.Screen key={screen} name={screen} component={Component} />
			))}
		</Stack.Navigator>
	);
};

export default MainNavigator;
