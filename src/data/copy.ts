import type { OptionFlagKey, OptionKey, OptionOptionKey } from "./options";
import { Menu, MenuCombo, MenuItem, type MenuKey } from "./menu";
import type { SkuId } from "./types";

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
	Neopolitan: "Neopolitan",
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
	Chilis: "Chopped Chilies",
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
	[MenuItem.DblDbl]: "Double-Double®",
	[MenuItem.Cheeseburger]: "Cheeseburger",
	[MenuItem.Hamburger]: "Hamburger",
	[MenuItem.Fries]: "French Fries",
	[MenuItem.SoftDrink]: "Soft Drink",
	[MenuItem.Shake]: "Milk Shake",
	[MenuItem.Coffee]: "Coffee",
	[MenuItem.Milk]: "Milk",
	[MenuItem.HotCocoa]: "Hot Cocoa",
	[MenuItem.AnimalStyle]: "Animal Style®",
	[MenuItem.ProteinStyle]: "Protein Style®",
	[MenuItem["3X3"]]: "3X3®",
	[MenuItem["4X4"]]: "4X4®",
	[MenuItem.AnimalFries]: "Animal Fries®",
	[MenuItem.GrilledCheese]: "Grilled Cheese",
	[MenuItem.DoubleMeat]: "Double Meat",
	[MenuItem.FlyingDutchman]: "Flying Dutchman",
	[MenuItem.WishBurger]: "Wish Burger",
	[MenuItem.PupPatty]: "Pup Patty",
	[MenuItem.Stickers]: "Stickers",
	[MenuItem.PaperHat]: "Paper Hat",
	[MenuItem.GiftCard]: "Gift Card",
} as const);

ItemCopy satisfies Record<SkuId, string>;

export const MenuCopy = Object.freeze({
	[Menu.Main]: "Main Menu",
	[Menu.HotDrink]: "Other Drinks",
	[Menu.SecretMenu]: "Secret Menu",
	[Menu.Extra]: "Extras",
} as const);

MenuCopy satisfies Record<MenuKey, string>;
