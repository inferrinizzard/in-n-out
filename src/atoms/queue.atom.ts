import { atom } from "jotai";

import type { SkuKey } from "@data/sku";

type QueueAtomState = { queue: SkuKey[] };

const baseAtom = atom<QueueAtomState>({ queue: [] });

export const queueAtom = atom(
	(get) => get(baseAtom),
	(get, set) => ({
		push: (id: SkuKey) =>
			set(baseAtom, (prev) => ({ ...prev, queue: prev.queue.concat([id]) })),

		shift: () =>
			set(baseAtom, (prev) => ({
				...prev,
				queue: prev.queue.slice(1),
			})),

		clear: () => set(baseAtom, { queue: [] }),
	}),
);
