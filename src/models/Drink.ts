import { Sku } from "./Sku";

import prices from "../data/prices";
import calories from "../data/calories";

import { type SkuId } from "../data/types";

export type DrinkId = Extract<SkuId, "SoftDrink">;

export const Drink = (skuParams: Sku<DrinkId>): Sku => {
	const price = getDrinkPrice(skuParams);
	const calories = getDrinkCalories(skuParams);

	return { ...skuParams, price, calories };
};

const getDrinkPrice = (sku: Sku<DrinkId>) => {
	let price = prices.base[sku.id] as number;

	if (sku.customisations.Size?.data) {
		const drinkId = sku.id as "SoftDrink";
		price = prices.misc[`${drinkId}${sku.customisations.Size.data}`];
	}

	// coffee small
	// milk small
	// hot cocoa small
	// shakes medium

	return price;
};

const getDrinkCalories = (sku: Sku<DrinkId>) => {
	let numCalories = calories.base[sku.id] as number;

	if (sku.customisations.Size?.data) {
		const drinkId = sku.id as "SoftDrink";
		numCalories = calories.misc[`${drinkId}${sku.customisations.Size.data}`];
	}

	// coffee small
	// milk small
	// hot cocoa small
	// shakes medium

	return numCalories;
};
