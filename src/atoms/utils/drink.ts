import calories from "@data/calories";
import prices from "@data/prices";
import type { MenuItemKey } from "@data/menu";

export const getDrinkPrice = (id: MenuItemKey) => {
	let price = prices.base[id] as number;

	// if (sku.customisations.Size?.data) {
	// 	const drinkId = sku.id as "SoftDrink";
	// 	price = prices.misc[`${drinkId}${sku.customisations.Size.data}`];
	// }

	// coffee small
	// milk small
	// hot cocoa small
	// shakes medium

	return price;
};

export const getDrinkCalories = (id: MenuItemKey) => {
	let numCalories = calories.base[id];

	// if (sku.customisations.Size?.data) {
	// 	const drinkId = sku.id as "SoftDrink";
	// 	numCalories = calories.misc[`${drinkId}${sku.customisations.Size.data}`];
	// }

	// coffee small
	// milk small
	// hot cocoa small
	// shakes medium

	return numCalories;
};
