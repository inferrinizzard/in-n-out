import { Option, OptionFlag, OptionValue } from "./options";
import { Item } from "./items";

export const Menu = Object.freeze({
	Main: "Main",
	HotDrink: "HotDrink",
	SecretMenu: "SecretMenu",
	Extra: "Extra",
} as const);

export type MenuKey = keyof typeof Menu;

export const MenuItem = Object.freeze({
	DblDbl: "DblDbl",
	Cheeseburger: "Cheeseburger",
	Hamburger: "Hamburger",
	Fries: "Fries",
	SoftDrink: "SoftDrink",
	Shake: "Shake",
	Coffee: "Coffee",
	Milk: "Milk",
	HotCocoa: "HotCocoa",
	AnimalStyle: "AnimalStyle",
	ProteinStyle: "ProteinStyle",
	"3X3": "3X3",
	"4X4": "4X4",
	AnimalFries: "AnimalFries",
	GrilledCheese: "GrilledCheese",
	DoubleMeat: "DoubleMeat",
	FlyingDutchman: "FlyingDutchman",
	WishBurger: "WishBurger",
	PupPatty: "PupPatty",
	Stickers: "Stickers",
	PaperHat: "PaperHat",
	GiftCard: "GiftCard",
} as const);

export type MenuItemKey = keyof typeof MenuItem;

export const MenuItemMap = Object.freeze({
	[Menu.Main]: {
		[MenuItem.DblDbl]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 2, value: OptionValue.Regular },
				[Option.Cheese]: { count: 2, value: OptionValue.Regular },
			},
			subtext: "Double Meat, Double Cheese",
		},
		[MenuItem.Cheeseburger]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 1, value: OptionValue.Regular },
				[Option.Cheese]: { count: 1, value: OptionValue.Regular },
			},
		},
		[MenuItem.Hamburger]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 1, value: OptionValue.Regular },
				[Option.Cheese]: { count: 0, value: OptionValue.Regular },
			},
		},
		[MenuItem.Fries]: {
			id: Item.Fries,
			supertext: "Fresh",
		},
		[MenuItem.SoftDrink]: {
			id: Item.Drink,
		},
		[MenuItem.Shake]: {
			id: Item.Shake,
		},
	},
	[Menu.HotDrink]: {
		[MenuItem.Coffee]: {
			id: Item.Drink,
			override: {
				[Option.Size]: { value: OptionValue.Small },
			},
		},
		[MenuItem.Milk]: {
			id: Item.Drink,
			override: {
				[Option.Size]: { value: OptionValue.Small },
			},
		},
		[MenuItem.HotCocoa]: {
			id: Item.Drink,
			override: {
				[Option.Size]: { value: OptionValue.Small },
			},
		},
	},
	[Menu.SecretMenu]: {
		[MenuItem.AnimalStyle]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 1, value: OptionValue.Regular },
				[Option.Cheese]: { count: 1, value: OptionValue.Regular },
				[Option.Burger]: { flags: { [OptionFlag.AnimalStyle]: true } },
			},
		},
		[MenuItem.ProteinStyle]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 1, value: OptionValue.Regular },
				[Option.Cheese]: { count: 1, value: OptionValue.Regular },
				[Option.Bun]: { value: OptionValue.ProteinStyle },
			},
		},
		[MenuItem["3X3"]]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 3, value: OptionValue.Regular },
				[Option.Cheese]: { count: 3, value: OptionValue.Regular },
			},
		},
		[MenuItem["4X4"]]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 4, value: OptionValue.Regular },
				[Option.Cheese]: { count: 4, value: OptionValue.Regular },
			},
		},
		[MenuItem.AnimalFries]: {
			id: Item.Fries,
			override: {
				[Option.Fries]: { flags: { [OptionFlag.AnimalStyle]: true } },
			},
		},
		[MenuItem.GrilledCheese]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 0, value: OptionValue.Regular },
				[Option.Cheese]: { count: 1, value: OptionValue.Regular },
			},
		},
		[MenuItem.DoubleMeat]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 2, value: OptionValue.Regular },
				[Option.Cheese]: { count: 0, value: OptionValue.Regular },
			},
		},
		[MenuItem.FlyingDutchman]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 2, value: OptionValue.Regular },
				[Option.Cheese]: { count: 2, value: OptionValue.Regular },
				[Option.Bun]: { value: OptionValue.None },
			},
		},
		[MenuItem.WishBurger]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 0, value: OptionValue.Regular },
				[Option.Cheese]: { count: 0, value: OptionValue.Regular },
			},
		},
		[MenuItem.PupPatty]: {
			id: Item.Burger,
			override: {
				[Option.Meat]: { count: 1, value: OptionValue.Regular },
				[Option.Cheese]: { count: 0, value: OptionValue.Regular },
				[Option.Lettuce]: { value: OptionValue.None },
				[Option.Tomato]: { value: OptionValue.None },
				[Option.Spread]: { value: OptionValue.None },
				[Option.Bun]: { value: OptionValue.None },
				[Option.Burger]: { flags: { [OptionFlag.NoSalt]: true } },
			},
		},
	},
	[Menu.Extra]: {
		[MenuItem.Stickers]: {
			id: Item.Stickers,
		},
		[MenuItem.PaperHat]: {
			id: Item.PaperHat,
		},
		[MenuItem.GiftCard]: {
			id: Item.GiftCard,
		},
		Merch: {
			// id: Item.Merch,
		},
	},
} as const);

export const MenuCombo = Object.freeze({
	DblDblCombo: "DblDblCombo",
	CheeseburgerCombo: "CheeseburgerCombo",
	HamburgerCombo: "HamburgerCombo",
} as const);

export type MenuComboKey = keyof typeof MenuCombo;

export const MenuComboMap = Object.freeze({
	[MenuCombo.DblDblCombo]: [
		MenuItem.DblDbl,
		MenuItem.Fries,
		MenuItem.SoftDrink,
	],
	[MenuCombo.CheeseburgerCombo]: [
		MenuItem.Cheeseburger,
		MenuItem.Fries,
		MenuItem.SoftDrink,
	],
	[MenuCombo.HamburgerCombo]: [
		MenuItem.Hamburger,
		MenuItem.Fries,
		MenuItem.SoftDrink,
	],
} as const);
