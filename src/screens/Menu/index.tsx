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
	MenuItemMap,
	type MenuKey,
} from "@data/menu";
import type { ItemKey } from "@data/items";
import type { SkuId } from "@data/types";

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
		<ScreenContainer Footer={<CheckoutBanner navigation={navigation} />}>
			{activeMenu === DataMenu.Main && (
				<Box gap="m" paddingBottom="l">
					<Text variant="boldItalic" textAlign="center">
						{"Ordering as easy as"}
					</Text>
					<Box flexDirection="row" gap="s">
						<ComboCard comboKey={MenuCombo.DblDblCombo} />
						<ComboCard comboKey={MenuCombo.CheeseburgerCombo} />
						<ComboCard comboKey={MenuCombo.HamburgerCombo} />
					</Box>
				</Box>
			)}
			<FlatList
				data={menuItems}
				contentContainerStyle={{ gap: theme.spacing.s }}
				ItemSeparatorComponent={DividerLine}
				renderItem={({ item: [id, item] }) => (
					<MenuItem
						id={id}
						item={item}
						onPress={() => {
							setDefaultItem({ id: id, item: item.id });
							navigation.push(ScreenKeys.Item, {
								title: getCopy(id.replace("Combo", "")),
							});

							// if (id.includes("Combo")) {
							// 	queue.push(DataMenuItem.Fries);
							// 	queue.push(DataMenuItem.SoftDrink);
							// }
						}}
					/>
				)}
			/>
			{activeMenu === DataMenu.Main && (
				<>
					<DividerLine />
					<FlatList
						data={subMenus}
						contentContainerStyle={{ gap: theme.spacing.s }}
						ItemSeparatorComponent={DividerLine}
						renderItem={({ item: menu }) => (
							<MenuItem
								id={menu as any}
								onPress={() => {
									navigation.push(ScreenKeys.Menu, {
										title: getCopy(menu),
										activeMenu: menu,
									});
								}}
							/>
						)}
					/>
				</>
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
