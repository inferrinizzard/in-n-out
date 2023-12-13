import { Sku } from './Sku';

import prices from '../data/prices';

import { type SkuId } from '../data/types';

export type FriesId = Extract<SkuId, 'Fries'>;

export const Fries = (skuParams: Sku<FriesId>): Sku => {
  const price = getFriesPrice(skuParams);

  return { ...skuParams, price };
};

const getFriesPrice = (sku: Sku<FriesId>) => {
  let price = prices.base[sku.id] as number;

  if (sku.customisations.Fries?.flags?.AddCheese) {
    price += prices.misc.Cheese;
  }

  if (sku.customisations.Fries?.flags?.AnimalStyle) {
    price += prices.misc.AnimalStyle;
  }

  return price;
};
