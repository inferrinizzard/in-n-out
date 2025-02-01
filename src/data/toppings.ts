import {
	BunOptions,
	DrinkSizes,
	FriesDonenesses,
	StandardToppingAmounts,
} from "./customisations/data";
import {
	Topping,
	ToppingFlag,
	type ToppingKey,
	ToppingOption,
} from "./customisations/keys";

export interface ToppingConfig<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> {
	options: Options;
	flags?: Flags;
}

export interface ToppingValue<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> {
	value: Options[number];
	flags?: { [F in Flags[number]]?: boolean };
}

export interface CountToppingValue<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> extends ToppingValue<Options, Flags> {
	count: number;
}

export const ToppingOptionMap = Object.freeze({
	[Topping.Onions]: {
		options: StandardToppingAmounts,
		flags: [ToppingFlag.Chopped],
	},
	[Topping.GrilledOnions]: {
		options: StandardToppingAmounts,
	},
	[Topping.Lettuce]: {
		options: StandardToppingAmounts,
	},
	[Topping.Tomato]: {
		options: StandardToppingAmounts,
	},
	[Topping.Pickles]: {
		options: StandardToppingAmounts,
	},
	[Topping.Chilis]: {
		options: StandardToppingAmounts,
	},
	[Topping.Spread]: {
		options: StandardToppingAmounts,
		flags: [ToppingFlag.AddKetchup, ToppingFlag.AddMustard],
	},
	[Topping.Bun]: {
		options: BunOptions,
	},
	[Topping.Doneness]: {
		options: FriesDonenesses,
	},
	[Topping.Size]: {
		options: DrinkSizes,
	},
	[Topping.Burger]: {
		options: [],
		flags: [ToppingFlag.AnimalStyle, ToppingFlag.CutInHalf],
	},
	[Topping.Fries]: {
		options: [
			ToppingOption.Regular,
			ToppingFlag.AddCheese,
			ToppingFlag.AnimalStyle,
		],
		flags: [ToppingFlag.NoSalt],
	},
	[Topping.Meat]: {
		options: [
			ToppingOption.MediumRare,
			ToppingOption.Medium,
			ToppingOption.WellDone,
		],
		flags: [ToppingFlag.NoSalt, ToppingFlag.MustardGrilled],
	},
	[Topping.Cheese]: {
		options: [],
		flags: [ToppingFlag.ColdCheese],
	},
	[Topping.Shake]: {
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

ToppingOptionMap satisfies Record<
	ToppingKey,
	ToppingConfig<readonly string[], readonly string[]>
>;
