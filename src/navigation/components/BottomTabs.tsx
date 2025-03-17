import { useEffect, useState } from "react";
import { Icon } from "react-native-paper";
import { StackActions } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";

import type { Theme } from "@src/styles/theme";

import { type ScreenKey, ScreenKeys, ScreenCopy } from "../screens";
import { navigationRef } from "../navigatorRef";
import { Box, Text } from "@src/components";

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
		<Box flexDirection="row" justifyContent="space-evenly" paddingVertical="xs">
			{Object.entries(tabsIcons).map(([screen, icon]) => {
				// const isActive = navigationRef.getCurrentRoute()?.name === screen;

				return (
					<Box
						key={screen}
						gap="xs"
						alignItems="center"
						flexGrow={1}
						flexBasis={0}
						onTouchStart={() => {
							if (navigationRef.canGoBack()) {
								navigationRef.dispatch(StackActions.popToTop());
							}
							navigationRef.dispatch(StackActions.replace(screen));
						}}
					>
						<Icon source={icon} size={24} />
						<Text variant="bold">{ScreenCopy[screen as ScreenKey]}</Text>
					</Box>
				);
			})}
		</Box>
	);
};
