import {
	DrinkOption,
	type DrinkOptionKey,
	Option,
	OptionFlag,
	OptionValue,
	ShakeOption,
	type ShakeOptionKey,
} from "./consts";

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

export const OptionConfigMap = Object.freeze({
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
		count: true,
		options: [OptionValue.MediumRare, OptionValue.Medium, OptionValue.WellDone],
		flags: [OptionFlag.NoSalt, OptionFlag.MustardGrilled],
	},
	[Option.Cheese]: {
		count: true,
		flags: [OptionFlag.ColdCheese],
	},
	[Option.Shake]: {
		options: Object.keys(ShakeOption) as ShakeOptionKey[],
	},
	[Option.Drink]: {
		options: Object.keys(DrinkOption) as DrinkOptionKey[],
	},
} as const);
