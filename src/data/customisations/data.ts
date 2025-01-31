import { FlagKey, CategoryKey, OptionKey } from "../../consts";

import type { CustomisationNode, CustomisationOption } from "./types";

export const DrinkSizes = [
	OptionKey.Small,
	OptionKey.Medium,
	OptionKey.Large,
	OptionKey.XtraLarge,
] as const;
export type DrinkSize = (typeof DrinkSizes)[number];

export const StandardToppingAmounts = [
	OptionKey.None,
	OptionKey.Lite,
	OptionKey.Regular,
	OptionKey.Xtra,
] as const;
export type ToppingAmount = (typeof StandardToppingAmounts)[number];

export const BunOptions = [
	OptionKey.None,
	OptionKey.Untoasted,
	OptionKey.LiteToast,
	OptionKey.Regular,
	OptionKey.XtraToast,
	OptionKey.ProteinStyle,
] as const;
export type BunOption = (typeof BunOptions)[number];

export const FriesDonenesses = [
	OptionKey.LiteFry,
	OptionKey.Regular,
	OptionKey.LiteWell,
	OptionKey.WellDone,
	OptionKey.XtraWellDone,
] as const;
export type FriesDoneness = (typeof FriesDonenesses)[number];

export const NumericCustomisation = [0, 1, 2, 3] as const;
export type NumericCustomisationValue = (typeof NumericCustomisation)[number];

export const CustomisationData = Object.freeze({
	[CategoryKey.Onions]: {
		type: "enum",
		default: OptionKey.None as ToppingAmount,
		options: StandardToppingAmounts,
		flags: [FlagKey.Chopped],
	},
	[CategoryKey.GrilledOnions]: {
		type: "enum",
		default: OptionKey.None as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[CategoryKey.Lettuce]: {
		type: "enum",
		default: OptionKey.Regular as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[CategoryKey.Tomato]: {
		type: "enum",
		default: OptionKey.Regular as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[CategoryKey.Pickles]: {
		type: "enum",
		default: OptionKey.None as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[CategoryKey.Chilis]: {
		type: "enum",
		default: OptionKey.None as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[CategoryKey.Spread]: {
		type: "enum",
		default: OptionKey.Regular as ToppingAmount,
		options: StandardToppingAmounts,
		flags: [FlagKey.AddKetchup, FlagKey.AddMustard],
	},
	[CategoryKey.Bun]: {
		type: "enum",
		default: OptionKey.Regular as BunOption,
		options: BunOptions,
	},
	[CategoryKey.Doneness]: {
		type: "enum",
		default: OptionKey.Regular as FriesDoneness,
		options: FriesDonenesses,
	},
	[CategoryKey.Size]: {
		type: "enum",
		default: OptionKey.Medium as DrinkSize,
		options: DrinkSizes,
	},
	[CategoryKey.Burger]: {
		type: "flags",
		default: "",
		options: [],
		flags: [FlagKey.AnimalStyle, FlagKey.CutInHalf],
	},
	[CategoryKey.Fries]: {
		type: "flags",
		default: "",
		options: [],
		flags: [FlagKey.NoSalt, FlagKey.AddCheese, FlagKey.AnimalStyle],
	},
	[CategoryKey.Meat]: {
		type: "number",
		default: 0,
		options: NumericCustomisation,
		flags: [
			FlagKey.NoSalt,
			FlagKey.MustardGrilled,
			FlagKey.MediumRare,
			FlagKey.WellDone,
		],
	},
	[CategoryKey.Cheese]: {
		type: "number",
		default: 0,
		options: NumericCustomisation,
		flags: [FlagKey.ColdCheese],
	},
	[CategoryKey.Shake]: {
		type: "flags",
		default: "",
		options: [],
		flags: [
			FlagKey.Chocolate,
			FlagKey.Vanilla,
			FlagKey.Strawberry,
			FlagKey.BlackWhite,
			FlagKey.Neopolitan,
		],
	},
} as const);

CustomisationData satisfies Record<string, CustomisationOption>;

export const CustomisationTree = Object.freeze({
	Burger: {
		base: [CategoryKey.Onions],
		more: [
			CategoryKey.Meat,
			CategoryKey.Cheese,
			CategoryKey.GrilledOnions,
			CategoryKey.Lettuce,
			CategoryKey.Tomato,
			CategoryKey.Pickles,
			CategoryKey.Chilis,
			CategoryKey.Spread,
			CategoryKey.Bun,
			CategoryKey.Burger,
		],
	},
	Fries: {
		base: [CategoryKey.Doneness],
		more: [CategoryKey.Fries],
	},
	Drink: {
		base: [CategoryKey.Size],
	},
	Shake: {
		base: [CategoryKey.Shake],
	},
} as const);

CustomisationTree satisfies Record<string, CustomisationNode>;

export interface MeatOption {
	count: number;
	doneness:
		| typeof OptionKey.MediumRare
		| typeof OptionKey.Medium
		| typeof OptionKey.WellDone;
	flags: {
		[FlagKey.NoSalt]?: boolean;
		[FlagKey.MustardGrilled]?: boolean;
	};
}

// meat
// - struct for options
// - interface for types
// - object for defaults
