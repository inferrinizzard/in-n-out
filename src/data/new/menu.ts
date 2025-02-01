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
			preset: {
				meat: 2,
				cheese: 2,
			},
		},
		[MenuItem.CheeseBurger]: {
			id: Item.Burger,
			preset: {
				meat: 1,
				cheese: 1,
			},
		},
		[MenuItem.Hamburger]: {
			id: Item.Burger,
			preset: {
				meat: 1,
				cheese: 0,
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
			preset: {
				meat: 1,
				cheese: 1,
				animalStyle: true,
			},
		},
		[MenuItem.ProteinStyle]: {
			id: Item.Burger,
			preset: {
				meat: 1,
				cheese: 1,
				bun: "lettuce",
			},
		},
		[MenuItem["3X3"]]: {
			id: Item.Burger,
			preset: {
				meat: 3,
				cheese: 3,
			},
		},
		[MenuItem["4X4"]]: {
			id: Item.Burger,
			preset: {
				meat: 4,
				cheese: 4,
			},
		},
		[MenuItem.AnimalFries]: {
			id: Item.Fries,
			preset: { animalStyle: true },
		},
		[MenuItem.GrilledCheese]: {
			id: Item.Burger,
			preset: {
				meat: 0,
				cheese: 1,
			},
		},
		[MenuItem.DoubleMeat]: {
			id: Item.Burger,
			preset: {
				meat: 2,
				cheese: 0,
			},
		},
		[MenuItem.FlyingDutchman]: {
			id: Item.Burger,
			preset: {
				meat: 2,
				cheese: 2,
				bun: "none",
			},
		},
		[MenuItem.WishBurger]: {
			id: Item.Burger,
			preset: {
				meat: 0,
				cheese: 0,
			},
		},
		[MenuItem.PupPatty]: {
			id: Item.Burger,
			preset: {
				meat: 1,
				cheese: 0,
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
