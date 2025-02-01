// prices from: https://mobile-cuisine.com/menu/in-n-out-burger-prices/

// https://americanmenuprices.com/in-n-out-burger-menu-prices-usa/

import { Topping } from "./customisations/keys";
import { MenuCombo, MenuItem } from "./menu";
import type { SkuId } from "./types";

const BasePriceData = Object.freeze({
	[MenuItem.DblDbl]: 3.95,
	[MenuItem.Cheeseburger]: 2.8,
	[MenuItem.Hamburger]: 2.5,
	[MenuItem.Fries]: 1.85,
	[MenuItem.SoftDrink]: 1.8, // medium
	[MenuItem.Coffee]: 1.35,
	[MenuItem.Milk]: 0.99,
	[MenuItem.Shake]: 2.5,
	[MenuItem.HotCocoa]: 2.1,
} as const);

const PriceData = Object.freeze({
	...BasePriceData,
	[MenuCombo.DblDblCombo]:
		BasePriceData.DblDbl + BasePriceData.Fries + BasePriceData.SoftDrink,
	[MenuCombo.CheeseburgerCombo]:
		BasePriceData.Cheeseburger + BasePriceData.Fries + BasePriceData.SoftDrink,
	[MenuCombo.HamburgerCombo]:
		BasePriceData.Hamburger + BasePriceData.Fries + BasePriceData.SoftDrink,
} as const);

const MiscPriceData = Object.freeze({
	[Topping.Meat]:
		BasePriceData.DblDbl -
		(BasePriceData.Cheeseburger +
			(BasePriceData.Cheeseburger - BasePriceData.Hamburger)),
	[Topping.Cheese]: BasePriceData.Cheeseburger - BasePriceData.Hamburger,
	SoftDrinkSmall: 1.65,
	SoftDrinkMedium: 1.8,
	SoftDrinkLarge: 2.0,
	SoftDrinkXtraLarge: 2.2,
	AnimalStyle: 1,
} as const);

PriceData satisfies Record<SkuId, number>;

export default {
	base: PriceData,
	misc: MiscPriceData,
};
