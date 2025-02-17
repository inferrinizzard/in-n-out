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
			{ sku: Sku.AnimalStyle },
			{ sku: Sku.ProteinStyle },
			{ sku: Sku["3X3"] },
			{ sku: Sku["4X4"] },
			{ sku: Sku.AnimalFries },
			{ sku: Sku.GrilledCheese },
			{ sku: Sku.DoubleMeat },
			{ sku: Sku.FlyingDutchman },
			{ sku: Sku.WishBurger },
			{ sku: Sku.PupPatty },
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
