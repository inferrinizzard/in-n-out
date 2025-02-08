import { FlatList, SafeAreaView } from "react-native";
import { useSetAtom } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { queueAtom } from "@src/atoms/queue.atom";
import { type StackScreenProps, ScreenKeys } from "@src/navigation";
import ScreenContainer from "@src/components/layout/ScreenContainer";

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

	const menuItems = Object.entries(MenuItemMap[MenuKey.Main]) as [
		SkuId,
		{ id: ItemKey },
	][];

	return (
		<ScreenContainer style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
				<FlatList
					data={menuItems}
					renderItem={({ item: [id, item] }) => (
						<MenuItem
							onPress={() => {
								setDefaultItem({ id: id, item: item.id });
								navigation.push(ScreenKeys.Item);

								if (id.includes("Combo")) {
									queue.push(DataMenuItem.Fries);
									queue.push(DataMenuItem.SoftDrink);
								}
							}}
							id={id}
						/>
					)}
				/>
			</SafeAreaView>

			<CheckoutBanner navigation={navigation} />
		</ScreenContainer>
	);
};

export default Menu;
