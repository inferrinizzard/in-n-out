import calories from "@data/calories";
import { Item } from "@data/items";
import { MenuItemIdMap, type MenuItemKey } from "@data/menu";
import prices from "@data/prices";

import type { SkuOptions } from "../types";
import { getBurgerCalories, getBurgerPrice } from "./burger";
import { getFriesCalories, getFriesPrice } from "./fries";
import { getDrinkCalories, getDrinkPrice } from "./drink";

export const isBurger = (id: MenuItemKey) => MenuItemIdMap[id] === Item.Burger;
export const isFries = (id: MenuItemKey) => MenuItemIdMap[id] === Item.Fries;
export const isDrink = (id: MenuItemKey) => MenuItemIdMap[id] === Item.Drink;
export const isShake = (id: MenuItemKey) => MenuItemIdMap[id] === Item.Shake;

export const isVariable = (id: MenuItemKey) =>
	isBurger(id) || isFries(id) || isDrink(id) || isShake(id);

export const getPrice = (id: MenuItemKey, options: SkuOptions): number => {
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

export const getCalories = (id: MenuItemKey, options: SkuOptions) => {
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
