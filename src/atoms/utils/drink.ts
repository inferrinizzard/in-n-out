import calories from "@data/calories";
import prices from "@data/prices";
import { MenuItem, type MenuItemKey } from "@data/menu";

import type { SkuOptions } from "../types";
import { Option } from "@data/options";

export const getDrinkPrice = (id: MenuItemKey, options: SkuOptions) => {
	const price = prices.base[id] as number;

	if (id === Sku.SoftDrink) {
		return prices.misc[`${Sku.SoftDrink}${options[Option.Size].value}`];
	}

	if (id === Sku.Shake) {
		return price;
	}

	// coffee small
	// milk small
	// hot cocoa small
	// shakes medium

	return price;
};

export const getDrinkCalories = (id: MenuItemKey, options: SkuOptions) => {
	const numCalories = calories.base[id];

	if (id === Sku.SoftDrink) {
		return calories.misc[`${Sku.SoftDrink}${options[Option.Size].value}`];
	}

	if (id === Sku.Shake) {
		return calories;
	}

	// coffee small
	// milk small
	// hot cocoa small
	// shakes medium

	return numCalories;
};
