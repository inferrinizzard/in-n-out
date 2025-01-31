import {
	BunOptions,
	DrinkSizes,
	FriesDonenesses,
	StandardToppingAmounts,
} from "./data";
import { CategoryKey, FlagKey, OptionKey } from "./keys";

interface OptionConfig<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> {
	options: Options;
	flags?: Flags;
}

interface OptionValue<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> {
	value: Options[number];
	flags?: { [F in Flags[number]]?: boolean };
}

interface CountOptionValue<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> extends OptionValue<Options, Flags> {
	count: number;
}

export const OptionMap = Object.freeze({
	[CategoryKey.Onions]: {
		options: StandardToppingAmounts,
		flags: [FlagKey.Chopped],
	},
	[CategoryKey.GrilledOnions]: {
		options: StandardToppingAmounts,
	},
	[CategoryKey.Lettuce]: {
		options: StandardToppingAmounts,
	},
	[CategoryKey.Tomato]: {
		options: StandardToppingAmounts,
	},
	[CategoryKey.Pickles]: {
		options: StandardToppingAmounts,
	},
	[CategoryKey.Chilis]: {
		options: StandardToppingAmounts,
	},
	[CategoryKey.Spread]: {
		options: StandardToppingAmounts,
		flags: [FlagKey.NoSpread, FlagKey.AddKetchup, FlagKey.AddMustard],
	},
	[CategoryKey.Bun]: {
		options: BunOptions,
	},
	[CategoryKey.Doneness]: {
		options: FriesDonenesses,
	},
	[CategoryKey.Size]: {
		options: DrinkSizes,
	},
	[CategoryKey.Burger]: {
		options: [],
		flags: [FlagKey.AnimalStyle, FlagKey.CutInHalf],
	},
	[CategoryKey.Fries]: {
		options: [OptionKey.Regular, FlagKey.AddCheese, FlagKey.AnimalStyle],
		flags: [FlagKey.NoSalt],
	},
	[CategoryKey.Meat]: {
		options: [OptionKey.MediumRare, OptionKey.Medium, OptionKey.WellDone],
		flags: [FlagKey.NoSalt, FlagKey.MustardGrilled],
	},
	[CategoryKey.Cheese]: {
		options: [],
		flags: [FlagKey.ColdCheese],
	},
	[CategoryKey.Shake]: {
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

OptionMap satisfies Record<
	keyof typeof CategoryKey,
	OptionConfig<readonly string[], readonly string[]>
>;
