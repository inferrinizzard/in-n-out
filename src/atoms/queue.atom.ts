import { atom } from "jotai";

import type { SkuId } from "@data/menu";

type QueueAtomState = SkuId[];

const baseAtom = atom<QueueAtomState>([]);

export const queueAtom = atom(
	(get) => get(baseAtom),
	(get, set) => ({
		push: (id: SkuId) => set(baseAtom, (prev) => prev.concat([id])),

		shift: () =>
			set(baseAtom, (prev) => {
				prev.shift();
				return prev;
			}),
	}),
);
