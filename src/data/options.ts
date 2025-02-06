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
	Chocolate: "Chocolate",
	Vanilla: "Vanilla",
	Strawberry: "Strawberry",
	BlackWhite: "BlackWhite",
	Neopolitan: "Neopolitan",
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

export type OptionOptionKey = keyof typeof OptionValue;

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
	Shake: "Shake",
} as const);

export type OptionKey = keyof typeof Option;

export const DrinkSizes = [
	OptionValue.Small,
	OptionValue.Medium,
	OptionValue.Large,
	OptionValue.XtraLarge,
] as const;
export type DrinkSize = (typeof DrinkSizes)[number];

export const StandardOptionAmounts = [
	OptionValue.None,
	OptionValue.Lite,
	OptionValue.Regular,
	OptionValue.Xtra,
] as const;
export type OptionAmount = (typeof StandardOptionAmounts)[number];

export const BunOptions = [
	OptionValue.None,
	OptionValue.Untoasted,
	OptionValue.LiteToast,
	OptionValue.Regular,
	OptionValue.XtraToast,
	OptionValue.ProteinStyle,
] as const;
export type BunOption = (typeof BunOptions)[number];

export const FriesDonenesses = [
	OptionValue.LiteFry,
	OptionValue.Regular,
	OptionValue.LiteWell,
	OptionValue.WellDone,
	OptionValue.XtraWellDone,
] as const;
export type FriesDoneness = (typeof FriesDonenesses)[number];

export interface OptionConfig<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> {
	options: Options;
	flags?: Flags;
}

export interface OptionInstance<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> {
	value: Options[number];
	flags?: { [F in Flags[number]]?: boolean };
}

export interface CountOptionInstance<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> extends OptionInstance<Options, Flags> {
	count: number;
}

export const OptionOptionMap = Object.freeze({
	[Option.Onions]: {
		options: StandardOptionAmounts,
		flags: [OptionFlag.Chopped],
	},
	[Option.GrilledOnions]: {
		options: StandardOptionAmounts,
	},
	[Option.Lettuce]: {
		options: StandardOptionAmounts,
	},
	[Option.Tomato]: {
		options: StandardOptionAmounts,
	},
	[Option.Pickles]: {
		options: StandardOptionAmounts,
	},
	[Option.Chilis]: {
		options: StandardOptionAmounts,
	},
	[Option.Spread]: {
		options: StandardOptionAmounts,
		flags: [OptionFlag.AddKetchup, OptionFlag.AddMustard],
	},
	[Option.Bun]: {
		options: BunOptions,
	},
	[Option.Doneness]: {
		options: FriesDonenesses,
	},
	[Option.Size]: {
		options: DrinkSizes,
	},
	[Option.Burger]: {
		options: [],
		flags: [OptionFlag.AnimalStyle, OptionFlag.CutInHalf],
	},
	[Option.Fries]: {
		options: [
			OptionValue.Regular,
			OptionFlag.AddCheese,
			OptionFlag.AnimalStyle,
		],
		flags: [OptionFlag.NoSalt],
	},
	[Option.Meat]: {
		options: [OptionValue.MediumRare, OptionValue.Medium, OptionValue.WellDone],
		flags: [OptionFlag.NoSalt, OptionFlag.MustardGrilled],
	},
	[Option.Cheese]: {
		options: [],
		flags: [OptionFlag.ColdCheese],
	},
	[Option.Shake]: {
		options: [],
		flags: [
			OptionFlag.Chocolate,
			OptionFlag.Vanilla,
			OptionFlag.Strawberry,
			OptionFlag.BlackWhite,
			OptionFlag.Neopolitan,
		],
	},
} as const);

OptionOptionMap satisfies Record<
	OptionKey,
	OptionConfig<readonly string[], readonly string[]>
>;
