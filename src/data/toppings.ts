import {
	BunOptions,
	DrinkSizes,
	FriesDonenesses,
	StandardOptionAmounts,
} from "./customisations/data";
import {
	Option,
	OptionFlag,
	type OptionKey,
	OptionValue,
} from "./customisations/keys";

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
