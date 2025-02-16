import { atom } from "jotai";

import type { MenuItemKey } from "@data/menu";

type QueueAtomState = MenuItemKey[];

const baseAtom = atom<QueueAtomState>([]);

export const queueAtom = atom(
	(get) => get(baseAtom),
	(get, set) => ({
		push: (id: MenuItemKey) => set(baseAtom, (prev) => prev.concat([id])),

		shift: () =>
			set(baseAtom, (prev) => {
				prev.shift();
				return prev;
			}),

		clear: () => set(baseAtom, []),
	}),
);
