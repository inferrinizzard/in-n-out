import { useEffect, useState } from "react";
import { BottomNavigation, Icon } from "react-native-paper";
import { StackActions, type NavigationState } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";

import type { Theme } from "@src/styles/theme";

import { type ScreenKey, ScreenKeys, ScreenCopy } from "../screens";
import { navigationRef } from "../navigatorRef";

const tabsIcons: Record<string, string> = {
	[ScreenKeys.Menu]: "silverware",
	[ScreenKeys.Cart]: "cart-outline",
	[ScreenKeys.QrCode]: "qrcode",
	[ScreenKeys.Account]: "account",
	[ScreenKeys.More]: "dots-horizontal",
};

export const BottomTabs = () => {
	const theme = useTheme<Theme>();

	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		if (navigationRef?.isReady()) {
			setIsReady(true);
		}
	}, []);

	if (!isReady) {
		return null;
	}

	return (
		<BottomNavigation.Bar
			style={{ backgroundColor: theme.colors.white }}
			// activeIndicatorStyle={{ backgroundColor: theme.colors.redDark }}
			activeIndicatorStyle={{ backgroundColor: theme.colors.redLight }}
			// activeColor={theme.colors.white}
			compact
			navigationState={((state: NavigationState) => ({
				index: state.index,
				routes: state.routeNames
					.filter((route) => route !== ScreenKeys.Item)
					.map((route) => ({ key: route as ScreenKey })),
			}))(navigationRef.current!.getRootState())}
			onTabPress={({ route, preventDefault }) => {
				if (navigationRef.canGoBack()) {
					navigationRef.dispatch(StackActions.popToTop());
				}
				navigationRef.dispatch(StackActions.replace(route.key));
			}}
			renderIcon={({ route, focused, color }) => {
				const iconSource = tabsIcons[route.key];
				return <Icon source={iconSource} size={24} color={color} />;
			}}
			getLabelText={({ route }) => {
				return ScreenCopy[route.key];
			}}
		/>
	);
};
