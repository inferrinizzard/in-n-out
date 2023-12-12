import {
  buildCustomisationDefaultEntry,
  type CustomisationEntry,
} from '../data/customisations';
import { type SkuId } from '../data/types';
import { Burger } from './Burger';

export interface Sku<Id extends SkuId = SkuId> {
  id: Id;
  name: string;
  price: number;
  customisations: CustomisationEntry<Id>;
}

const SpecialSku: Partial<Record<SkuId, (skuParams: any) => Sku>> = {
  DblDbl: Burger,
  Cheeseburger: Burger,
  Hamburger: Burger,
};

export const Sku = (skuParams: Sku) => {
  if (skuParams.id in SpecialSku) {
    return SpecialSku[skuParams.id]!(skuParams);
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
