import calories from "@data/calories";
import prices from "@data/prices";

import type { SkuOptions } from "../types";
import { Option, OptionFlag } from "@data/options";

export const getFriesPrice = (options: SkuOptions) => {
	let price = prices.base.Fries;

	if (options[Option.Fries].flags?.[OptionFlag.AddCheese]) {
		price += prices.misc.Cheese;
	}

	if (options[Option.Fries].flags?.[OptionFlag.AnimalStyle]) {
		price += prices.misc.AnimalStyle;
	}

	return price;
};

export const getFriesCalories = (options: SkuOptions) => {
	let numCalories = calories.base.Fries;

	if (options[Option.Fries].flags?.[OptionFlag.AddCheese]) {
		numCalories += calories.misc.Cheese;
	}

	if (options[Option.Fries].flags?.[OptionFlag.AnimalStyle]) {
		numCalories += calories.misc.AnimalStyle;
	}

	return numCalories;
};
