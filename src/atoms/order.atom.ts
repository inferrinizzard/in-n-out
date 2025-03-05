import { atom } from "jotai";
import { v4 as uuidV4 } from "uuid";

import type { SkuKey } from "@data/sku";

import type { SkuItem } from "./types";

type OrderAtomState = Record<string, SkuItem<SkuKey>>;

const orderBaseAtom = atom<OrderAtomState>({});
orderBaseAtom.debugLabel = "orderAtom";

export const orderAtom = atom(
	(get) => get(orderBaseAtom),
	(get, set) => ({
		addItem: (...items: SkuItem<SkuKey>[]) =>
			set(orderBaseAtom, (prev) => ({
				...prev,
				...items.reduce(
					(acc, item) => Object.assign(acc, { [uuidV4()]: item }),
					{},
				),
			})),

		removeItem: (key: string) =>
			set(orderBaseAtom, (prev) => {
				delete prev[key];
				return prev;
			}),

		getNumItems: () => Object.keys(get(orderBaseAtom)).length,
	}),
);
