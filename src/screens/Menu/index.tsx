import { useMemo } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Button, Text } from "react-native-paper";

import { useAppSelector } from "../../redux/store";
import { selectItems } from "../../redux/slices/orderSlice";

import type { StackScreenProps } from "../../navigation/StackNavigator";
import MenuItem from "./components/MenuItem";

import { Menu as MenuKey, MenuItemMap } from "@data/menu";

import { ScreenKeys } from "../../consts";

export interface MenuProps extends StackScreenProps<typeof ScreenKeys.Menu> {}

const Menu = ({ navigation }: MenuProps) => {
	const order = useAppSelector(selectItems);
	const orderItems = useMemo(() => Object.values(order), [order]);

	return (
		<View style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
				<FlatList
					data={Object.entries(MenuItemMap[MenuKey.Main])}
					renderItem={({ item: [id, item] }) => (
						<MenuItem
							onPress={() => {
								navigation.push(ScreenKeys.Item);
							}}
							id={id as any}
						/>
					)}
				/>
			</SafeAreaView>

			{orderItems.length ? (
				<View
					style={{
						backgroundColor: "red",
						width: "100%",
					}}
				>
					<Button onPress={() => navigation.replace(ScreenKeys.Cart)}>
						<Text>{`Checkout ${orderItems.length} Items now`}</Text>
					</Button>
				</View>
			) : null}
		</View>
	);
};

export default Menu;
