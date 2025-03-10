import { atom } from "jotai";
import uuid from "react-native-uuid";

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
					(acc, item) => Object.assign(acc, { [uuid.v4()]: item }),
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
