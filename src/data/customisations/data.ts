import { FlagsKeys, CategoryKeys, OptionsKeys } from "../../consts";

import { type CustomisationNode, type CustomisationOption } from "./types";

export const DrinkSizes = [
	OptionsKeys.Small,
	OptionsKeys.Medium,
	OptionsKeys.Large,
	OptionsKeys.XtraLarge,
] as const;
export type DrinkSize = (typeof DrinkSizes)[number];

export const StandardToppingAmounts = [
	OptionsKeys.None,
	OptionsKeys.Lite,
	OptionsKeys.Regular,
	OptionsKeys.Xtra,
] as const;
export type ToppingAmount = (typeof StandardToppingAmounts)[number];

export const BunOptions = [
	OptionsKeys.None,
	OptionsKeys.LiteToast,
	OptionsKeys.Regular,
	OptionsKeys.XtraToast,
	OptionsKeys.ProteinStyle,
] as const;
export type BunOption = (typeof BunOptions)[number];

export const FriesDonenesses = [
	OptionsKeys.LiteFry,
	OptionsKeys.Regular,
	OptionsKeys.LiteWell,
	OptionsKeys.WellDone,
	OptionsKeys.XtraWellDone,
] as const;
export type FriesDoneness = (typeof FriesDonenesses)[number];

export const NumericCustomisation = [0, 1, 2, 3] as const;
export type NumericCustomisationValue = (typeof NumericCustomisation)[number];

export const CustomisationData = Object.freeze({
	[CategoryKeys.Onions]: {
		type: "enum",
		default: OptionsKeys.None as ToppingAmount,
		options: StandardToppingAmounts,
		flags: [FlagsKeys.Chopped],
	},
	[CategoryKeys.GrilledOnions]: {
		type: "enum",
		default: OptionsKeys.None as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[CategoryKeys.Lettuce]: {
		type: "enum",
		default: OptionsKeys.Regular as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[CategoryKeys.Tomato]: {
		type: "enum",
		default: OptionsKeys.Regular as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[CategoryKeys.Pickles]: {
		type: "enum",
		default: OptionsKeys.None as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[CategoryKeys.Chilis]: {
		type: "enum",
		default: OptionsKeys.None as ToppingAmount,
		options: StandardToppingAmounts,
	},
	[CategoryKeys.Spread]: {
		type: "enum",
		default: OptionsKeys.Regular as ToppingAmount,
		options: StandardToppingAmounts,
		flags: [FlagsKeys.AddKetchup, FlagsKeys.AddMustard],
	},
	[CategoryKeys.Bun]: {
		type: "enum",
		default: OptionsKeys.Regular as BunOption,
		options: BunOptions,
	},
	[CategoryKeys.Doneness]: {
		type: "enum",
		default: OptionsKeys.Regular as FriesDoneness,
		options: FriesDonenesses,
	},
	[CategoryKeys.Size]: {
		type: "enum",
		default: OptionsKeys.Medium as DrinkSize,
		options: DrinkSizes,
	},
	[CategoryKeys.Burger]: {
		type: "flags",
		default: "",
		options: [],
		flags: [FlagsKeys.AnimalStyle, FlagsKeys.CutInHalf],
	},
	[CategoryKeys.Fries]: {
		type: "flags",
		default: "",
		options: [],
		flags: [FlagsKeys.NoSalt, FlagsKeys.AddCheese, FlagsKeys.AnimalStyle],
	},
	[CategoryKeys.Meat]: {
		type: "number",
		default: 0,
		options: NumericCustomisation,
		flags: [
			FlagsKeys.NoSalt,
			FlagsKeys.MustardGrilled,
			FlagsKeys.MediumRare,
			FlagsKeys.WellDone,
		],
	},
	[CategoryKeys.Cheese]: {
		type: "number",
		default: 0,
		options: NumericCustomisation,
		flags: [FlagsKeys.ColdCheese],
	},
	[CategoryKeys.Shake]: {
		type: "flags",
		default: "",
		options: [],
		flags: [FlagsKeys.Chocolate, FlagsKeys.Vanilla, FlagsKeys.Strawberry],
	},
	[CategoryKeys.SecretShake]: {
		type: "flags",
		default: "",
		options: [],
		flags: [FlagsKeys.BlackWhite, FlagsKeys.Neopolitan],
	},
} as const);

CustomisationData satisfies Record<string, CustomisationOption>;

export const CustomisationTree = Object.freeze({
	Burger: {
		base: [CategoryKeys.Onions],
		more: [
			CategoryKeys.Meat,
			CategoryKeys.Cheese,
			CategoryKeys.GrilledOnions,
			CategoryKeys.Lettuce,
			CategoryKeys.Tomato,
			CategoryKeys.Pickles,
			CategoryKeys.Chilis,
			CategoryKeys.Spread,
			CategoryKeys.Bun,
			CategoryKeys.Burger,
		],
	},
	Fries: {
		base: [CategoryKeys.Doneness],
		more: [CategoryKeys.Fries],
	},
	Drink: {
		base: [CategoryKeys.Size],
	},
	Shake: {
		base: [CategoryKeys.Shake],
		more: [CategoryKeys.SecretShake],
	},
} as const);

CustomisationTree satisfies Record<string, CustomisationNode>;
