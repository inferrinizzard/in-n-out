import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useTheme } from "@shopify/restyle";
import { useSetAtom } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { queueAtom } from "@src/atoms/queue.atom";
import { type StackScreenProps, ScreenKeys } from "@src/navigation";
import ScreenContainer from "@src/components/layout/ScreenContainer";
import { Box, DividerLine, Text } from "@src/components";
import type { Theme } from "@src/styles/theme";
import { getCopy } from "@src/utils/getCopy";

import {
	Menu as DataMenu,
	MenuCombo,
	type MenuSkuConfig,
	MenuSkuMap,
	type MenuKey,
} from "@data/menu";

import MenuItem from "./components/MenuItem";
import { CheckoutBanner } from "./components/CheckoutBanner";
import { ComboCard } from "./components/ComboCard";

export interface MenuScreenParams {
	activeMenu?: MenuKey;
}

export interface MenuProps
	extends StackScreenProps<typeof ScreenKeys.Menu>,
		MenuScreenParams {}

const Menu = ({
	navigation,
	route: {
		params: { activeMenu = DataMenu.Main } = {},
	},
}: MenuProps) => {
	const theme = useTheme<Theme>();

	const { setDefaultItem } = useSetAtom(activeItemAtom)();
	const { clear } = useSetAtom(queueAtom)();

	const menuConfig = MenuSkuMap[activeMenu];

	const subMenus = Object.keys(MenuSkuMap).filter(
		(menu) => menu !== DataMenu.Main,
	) as MenuKey[];

	useEffect(() => {
		clear();
	}, [clear]);

	return (
		<ScreenContainer Footer={<CheckoutBanner navigation={navigation} />}>
			{activeMenu === DataMenu.Main && (
				<Box gap="m" paddingBottom="l">
					<Text variant="boldItalic" textAlign="center">
						{"Ordering as easy as"}
					</Text>
					<Box flexDirection="row" gap="s">
						<ComboCard
							navigation={navigation}
							comboKey={MenuCombo.DblDblCombo}
							index={1}
						/>
						<ComboCard
							navigation={navigation}
							comboKey={MenuCombo.CheeseburgerCombo}
							index={2}
						/>
						<ComboCard
							navigation={navigation}
							comboKey={MenuCombo.HamburgerCombo}
							index={3}
						/>
					</Box>
				</Box>
			)}
			<FlatList
				data={menuConfig.items as readonly MenuSkuConfig[]}
				contentContainerStyle={{ gap: theme.spacing.s }}
				ItemSeparatorComponent={DividerLine}
				renderItem={({ item }) => (
					<MenuItem
						id={item.sku}
						supertext={"supertext" in item ? item.supertext : undefined}
						subtext={"subtext" in item ? item.subtext : undefined}
						onPress={() => {
							setDefaultItem(item);
							navigation.push(ScreenKeys.Item, {
								title: getCopy(item.sku.replace("Combo", "")),
							});
						}}
					/>
				)}
			/>
			{activeMenu === DataMenu.Main && (
				<React.Fragment>
					<DividerLine />
					<FlatList
						data={subMenus}
						contentContainerStyle={{ gap: theme.spacing.s }}
						ItemSeparatorComponent={DividerLine}
						renderItem={({ item: menu }) => {
							const menuConfig = MenuSkuMap[menu];
							return (
								<MenuItem
									id={menu}
									supertext={
										"supertext" in menuConfig ? menuConfig.supertext : undefined
									}
									onPress={() => {
										navigation.push(ScreenKeys.Menu, {
											title: getCopy(menu),
											activeMenu: menu,
										});
									}}
								/>
							);
						}}
					/>
				</React.Fragment>
			)}
			<Text marginTop="s">
				{
					"2,000 calories a day is used for general nutrition advice, but calorie needs vary, Additional nutritional information is available upon request. More details can be found on the "
				}
				<a href="https://www.in-n-out.com/menu/nutrition-info">
					{"In-n-Out Website"}
				</a>
				{"."}
			</Text>
		</ScreenContainer>
	);
};

export default Menu;
