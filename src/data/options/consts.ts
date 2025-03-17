export const OptionFlag = Object.freeze({
	Chopped: "Chopped",
	AddKetchup: "AddKetchup",
	AddMustard: "AddMustard",
	AnimalStyle: "AnimalStyle",
	CutInHalf: "CutInHalf",
	NoSalt: "NoSalt",
	AddCheese: "AddCheese",
	MustardGrilled: "MustardGrilled",
	ColdCheese: "ColdCheese",
} as const);

export type OptionFlagKey = keyof typeof OptionFlag;

export const OptionValue = Object.freeze({
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

export type OptionValueKey = keyof typeof OptionValue;

export const Option = Object.freeze({
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
	Drink: "Drink",
	Shake: "Shake",
	Float: "Float",
} as const);

export type OptionKey = keyof typeof Option;

export const ShakeOption = Object.freeze({
	Chocolate: "Chocolate",
	Vanilla: "Vanilla",
	Strawberry: "Strawberry",
	BlackWhite: "BlackWhite",
	Neapolitan: "Neapolitan",
} as const);

export type ShakeOptionKey = keyof typeof ShakeOption;

export const DrinkOption = Object.freeze({
	Coke: "Coke",
	DietCoke: "DietCoke",
	CherryCoke: "CherryCoke",
	SevenUp: "SevenUp",
	DrPepper: "DrPepper",
	RootBeer: "RootBeer",
	PinkLemonade: "PinkLemonade",
	LitePinkLemonade: "LitePinkLemonade",
	SweetIcedTea: "SweetIcedTea",
	IcedTea: "IcedTea",
	ArnoldPalmer: "ArnoldPalmer",
	LemonUp: "LemonUp",
} as const);

export type DrinkOptionKey = keyof typeof DrinkOption;
