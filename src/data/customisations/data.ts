import { ToppingFlag, Topping, ToppingOption } from "./keys";

import type { CustomisationNode, CustomisationOption } from "./types";

export const DrinkSizes = [
	ToppingOption.Small,
	ToppingOption.Medium,
	ToppingOption.Large,
	ToppingOption.XtraLarge,
] as const;
export type DrinkSize = (typeof DrinkSizes)[number];

export const StandardToppingAmounts = [
	ToppingOption.None,
	ToppingOption.Lite,
	ToppingOption.Regular,
	ToppingOption.Xtra,
] as const;
export type ToppingAmount = (typeof StandardToppingAmounts)[number];

export const BunOptions = [
	ToppingOption.None,
	ToppingOption.Untoasted,
	ToppingOption.LiteToast,
	ToppingOption.Regular,
	ToppingOption.XtraToast,
	ToppingOption.ProteinStyle,
] as const;
export type BunOption = (typeof BunOptions)[number];

export const FriesDonenesses = [
	ToppingOption.LiteFry,
	ToppingOption.Regular,
	ToppingOption.LiteWell,
	ToppingOption.WellDone,
	ToppingOption.XtraWellDone,
] as const;
export type FriesDoneness = (typeof FriesDonenesses)[number];

export const NumericCustomisation = [0, 1, 2, 3] as const;
export type NumericCustomisationValue = (typeof NumericCustomisation)[number];

export const CustomisationData = Object.freeze({
	[Topping.Onions]: {
		type: "enum",
		default: ToppingOption.None as ToppingAmount,
		options: StandardToppingAmounts,
		flags: [ToppingFlag.Chopped],
	},
	[Topping.GrilledOnions]: {
		type: "enum",
		default: ToppingOption.None as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[Topping.Lettuce]: {
		type: "enum",
		default: ToppingOption.Regular as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[Topping.Tomato]: {
		type: "enum",
		default: ToppingOption.Regular as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[Topping.Pickles]: {
		type: "enum",
		default: ToppingOption.None as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[Topping.Chilis]: {
		type: "enum",
		default: ToppingOption.None as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[Topping.Spread]: {
		type: "enum",
		default: ToppingOption.Regular as ToppingAmount,
		options: StandardToppingAmounts,
		flags: [ToppingFlag.AddKetchup, ToppingFlag.AddMustard],
	},
	[Topping.Bun]: {
		type: "enum",
		default: ToppingOption.Regular as BunOption,
		options: BunOptions,
	},
	[Topping.Doneness]: {
		type: "enum",
		default: ToppingOption.Regular as FriesDoneness,
		options: FriesDonenesses,
	},
	[Topping.Size]: {
		type: "enum",
		default: ToppingOption.Medium as DrinkSize,
		options: DrinkSizes,
	},
	[Topping.Burger]: {
		type: "flags",
		default: "",
		options: [],
		flags: [ToppingFlag.AnimalStyle, ToppingFlag.CutInHalf],
	},
	[Topping.Fries]: {
		type: "flags",
		default: "",
		options: [],
		flags: [ToppingFlag.NoSalt, ToppingFlag.AddCheese, ToppingFlag.AnimalStyle],
	},
	[Topping.Meat]: {
		type: "number",
		default: 0,
		options: NumericCustomisation,
		flags: [
			ToppingFlag.NoSalt,
			ToppingFlag.MustardGrilled,
			ToppingFlag.MediumRare,
			ToppingFlag.WellDone,
		],
	},
	[Topping.Cheese]: {
		type: "number",
		default: 0,
		options: NumericCustomisation,
		flags: [ToppingFlag.ColdCheese],
	},
	[Topping.Shake]: {
		type: "flags",
		default: "",
		options: [],
		flags: [
			ToppingFlag.Chocolate,
			ToppingFlag.Vanilla,
			ToppingFlag.Strawberry,
			ToppingFlag.BlackWhite,
			ToppingFlag.Neopolitan,
		],
	},
} as const);

CustomisationData satisfies Record<string, CustomisationOption>;

export const CustomisationTree = Object.freeze({
	Burger: {
		base: [Topping.Onions],
		more: [
			Topping.Meat,
			Topping.Cheese,
			Topping.GrilledOnions,
			Topping.Lettuce,
			Topping.Tomato,
			Topping.Pickles,
			Topping.Chilis,
			Topping.Spread,
			Topping.Bun,
			Topping.Burger,
		],
	},
	Fries: {
		base: [Topping.Doneness],
		more: [Topping.Fries],
	},
	Drink: {
		base: [Topping.Size],
	},
	Shake: {
		base: [Topping.Shake],
	},
} as const);

CustomisationTree satisfies Record<string, CustomisationNode>;

export interface MeatOption {
	count: number;
	doneness:
		| typeof ToppingOption.MediumRare
		| typeof ToppingOption.Medium
		| typeof ToppingOption.WellDone;
	flags: {
		[ToppingFlag.NoSalt]?: boolean;
		[ToppingFlag.MustardGrilled]?: boolean;
	};
}

// meat
// - struct for options
// - interface for types
// - object for defaults
