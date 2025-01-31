export const FlagKey = Object.freeze({
	Chopped: "Chopped",
	NoSpread: "NoSpread",
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

export const OptionKey = Object.freeze({
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

export const CategoryKey = Object.freeze({
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

export const CustomisationCopy = Object.freeze({
	Chopped: "Chopped Onions",
	AddKetchup: "Add Ketchup",
	AddMustard: "Add Mustard",
	AnimalStyle: "Animal Style®",
	CutInHalf: "Burger Cut in Half",
	NoSalt: "No Salt",
	AddCheese: "Add Cheese",
	MustardGrilled: "Mustard Grilled Patties",
	MediumRare: "Medium Rare",
	WellDone: "Well Done",
	ColdCheese: "Cold Cheese",
	Chocolate: "Chocolate",
	Vanilla: "Vanilla",
	Strawberry: "Strawberry",
	BlackWhite: "Black & White",
	Neopolitan: "Neopolitan",
	Small: "Small",
	Medium: "Medium",
	Large: "Large",
	XtraLarge: "Extra Large",
	None: "None",
	Lite: "Light",
	Regular: "Regular",
	Xtra: "Extra",
	Untoasted: "Untoasted",
	LiteToast: "Lightly Toasted",
	XtraToast: "Extra Toasted",
	ProteinStyle: "Protein Style®",
	LiteFry: "Light Fry",
	LiteWell: "Light Well",
	XtraWellDone: "Extra Well Done",
	Onions: "Onions",
	GrilledOnions: "Grilled Onions",
	Lettuce: "Lettuce",
	Tomato: "Tomato",
	Pickles: "Pickles",
	Chilis: "Chopped Chilies",
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

CustomisationCopy satisfies Record<
	keyof typeof FlagKey | keyof typeof OptionKey | keyof typeof CategoryKey,
	string
>;
