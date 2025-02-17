import { Sku, type SkuKey } from "./sku";

export const Menu = Object.freeze({
	Main: "Main",
	HotDrink: "HotDrink",
	SecretMenu: "SecretMenu",
	Extra: "Extra",
} as const);

export type MenuKey = keyof typeof Menu;

export const MenuSkuMap = Object.freeze({
	[Menu.Main]: {
		items: [
			{ sku: Sku.DblDbl, subtext: "Double Meat, Double Cheese" },
			{ sku: Sku.Cheeseburger },
			{ sku: Sku.Hamburger },
			{ sku: Sku.Fries, supertext: "Fresh" },
			{ sku: Sku.SoftDrink },
			{ sku: Sku.Shake },
		],
	},
	[Menu.HotDrink]: {
		items: [{ sku: Sku.Coffee }, { sku: Sku.Milk }, { sku: Sku.HotCocoa }],
	},
	[Menu.SecretMenu]: {
		supertext: "Not So",
		items: [
			{
				sku: Sku.AnimalStyle,
				subtext: "Mustard Grilled, Pickles, Extra Spread",
			},
			{ sku: Sku.ProteinStyle, subtext: "Wrapped in lettuce instead of a Bun" },
			{ sku: Sku["3X3"], subtext: "Triple Meat, Triple Cheese" },
			{ sku: Sku["4X4"], subtext: "Quad Meat, Quad Cheese" },
			{ sku: Sku.AnimalFries, subtext: "Topped with Classic Spread" },
			{ sku: Sku.GrilledCheese },
			{ sku: Sku.DoubleMeat },
			{
				sku: Sku.FlyingDutchman,
				subtext: "2 Slices of Cheese between 2 Patties",
			},
			{ sku: Sku.WishBurger, subtext: "No Meat, No Cheese" },
			{ sku: Sku.PupPatty, subtext: "No Salt Patty for your dog" },
		],
	},
	[Menu.Extra]: {
		items: [
			{ sku: Sku.Stickers },
			{ sku: Sku.PaperHat },
			{ sku: Sku.GiftCard },
		],
	},
} as const);

export type MenuSkuConfig = {
	sku: SkuKey;
	supertext?: string;
	subtext?: string;
};

MenuSkuMap satisfies Record<MenuKey, { items: readonly MenuSkuConfig[] }>;

export const MenuCombo = Object.freeze({
	DblDblCombo: "DblDblCombo",
	CheeseburgerCombo: "CheeseburgerCombo",
	HamburgerCombo: "HamburgerCombo",
} as const);

export type MenuComboKey = keyof typeof MenuCombo;

export const MenuComboMap = Object.freeze({
	[MenuCombo.DblDblCombo]: [Sku.DblDbl, Sku.Fries, Sku.SoftDrink],
	[MenuCombo.CheeseburgerCombo]: [Sku.Cheeseburger, Sku.Fries, Sku.SoftDrink],
	[MenuCombo.HamburgerCombo]: [Sku.Hamburger, Sku.Fries, Sku.SoftDrink],
} as const);
