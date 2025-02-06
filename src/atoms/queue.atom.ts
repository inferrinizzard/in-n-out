import { atom } from "jotai";

import type { MenuIdKey } from "@data/menu";

type QueueAtomState = MenuIdKey[];

const baseAtom = atom<QueueAtomState>([]);

export const queueAtom = atom(
	(get) => get(baseAtom),
	(get, set) => ({
		push: (id: MenuIdKey) => set(baseAtom, (prev) => prev.concat([id])),

		shift: () =>
			set(baseAtom, (prev) => {
				prev.shift();
				return prev;
			}),
	}),
);
