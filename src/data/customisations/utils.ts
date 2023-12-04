import { type CustomisationKey } from './types';
import { type SkuId } from '../types';
import { CustomisationTree, type NumericCustomisationValue } from './data';

export const customisationOptionMap = {
  DblDbl: 'Burger',
  Cheeseburger: 'Burger',
  Hamburger: 'Burger',
  Fries: 'Fries',
  SoftDrink: 'Drink',
} as const;

customisationOptionMap satisfies Partial<
  Record<SkuId, keyof typeof CustomisationTree>
>;

export const getCustomisationOptions = <Id extends SkuId>(id: Id) => {
  if (id in customisationOptionMap) {
    return CustomisationTree[
      customisationOptionMap[id as keyof typeof customisationOptionMap]
    ];
  }
};

const burgerMeatCheeseDefaults: Partial<
  Record<
    Extract<SkuId, 'DblDbl' | 'Cheeseburger' | 'Hamburger'>,
    Record<
      Extract<CustomisationKey, 'Meat' | 'Cheese'>,
      NumericCustomisationValue
    >
  >
> = {
  DblDbl: { Meat: '2', Cheese: '2' },
  Cheeseburger: { Meat: '1', Cheese: '1' },
  Hamburger: { Meat: '1', Cheese: '0' },
};

export const getMeatCheeseDefaults = <Id extends SkuId>(id: Id) => {
  if (id in burgerMeatCheeseDefaults) {
    const { Meat, Cheese } =
      burgerMeatCheeseDefaults[id as keyof typeof burgerMeatCheeseDefaults]!;

    return {
      Meat: { data: Meat },
      Cheese: { data: Cheese },
    };
  }
};
