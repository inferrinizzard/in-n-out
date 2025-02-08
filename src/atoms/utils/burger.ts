import calories from "@data/calories";
import prices from "@data/prices";
import type { MenuItemKey } from "@data/menu";

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

export const getBurgerPrice = (
	id: MenuItemKey,
	meat: number,
	cheese: number,
) => {
	let price = prices.base[id] as number;

	// const defaults = burgerMeatCheeseDefaults[id]!;

	// const meatDelta = sku.customisations.Meat
	// 	? sku.customisations.Meat.data - defaults.Meat!.data
	// 	: 0;
	// const cheeseDelta = sku.customisations.Cheese
	// 	? sku.customisations.Cheese.data - defaults.Cheese!.data
	// 	: 0;

	// if (sku.customisations.Burger?.flags?.AnimalStyle) {
	// 	price += prices.misc.AnimalStyle;
	// }

	// price += meatDelta * prices.misc.Meat;
	// price += cheeseDelta * prices.misc.Cheese;

	return price;
};

export const getBurgerCalories = (
	id: MenuItemKey,
	meat: number,
	cheese: number,
) => {
	let numCalories = calories.base[id];

	// const defaults = burgerMeatCheeseDefaults[id]!;

	// const meatDelta = sku.customisations.Meat
	// 	? sku.customisations.Meat.data - defaults.Meat!.data
	// 	: 0;
	// const cheeseDelta = sku.customisations.Cheese
	// 	? sku.customisations.Cheese.data - defaults.Cheese!.data
	// 	: 0;

	// if (sku.customisations.Burger?.flags?.AnimalStyle) {
	// 	numCalories += calories.misc.AnimalStyle;
	// }

	// if (sku.customisations.Bun?.data === "ProteinStyle") {
	// 	numCalories += calories.misc.ProteinStyle;
	// }

	// numCalories += meatDelta * calories.misc.Meat;
	// numCalories += cheeseDelta * calories.misc.Cheese;

	return numCalories;
};
