export interface SkuParams {
  id: string;
  name: string;
  price: string;
}

export class Sku implements SkuParams {
  id: string;
  name: string;
  price: string;

  public constructor({ id, name, price }: SkuParams) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
