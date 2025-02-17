// prices from: https://mobile-cuisine.com/menu/in-n-out-burger-prices/

// https://americanmenuprices.com/in-n-out-burger-menu-prices-usa/

import { MenuCombo } from "./menu";
import { Option, OptionValue } from "./options";
import { Sku, type SkuKey } from "./sku";

const BasePriceData = Object.freeze({
	[Sku.DblDbl]: 3.95,
	[Sku.Cheeseburger]: 2.8,
	[Sku.Hamburger]: 2.5,
	[Sku.Fries]: 1.85,
	[Sku.SoftDrink]: 1.8, // medium
	[Sku.Coffee]: 1.35,
	[Sku.Milk]: 0.99,
	[Sku.Shake]: 2.5,
	[Sku.HotCocoa]: 2.1,
	[Sku.Stickers]: 0,
	[Sku.PaperHat]: 0,
	[Sku.GiftCard]: 0,
	[Sku.Merch]: 0,
} as const);

const MiscPriceData = Object.freeze({
	[Option.Meat]:
		BasePriceData.DblDbl -
		(BasePriceData.Cheeseburger +
			(BasePriceData.Cheeseburger - BasePriceData.Hamburger)),
	[Option.Cheese]: BasePriceData.Cheeseburger - BasePriceData.Hamburger,
	[`${Sku.SoftDrink}${OptionValue.Small}`]: 1.65,
	[`${Sku.SoftDrink}${OptionValue.Medium}`]: 1.8,
	[`${Sku.SoftDrink}${OptionValue.Large}`]: 2.0,
	[`${Sku.SoftDrink}${OptionValue.XtraLarge}`]: 2.2,
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
	[Sku.AnimalFries]: BasePriceData.Fries + MiscPriceData.AnimalStyle,
	[Sku.GrilledCheese]: BasePriceData.Cheeseburger - MiscPriceData.Meat,
	[Sku.DoubleMeat]: BasePriceData.Hamburger + MiscPriceData.Meat,
	[Sku.FlyingDutchman]: MiscPriceData.Meat * 2 + MiscPriceData.Cheese * 2,
	[Sku["3X3"]]:
		BasePriceData.DblDbl + MiscPriceData.Meat + MiscPriceData.Cheese,
	[Sku["4X4"]]:
		BasePriceData.DblDbl + MiscPriceData.Meat * 2 + MiscPriceData.Cheese * 2,
	[Sku.WishBurger]: BasePriceData.Hamburger - MiscPriceData.Meat,
	[Sku.PupPatty]: MiscPriceData.Meat,
	[Sku.ProteinStyle]: BasePriceData.Cheeseburger,
	[Sku.AnimalStyle]: BasePriceData.Cheeseburger + MiscPriceData.AnimalStyle,
} as const);

PriceData satisfies Record<SkuKey, number>;

export default {
	base: PriceData,
	misc: MiscPriceData,
};
