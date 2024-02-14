import { Burger } from './Burger';
import { Drink } from './Drink';
import { Fries } from './Fries';

import { CustomisationCopy } from '../consts';
import {
  buildCustomisationDefaultEntry,
  type CustomisationEntry,
} from '../data/customisations';
import { type SkuId } from '../data/types';

export interface Sku<Id extends SkuId = SkuId> {
  id: Id;
  name: string;
  price: number;
  calories: number;
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

    if (
      defaultValue &&
      defaultValue !== entry.data &&
      !Number.isInteger(entry.data)
    ) {
      customisationLines.push(
        `${key}: ${
          CustomisationCopy[entry.data as keyof typeof CustomisationCopy]
        }`
      );
    }

    Object.entries(entry.flags ?? {}).forEach(([flag, val]) => {
      if (val) {
        customisationLines.push(
          CustomisationCopy[flag as keyof typeof CustomisationCopy]
        );
      }
    });
  });

  return customisationLines;
};
