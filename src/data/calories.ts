import { Option, OptionValue } from "./options";
import { MenuItem, MenuCombo } from "./menu";
import type { SkuId } from "./types";

const BaseCaloriesData = Object.freeze({
	[MenuItem.DblDbl]: 610,
	[MenuItem.Cheeseburger]: 430,
	[MenuItem.Hamburger]: 360,
	[MenuItem.Fries]: 360,
	[MenuItem.SoftDrink]: 190, // medium
	[MenuItem.Coffee]: 0,
	[MenuItem.Milk]: 150,
	[MenuItem.Shake]: 600,
	[MenuItem.HotCocoa]: 160,
	[MenuItem.Stickers]: 0,
	[MenuItem.PaperHat]: 0,
	[MenuItem.GiftCard]: 0,
} as const);

const MiscCaloriesData = Object.freeze({
	[Option.Meat]:
		BaseCaloriesData.DblDbl -
		(BaseCaloriesData.Cheeseburger +
			(BaseCaloriesData.Cheeseburger - BaseCaloriesData.Hamburger)),
	[Option.Cheese]: BaseCaloriesData.Cheeseburger - BaseCaloriesData.Hamburger,
	[`${MenuItem.SoftDrink}${OptionValue.Small}`]: 130,
	[`${MenuItem.SoftDrink}${OptionValue.Medium}`]: 190,
	[`${MenuItem.SoftDrink}${OptionValue.Large}`]: 270,
	[`${MenuItem.SoftDrink}${OptionValue.XtraLarge}`]: 350,
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
	[MenuItem.AnimalFries]: BaseCaloriesData.Fries + MiscCaloriesData.AnimalStyle,
	[MenuItem.GrilledCheese]:
		BaseCaloriesData.Cheeseburger - MiscCaloriesData.Meat,
	[MenuItem.DoubleMeat]: BaseCaloriesData.Hamburger + MiscCaloriesData.Meat,
	[MenuItem.FlyingDutchman]:
		MiscCaloriesData.Meat * 2 + MiscCaloriesData.Cheese * 2,
	[MenuItem["3X3"]]:
		BaseCaloriesData.DblDbl + MiscCaloriesData.Meat + MiscCaloriesData.Cheese,
	[MenuItem["4X4"]]:
		BaseCaloriesData.DblDbl +
		MiscCaloriesData.Meat * 2 +
		MiscCaloriesData.Cheese * 2,
	[MenuItem.WishBurger]: BaseCaloriesData.Hamburger - MiscCaloriesData.Meat,
	[MenuItem.PupPatty]: MiscCaloriesData.Meat,
	[MenuItem.ProteinStyle]: BaseCaloriesData.Cheeseburger,
	[MenuItem.AnimalStyle]:
		BaseCaloriesData.Cheeseburger + MiscCaloriesData.AnimalStyle,
} as const);

CaloriesData satisfies Record<SkuId, number>;

export default {
	base: CaloriesData,
	misc: MiscCaloriesData,
};
