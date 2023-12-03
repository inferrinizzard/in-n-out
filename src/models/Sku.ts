import { type CustomisationEntry } from '../data/customisations.types';
import { type SkuId } from '../data/types';

export interface Sku<Id extends SkuId = SkuId> {
  id: Id;
  name: string;
  price: number;
  customisations?: CustomisationEntry<Id>;
}

export const Sku = (skuParams: Sku) => {
  return skuParams;
};
