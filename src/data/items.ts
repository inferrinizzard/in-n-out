import { Topping, ToppingOption, type ToppingKey } from "./customisations/keys";
import type { ToppingValue } from "./toppings";

export const Item = Object.freeze({
	Burger: "Burger",
	Fries: "French Fries",
	Drink: "Drink",
	Shake: "Shake",
	Stickers: "Stickers",
	PaperHat: "PaperHat",
	GiftCard: "GiftCard",
} as const);

export type ItemKey = keyof typeof Item;

export const ItemToppingMap = Object.freeze({
	[Item.Burger]: {
		options: [
			Topping.Meat,
			Topping.Cheese,
			Topping.Onions,
			Topping.GrilledOnions,
			Topping.Lettuce,
			Topping.Tomato,
			Topping.Pickles,
			Topping.Chilis,
			Topping.Spread,
			Topping.Bun,
			Topping.Burger,
		],
		default: {
			[Topping.Meat]: { count: 1, value: ToppingOption.Regular },
			[Topping.Cheese]: { count: 1, value: ToppingOption.Regular },
			[Topping.Lettuce]: { value: ToppingOption.Regular },
			[Topping.Tomato]: { value: ToppingOption.Regular },
			[Topping.Spread]: { value: ToppingOption.Regular },
			[Topping.Bun]: { value: ToppingOption.Regular },
		},
	},
	[Item.Fries]: {
		options: [Topping.Doneness, Topping.Fries],
		default: {
			[Topping.Doneness]: { value: ToppingOption.Medium },
			[Topping.Fries]: { value: ToppingOption.Regular },
		},
	},
	[Item.Drink]: {
		options: [Topping.Size, Topping.Shake],
		default: {
			[Topping.Size]: { value: ToppingOption.Medium },
		},
	},
	[Item.Shake]: {
		options: [Topping.Size, Topping.Shake],
		default: {
			[Topping.Size]: { value: ToppingOption.Medium },
		},
	},
});

ItemToppingMap satisfies Partial<
	Record<
		ItemKey,
		{
			options: ToppingKey[];
			default: Partial<Record<ToppingKey, ToppingValue>>;
		}
	>
>;
