import { atom } from "jotai";
import { v4 as uuidV4 } from "uuid";

import type { SkuItem } from "./types";

type OrderAtomState = Record<string, SkuItem>;

const baseAtom = atom<OrderAtomState>({});

export const orderAtom = atom(
	(get) => get(baseAtom),
	(get, set) => ({
		addItem: (item: SkuItem) =>
			set(baseAtom, (prev) => ({ ...prev, [uuidV4()]: item })),

		removeItem: (key: string) =>
			set(baseAtom, (prev) => {
				delete prev[key];
				return prev;
			}),

		getNumItems: () => Object.keys(get(baseAtom)).length,
	}),
);
