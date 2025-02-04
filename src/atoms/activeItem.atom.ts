import { atom } from "jotai";

import type { MenuIdKey } from "@data/menu";
import type { ToppingKey } from "@data/customisations/keys";
import type { ToppingValue } from "@data/toppings";
import { ItemToppingMap, type ItemKey } from "@data/items";

interface ActiveItemAtomState {
	id: MenuIdKey;
	item: ItemKey;
	options?: Record<ToppingKey, ToppingValue>;
}

const baseAtom = atom<ActiveItemAtomState | Record<never, never>>({});

export const activeItemAtom = atom(
	(get) => get(baseAtom),
	(get, set) => ({
		setItem: (item: ActiveItemAtomState) => {
			set(baseAtom, item);
		},

		setDefaultItem: (item: Omit<ActiveItemAtomState, "options">) => {
			const options =
				item.item in ItemToppingMap
					? ItemToppingMap[item.item as keyof typeof ItemToppingMap].default
					: undefined;
			set(baseAtom, { ...item, options });
		},

		updateOption: (key: ToppingKey, value: ToppingValue) => {
			set(baseAtom, (prev) => ({
				...prev,
				options: { ...("options" in prev && prev.options), [key]: value },
			}));
		},
	}),
);
