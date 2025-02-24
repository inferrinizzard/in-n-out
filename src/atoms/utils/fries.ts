import calories from "@data/calories";
import prices from "@data/prices";
import { Option, OptionFlag } from "@data/options";
import type { Item } from "@data/items";

import type { SkuOptions } from "../types";

export const getFriesPrice = (
	options: Partial<Pick<SkuOptions<typeof Item.Fries>, typeof Option.Fries>>,
) => {
	let price = prices.base.Fries;

	if (options[Option.Fries]?.value === OptionFlag.AddCheese) {
		price += prices.misc.Cheese;
	}

	if (options[Option.Fries]?.value === OptionFlag.AnimalStyle) {
		price += prices.misc.AnimalStyle;
	}

	return price;
};

export const getFriesCalories = (
	options: Partial<Pick<SkuOptions<typeof Item.Fries>, typeof Option.Fries>>,
) => {
	let numCalories = calories.base.Fries;

	if (options[Option.Fries]?.value === OptionFlag.AddCheese) {
		numCalories += calories.misc.Cheese;
	}

	if (options[Option.Fries]?.value === OptionFlag.AnimalStyle) {
		numCalories += calories.misc.AnimalStyle;
	}

	return numCalories;
};
