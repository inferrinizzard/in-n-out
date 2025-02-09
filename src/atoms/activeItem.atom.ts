import { atom } from "jotai";

import type { OptionKey, OptionInstance } from "@data/options";
import { ItemOptionMap } from "@data/items";

import type { SkuItem } from "./types";

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
			const price = 0;
			const calories = 0;
			set(baseAtom, {
				...item,
				options,
				price,
				calories,
			} as ActiveItemAtomState);
		},

		updateOption: (key: OptionKey, value: OptionInstance) => {
			const prev = get(baseAtom);

			if (!prev) {
				return;
			}

			const newOptions = { ...prev?.options, [key]: value };
			// const price =

			set(
				baseAtom,
				(prev) =>
					({
						...prev,
						options: newOptions,
					}) as ActiveItemAtomState,
			);
		},
	}),
);
