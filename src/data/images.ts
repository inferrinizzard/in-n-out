import type { SkuKey } from "./sku";

export const ImageData = {
	// Items
	DblDblCombo: require("@images/menu/DblDblCombo.png"),
	CheeseburgerCombo: require("@images/menu/CheeseburgerCombo.png"),
	HamburgerCombo: require("@images/menu/HamburgerCombo.png"),
	DblDbl: require("@images/menu/DblDbl.png"),
	Cheeseburger: require("@images/menu/Cheeseburger.png"),
	Hamburger: require("@images/menu/Hamburger.png"),
	Fries: require("@images/menu/Fries.png"),
	SoftDrink: require("@images/menu/SoftDrink.png"),
	Coffee: require("@images/menu/Coffee.png"),
	Milk: require("@images/menu/Milk.png"),
	Shake: require("@images/menu/Shake.png"),
	HotCocoa: require("@images/menu/HotCocoa.png"),

	// Misc
	"7up": require("@images/menu/7up.png"),
	Bun: require("@images/menu/Buns.jpg"),
	Cheese: require("@images/menu/Cheese.jpg"),
	ChocolateShake: require("@images/menu/ChocolateShake.png"),
	Coke: require("@images/menu/Coke.png"),
	IcedTea: require("@images/menu/IcedTea.png"),
	Lettuce: require("@images/menu/Lettuce.jpg"),
	Onions: require("@images/menu/Onion.jpg"),
	PinkLemonade: require("@images/menu/PinkLemonade.png"),
	Spread: require("@images/menu/Spread.jpg"),
	StrawberryShake: require("@images/menu/StrawberryShake.png"),
	Tomato: require("@images/menu/Tomato.jpg"),
	VanillaShake: require("@images/menu/VanillaShake.png"),

	// TEMP
	Meat: require("@images/temp/meat_TEMP.jpg"),
	GrilledOnions: require("@images/temp/grilled_onions_TEMP.jpg"),
	Pickles: require("@images/temp/pickles_TEMP.webp"),
	Chilis: require("@images/temp/chilis_TEMP.jpg"),

	AnimalStyle: require("@images/temp/AnimalStyle_TEMP.jpg"),
	ProteinStyle: require("@images/temp/ProteinStyle_TEMP.jpg"),
	"3X3": require("@images/temp/3X3_TEMP.jpg"),
	"4X4": require("@images/temp/4X4_TEMP.jpg"),
	AnimalFries: require("@images/temp/AnimalFries_TEMP.jpg"),
	FlyingDutchman: require("@images/temp/FlyingDutchman_TEMP.jpg"),
	WishBurger: require("@images/temp/WishBurger_TEMP.jpg"),
	PupPatty: require("@images/temp/PupPatty_TEMP.jpg"),

	Stickers: require("@images/temp/Stickers_TEMP.jpg"),
	PaperHat: require("@images/temp/PaperHat_TEMP.jpg"),
	GiftCard: require("@images/temp/GiftCard_TEMP.jpeg"),
};

ImageData satisfies Partial<Record<SkuKey, unknown>>;
