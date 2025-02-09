// prices from: https://mobile-cuisine.com/menu/in-n-out-burger-prices/

// https://americanmenuprices.com/in-n-out-burger-menu-prices-usa/

import { MenuCombo, MenuItem } from "./menu";
import { Option, OptionValue } from "./options";
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
	[MenuItem.Stickers]: 0,
	[MenuItem.PaperHat]: 0,
	[MenuItem.GiftCard]: 0,
} as const);

const MiscPriceData = Object.freeze({
	[Option.Meat]:
		BasePriceData.DblDbl -
		(BasePriceData.Cheeseburger +
			(BasePriceData.Cheeseburger - BasePriceData.Hamburger)),
	[Option.Cheese]: BasePriceData.Cheeseburger - BasePriceData.Hamburger,
	[`${MenuItem.SoftDrink}${OptionValue.Small}`]: 1.65,
	[`${MenuItem.SoftDrink}${OptionValue.Medium}`]: 1.8,
	[`${MenuItem.SoftDrink}${OptionValue.Large}`]: 2.0,
	[`${MenuItem.SoftDrink}${OptionValue.XtraLarge}`]: 2.2,
	AnimalStyle: 1,
} as const);

const PriceData = Object.freeze({
	...BasePriceData,
	[MenuCombo.DblDblCombo]:
		BasePriceData.DblDbl + BasePriceData.Fries + BasePriceData.SoftDrink,
	[MenuCombo.CheeseburgerCombo]:
		BasePriceData.Cheeseburger + BasePriceData.Fries + BasePriceData.SoftDrink,
	[MenuCombo.HamburgerCombo]:
		BasePriceData.Hamburger + BasePriceData.Fries + BasePriceData.SoftDrink,
	[MenuItem.AnimalFries]: BasePriceData.Fries + MiscPriceData.AnimalStyle,
	[MenuItem.GrilledCheese]: BasePriceData.Cheeseburger - MiscPriceData.Meat,
	[MenuItem.DoubleMeat]: BasePriceData.Hamburger + MiscPriceData.Meat,
	[MenuItem.FlyingDutchman]: MiscPriceData.Meat * 2 + MiscPriceData.Cheese * 2,
	[MenuItem["3X3"]]:
		BasePriceData.DblDbl + MiscPriceData.Meat + MiscPriceData.Cheese,
	[MenuItem["4X4"]]:
		BasePriceData.DblDbl + MiscPriceData.Meat * 2 + MiscPriceData.Cheese * 2,
	[MenuItem.WishBurger]: BasePriceData.Hamburger - MiscPriceData.Meat,
	[MenuItem.PupPatty]: MiscPriceData.Meat,
	[MenuItem.ProteinStyle]: BasePriceData.Cheeseburger,
	[MenuItem.AnimalStyle]:
		BasePriceData.Cheeseburger + MiscPriceData.AnimalStyle,
} as const);

PriceData satisfies Record<SkuId, number>;

export default {
	base: PriceData,
	misc: MiscPriceData,
};
