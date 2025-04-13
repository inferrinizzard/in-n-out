import { atom } from "jotai";

import { getCopy } from "@src/utils/getCopy";

import {
	type OptionKey,
	type OptionFlagKey,
	type OptionInstance,
	OptionConfigMap,
} from "@data/options";
import { SkuItemMap, type SkuKey } from "@data/sku";
import { Item, ItemOptionMap } from "@data/items";
import prices from "@data/prices";
import calories from "@data/calories";

import { getCalories, getPrice, isBurger, isDrink } from "./utils";
import type { SkuItem, SkuOptions } from "./types";
import { getBurgerName } from "./utils/burger";
import { getDrinkName } from "./utils/drink";

interface ActiveItemAtomState extends SkuItem<SkuKey> {
	isValid: boolean;
}

const activeItemBaseAtom = atom<ActiveItemAtomState>({
	isValid: false,
} as unknown as ActiveItemAtomState);
activeItemBaseAtom.debugLabel = "activeItemAtom";

export const activeItemAtom = atom(
	(get) => get(activeItemBaseAtom),
	(get, set) => ({
		setItem: (item: ActiveItemAtomState) => {
			set(activeItemBaseAtom, item);
		},

		setDefaultItem: ({ sku }: Pick<ActiveItemAtomState, "sku">) => {
			const item = SkuItemMap[sku];

			const options =
				item.id in ItemOptionMap
					? {
							...ItemOptionMap[item.id as keyof typeof ItemOptionMap].default,
							...("override" in item ? item.override : undefined),
						}
					: undefined;
			const price = prices.base[sku];
			const numCalories = calories.base[sku];
			const name = getCopy(sku);
			const isValid =
				item.id in ItemOptionMap
					? ItemOptionMap[item.id as keyof typeof ItemOptionMap].options.every(
							(option) =>
								options &&
								option in options &&
								!!options[option as keyof typeof options],
						)
					: true;

			set(activeItemBaseAtom, {
				isValid,
				sku,
				item: item.id,
				name,
				options,
				price,
				calories: numCalories,
			} as ActiveItemAtomState);
		},

		toggleFlag: (key: OptionKey, flag: OptionFlagKey) => {
			const prev = get(activeItemBaseAtom);

			if (!prev) {
				return;
			}

			const prevFlags = prev.options?.[key]?.flags;
			const prevFlagValue =
				prevFlags && flag in prevFlags
					? prevFlags[flag as keyof typeof prevFlags]
					: undefined;

			const newOptions = {
				...prev?.options,
				[key]: {
					...prev.options?.[key],
					flags: { ...prevFlags, [flag]: !prevFlagValue },
				},
			};

			set(
				activeItemBaseAtom,
				(prev) => ({ ...prev, options: newOptions }) as ActiveItemAtomState,
			);
		},

		updateOption: <Option extends OptionKey>(
			key: Option,
			value: OptionInstance<Option>,
		) => {
			const prev = get(activeItemBaseAtom);
			const item = prev.item;

			if (!prev) {
				return;
			}

			const newOptions = {
				...prev?.options,
				[key]: { ...prev.options?.[key], ...value },
			};
			const price = getPrice(
				prev.sku,
				newOptions as SkuOptions<typeof prev.item>,
			);
			const numCalories = getCalories(
				prev.sku,
				newOptions as SkuOptions<typeof prev.item>,
			);
			const name = isBurger(prev.sku)
				? getBurgerName(
						newOptions.Meat?.count ??
							ItemOptionMap[Item.Burger].default.Meat.count,
						newOptions.Cheese?.count ??
							ItemOptionMap[Item.Burger].default.Cheese.count,
					)
				: isDrink(prev.sku)
					? getDrinkName(prev.sku, newOptions)
					: getCopy(prev.sku);

			const isValid =
				item in ItemOptionMap
					? ItemOptionMap[item as keyof typeof ItemOptionMap].options.every(
							(option) =>
								newOptions &&
								option in newOptions &&
								!!newOptions[option as keyof typeof newOptions],
						)
					: true;

			set(
				activeItemBaseAtom,
				(prev) =>
					({
						...prev,
						isValid,
						name,
						price,
						calories: numCalories,
						options: newOptions,
					}) as ActiveItemAtomState,
			);
		},
	}),
);
