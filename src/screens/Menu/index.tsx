import { useMemo } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useAtom, useSetAtom } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { type StackScreenProps, ScreenKeys } from "@src/navigation";
import { Menu as MenuKey, MenuItemMap } from "@data/menu";

import MenuItem from "./components/MenuItem";

export interface MenuProps extends StackScreenProps<typeof ScreenKeys.Menu> {}

const Menu = ({ navigation }: MenuProps) => {
	const { setDefaultItem } = useSetAtom(activeItemAtom)();

	return (
		<View style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
				<FlatList
					data={Object.entries(MenuItemMap[MenuKey.Main])}
					renderItem={({ item: [id, item] }) => (
						<MenuItem
							onPress={() => {
								setDefaultItem({ id: id as any, item: item.id });
								navigation.push(ScreenKeys.Item);
							}}
							id={id as any}
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
