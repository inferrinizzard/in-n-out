import { Item } from "@data/items";
import { SkuItemMap, type SkuKey } from "@data/sku";
import calories from "@data/calories";
import prices from "@data/prices";

import type { SkuOptions } from "../types";
import { getBurgerCalories, getBurgerPrice } from "./burger";
import { getFriesCalories, getFriesPrice } from "./fries";
import { getDrinkCalories, getDrinkPrice } from "./drink";

export const isBurger = (id: SkuKey) => SkuItemMap[id].id === Item.Burger;
export const isFries = (id: SkuKey) => SkuItemMap[id].id === Item.Fries;
export const isDrink = (id: SkuKey) => SkuItemMap[id].id === Item.Drink;
export const isShake = (id: SkuKey) => SkuItemMap[id].id === Item.Shake;

export const isVariable = (id: SkuKey) =>
	isBurger(id) || isFries(id) || isDrink(id) || isShake(id);

export const getPrice = (id: SkuKey, options: SkuOptions): number => {
	if (!isVariable(id)) {
		return prices.base[id];
	}

	if (isBurger(id)) {
		return getBurgerPrice(id, options);
	}

	if (isFries(id)) {
		return getFriesPrice(options);
	}

	if (isDrink(id) || isShake(id)) {
		return getDrinkPrice(id, options);
	}

	throw new Error(`Unknown price: ${id}`);
};

export const getCalories = (id: SkuKey, options: SkuOptions) => {
	if (!isVariable(id)) {
		return calories.base[id];
	}

	if (isBurger(id)) {
		return getBurgerCalories(id, options);
	}

	if (isFries(id)) {
		return getFriesCalories(options);
	}

	if (isDrink(id) || isShake(id)) {
		return getDrinkCalories(id, options);
	}

	throw new Error(`Unknown calories: ${id}`);
};
