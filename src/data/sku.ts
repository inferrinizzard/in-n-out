import { Item, type ItemKey } from "./items";
import {
	Option,
	OptionValue,
	OptionFlag,
	type OptionKey,
	type OptionInstance,
} from "./options";

export const Sku = Object.freeze({
	DblDbl: "DblDbl",
	Cheeseburger: "Cheeseburger",
	Hamburger: "Hamburger",
	Fries: "Fries",
	SoftDrink: "SoftDrink",
	Shake: "Shake",
	Coffee: "Coffee",
	Milk: "Milk",
	HotCocoa: "HotCocoa",
	AnimalStyle: "AnimalStyle",
	ProteinStyle: "ProteinStyle",
	"3X3": "3X3",
	"4X4": "4X4",
	AnimalFries: "AnimalFries",
	GrilledCheese: "GrilledCheese",
	DoubleMeat: "DoubleMeat",
	FlyingDutchman: "FlyingDutchman",
	WishBurger: "WishBurger",
	PupPatty: "PupPatty",
	Stickers: "Stickers",
	PaperHat: "PaperHat",
	GiftCard: "GiftCard",
	Merch: "Merch",
} as const);

export type SkuKey = keyof typeof Sku;

export const SkuItemMap = Object.freeze({
	[Sku.DblDbl]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: { count: 2, value: OptionValue.Medium },
			[Option.Cheese]: { count: 2, value: OptionValue.Regular },
		},
		subtext: "Double Meat, Double Cheese",
	},
	[Sku.Cheeseburger]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: { count: 1, value: OptionValue.Medium },
			[Option.Cheese]: { count: 1, value: OptionValue.Regular },
		},
	},
	[Sku.Hamburger]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: { count: 1, value: OptionValue.Medium },
			[Option.Cheese]: { count: 0, value: OptionValue.Regular },
		},
	},
	[Sku.Fries]: {
		id: Item.Fries,
		supertext: "Fresh",
	},
	[Sku.SoftDrink]: {
		id: Item.Drink,
	},
	[Sku.Shake]: {
		id: Item.Shake,
	},

	[Sku.Coffee]: {
		id: Item.Drink,
		override: {
			[Option.Size]: { value: OptionValue.Small },
		},
	},
	[Sku.Milk]: {
		id: Item.Drink,
		override: {
			[Option.Size]: { value: OptionValue.Small },
		},
	},
	[Sku.HotCocoa]: {
		id: Item.Drink,
		override: {
			[Option.Size]: { value: OptionValue.Small },
		},
	},

	[Sku.AnimalStyle]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: {
				count: 1,
				value: OptionValue.Medium,
				flags: { [OptionFlag.MustardGrilled]: true },
			},
			[Option.Cheese]: { count: 1, value: OptionValue.Regular },
			[Option.Pickles]: { value: OptionValue.Regular },
			[Option.GrilledOnions]: { value: OptionValue.Regular },
			[Option.Burger]: { flags: { [OptionFlag.AnimalStyle]: true } },
		},
	},
	[Sku.ProteinStyle]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: { count: 1, value: OptionValue.Medium },
			[Option.Cheese]: { count: 1, value: OptionValue.Regular },
			[Option.Bun]: { value: OptionValue.ProteinStyle },
		},
	},
	[Sku["3X3"]]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: { count: 3, value: OptionValue.Medium },
			[Option.Cheese]: { count: 3, value: OptionValue.Regular },
		},
	},
	[Sku["4X4"]]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: { count: 4, value: OptionValue.Medium },
			[Option.Cheese]: { count: 4, value: OptionValue.Regular },
		},
	},
	[Sku.AnimalFries]: {
		id: Item.Fries,
		override: {
			[Option.Fries]: { flags: { [OptionFlag.AnimalStyle]: true } },
		},
	},
	[Sku.GrilledCheese]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: { count: 0, value: OptionValue.Medium },
			[Option.Cheese]: { count: 1, value: OptionValue.Regular },
		},
	},
	[Sku.DoubleMeat]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: { count: 2, value: OptionValue.Medium },
			[Option.Cheese]: { count: 0, value: OptionValue.Regular },
		},
	},
	[Sku.FlyingDutchman]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: { count: 2, value: OptionValue.Medium },
			[Option.Cheese]: { count: 2, value: OptionValue.Regular },
			[Option.Bun]: { value: OptionValue.None },
		},
	},
	[Sku.WishBurger]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: { count: 0, value: OptionValue.Medium },
			[Option.Cheese]: { count: 0, value: OptionValue.Regular },
		},
	},
	[Sku.PupPatty]: {
		id: Item.Burger,
		override: {
			[Option.Meat]: { count: 1, value: OptionValue.Medium },
			[Option.Cheese]: { count: 0, value: OptionValue.Regular },
			[Option.Lettuce]: { value: OptionValue.None },
			[Option.Tomato]: { value: OptionValue.None },
			[Option.Spread]: { value: OptionValue.None },
			[Option.Bun]: { value: OptionValue.None },
			[Option.Burger]: { flags: { [OptionFlag.NoSalt]: true } },
		},
	},

	[Sku.Stickers]: {
		id: Item.Misc,
	},
	[Sku.PaperHat]: {
		id: Item.Misc,
	},
	[Sku.GiftCard]: {
		id: Item.Misc,
	},
	[Sku.Merch]: {
		id: Item.Misc,
	},
} as const);

// SkuItemMap satisfies Record<
// 	SkuKey,
// 	{ id: ItemKey; override?: Partial<Record<OptionKey, OptionInstance>> }
// >;
