export const ToppingFlag = Object.freeze({
	Chopped: "Chopped",
	AddKetchup: "AddKetchup",
	AddMustard: "AddMustard",
	AnimalStyle: "AnimalStyle",
	CutInHalf: "CutInHalf",
	NoSalt: "NoSalt",
	AddCheese: "AddCheese",
	MustardGrilled: "MustardGrilled",
	ColdCheese: "ColdCheese",
	Chocolate: "Chocolate",
	Vanilla: "Vanilla",
	Strawberry: "Strawberry",
	BlackWhite: "BlackWhite",
	Neopolitan: "Neopolitan",
} as const);

export type ToppingFlagKey = keyof typeof ToppingFlag;

export const ToppingOption = Object.freeze({
	Small: "Small",
	Medium: "Medium",
	Large: "Large",
	XtraLarge: "XtraLarge",
	None: "None",
	Lite: "Lite",
	Regular: "Regular",
	Xtra: "Xtra",
	Untoasted: "Untoasted",
	LiteToast: "LiteToast",
	XtraToast: "XtraToast",
	ProteinStyle: "ProteinStyle",
	MediumRare: "MediumRare",
	LiteFry: "LiteFry",
	LiteWell: "LiteWell",
	WellDone: "WellDone",
	XtraWellDone: "XtraWellDone",
} as const);

export type ToppingOptionKey = keyof typeof ToppingOption;

export const Topping = Object.freeze({
	Onions: "Onions",
	GrilledOnions: "GrilledOnions",
	Lettuce: "Lettuce",
	Tomato: "Tomato",
	Pickles: "Pickles",
	Chilis: "Chilis",
	Spread: "Spread",
	Bun: "Bun",
	Doneness: "Doneness",
	Size: "Size",
	Burger: "Burger",
	Fries: "Fries",
	Meat: "Meat",
	Cheese: "Cheese",
	Shake: "Shake",
} as const);

export type ToppingKey = keyof typeof Topping;
