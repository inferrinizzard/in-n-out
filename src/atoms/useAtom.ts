import { type ExtractAtomResult, useSetAtom, type WritableAtom } from "jotai";

export const useAtomSetter = <R, Atom = WritableAtom<unknown, never[], R>>(
	atom: Atom,
) => {
	// @ts-expect-error
	const getSetter = useSetAtom(atom);

	return getSetter() as ExtractAtomResult<Atom>;
};
