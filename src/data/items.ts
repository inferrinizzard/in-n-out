import { Option, OptionValue, type OptionKey } from "./options";
import type { OptionInstance } from "./options";

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
			[Option.Meat]: { count: 1, value: OptionValue.Regular },
			[Option.Cheese]: { count: 1, value: OptionValue.Regular },
			[Option.Onions]: { value: OptionValue.Regular },
			[Option.Lettuce]: { value: OptionValue.Regular },
			[Option.Tomato]: { value: OptionValue.Regular },
			[Option.Spread]: { value: OptionValue.Regular },
			[Option.Bun]: { value: OptionValue.Regular },

			[Option.GrilledOnions]: { value: OptionValue.None },
			[Option.Pickles]: { value: OptionValue.None },
			[Option.Chilis]: { value: OptionValue.None },
		},
	},
	[Item.Fries]: {
		options: [Option.Doneness, Option.Fries],
		default: {
			[Option.Doneness]: { value: OptionValue.Medium },
			[Option.Fries]: { value: OptionValue.Regular },
		},
	},
	[Item.Drink]: {
		options: [Option.Size, Option.Shake],
		default: {
			[Option.Size]: { value: OptionValue.Medium },
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
			default: Partial<Record<OptionKey, OptionInstance>>;
		}
	>
>;
