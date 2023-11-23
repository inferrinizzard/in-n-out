export interface Sku {
  id: string;
  name: string;
  price: string | number;
}

export const Sku = (skuParams: Sku) => {
  return skuParams;
};
