import { Option, OptionValue } from "./options";
import { MenuCombo } from "./menu";
import { Sku, type SkuKey } from "./sku";

const BaseCaloriesData = Object.freeze({
	[Sku.DblDbl]: 610,
	[Sku.Cheeseburger]: 430,
	[Sku.Hamburger]: 360,
	[Sku.Fries]: 360,
	[Sku.SoftDrink]: 190, // medium
	[Sku.Coffee]: 0,
	[Sku.Milk]: 150,
	[Sku.Shake]: 600,
	[Sku.HotCocoa]: 160,
	[Sku.Stickers]: 0,
	[Sku.PaperHat]: 0,
	[Sku.GiftCard]: 0,
	[Sku.Merch]: 0,
} as const);

const MiscCaloriesData = Object.freeze({
	[Option.Meat]:
		BaseCaloriesData.DblDbl -
		(BaseCaloriesData.Cheeseburger +
			(BaseCaloriesData.Cheeseburger - BaseCaloriesData.Hamburger)),
	[Option.Cheese]: BaseCaloriesData.Cheeseburger - BaseCaloriesData.Hamburger,
	[`${Sku.SoftDrink}${OptionValue.Small}`]: 130,
	[`${Sku.SoftDrink}${OptionValue.Medium}`]: 190,
	[`${Sku.SoftDrink}${OptionValue.Large}`]: 270,
	[`${Sku.SoftDrink}${OptionValue.XtraLarge}`]: 350,
	AnimalStyle: 160,
	ProteinStyle: -100,
} as const);

const CaloriesData = Object.freeze({
	...BaseCaloriesData,
	[MenuCombo.DblDblCombo]:
		BaseCaloriesData.DblDbl +
		BaseCaloriesData.Fries +
		BaseCaloriesData.SoftDrink,
	[MenuCombo.CheeseburgerCombo]:
		BaseCaloriesData.Cheeseburger +
		BaseCaloriesData.Fries +
		BaseCaloriesData.SoftDrink,
	[MenuCombo.HamburgerCombo]:
		BaseCaloriesData.Hamburger +
		BaseCaloriesData.Fries +
		BaseCaloriesData.SoftDrink,
	[Sku.AnimalFries]: BaseCaloriesData.Fries + MiscCaloriesData.AnimalStyle,
	[Sku.GrilledCheese]: BaseCaloriesData.Cheeseburger - MiscCaloriesData.Meat,
	[Sku.DoubleMeat]: BaseCaloriesData.Hamburger + MiscCaloriesData.Meat,
	[Sku.FlyingDutchman]: MiscCaloriesData.Meat * 2 + MiscCaloriesData.Cheese * 2,
	[Sku["3X3"]]:
		BaseCaloriesData.DblDbl + MiscCaloriesData.Meat + MiscCaloriesData.Cheese,
	[Sku["4X4"]]:
		BaseCaloriesData.DblDbl +
		MiscCaloriesData.Meat * 2 +
		MiscCaloriesData.Cheese * 2,
	[Sku.WishBurger]: BaseCaloriesData.Hamburger - MiscCaloriesData.Meat,
	[Sku.PupPatty]: MiscCaloriesData.Meat,
	[Sku.ProteinStyle]: BaseCaloriesData.Cheeseburger,
	[Sku.AnimalStyle]:
		BaseCaloriesData.Cheeseburger + MiscCaloriesData.AnimalStyle,
} as const);

CaloriesData satisfies Record<SkuKey, number>;

export default {
	base: CaloriesData,
	misc: MiscCaloriesData,
};
