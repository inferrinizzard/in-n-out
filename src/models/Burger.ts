import { Sku } from './Sku';

export interface BurgerParams {
  meat: number;
  cheese: number;
}

export const Burger = (skuParams: Sku, burgerParams: BurgerParams) => {
  const sku = Sku(skuParams);
  const burgerName = getBurgerName(burgerParams.meat, burgerParams.cheese);
  return { ...sku, ...burgerParams, burgerName };
};

const getBurgerName = (meat: number, cheese: number) => {
  if (cheese === 0 && meat === 1) {
    return 'hamburger';
  }
  if (cheese === 1 && meat === 1) {
    return 'cheeseburger';
  }
  if (meat > 3 || cheese > 3) {
    return `${meat}x${cheese}`;
  }

  const meatTerm =
    meat === 1
      ? 'single'
      : meat === 2
      ? 'double'
      : meat === 3
      ? 'triple'
      : null;
  const cheeseTerm =
    cheese === 1
      ? 'single'
      : cheese === 2
      ? 'double'
      : meat === 3
      ? 'triple'
      : null;

  if (meatTerm && cheeseTerm) {
    return `${meat}-${cheese}`;
  }

  return `${meat}x${cheese}`;
};
