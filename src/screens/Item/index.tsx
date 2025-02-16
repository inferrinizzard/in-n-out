import { useAtomValue } from "jotai";

import type { StackScreenProps, ScreenKeys } from "@src/navigation";
import { activeItemAtom } from "@src/atoms/activeItem.atom";
import ScreenContainer from "@src/components/layout/ScreenContainer";
import { Text } from "@src/components";

import { ItemOptionMap } from "@data/items";

import { ItemHeader } from "./components/ItemHeader";
import ContinueButton from "./components/ContinueButton";

export interface ItemProps extends StackScreenProps<typeof ScreenKeys.Item> {}

const Item = ({ navigation }: ItemProps) => {
	const { item } = useAtomValue(activeItemAtom)!;

	const options =
		item in ItemOptionMap
			? ItemOptionMap[item as keyof typeof ItemOptionMap]
			: undefined;

	return (
		<ScreenContainer
			Header={<ItemHeader />}
			Footer={<ContinueButton navigation={navigation} />}
		>
			{options?.options.map((option) => (
				<Text key={option}>{option}</Text>
			))}
			{/* {customisations ? (
					<ItemCustomisations<typeof id> customisations={customisations} />
				) : null} */}
		</ScreenContainer>
	);
};

export default Item;
