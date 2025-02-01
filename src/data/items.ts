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
