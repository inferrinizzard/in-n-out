import { Sku } from './Sku';

import { burgerMeatCheeseDefaults } from '../data/customisations/utils';
import prices from '../data/prices';

import { type SkuId } from '../data/types';

export type BurgerId = Extract<SkuId, 'DblDbl' | 'Cheeseburger' | 'Hamburger'>;

export const Burger = (skuParams: Sku<BurgerId>): Sku => {
  const meat = skuParams.customisations.Meat?.data ?? 0;
  const cheese = skuParams.customisations.Cheese?.data ?? 0;

  const name = getBurgerName(meat, cheese);
  const price = getBurgerPrice(skuParams);
  return { ...skuParams, name, price };
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

  if (meat === 0) {
    right = 'Grilled Cheese';
    join = ' ';
    left = cheeseTerm;

    if (cheese === 1) {
      return right;
    }

    if (cheese > 3) {
      left = cheese.toString();
      join = 'x ';
    }

    return `${left}${join}${right}`;
  }

  if (cheese === 0) {
    right = 'Hamburger';
    join = ' ';

    if (meat === 1) {
      return right;
    }

    if (meat > 3) {
      join = 'x ';
    }
    return `${left}${join}${right}`;
  }

  if (cheese === 1) {
    right = 'Cheeseburger';
    join = ' ';

    if (meat === 1) {
      return right;
    }

    if (meat > 3) {
      join = 'x ';
    }
    return `${left}${join}${right}`;
  }

  if (cheese > 3 || meat > 3) {
    left = meat.toString();
    join = 'x';
    if (cheese > 1) {
      right = cheese.toString();
    }
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
