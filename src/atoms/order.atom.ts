import { atom } from "jotai";

import type { SkuItem } from "./types";

type OrderAtomState = Record<string, SkuItem>;

const baseAtom = atom<OrderAtomState>({});

export const orderAtom = atom(
	(get) => get(baseAtom),
	(get, set) => ({
		addItem: (item: SkuItem) =>
			set(baseAtom, (prev) => ({ ...prev, "": item })),

		removeItem: (key: string) =>
			set(baseAtom, (prev) => {
				delete prev[key];
				return prev;
			}),

		getNumItems: () => Object.keys(get(baseAtom)).length,
	}),
);
