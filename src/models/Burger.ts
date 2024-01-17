import { Sku } from './Sku';

import { burgerMeatCheeseDefaults } from '../data/customisations/utils';
import prices from '../data/prices';
import calories from '../data/calories';

import { type SkuId } from '../data/types';

export type BurgerId = Extract<SkuId, 'DblDbl' | 'Cheeseburger' | 'Hamburger'>;

export const Burger = (skuParams: Sku<BurgerId>): Sku => {
  const meat = skuParams.customisations.Meat?.data ?? 0;
  const cheese = skuParams.customisations.Cheese?.data ?? 0;

  const name = getBurgerName(meat, cheese);
  const price = getBurgerPrice(skuParams);
  const calories = getBurgerCalories(skuParams);
  return { ...skuParams, name, price, calories };
};

const getBurgerName = (meat: number, cheese: number) => {
  const meatTerm = ['', 'Single', 'Double', 'Triple'][meat] ?? meat.toString();
  const cheeseTerm =
    ['', 'Single', 'Double', 'Triple'][cheese] ?? cheese.toString();

  let left = meatTerm;
  let join = '-';
  let right = cheeseTerm;

  if (cheese === 0 && meat === 0) {
    return 'Wish Burger';
  }

  if (cheese === 0) {
    right = 'Hamburger';
    join = ' ';

    if (meat === 1) {
      left = '';
      join = '';
    }
  }

  if (meat === 0) {
    left = cheeseTerm;
    join = ' ';
    right = 'Grilled Cheese';

    if (cheese === 1) {
      left = '';
      join = '';
    }
    if (cheese > 3) {
      left = cheese.toString();
      join = 'x ';
    }
  }

  if (cheese > 3 || meat > 3) {
    join = 'x';
  }

  return `${left}${join}${right}`;
};

const getBurgerPrice = (sku: Sku<BurgerId>) => {
  let price = prices.base[sku.id] as number;

  const defaults = burgerMeatCheeseDefaults[sku.id]!;

  const meatDelta = sku.customisations.Meat
    ? defaults.Meat!.data - sku.customisations.Meat.data
    : 0;
  const cheeseDelta = sku.customisations.Cheese
    ? defaults.Cheese!.data - sku.customisations.Cheese.data
    : 0;

  if (sku.customisations.Burger?.flags?.AnimalStyle) {
    price += prices.misc.AnimalStyle;
  }

  price += meatDelta * prices.misc.Meat * meatDelta;
  price += cheeseDelta * prices.misc.Cheese * cheeseDelta;

  return price;
};

const getBurgerCalories = (sku: Sku<BurgerId>) => {
  let numCalories = calories.base[sku.id] as number;

  const defaults = burgerMeatCheeseDefaults[sku.id]!;

  const meatDelta = sku.customisations.Meat
    ? sku.customisations.Meat.data - defaults.Meat!.data
    : 0;
  const cheeseDelta = sku.customisations.Cheese
    ? sku.customisations.Cheese.data - defaults.Cheese!.data
    : 0;

  if (sku.customisations.Burger?.flags?.AnimalStyle) {
    numCalories += calories.misc.AnimalStyle;
  }

  if (sku.customisations.Bun?.data === 'ProteinStyle') {
    numCalories += calories.misc.ProteinStyle;
  }

  numCalories += meatDelta * calories.misc.Meat;
  numCalories += cheeseDelta * calories.misc.Cheese;

  return numCalories;
};
