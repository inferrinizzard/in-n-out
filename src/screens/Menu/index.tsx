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
	Menu as MenuKey,
	MenuItemMap,
	MenuItem as DataMenuItem,
} from "@data/menu";
import type { ItemKey } from "@data/items";
import type { SkuId } from "@data/types";

import MenuItem from "./components/MenuItem";
import { CheckoutBanner } from "./components/CheckoutBanner";

export interface MenuProps extends StackScreenProps<typeof ScreenKeys.Menu> {}

const Menu = ({ navigation }: MenuProps) => {
	const queue = useSetAtom(queueAtom)();
	const { setDefaultItem } = useSetAtom(activeItemAtom)();

	const theme = useTheme<Theme>();

	const menuItems = Object.entries(MenuItemMap[MenuKey.Main]) as [
		SkuId,
		{ id: ItemKey },
	][];

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
								navigation.push(ScreenKeys.Item);

								if (id.includes("Combo")) {
									queue.push(DataMenuItem.Fries);
									queue.push(DataMenuItem.SoftDrink);
								}
							}}
						/>
					)}
				/>
			</SafeAreaView>

			<Text>
				{
					"2,000 calories a day is used for general nutrition advice, but calorie needs vary, Additional nutritional information is available upon request."
				}
			</Text>

			<CheckoutBanner navigation={navigation} />
		</ScreenContainer>
	);
};

export default Menu;
