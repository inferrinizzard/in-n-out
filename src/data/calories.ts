import { SkuId } from './types';

const BaseCaloriesData = Object.freeze({
  DblDbl: 610,
  Cheeseburger: 430,
  Hamburger: 360,
  Fries: 360,
  SoftDrink: 190, // medium
  Coffee: 0,
  Milk: 150,
  Shake: 600,
  HotCocoa: 160,
} as const);

const CaloriesData = Object.freeze({
  ...BaseCaloriesData,
  DblDblCombo:
    BaseCaloriesData.DblDbl +
    BaseCaloriesData.Fries +
    BaseCaloriesData.SoftDrink,
  CheeseburgerCombo:
    BaseCaloriesData.Cheeseburger +
    BaseCaloriesData.Fries +
    BaseCaloriesData.SoftDrink,
  HamburgerCombo:
    BaseCaloriesData.Hamburger +
    BaseCaloriesData.Fries +
    BaseCaloriesData.SoftDrink,
} as const);

CaloriesData satisfies Record<SkuId, number>;

const MiscCaloriesData = Object.freeze({
  Meat:
    BaseCaloriesData.DblDbl -
    (BaseCaloriesData.Cheeseburger +
      (BaseCaloriesData.Cheeseburger - BaseCaloriesData.Hamburger)),
  Cheese: BaseCaloriesData.Cheeseburger - BaseCaloriesData.Hamburger,
  SoftDrinkSmall: 130,
  SoftDrinkMedium: 190,
  SoftDrinkLarge: 270,
  SoftDrinkXtraLarge: 350,
  AnimalStyle: 160,
  ProteinStyle: -100,
} as const);

export default {
  base: CaloriesData,
  misc: MiscCaloriesData,
};
