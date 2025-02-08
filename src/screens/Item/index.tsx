import { Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { useAtomValue } from "jotai";

import type { StackScreenProps, ScreenKeys } from "@src/navigation";
import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { useImage } from "@src/hooks/useImage";
import ScreenContainer from "@src/components/layout/ScreenContainer";

import calories from "@data/calories";
import prices from "@data/prices";
import { ItemOptionMap } from "@data/items";
import { MenuCopy } from "@data/copy";

import ContinueButton from "./components/ContinueButton";

export interface ItemProps extends StackScreenProps<typeof ScreenKeys.Item> {}

const Item = ({ navigation }: ItemProps) => {
	const activeItem = useAtomValue(activeItemAtom)!;
	const id = activeItem.id;
	const item = activeItem.item;

	const image = useImage(id);

	const name = MenuCopy[id];

	const options =
		item in ItemOptionMap
			? ItemOptionMap[item as keyof typeof ItemOptionMap]
			: undefined;

	return (
		<ScreenContainer style={{ display: "flex", flex: 1 }}>
			<View style={{ alignItems: "center" }}>
				<Image source={image} style={{ height: 240, width: 320 }} />
				<Text style={{ fontSize: 24 }}>{name}</Text>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<Text>{`$${Number(activeItem?.price || prices.base[id]).toFixed(
						2,
					)}`}</Text>
					<Text>{" | "}</Text>
					<Text>{`${activeItem?.calories ?? calories.base[id]} Calories`}</Text>
				</View>
			</View>

			<ScrollView
				contentContainerStyle={{ alignItems: "center" }}
				style={{ display: "flex" }}
			>
				{options?.options.map((option) => (
					<Text key={option}>{option}</Text>
				))}
				{/* {customisations ? (
					<ItemCustomisations<typeof id> customisations={customisations} />
				) : null} */}
			</ScrollView>

			<ContinueButton navigation={navigation} />
		</ScreenContainer>
	);
};

export default Item;
