import { CategoryKey, FlagKey, OptionKey } from "@src/consts";
import { Item } from "../items";

export const Menu = Object.freeze({
	Main: "MenuMain",
	HotDrink: "HotDrink",
	SecretMenu: "SecretMenu",
	Extra: "Extra",
} as const);

export const MenuItem = Object.freeze({
	DblDbl: "DblDbl",
	CheeseBurger: "CheeseBurger",
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

export const MenuData = Object.freeze({
	[Menu.Main]: {
		[MenuItem.DblDbl]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 2, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 2, value: OptionKey.Regular },
			},
		},
		[MenuItem.CheeseBurger]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 1, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 1, value: OptionKey.Regular },
			},
		},
		[MenuItem.Hamburger]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 1, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 0, value: OptionKey.Regular },
			},
		},
		[MenuItem.Fries]: {
			id: Item.Fries,
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
		},
		[MenuItem.Milk]: {
			id: Item.Drink,
		},
		[MenuItem.HotCocoa]: {
			id: Item.Drink,
		},
	},
	[Menu.SecretMenu]: {
		[MenuItem.AnimalStyle]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 1, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 1, value: OptionKey.Regular },
				[CategoryKey.Burger]: { flags: { [FlagKey.AnimalStyle]: true } },
			},
		},
		[MenuItem.ProteinStyle]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 1, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 1, value: OptionKey.Regular },
				[CategoryKey.Bun]: { value: OptionKey.ProteinStyle },
			},
		},
		[MenuItem["3X3"]]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 3, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 3, value: OptionKey.Regular },
			},
		},
		[MenuItem["4X4"]]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 4, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 4, value: OptionKey.Regular },
			},
		},
		[MenuItem.AnimalFries]: {
			id: Item.Fries,
			override: {
				[CategoryKey.Fries]: { flags: { [FlagKey.AnimalStyle]: true } },
			},
		},
		[MenuItem.GrilledCheese]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 0, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 1, value: OptionKey.Regular },
			},
		},
		[MenuItem.DoubleMeat]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 2, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 0, value: OptionKey.Regular },
			},
		},
		[MenuItem.FlyingDutchman]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 2, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 2, value: OptionKey.Regular },
				[CategoryKey.Bun]: { value: OptionKey.None },
			},
		},
		[MenuItem.WishBurger]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 0, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 0, value: OptionKey.Regular },
			},
		},
		[MenuItem.PupPatty]: {
			id: Item.Burger,
			override: {
				[CategoryKey.Meat]: { count: 1, value: OptionKey.Regular },
				[CategoryKey.Cheese]: { count: 0, value: OptionKey.Regular },
				[CategoryKey.Lettuce]: { value: OptionKey.None },
				[CategoryKey.Tomato]: { value: OptionKey.None },
				[CategoryKey.Spread]: { value: OptionKey.None },
				[CategoryKey.Bun]: { value: OptionKey.None },
				[CategoryKey.Burger]: { flags: { [FlagKey.NoSalt]: true } },
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
