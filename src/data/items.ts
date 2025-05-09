import type { ValueOf } from "@src/types/util";

import {
	Option,
	OptionFlag,
	type OptionInstance,
	type OptionKey,
	OptionValue,
} from "./options";

export const Item = Object.freeze({
	Burger: "Burger",
	Fries: "Fries",
	Drink: "Drink",
	Shake: "Shake",
	Misc: "Misc",
} as const);

export type ItemKey = keyof typeof Item;

export const ItemOptionMap = Object.freeze({
	[Item.Burger]: {
		options: [
			Option.Meat,
			Option.Cheese,
			Option.Onions,
			Option.GrilledOnions,
			Option.Lettuce,
			Option.Tomato,
			Option.Pickles,
			Option.Chilis,
			Option.Spread,
			Option.Bun,
			Option.Burger,
		],
		default: {
			[Option.Meat]: { count: 1, value: OptionValue.Medium },
			[Option.Cheese]: { count: 1 },
			[Option.Onions]: { value: OptionValue.Regular },
			[Option.Lettuce]: { value: OptionValue.Regular },
			[Option.Tomato]: { value: OptionValue.Regular },
			[Option.Spread]: { value: OptionValue.Regular },
			[Option.Bun]: { value: OptionValue.Regular },

			[Option.GrilledOnions]: { value: OptionValue.None },
			[Option.Pickles]: { value: OptionValue.None },
			[Option.Chilis]: { value: OptionValue.None },
			[Option.Burger]: {
				flags: {
					[OptionFlag.AnimalStyle]: false,
					[OptionFlag.CutInHalf]: false,
				},
			},
		},
	},
	[Item.Fries]: {
		options: [Option.Fries, Option.Doneness],
		default: {
			[Option.Doneness]: { value: OptionValue.Regular },
			[Option.Fries]: { value: OptionValue.Regular },
		},
	},
	[Item.Drink]: {
		options: [Option.Size, Option.Drink, Option.Float],
		default: {
			[Option.Size]: { value: OptionValue.Medium },
			[Option.Float]: { value: OptionValue.None },
		},
	},
	[Item.Shake]: {
		options: [Option.Size, Option.Shake],
		default: {
			[Option.Size]: { value: OptionValue.Medium },
		},
	},
});

ItemOptionMap satisfies Partial<
	Record<
		ItemKey,
		{
			options: OptionKey[];
			default: Partial<{ [O in OptionKey]: Partial<OptionInstance<O>> }>;
		}
	>
>;

export type ItemConfig = ValueOf<typeof ItemOptionMap>;
