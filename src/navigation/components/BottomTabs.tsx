import { useEffect, useState } from "react";
import { Icon } from "react-native-paper";
import { type NavigationState, StackActions } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";

import { Box, Text } from "@src/components";
import type { Theme } from "@src/styles/theme";

import type { StackParamList } from "../StackNavigator";
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
	const [activeScreen, setActiveScreen] = useState<ScreenKey>(ScreenKeys.Menu);

	useEffect(() => {
		const navigationListener = (state: {
			data: { state: NavigationState<StackParamList> };
		}) => {
			const index = state.data.state?.index ?? 0;
			const routes = state.data.state?.routes ?? [];
			const screen = routes[index]?.name;

			if (screen) {
				setActiveScreen(screen);
			}
		};
		if (navigationRef?.isReady()) {
			setIsReady(true);
			navigationRef.addListener(
				"state",
				navigationListener as Parameters<typeof navigationRef.addListener>[1],
			);
		}
		return () =>
			navigationRef.removeListener(
				"state",
				navigationListener as Parameters<typeof navigationRef.addListener>[1],
			);
	}, []);

	if (!isReady) {
		return null;
	}

	return (
		<Box
			flexDirection="row"
			justifyContent="space-evenly"
			paddingVertical="xs"
			height={64}
			style={{ boxShadow: "0px -4px 8px 0px rgba(0, 0, 0, 0.05)" }}
		>
			{Object.entries(tabsIcons).map(([screen, icon]) => {
				const isActive = activeScreen === screen;

				return (
					<Box
						key={screen}
						gap="xs"
						alignItems="center"
						flexGrow={1}
						flexBasis={0}
						touchableProps={{
							style: { width: "20%" },
						}}
						borderRadius={theme.spacing.s}
						marginVertical="xs"
						marginHorizontal="s"
						backgroundColor={isActive ? "redLight" : undefined}
						onPress={() => {
							if (navigationRef.canGoBack()) {
								navigationRef.dispatch(StackActions.popToTop());
							}
							navigationRef.dispatch(StackActions.replace(screen));
						}}
					>
						<Icon
							source={icon}
							size={24}
							color={isActive ? "white" : undefined}
						/>
						<Text variant="bold" color={isActive ? "white" : undefined}>
							{ScreenCopy[screen as ScreenKey]}
						</Text>
					</Box>
				);
			})}
		</Box>
	);
};
