import { Burger } from './Burger';
import { Drink } from './Drink';
import { Fries } from './Fries';

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

const CustomisableSku: Partial<Record<SkuId, (...args: any) => Sku>> = {
  DblDbl: Burger,
  Cheeseburger: Burger,
  Hamburger: Burger,
  SoftDrink: Drink,
  Fries: Fries,
} as const;

export const Sku = (skuParams: Sku) => {
  if (skuParams.id in CustomisableSku) {
    return CustomisableSku[skuParams.id]?.(skuParams) ?? skuParams;
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
