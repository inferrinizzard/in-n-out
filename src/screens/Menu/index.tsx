import { useMemo } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useAtom, useSetAtom } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { queueAtom } from "@src/atoms/queue.atom";
import { type StackScreenProps, ScreenKeys } from "@src/navigation";
import {
	Menu as MenuKey,
	MenuItemMap,
	type MenuIdKey,
	MenuItem as DataMenuItem,
} from "@data/menu";
import type { ItemKey } from "@data/items";

import MenuItem from "./components/MenuItem";

export interface MenuProps extends StackScreenProps<typeof ScreenKeys.Menu> {}

const Menu = ({ navigation }: MenuProps) => {
	const queue = useSetAtom(queueAtom)();
	const { setDefaultItem } = useSetAtom(activeItemAtom)();

	const menuItems = Object.entries(MenuItemMap[MenuKey.Main]) as [
		MenuIdKey,
		{ id: ItemKey },
	][];

	return (
		<View style={{ flex: 1 }}>
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

			{[].length ? (
				<View
					style={{
						backgroundColor: "red",
						width: "100%",
					}}
				>
					<Button onPress={() => navigation.replace(ScreenKeys.Cart)}>
						<Text>{`Checkout ${[].length} Items now`}</Text>
					</Button>
				</View>
			) : null}
		</View>
	);
};

export default Menu;
