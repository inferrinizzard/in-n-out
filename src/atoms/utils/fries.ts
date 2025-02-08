import calories from "@data/calories";
import prices from "@data/prices";

interface FriesParams {
	addCheese?: boolean;
	animalStyle?: boolean;
}

export const getFriesPrice = ({ addCheese, animalStyle }: FriesParams) => {
	let price = prices.base.Fries;

	if (addCheese) {
		price += prices.misc.Cheese;
	}

	if (animalStyle) {
		price += prices.misc.AnimalStyle;
	}

	return price;
};

export const getFriesCalories = ({ addCheese, animalStyle }: FriesParams) => {
	let numCalories = calories.base.Fries;

	if (addCheese) {
		numCalories += calories.misc.Cheese;
	}

	if (animalStyle) {
		numCalories += calories.misc.AnimalStyle;
	}

	return numCalories;
};
