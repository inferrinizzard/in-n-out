import calories from "@data/calories";
import prices from "@data/prices";
import type { MenuItemKey } from "@data/menu";
import { ItemOptionMap } from "@data/items";
import {
	type CountOptionInstance,
	Option,
	OptionFlag,
	OptionValue,
} from "@data/options";

import type { SkuOptions } from "../types";

export const getBurgerName = (meat: number, cheese: number) => {
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

export const getBurgerPrice = (id: MenuItemKey, options: SkuOptions) => {
	let price = prices.base[id] as number;

	const defaults = ItemOptionMap.Burger.default;

	const meatDelta = Math.max(
		(options[Option.Meat] as CountOptionInstance).count - defaults.Meat.count,
		0,
	);
	const cheeseDelta = Math.max(
		(options[Option.Cheese] as CountOptionInstance).count -
			defaults.Cheese.count,
		0,
	);

	if (options[Option.Burger].flags?.[OptionFlag.AnimalStyle]) {
		price += prices.misc.AnimalStyle;
	}

	price += meatDelta * prices.misc.Meat;
	price += cheeseDelta * prices.misc.Cheese;

	return price;
};

export const getBurgerCalories = (id: MenuItemKey, options: SkuOptions) => {
	let numCalories = calories.base[id];

	const defaults = ItemOptionMap.Burger.default;

	const meatDelta = Math.max(
		(options[Option.Meat] as CountOptionInstance).count - defaults.Meat.count,
		0,
	);
	const cheeseDelta = Math.max(
		(options[Option.Cheese] as CountOptionInstance).count -
			defaults.Cheese.count,
		0,
	);

	if (options[Option.Burger].flags?.[OptionFlag.AnimalStyle]) {
		numCalories += calories.misc.AnimalStyle;
	}

	if (
		options[Option.Bun].value === OptionValue.ProteinStyle ||
		options[Option.Bun].value === OptionValue.None
	) {
		numCalories += calories.misc.ProteinStyle;
	}

	numCalories += meatDelta * calories.misc.Meat;
	numCalories += cheeseDelta * calories.misc.Cheese;

	return numCalories;
};
