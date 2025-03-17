import { useAtomValue } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { DividerLine } from "@src/components";
import { ListView } from "@src/components/layout/ListView";
import { ItemOptionMap } from "@data/items";

import { CustomisationRow } from "./CustomisationItem";

export const ItemOptions = () => {
	const { item } = useAtomValue(activeItemAtom);

	if (!(item in ItemOptionMap)) {
		return null;
	}

	const { options } = ItemOptionMap[item as keyof typeof ItemOptionMap];

	return (
		<ListView
			data={options}
			SeparatorComponent={DividerLine}
			renderItem={(option) => <CustomisationRow key={option} option={option} />}
		/>
	);
};
