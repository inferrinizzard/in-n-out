// prices from: https://mobile-cuisine.com/menu/in-n-out-burger-prices/

import { type SkuId } from './types';

const BasePriceData = Object.freeze({
  DblDbl: 3.95,
  Cheeseburger: 2.8,
  Hamburger: 2.5,
  Fries: 1.85,
  Drink: 1.8, // medium
} as const);

const PriceData = Object.freeze({
  ...BasePriceData,
  DblDblCombo: BasePriceData.DblDbl + BasePriceData.Fries + BasePriceData.Drink,
  CheeseburgerCombo:
    BasePriceData.Cheeseburger + BasePriceData.Fries + BasePriceData.Drink,
  HamburgerCombo:
    BasePriceData.Hamburger + BasePriceData.Fries + BasePriceData.Drink,
} as const);

const MiscPriceData = Object.freeze({
  Meat:
    BasePriceData.DblDbl -
    (BasePriceData.Cheeseburger +
      (BasePriceData.Cheeseburger - BasePriceData.Hamburger)),
  Cheese: BasePriceData.Cheeseburger - BasePriceData.Hamburger,
  DrinkSmall: 1.65,
  DrinkMedium: 1.8,
  DrinkLarge: 2.0,
  DrinkExtraLarge: 2.2,
});

PriceData satisfies Record<SkuId, number>;

export default {
  base: PriceData,
  misc: MiscPriceData,
};
