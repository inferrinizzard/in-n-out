import { Image, View } from "react-native";
import { Card, Text } from "react-native-paper";

import { useAppSelector } from "../../../redux/store";
import { selectCalories, selectPrices } from "../../../redux/slices/dataSlice";

import { useImage } from "@src/hooks/useImage";

import type { ItemProps } from "../../Item";

export type MenuItemProps = {
	id: string;
	name: string;
	onPress: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ onPress, ...item }) => {
	const calories = useAppSelector(selectCalories);
	const prices = useAppSelector(selectPrices);

	const image = useImage(item.id as any);

	return (
		<Card onPress={onPress}>
			<Card.Content style={{ display: "flex", flexDirection: "row" }}>
				<Image source={image} style={{ height: 120, width: 160 }} />
				<View style={{ display: "flex", flexDirection: "column" }}>
					<Text>{item.name}</Text>
					<Text>{`$${Number(prices.base[item.id as any]).toFixed(2)}`}</Text>
					<Text>{`${calories.base[item.id as any]} Calories`}</Text>
				</View>
			</Card.Content>
		</Card>
	);
};

export default MenuItem;
