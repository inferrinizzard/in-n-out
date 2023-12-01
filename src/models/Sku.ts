import { type SkuId } from '../data/types';

export interface Sku {
  id: SkuId;
  name: string;
  price: string | number;
}

export const Sku = (skuParams: Sku) => {
  return skuParams;
};
