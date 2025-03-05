import calories from "@data/calories";
import prices from "@data/prices";
import type { SkuKey } from "@data/sku";
import { type Item, ItemOptionMap } from "@data/items";
import { Option, OptionFlag, OptionValue } from "@data/options";

import type { SkuOptions } from "../types";

const _getBurgerName = (meat: number, cheese: number) => {
	const meatTerm = ["", "Single", "Double", "Triple"][meat] ?? meat.toString();
	const cheeseTerm =
		["", "Single", "Double", "Triple"][cheese] ?? cheese.toString();

	let left = meatTerm;
	let join = "-";
	let right = cheeseTerm;

	if (cheese === 0 && meat === 0) {
		return "Wish Burger";
	}

	if (meat === 0) {
		right = "Grilled Cheese";
		join = " ";
		left = cheeseTerm;

		if (cheese === 1) {
			return right;
		}

		if (cheese > 3) {
			left = cheese.toString();
			join = "x ";
		}

		return `${left}${join}${right}`;
	}

	if (cheese === 0) {
		right = "Hamburger";
		join = " ";

		if (meat === 1) {
			return right;
		}

		if (meat > 3) {
			join = "x ";
		}
		return `${left}${join}${right}`;
	}

	if (cheese === 1) {
		right = "Cheeseburger";
		join = " ";

		if (meat === 1) {
			return right;
		}

		if (meat > 3) {
			join = "x ";
		}
		return `${left}${join}${right}`;
	}

	if (cheese > 3 || meat > 3) {
		left = meat.toString();
		join = "x";
		if (cheese > 1) {
			right = cheese.toString();
		}
	}

	return `${left}${join}${right}`;
};

export const getBurgerName = (...args: Parameters<typeof _getBurgerName>) => {
	const name = _getBurgerName(...args);
	if (["4x4", "3x3", "Triple-Triple", "Double-Double"].includes(name)) {
		return `${name}®`;
	}

	return name;
};

export const getBurgerPrice = (
	id: SkuKey,
	options: Pick<
		SkuOptions<typeof Item.Burger>,
		typeof Option.Meat | typeof Option.Cheese
	> &
		Partial<Pick<SkuOptions<typeof Item.Burger>, typeof Option.Burger>>,
) => {
	let price = prices.base[id] as number;

	const defaults = ItemOptionMap.Burger.default;

	const meatDelta = Math.max(
		options[Option.Meat].count - defaults.Meat.count,
		0,
	);
	const cheeseDelta = Math.max(
		options[Option.Cheese].count - defaults.Cheese.count,
		0,
	);

	price += meatDelta * prices.misc.Meat;
	price += cheeseDelta * prices.misc.Cheese;

	return price;
};

export const getBurgerCalories = (
	id: SkuKey,
	options: Pick<
		SkuOptions<typeof Item.Burger>,
		typeof Option.Meat | typeof Option.Cheese | typeof Option.Bun
	> &
		Partial<Pick<SkuOptions<typeof Item.Burger>, typeof Option.Burger>>,
) => {
	let numCalories = calories.base[id];

	const defaults = ItemOptionMap.Burger.default;

	const meatDelta = Math.max(
		options[Option.Meat].count - defaults.Meat.count,
		0,
	);
	const cheeseDelta = Math.max(
		options[Option.Cheese].count - defaults.Cheese.count,
		0,
	);

	if (options[Option.Burger]?.flags[OptionFlag.AnimalStyle]) {
		numCalories += calories.misc.AnimalStyle;
	}

	if (
		options[Option.Bun]?.value === OptionValue.ProteinStyle ||
		options[Option.Bun]?.value === OptionValue.None
	) {
		numCalories += calories.misc.ProteinStyle;
	}

	numCalories += meatDelta * calories.misc.Meat;
	numCalories += cheeseDelta * calories.misc.Cheese;

	return numCalories;
};
