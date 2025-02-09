import { Image, ScrollView } from "react-native";
import { useAtomValue } from "jotai";

import type { StackScreenProps, ScreenKeys } from "@src/navigation";
import { activeItemAtom } from "@src/atoms/activeItem.atom";
import ScreenContainer from "@src/components/layout/ScreenContainer";
import { Box, Text } from "@src/components";
import { getImage } from "@src/utils/getImage";
import { getCopy } from "@src/utils/getCopy";

import { ItemOptionMap } from "@data/items";

import ContinueButton from "./components/ContinueButton";

export interface ItemProps extends StackScreenProps<typeof ScreenKeys.Item> {}

const Item = ({ navigation }: ItemProps) => {
	const { id, item, price, calories } = useAtomValue(activeItemAtom)!;

	const image = getImage(id);
	const name = getCopy(id);

	const options =
		item in ItemOptionMap
			? ItemOptionMap[item as keyof typeof ItemOptionMap]
			: undefined;

	return (
		<ScreenContainer>
			<Box alignItems="center" gap="s" marginBottom="m">
				<Image
					source={image}
					style={{ height: 160, width: 320 }}
					resizeMode="contain"
				/>
				<Text variant="bold" style={{ fontSize: 24 }}>
					{name}
				</Text>
				<Box flexDirection="row">
					<Text>{`$${price.toFixed(2)}`}</Text>
					<Text>{" | "}</Text>
					<Text>{`${calories} Calories`}</Text>
				</Box>
			</Box>

			<ScrollView contentContainerStyle={{ alignItems: "center" }}>
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
