import type { SkuId } from "./types";

export const ImageUris = Object.freeze({
	DblDblCombo: "",
	CheeseburgerCombo: "",
	HamburgerCombo: "",
	DblDbl: "",
	Cheeseburger: "",
	Hamburger: "",
	Fries: "",
	SoftDrink: "",
	Coffee:
		"https://lawblog.legalmatch.com/wp-content/uploads/2014/05/in-n-out-burger-spilled-coffee.jpg",
	Milk: "https://i.insider.com/6154e27a2fb46b0019beaeb8?width=1000&format=jpeg&auto=webp",
	Shake:
		"https://www.in-n-out.com/ino-images/default-source/history/hero-1975a.jpg",
	HotCocoa:
		"https://www.sacbee.com/food-drink/6q0teo/picture192915519/alternates/FREE_1140/INO%20Hot%20Cocoa",
} as const);

ImageUris satisfies Record<SkuId, string>;

export const ImageData = {
	DblDblCombo: require("@images/DblDblCombo.png"),
	CheeseburgerCombo: require("@images/CheeseburgerCombo.png"),
	HamburgerCombo: require("@images/HamburgerCombo.png"),
	DblDbl: require("@images/DblDbl.png"),
	Cheeseburger: require("@images/Cheeseburger.png"),
	Hamburger: require("@images/Hamburger.png"),
	Fries: require("@images/Fries.png"),
	SoftDrink: require("@images/SoftDrink.png"),
};

ImageData satisfies Partial<Record<SkuId, unknown>>;
