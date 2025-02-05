import { OptionFlag, Option, OptionValue } from "./keys";

import type { CustomisationNode, CustomisationOption } from "./types";

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

export const NumericCustomisation = [0, 1, 2, 3] as const;
export type NumericCustomisationValue = (typeof NumericCustomisation)[number];

export const CustomisationData = Object.freeze({
	[Option.Onions]: {
		type: "enum",
		default: OptionValue.None as OptionAmount,
		options: StandardOptionAmounts,
		flags: [OptionFlag.Chopped],
	},
	[Option.GrilledOnions]: {
		type: "enum",
		default: OptionValue.None as OptionAmount,
		options: StandardOptionAmounts,
	},
	[Option.Lettuce]: {
		type: "enum",
		default: OptionValue.Regular as OptionAmount,
		options: StandardOptionAmounts,
	},
	[Option.Tomato]: {
		type: "enum",
		default: OptionValue.Regular as OptionAmount,
		options: StandardOptionAmounts,
	},
	[Option.Pickles]: {
		type: "enum",
		default: OptionValue.None as OptionAmount,
		options: StandardOptionAmounts,
	},
	[Option.Chilis]: {
		type: "enum",
		default: OptionValue.None as OptionAmount,
		options: StandardOptionAmounts,
	},
	[Option.Spread]: {
		type: "enum",
		default: OptionValue.Regular as OptionAmount,
		options: StandardOptionAmounts,
		flags: [OptionFlag.AddKetchup, OptionFlag.AddMustard],
	},
	[Option.Bun]: {
		type: "enum",
		default: OptionValue.Regular as BunOption,
		options: BunOptions,
	},
	[Option.Doneness]: {
		type: "enum",
		default: OptionValue.Regular as FriesDoneness,
		options: FriesDonenesses,
	},
	[Option.Size]: {
		type: "enum",
		default: OptionValue.Medium as DrinkSize,
		options: DrinkSizes,
	},
	[Option.Burger]: {
		type: "flags",
		default: "",
		options: [],
		flags: [OptionFlag.AnimalStyle, OptionFlag.CutInHalf],
	},
	[Option.Fries]: {
		type: "flags",
		default: "",
		options: [],
		flags: [OptionFlag.NoSalt, OptionFlag.AddCheese, OptionFlag.AnimalStyle],
	},
	[Option.Meat]: {
		type: "number",
		default: 0,
		options: NumericCustomisation,
		flags: [
			OptionFlag.NoSalt,
			OptionFlag.MustardGrilled,
			OptionFlag.MediumRare,
			OptionFlag.WellDone,
		],
	},
	[Option.Cheese]: {
		type: "number",
		default: 0,
		options: NumericCustomisation,
		flags: [OptionFlag.ColdCheese],
	},
	[Option.Shake]: {
		type: "flags",
		default: "",
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

CustomisationData satisfies Record<string, CustomisationOption>;

export const CustomisationTree = Object.freeze({
	Burger: {
		base: [Option.Onions],
		more: [
			Option.Meat,
			Option.Cheese,
			Option.GrilledOnions,
			Option.Lettuce,
			Option.Tomato,
			Option.Pickles,
			Option.Chilis,
			Option.Spread,
			Option.Bun,
			Option.Burger,
		],
	},
	Fries: {
		base: [Option.Doneness],
		more: [Option.Fries],
	},
	Drink: {
		base: [Option.Size],
	},
	Shake: {
		base: [Option.Shake],
	},
} as const);

CustomisationTree satisfies Record<string, CustomisationNode>;

export interface MeatOption {
	count: number;
	doneness:
		| typeof OptionValue.MediumRare
		| typeof OptionValue.Medium
		| typeof OptionValue.WellDone;
	flags: {
		[OptionFlag.NoSalt]?: boolean;
		[OptionFlag.MustardGrilled]?: boolean;
	};
}

// meat
// - struct for options
// - interface for types
// - object for defaults
