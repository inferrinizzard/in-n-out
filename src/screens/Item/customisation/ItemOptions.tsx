import { FlatList } from "react-native";
import { useAtomValue } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { DividerLine } from "@src/components";

import { ItemOptionMap } from "@data/items";
import { CustomisationRow } from "./CustomisationItem";

export const ItemOptions = () => {
	const { item } = useAtomValue(activeItemAtom);

	if (!(item in ItemOptionMap)) {
		return null;
	}

	const { options } = ItemOptionMap[item as keyof typeof ItemOptionMap];

	return (
		<FlatList
			data={options}
			ItemSeparatorComponent={DividerLine}
			renderItem={({ item: option }) => (
				<CustomisationRow key={option} option={option} />
			)}
		/>
	);
};
