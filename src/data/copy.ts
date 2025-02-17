import type { OptionFlagKey, OptionKey, OptionOptionKey } from "./options";
import { Menu, MenuCombo, type MenuKey } from "./menu";
import { Sku, type SkuKey } from "./sku";

export const OptionCopy = Object.freeze({
	Chopped: "Chopped Onions",
	AddKetchup: "Add Ketchup",
	AddMustard: "Add Mustard",
	AnimalStyle: "Animal Style®",
	CutInHalf: "Burger Cut in Half",
	NoSalt: "No Salt",
	AddCheese: "Add Cheese",
	MustardGrilled: "Mustard Grilled Patties",
	MediumRare: "Medium Rare",
	WellDone: "Well Done",
	ColdCheese: "Cold Cheese",
	Chocolate: "Chocolate",
	Vanilla: "Vanilla",
	Strawberry: "Strawberry",
	BlackWhite: "Black & White",
	Neapolitan: "Neapolitan",
	Small: "Small",
	Medium: "Medium",
	Large: "Large",
	XtraLarge: "Extra Large",
	None: "None",
	Lite: "Light",
	Regular: "Regular",
	Xtra: "Extra",
	Untoasted: "Untoasted",
	LiteToast: "Lightly Toasted",
	XtraToast: "Extra Toasted",
	ProteinStyle: "Protein Style®",
	LiteFry: "Light Fry",
	LiteWell: "Light Well",
	XtraWellDone: "Extra Well Done",
	Onions: "Onions",
	GrilledOnions: "Grilled Onions",
	Lettuce: "Lettuce",
	Tomato: "Tomato",
	Pickles: "Pickles",
	Chilis: "Chopped Chilis",
	Spread: "Spread",
	Bun: "Bun",
	Doneness: "Doneness",
	Size: "Size",
	Burger: "Burger",
	Fries: "Fries",
	Meat: "Meat",
	Cheese: "Cheese",
	Shake: "Shake",
} as const);

OptionCopy satisfies Record<
	OptionFlagKey | OptionOptionKey | OptionKey,
	string
>;

export const ItemCopy = Object.freeze({
	[MenuCombo.DblDblCombo]: "Double-Double® Combo",
	[MenuCombo.CheeseburgerCombo]: "Cheeseburger Combo",
	[MenuCombo.HamburgerCombo]: "Hamburger Combo",
	[Sku.DblDbl]: "Double-Double®",
	[Sku.Cheeseburger]: "Cheeseburger",
	[Sku.Hamburger]: "Hamburger",
	[Sku.Fries]: "French Fries",
	[Sku.SoftDrink]: "Soft Drink",
	[Sku.Shake]: "Milk Shake",
	[Sku.Coffee]: "Coffee",
	[Sku.Milk]: "Milk",
	[Sku.HotCocoa]: "Hot Cocoa",
	[Sku.AnimalStyle]: "Animal Style®",
	[Sku.ProteinStyle]: "Protein Style®",
	[Sku["3X3"]]: "3X3®",
	[Sku["4X4"]]: "4X4®",
	[Sku.AnimalFries]: "Animal Fries®",
	[Sku.GrilledCheese]: "Grilled Cheese",
	[Sku.DoubleMeat]: "Double Meat",
	[Sku.FlyingDutchman]: "Flying Dutchman",
	[Sku.WishBurger]: "Wish Burger",
	[Sku.PupPatty]: "Pup Patty",
	[Sku.Stickers]: "Stickers",
	[Sku.PaperHat]: "Paper Hat",
	[Sku.GiftCard]: "Gift Card",
	[Sku.Merch]: "Merch",
} as const);

ItemCopy satisfies Record<SkuKey, string>;

export const MenuCopy = Object.freeze({
	[Menu.Main]: "Main Menu",
	[Menu.HotDrink]: "Other Drinks",
	[Menu.SecretMenu]: "Secret Menu",
	[Menu.Extra]: "Extras",
} as const);

MenuCopy satisfies Record<MenuKey, string>;
