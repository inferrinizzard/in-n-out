import { atom } from "jotai";

import type { SkuKey } from "@data/sku";

import type { SkuItem } from "./types";

type QueueAtomState = { queue: SkuKey[]; pending: SkuItem[] };

const queueBaseAtom = atom<QueueAtomState>({ queue: [], pending: [] });
queueBaseAtom.debugLabel = "queueAtom";

export const queueAtom = atom(
	(get) => get(queueBaseAtom),
	(get, set) => ({
		pushToQueue: (...ids: SkuKey[]) =>
			set(queueBaseAtom, (prev) => ({
				...prev,
				queue: prev.queue.concat(ids),
			})),

		shiftFromQueue: () =>
			set(queueBaseAtom, (prev) => ({
				...prev,
				queue: prev.queue.slice(1),
			})),

		addToPending: (item: SkuItem) =>
			set(queueBaseAtom, (prev) => ({
				...prev,
				pending: [...prev.pending, item],
			})),

		clear: () => set(queueBaseAtom, { queue: [], pending: [] }),
	}),
);
