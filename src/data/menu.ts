import { Item } from "./items";

export const Menu = Object.freeze({
	Main: "MenuMain",
	HotDrink: "HotDrink",
	SecretMenu: "SecretMenu",
	Extra: "Extra",
} as const);

export const MenuData2 = Object.freeze({
	[Menu.Main]: {
		DblDbl: {
			id: Item.Burger,
			preset: {
				meat: 2,
				cheese: 2,
			},
		},
		CheeseBurger: {
			id: Item.Burger,
			preset: {
				meat: 1,
				cheese: 1,
			},
		},
		Hamburger: {
			id: Item.Burger,
			preset: {
				meat: 1,
				cheese: 0,
			},
		},
		Fries: {
			id: Item.Fries,
		},
		SoftDrink: {
			id: Item.Drink,
		},
		Shake: {
			id: Item.Shake,
		},
	},
	[Menu.HotDrink]: {
		Coffee: {
			id: Item.Drink,
		},
		Milk: {
			id: Item.Drink,
		},
		HotCocoa: {
			id: Item.Drink,
		},
	},
	[Menu.SecretMenu]: {
		AnimalStyle: {
			id: Item.Burger,
			preset: {
				meat: 1,
				cheese: 1,
				animalStyle: true,
			},
		},
		ProteinStyle: {
			id: Item.Burger,
			preset: {
				meat: 1,
				cheese: 1,
				bun: "lettuce",
			},
		},
		"3X3": {
			id: Item.Burger,
			preset: {
				meat: 3,
				cheese: 3,
			},
		},
		"4X4": {
			id: Item.Burger,
			preset: {
				meat: 4,
				cheese: 4,
			},
		},
		AnimalFries: {
			id: Item.Fries,
			preset: { animalStyle: true },
		},
		GrilledCheese: {
			id: Item.Burger,
			preset: {
				meat: 0,
				cheese: 1,
			},
		},
		DoubleMeat: {
			id: Item.Burger,
			preset: {
				meat: 2,
				cheese: 0,
			},
		},
		FlyingDutchman: {
			id: Item.Burger,
			preset: {
				meat: 2,
				cheese: 2,
				bun: "none",
			},
		},
		WishBurger: {
			id: Item.Burger,
			preset: {
				meat: 0,
				cheese: 0,
			},
		},
		PupPatty: {
			id: Item.Burger,
			preset: {
				meat: 1,
				cheese: 0,
			},
		},
	},
	[Menu.Extra]: {
		Stickers: {
			id: Item.Stickers,
		},
		PaperHat: {
			id: Item.PaperHat,
		},
		GiftCard: {
			id: Item.GiftCard,
		},
		Merch: {
			// id: Item.Merch,
		},
	},
} as const);

const MenuData = Object.freeze({
	DblDblCombo: {
		id: "DblDblCombo",
		name: "Double-Double Combo",
		has: ["DblDbl", "Fries", "SoftDrink"],
	},
	CheeseburgerCombo: {
		id: "CheeseburgerCombo",
		name: "Cheeseburger Combo",
		has: ["Cheeseburger", "Fries", "SoftDrink"],
	},
	HamburgerCombo: {
		id: "HamburgerCombo",
		name: "Hamburger Combo",
		has: ["Hamburger", "Fries", "SoftDrink"],
	},
	DblDbl: {
		id: "DblDbl",
		name: "Double-Double",
		has: ["DblDbl"],
	},
	Cheeseburger: {
		id: "Cheeseburger",
		name: "Cheeseburger",
		has: ["Cheeseburger"],
	},
	Hamburger: {
		id: "Hamburger",
		name: "Hamburger",
		has: ["Hamburger"],
	},
	Fries: {
		id: "Fries",
		name: "French Fries",
		has: ["Fries"],
	},
	SoftDrink: {
		id: "SoftDrink",
		name: "Soft Drink",
		has: ["SoftDrink"],
	},
	Coffee: {
		id: "Coffee",
		name: "Coffee",
		has: ["Coffee"],
	},
	Milk: {
		id: "Milk",
		name: "Milk",
		has: ["Milk"],
	},
	Shake: {
		id: "Shake",
		name: "Milk Shake",
		has: ["Shake"],
	},
	HotCocoa: {
		id: "HotCocoa",
		name: "Hot Cocoa",
		has: ["HotCocoa"],
	},
} as const);

export default MenuData;
