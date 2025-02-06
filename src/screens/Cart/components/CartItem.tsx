import { useMemo } from "react";
import { Image, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import type { StackNavigationProps } from "@src/navigation/StackNavigator";
import type { SkuItem } from "@src/atoms/types";
import { useImage } from "@src/hooks/useImage";

export interface CartItemProps extends SkuItem {
	uuid: string;
}

const CartItem = ({ uuid, ...item }: CartItemProps) => {
	const image = useImage(item.id);

	const customisationData = Object.entries(item.options ?? {});

	const navigation = useNavigation<StackNavigationProps>();

	const editCartItem = () => {
		// dispatch(editItem(uuid));

		// @ts-expect-error
		navigation.push("Item", item);
	};

	const removeCartItem = () => {
		// dispatch(removeItem(uuid));
	};

	return (
		<Card>
			<Card.Content>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<Image source={image} style={{ height: 120, width: 160 }} />
					<View>
						<Text>{item.id}</Text>
						<View style={{ display: "flex", flexDirection: "row" }}>
							<Text>{`$${Number(item.price).toFixed(2)}`}</Text>
							<Text>{" | "}</Text>
							<Text>{`${item.calories} Calories`}</Text>
						</View>
						{customisationData.map(([key, val]) => (
							<Text key={`${uuid}-text-${key}`}>{`${key}: ${val}`}</Text>
						))}
					</View>
				</View>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<View style={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
						<Button onPress={editCartItem}>
							<Text>{"Edit"}</Text>
						</Button>
						<Button onPress={removeCartItem}>
							<Text>{"Remove"}</Text>
						</Button>
					</View>
					<Text>{"Quantity"}</Text>
				</View>
			</Card.Content>
		</Card>
	);
};

export default CartItem;
