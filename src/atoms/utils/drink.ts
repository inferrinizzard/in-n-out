import { getCopy } from "@src/utils/getCopy";

import calories from "@data/calories";
import prices from "@data/prices";
import { Sku, type SkuKey } from "@data/sku";
import type { Item } from "@data/items";
import { DrinkSizes, Option, OptionValue } from "@data/options";

import type { SkuOptions } from "../types";

export const getDrinkName = (
	id: SkuKey,
	options: Partial<
		Pick<
			SkuOptions<typeof Item.Drink>,
			typeof Option.Size | typeof Option.Float | typeof Option.Drink
		>
	>,
) => {
	const size = options.Size?.value || DrinkSizes[1];

	// if (id === Sku.SoftDrink) {}
	const floatSuffix =
		options.Float?.value !== OptionValue.None
			? options.Float?.value
			: undefined;

	const slugs = [
		size,
		getCopy(options.Drink?.value ?? ""),
		floatSuffix ? `${floatSuffix} Float` : undefined,
	].flatMap((x) => x ?? []);

	const name = slugs.join(" ");

	return name;
};

export const getDrinkPrice = (
	id: SkuKey,
	options: Partial<
		Pick<
			SkuOptions<typeof Item.Drink>,
			typeof Option.Size | typeof Option.Float
		>
	>,
) => {
	const price = prices.base[id] as number;

	if (id === Sku.SoftDrink) {
		return prices.misc[`${Sku.SoftDrink}${options[Option.Size]?.value}`];
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

export const getDrinkCalories = (
	id: SkuKey,
	options: Partial<
		Pick<
			SkuOptions<typeof Item.Drink>,
			typeof Option.Size | typeof Option.Float
		>
	>,
) => {
	const numCalories = calories.base[id];

	if (id === Sku.SoftDrink) {
		return calories.misc[`${Sku.SoftDrink}${options[Option.Size]?.value}`];
	}

	if (id === Sku.Shake) {
		return calories.misc[`${Sku.Shake}${options[Option.Size]?.value}`];
	}

	// coffee small
	// milk small
	// hot cocoa small
	// shakes medium

	return numCalories;
};
