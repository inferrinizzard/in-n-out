import type { ImageURISource } from "react-native";

import { Menu } from "@data/menu";
import { Sku } from "@data/sku";

import { ImageData } from "@src/data/images";

const MenuImageMappings = {
	[Menu.Main]: Sku.DblDbl,
	[Menu.HotDrink]: Sku.HotCocoa,
	[Menu.SecretMenu]: Sku.AnimalStyle,
	[Menu.Extra]: Sku.GiftCard,
};

export const getImage = (id: string): ImageURISource | undefined => {
	if (id in ImageData) {
		return ImageData[id as keyof typeof ImageData];
	}

	if (id in MenuImageMappings) {
		return getImage(MenuImageMappings[id as keyof typeof MenuImageMappings]);
	}

	return;
};
