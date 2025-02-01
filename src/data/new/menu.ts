import { Topping, ToppingFlag, ToppingOption } from "@src/consts";
import { Item } from "../items";

export const Menu = Object.freeze({
	Main: "MenuMain",
	HotDrink: "HotDrink",
	SecretMenu: "SecretMenu",
	Extra: "Extra",
} as const);

export type MenuKey = keyof typeof Menu;

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

export type MenuItemKey = keyof typeof MenuItem;

export const MenuItemMap = Object.freeze({
	[Menu.Main]: {
		[MenuItem.DblDbl]: {
			id: Item.Burger,
			override: {
				[Topping.Meat]: { count: 2, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 2, value: ToppingOption.Regular },
			},
		},
		[MenuItem.CheeseBurger]: {
			id: Item.Burger,
			override: {
				[Topping.Meat]: { count: 1, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 1, value: ToppingOption.Regular },
			},
		},
		[MenuItem.Hamburger]: {
			id: Item.Burger,
			override: {
				[Topping.Meat]: { count: 1, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 0, value: ToppingOption.Regular },
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
				[Topping.Meat]: { count: 1, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 1, value: ToppingOption.Regular },
				[Topping.Burger]: { flags: { [ToppingFlag.AnimalStyle]: true } },
			},
		},
		[MenuItem.ProteinStyle]: {
			id: Item.Burger,
			override: {
				[Topping.Meat]: { count: 1, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 1, value: ToppingOption.Regular },
				[Topping.Bun]: { value: ToppingOption.ProteinStyle },
			},
		},
		[MenuItem["3X3"]]: {
			id: Item.Burger,
			override: {
				[Topping.Meat]: { count: 3, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 3, value: ToppingOption.Regular },
			},
		},
		[MenuItem["4X4"]]: {
			id: Item.Burger,
			override: {
				[Topping.Meat]: { count: 4, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 4, value: ToppingOption.Regular },
			},
		},
		[MenuItem.AnimalFries]: {
			id: Item.Fries,
			override: {
				[Topping.Fries]: { flags: { [ToppingFlag.AnimalStyle]: true } },
			},
		},
		[MenuItem.GrilledCheese]: {
			id: Item.Burger,
			override: {
				[Topping.Meat]: { count: 0, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 1, value: ToppingOption.Regular },
			},
		},
		[MenuItem.DoubleMeat]: {
			id: Item.Burger,
			override: {
				[Topping.Meat]: { count: 2, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 0, value: ToppingOption.Regular },
			},
		},
		[MenuItem.FlyingDutchman]: {
			id: Item.Burger,
			override: {
				[Topping.Meat]: { count: 2, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 2, value: ToppingOption.Regular },
				[Topping.Bun]: { value: ToppingOption.None },
			},
		},
		[MenuItem.WishBurger]: {
			id: Item.Burger,
			override: {
				[Topping.Meat]: { count: 0, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 0, value: ToppingOption.Regular },
			},
		},
		[MenuItem.PupPatty]: {
			id: Item.Burger,
			override: {
				[Topping.Meat]: { count: 1, value: ToppingOption.Regular },
				[Topping.Cheese]: { count: 0, value: ToppingOption.Regular },
				[Topping.Lettuce]: { value: ToppingOption.None },
				[Topping.Tomato]: { value: ToppingOption.None },
				[Topping.Spread]: { value: ToppingOption.None },
				[Topping.Bun]: { value: ToppingOption.None },
				[Topping.Burger]: { flags: { [ToppingFlag.NoSalt]: true } },
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
