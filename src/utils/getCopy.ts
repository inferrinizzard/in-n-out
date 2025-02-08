import { OptionCopy, ItemCopy, MenuCopy } from "@data/copy";

export const getCopy = (id: string) => {
	if (id in MenuCopy) {
		return MenuCopy[id as keyof typeof MenuCopy];
	}

	if (id in ItemCopy) {
		return ItemCopy[id as keyof typeof ItemCopy];
	}

	if (id in OptionCopy) {
		return OptionCopy[id as keyof typeof OptionCopy];
	}

	return "";
};
