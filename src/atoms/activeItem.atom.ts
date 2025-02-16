import { atom } from "jotai";

import { getCopy } from "@src/utils/getCopy";

import type {
	OptionKey,
	OptionInstance,
	CountOptionInstance,
} from "@data/options";
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

		setDefaultItem: (item: Pick<ActiveItemAtomState, "id" | "item">) => {
			const options =
				item.item in ItemOptionMap
					? ItemOptionMap[item.item as keyof typeof ItemOptionMap].default
					: undefined;
			const price = prices.base[item.id];
			const numCalories = calories.base[item.id];
			const name = getCopy(item.id);
			set(baseAtom, {
				...item,
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
			const price = getPrice(prev.id, newOptions as SkuOptions);
			const numCalories = getCalories(prev.id, newOptions as SkuOptions);
			const name = isBurger(prev.id)
				? getBurgerName(
						(newOptions.Meat as CountOptionInstance)?.count,
						(newOptions.Cheese as CountOptionInstance)?.count,
					)
				: getCopy(prev.id);

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
