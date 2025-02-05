import { useMemo } from "react";
import { Image, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import { useImage } from "@src/hooks/useImage";
import type { StackNavigationProps } from "../../../navigation/StackNavigator";

import { getCustomisationText, type Sku } from "../../../models/Sku";

export interface CartItemProps extends Sku {
	uuid: string;
}

const CartItem = ({ uuid, ...item }: CartItemProps) => {
	const image = useImage(item.id);

	const customisationData = useMemo(() => getCustomisationText(item), [item]);

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
						<Text>{item.name}</Text>
						<View style={{ display: "flex", flexDirection: "row" }}>
							<Text>{`$${Number(item.price).toFixed(2)}`}</Text>
							<Text>{" | "}</Text>
							<Text>{`${item.calories} Calories`}</Text>
						</View>
						{customisationData.map((line, i) => (
							<Text key={`${uuid}-text-${i}`}>{line}</Text>
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
