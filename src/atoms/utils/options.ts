import type { SkuItem } from "@src/atoms/types";

import { ItemOptionMap } from "@data/items";
import type { OptionInstance, OptionKey } from "@data/options";
import { SkuItemMap, type SkuKey } from "@data/sku";

export const getCustomisationData = <Sku extends SkuKey>({
	item,
	sku,
	options,
}: Pick<SkuItem<Sku>, "item" | "sku" | "options">) => {
	const defaultOptions = {
		...ItemOptionMap[item as keyof typeof ItemOptionMap].default,
		...(SkuItemMap[sku] as { override?: object }).override,
	};

	return (
		Object.entries(options ?? {}) as {
			[O in OptionKey]: [O, OptionInstance<O>];
		}[OptionKey][]
	).filter(([optionKey, optionValue]) => {
		if (!(item in ItemOptionMap)) {
			return true;
		}

		if (!(optionKey in defaultOptions)) {
			return true;
		}

		if (Object.values(optionValue.flags ?? {}).some((x) => x)) {
			return true;
		}

		const defaultValue =
			optionKey in defaultOptions
				? (defaultOptions[
						optionKey as keyof typeof defaultOptions
					] as OptionInstance<typeof optionKey>)
				: undefined;

		if (defaultValue && "count" in defaultValue && "count" in optionValue) {
			return defaultValue.count !== optionValue.count;
		}

		return (
			defaultValue &&
			"value" in defaultValue &&
			"value" in optionValue &&
			defaultValue?.value !== optionValue.value
		);
	});
};
