import { atom } from "jotai";

import type { MenuIdKey } from "@data/menu";
import type { OptionKey } from "@data/customisations/keys";
import type { OptionInstance } from "@data/options";
import { ItemOptionMap, type ItemKey } from "@data/items";

interface ActiveItemAtomState {
	id: MenuIdKey;
	item: ItemKey;
	options?: Record<OptionKey, OptionInstance>;
	price: number;
	calories: number;
}

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
			if (!get(baseAtom)) {
				return;
			}

			set(
				baseAtom,
				(prev) =>
					({
						...prev,
						options: { ...prev?.options, [key]: value },
					}) as ActiveItemAtomState,
			);
		},
	}),
);
