import { atom } from "jotai";

import type { OptionKey, OptionInstance } from "@data/options";
import { ItemOptionMap } from "@data/items";

import type { SkuItem, SkuOptions } from "./types";
import prices from "@data/prices";
import calories from "@data/calories";
import { getCalories, getPrice } from "./utils";

interface ActiveItemAtomState extends SkuItem {}

const baseAtom = atom<ActiveItemAtomState | null>(null);

export const activeItemAtom = atom(
	(get) => get(baseAtom),
	(get, set) => ({
		setItem: (item: ActiveItemAtomState) => {
			set(baseAtom, item);
		},

		setDefaultItem: (item: Pick<ActiveItemAtomState, "id" | "item">) => {
			const options =
				item.item in ItemOptionMap
					? ItemOptionMap[item.item as keyof typeof ItemOptionMap].default
					: undefined;
			const price = prices.base[item.id];
			const numCalories = calories.base[item.id];
			set(baseAtom, {
				...item,
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
			const price = getPrice(prev.id, newOptions as SkuOptions);
			const numCalories = getCalories(prev.id, newOptions as SkuOptions);

			set(
				baseAtom,
				(prev) =>
					({
						...prev,
						price,
						calories: numCalories,
						options: newOptions,
					}) as ActiveItemAtomState,
			);
		},
	}),
);
