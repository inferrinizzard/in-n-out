import { Image, View } from "react-native";
import { Card, Text } from "react-native-paper";

import prices from "@data/prices";
import calories from "@data/calories";
import { MenuCopy } from "@data/copy";
import type { SkuId } from "@data/menu";

import { useImage } from "@src/hooks/useImage";

export type MenuItemProps = {
	id: SkuId;
	onPress: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ id, onPress }) => {
	const image = useImage(id as any);

	return (
		<Card onPress={onPress}>
			<Card.Content style={{ display: "flex", flexDirection: "row" }}>
				<Image source={image} style={{ height: 120, width: 160 }} />
				<View style={{ display: "flex", flexDirection: "column" }}>
					<Text>{MenuCopy[id]}</Text>
					<Text>{`$${Number(prices.base[id]).toFixed(2)}`}</Text>
					<Text>{`${calories.base[id]} Calories`}</Text>
				</View>
			</Card.Content>
		</Card>
	);
};

export default MenuItem;
