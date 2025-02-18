import { atom } from "jotai";

import { getCopy } from "@src/utils/getCopy";

import type {
	OptionKey,
	OptionInstance,
	CountOptionInstance,
} from "@data/options";
import { SkuItemMap } from "@data/sku";
import { ItemOptionMap } from "@data/items";
import prices from "@data/prices";
import calories from "@data/calories";

import { getCalories, getPrice, isBurger } from "./utils";
import type { SkuItem, SkuOptions } from "./types";
import { getBurgerName } from "./utils/burger";

interface ActiveItemAtomState extends SkuItem {}

const baseAtom = atom<ActiveItemAtomState>({} as unknown as SkuItem);

export const activeItemAtom = atom(
	(get) => get(baseAtom),
	(get, set) => ({
		setItem: (item: ActiveItemAtomState) => {
			set(baseAtom, item);
		},

		setDefaultItem: ({ sku }: Pick<ActiveItemAtomState, "sku">) => {
			const item = SkuItemMap[sku];

			const options =
				item.id in ItemOptionMap
					? {
							...ItemOptionMap[item.id as keyof typeof ItemOptionMap].default,
							// @ts-expect-error
							...SkuItemMap[sku].override,
						}
					: undefined;
			const price = prices.base[sku];
			const numCalories = calories.base[sku];
			const name = getCopy(sku);
			set(baseAtom, {
				sku,
				item: item.id,
				name,
				options,
				price,
				calories: numCalories,
			} as ActiveItemAtomState);
		},

		updateOption: (key: OptionKey, value: OptionInstance) => {
			const prev = get(baseAtom);

			if (!prev) {
				return;
			}

			const newOptions = { ...prev?.options, [key]: value };
			const price = getPrice(prev.sku, newOptions as SkuOptions);
			const numCalories = getCalories(prev.sku, newOptions as SkuOptions);
			const name = isBurger(prev.sku)
				? getBurgerName(
						(newOptions.Meat as CountOptionInstance)?.count,
						(newOptions.Cheese as CountOptionInstance)?.count,
					)
				: getCopy(prev.sku);

			set(
				baseAtom,
				(prev) =>
					({
						...prev,
						name,
						price,
						calories: numCalories,
						options: newOptions,
					}) as ActiveItemAtomState,
			);
		},
	}),
);
