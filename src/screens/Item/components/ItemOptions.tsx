import { useAtomValue } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { Text } from "@src/components";

import { ItemOptionMap } from "@data/items";

export const ItemOptions = () => {
	const { item } = useAtomValue(activeItemAtom);

	if (!(item in ItemOptionMap)) {
		return null;
	}

	const { options, default: defaultOptions } =
		ItemOptionMap[item as keyof typeof ItemOptionMap];

	return (
		<>
			{options.map((option) => (
				<Text key={option}>{option}</Text>
			))}
		</>
	);
};
