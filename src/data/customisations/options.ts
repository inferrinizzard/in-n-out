import {
	BunOptions,
	DrinkSizes,
	FriesDonenesses,
	StandardToppingAmounts,
} from "./data";
import { CategoryKey, FlagKey, OptionKey } from "./keys";
import { Item, type ItemKey } from "../items";

export interface OptionConfig<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> {
	options: Options;
	flags?: Flags;
}

export interface OptionValue<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> {
	value: Options[number];
	flags?: { [F in Flags[number]]?: boolean };
}

export interface CountOptionValue<
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
		flags: [FlagKey.AddKetchup, FlagKey.AddMustard],
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

export const ItemOptions = Object.freeze({
	[Item.Burger]: {
		options: [
			CategoryKey.Meat,
			CategoryKey.Cheese,
			CategoryKey.Onions,
			CategoryKey.GrilledOnions,
			CategoryKey.Lettuce,
			CategoryKey.Tomato,
			CategoryKey.Pickles,
			CategoryKey.Chilis,
			CategoryKey.Spread,
			CategoryKey.Bun,
			CategoryKey.Burger,
		],
		default: {
			[CategoryKey.Meat]: { count: 1, value: OptionKey.Regular },
			[CategoryKey.Cheese]: { count: 1, value: OptionKey.Regular },
			[CategoryKey.Lettuce]: { value: OptionKey.Regular },
			[CategoryKey.Tomato]: { value: OptionKey.Regular },
			[CategoryKey.Spread]: { value: OptionKey.Regular },
			[CategoryKey.Bun]: { value: OptionKey.Regular },
		},
	},
	[Item.Fries]: {
		options: [CategoryKey.Doneness, CategoryKey.Fries],
		default: {
			[CategoryKey.Doneness]: { value: OptionKey.Medium },
			[CategoryKey.Fries]: { value: OptionKey.Regular },
		},
	},
	[Item.Drink]: {
		options: [CategoryKey.Size, CategoryKey.Shake],
		default: {
			[CategoryKey.Size]: { value: OptionKey.Medium },
		},
	},
	[Item.Shake]: {
		options: [CategoryKey.Size, CategoryKey.Shake],
		default: {
			[CategoryKey.Size]: { value: OptionKey.Medium },
		},
	},
});

ItemOptions satisfies Partial<
	Record<
		ItemKey,
		{
			options: (keyof typeof CategoryKey)[];
			default: Partial<Record<keyof typeof CategoryKey, OptionValue>>;
		}
	>
>;
