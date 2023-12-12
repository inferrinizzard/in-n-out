import { Burger, type BurgerId } from './Burger';

import {
  buildCustomisationDefaultEntry,
  type CustomisationEntry,
} from '../data/customisations';

import { type SkuId } from '../data/types';

export interface Sku<Id extends SkuId = SkuId> {
  id: Id;
  name: string;
  price: number;
  customisations: CustomisationEntry<Id>;
}

const BurgerSku: Record<BurgerId, typeof Burger> = {
  DblDbl: Burger,
  Cheeseburger: Burger,
  Hamburger: Burger,
} as const;

export const Sku = (skuParams: Sku): Sku => {
  // TODO: fix this ?
  if (skuParams.id in BurgerSku) {
    const burgerSkuParams = skuParams as Sku<BurgerId>;
    return BurgerSku[burgerSkuParams.id](burgerSkuParams) as Sku;
  }

  return skuParams;
};

export const getCustomisationText = (sku: Sku) => {
  if (!sku.customisations) {
    return [];
  }

  const customisationsDefaults = buildCustomisationDefaultEntry(sku.id);

  if (!customisationsDefaults) {
    return [];
  }

  let customisationLines: string[] = [];

  Object.entries(sku.customisations).forEach(([key, entry]) => {
    const defaultValue =
      customisationsDefaults[key as keyof typeof customisationsDefaults]?.data;

    if (defaultValue && defaultValue !== entry.data) {
      customisationLines.push(`${key}: ${entry.data}`);
    }

    Object.entries(entry.flags ?? {}).forEach(([flag, val]) => {
      if (val) {
        customisationLines.push(flag);
      }
    });
  });

  return customisationLines;
};
