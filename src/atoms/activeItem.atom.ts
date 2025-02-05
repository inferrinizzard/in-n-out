import { atom } from "jotai";

import type { MenuIdKey } from "@data/menu";
import type { ToppingKey } from "@data/customisations/keys";
import type { ToppingValue } from "@data/toppings";
import { ItemToppingMap, type ItemKey } from "@data/items";

interface ActiveItemAtomState {
	id: MenuIdKey;
	item: ItemKey;
	options?: Record<ToppingKey, ToppingValue>;
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
				item.item in ItemToppingMap
					? ItemToppingMap[item.item as keyof typeof ItemToppingMap].default
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

		updateOption: (key: ToppingKey, value: ToppingValue) => {
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
