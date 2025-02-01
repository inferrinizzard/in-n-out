import { Image, View } from "react-native";
import { Card, Text } from "react-native-paper";

import { useAppSelector } from "../../../redux/store";
import { selectCalories, selectPrices } from "../../../redux/slices/dataSlice";

import { useImage } from "@src/hooks/useImage";

import { MenuCopy } from "@data/copy";
import type { MenuIdKey } from "@data/menu";

export type MenuItemProps = {
	id: MenuIdKey;
	onPress: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ id, onPress }) => {
	const calories = useAppSelector(selectCalories);
	const prices = useAppSelector(selectPrices);

	const image = useImage(id as any);

	return (
		<Card onPress={onPress}>
			<Card.Content style={{ display: "flex", flexDirection: "row" }}>
				<Image source={image} style={{ height: 120, width: 160 }} />
				<View style={{ display: "flex", flexDirection: "column" }}>
					<Text>{MenuCopy[id]}</Text>
					<Text>{`$${Number(prices.base[id as any]).toFixed(2)}`}</Text>
					<Text>{`${calories.base[id as any]} Calories`}</Text>
				</View>
			</Card.Content>
		</Card>
	);
};

export default MenuItem;
