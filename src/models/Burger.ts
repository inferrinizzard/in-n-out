import { Sku, type SkuParams } from './Sku';

export interface BurgerParams {
  meat: number;
  cheese: number;
}

export class Burger extends Sku {
  burgerName: string;
  meat: number;
  cheese: number;

  public constructor(
    { id, name, price }: SkuParams,
    { meat, cheese }: BurgerParams
  ) {
    super({ id, name, price });

    this.meat = meat;
    this.cheese = cheese;
    this.burgerName = getBurgerName(meat, cheese);
  }
}

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
