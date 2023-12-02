import { type CustomisationMap } from '../data/customisations.types';
import { type SkuId } from '../data/types';

export interface Sku<Id extends SkuId = SkuId> {
  id: Id;
  name: string;
  price: string | number;
  customisations?: CustomisationMap<Id>;
}

export const Sku = (skuParams: Sku) => {
  return skuParams;
};
