import { atom } from "jotai";

import type { SkuKey } from "@data/sku";

import type { SkuItem } from "./types";

type QueueAtomState = { queue: SkuKey[]; pending: SkuItem[] };

const baseAtom = atom<QueueAtomState>({ queue: [], pending: [] });

export const queueAtom = atom(
	(get) => get(baseAtom),
	(get, set) => ({
		pushToQueue: (...ids: SkuKey[]) =>
			set(baseAtom, (prev) => ({ ...prev, queue: prev.queue.concat(ids) })),

		shiftFromQueue: () =>
			set(baseAtom, (prev) => ({
				...prev,
				queue: prev.queue.slice(1),
			})),

		addToPending: (item: SkuItem) =>
			set(baseAtom, (prev) => ({
				...prev,
				pending: [...prev.pending, item],
			})),

		clear: () => set(baseAtom, { queue: [], pending: [] }),
	}),
);
