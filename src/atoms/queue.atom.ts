import { atom } from "jotai";

import type { SkuKey } from "@data/sku";

import type { SkuItem } from "./types";

type QueueAtomState = {
	index: number;
	queue: SkuKey[];
	pending: Record<number, SkuItem>;
};

const queueBaseAtom = atom<QueueAtomState>({
	index: -1,
	queue: [],
	pending: {},
});
queueBaseAtom.debugLabel = "queueAtom";

export const queueAtom = atom(
	(get) => get(queueBaseAtom),
	(get, set) => ({
		updateIndex: (index: number) =>
			set(queueBaseAtom, (prev) => ({ ...prev, index })),

		setQueue: (...ids: SkuKey[]) =>
			set(queueBaseAtom, (prev) => ({
				...prev,
				queue: prev.queue.concat(ids),
			})),

		addToPending: (item: SkuItem) =>
			set(queueBaseAtom, (prev) => ({
				...prev,
				pending: { ...prev.pending, [prev.index]: item },
			})),

		popFromPending: (index: number) => {
			const prevPending = get(queueBaseAtom).pending;

			if (!(index in prevPending)) {
				return;
			}

			const item = { ...prevPending[index] };
			delete prevPending[index];

			set(queueBaseAtom, (prev) => ({
				...prev,
				pending: prevPending,
			}));

			return item;
		},

		clear: () => set(queueBaseAtom, { index: -1, queue: [], pending: [] }),
	}),
);
