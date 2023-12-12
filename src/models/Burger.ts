import { Sku } from './Sku';

import { type SkuId } from '../data/types';

export interface BurgerParams {
  meat: number;
  cheese: number;
}

export const Burger = <
  Id extends Extract<SkuId, 'DblDbl' | 'Cheeseburger' | 'Hamburger'>
>(
  skuParams: Sku<Id>
) => {
  // @ts-expect-error
  const meat = skuParams.customisations.Meat?.data ?? 0;
  // @ts-expect-error
  const cheese = skuParams.customisations.Cheese?.data ?? 0;

  const name = getBurgerName(meat, cheese);
  return { ...skuParams, name };
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
