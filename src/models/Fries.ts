import { Sku } from "./Sku";

import prices from "../data/prices";
import calories from "../data/calories";

import { type SkuId } from "../data/types";

export type FriesId = Extract<SkuId, "Fries">;

export const Fries = (skuParams: Sku<FriesId>): Sku => {
	const price = getFriesPrice(skuParams);
	const calories = getFriesCalories(skuParams);

	return { ...skuParams, price, calories };
};

const getFriesPrice = (sku: Sku<FriesId>) => {
	let price = prices.base[sku.id] as number;

	if (sku.customisations.Fries?.flags?.AddCheese) {
		price += prices.misc.Cheese;
	}

	if (sku.customisations.Fries?.flags?.AnimalStyle) {
		price += prices.misc.AnimalStyle;
	}

	return price;
};

const getFriesCalories = (sku: Sku<FriesId>) => {
	let numCalories = calories.base[sku.id] as number;

	if (sku.customisations.Fries?.flags?.AddCheese) {
		numCalories += calories.misc.Cheese;
	}

	if (sku.customisations.Fries?.flags?.AnimalStyle) {
		numCalories += calories.misc.AnimalStyle;
	}

	return numCalories;
};
