import { FlatList, SafeAreaView } from "react-native";
import { useTheme } from "@shopify/restyle";
import { useSetAtom } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { queueAtom } from "@src/atoms/queue.atom";
import { type StackScreenProps, ScreenKeys } from "@src/navigation";
import ScreenContainer from "@src/components/layout/ScreenContainer";
import { Box, Text } from "@src/components";
import type { Theme } from "@src/styles/theme";

import {
	Menu as DataMenu,
	MenuItemMap,
	MenuItem as DataMenuItem,
	type MenuKey,
} from "@data/menu";
import type { ItemKey } from "@data/items";
import type { SkuId } from "@data/types";

import MenuItem from "./components/MenuItem";
import { CheckoutBanner } from "./components/CheckoutBanner";

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
	const queue = useSetAtom(queueAtom)();
	const { setDefaultItem } = useSetAtom(activeItemAtom)();

	const theme = useTheme<Theme>();

	const menuItems = Object.entries(MenuItemMap[activeMenu]) as [
		SkuId,
		{ id: ItemKey },
	][];

	const subMenus = Object.keys(MenuItemMap).filter(
		(menu) => menu !== DataMenu.Main,
	) as MenuKey[];

	return (
		<ScreenContainer>
			<SafeAreaView>
				<FlatList
					data={menuItems}
					contentContainerStyle={{ gap: theme.spacing.s }}
					ItemSeparatorComponent={() => (
						<Box backgroundColor="greyDark" style={{ height: 1 }} />
					)}
					renderItem={({ item: [id, item] }) => (
						<MenuItem
							id={id}
							onPress={() => {
								setDefaultItem({ id: id, item: item.id });
								navigation.push(ScreenKeys.Item, {
									title: id.replace("Combo", ""),
								});

								if (id.includes("Combo")) {
									queue.push(DataMenuItem.Fries);
									queue.push(DataMenuItem.SoftDrink);
								}
							}}
						/>
					)}
				/>
				{activeMenu === DataMenu.Main && (
					<>
						<Box
							backgroundColor="greyDark"
							marginBottom="s"
							style={{ height: 1 }}
						/>
						<FlatList
							data={subMenus}
							contentContainerStyle={{ gap: theme.spacing.s }}
							ItemSeparatorComponent={() => (
								<Box backgroundColor="greyDark" style={{ height: 1 }} />
							)}
							renderItem={({ item: menu }) => (
								<MenuItem
									id={menu as any}
									onPress={() => {
										navigation.push(ScreenKeys.Menu, {
											title: menu,
											activeMenu: menu,
										});
									}}
								/>
							)}
						/>
					</>
				)}
			</SafeAreaView>

			<Text marginTop="s">
				{
					"2,000 calories a day is used for general nutrition advice, but calorie needs vary, Additional nutritional information is available upon request."
				}
			</Text>

			<CheckoutBanner navigation={navigation} />
		</ScreenContainer>
	);
};

export default Menu;
