// prices from: https://mobile-cuisine.com/menu/in-n-out-burger-prices/

// https://americanmenuprices.com/in-n-out-burger-menu-prices-usa/

import { type SkuId } from './types';

const BasePriceData = Object.freeze({
  DblDbl: 3.95,
  Cheeseburger: 2.8,
  Hamburger: 2.5,
  Fries: 1.85,
  SoftDrink: 1.8, // medium
} as const);

const PriceData = Object.freeze({
  ...BasePriceData,
  DblDblCombo:
    BasePriceData.DblDbl + BasePriceData.Fries + BasePriceData.SoftDrink,
  CheeseburgerCombo:
    BasePriceData.Cheeseburger + BasePriceData.Fries + BasePriceData.SoftDrink,
  HamburgerCombo:
    BasePriceData.Hamburger + BasePriceData.Fries + BasePriceData.SoftDrink,
} as const);

const MiscPriceData = Object.freeze({
  Meat:
    BasePriceData.DblDbl -
    (BasePriceData.Cheeseburger +
      (BasePriceData.Cheeseburger - BasePriceData.Hamburger)),
  Cheese: BasePriceData.Cheeseburger - BasePriceData.Hamburger,
  SoftDrinkSmall: 1.65,
  SoftDrinkMedium: 1.8,
  SoftDrinkLarge: 2.0,
  SoftDrinkXtraLarge: 2.2,
  AnimalStyle: 1,
} as const);

PriceData satisfies Record<SkuId, number>;

export default {
  base: PriceData,
  misc: MiscPriceData,
};
