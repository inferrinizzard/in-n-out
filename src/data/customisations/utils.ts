import { CustomisationEntry, type CustomisationKey } from './types';
import { type SkuId } from '../types';
import {
  CustomisationData,
  CustomisationTree,
  type NumericCustomisationValue,
} from './data';

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

const getMeatCheeseDefaults = <Id extends SkuId>(id: Id) => {
  if (id in burgerMeatCheeseDefaults) {
    const { Meat, Cheese } =
      burgerMeatCheeseDefaults[id as keyof typeof burgerMeatCheeseDefaults]!;

    return {
      Meat: { data: Meat },
      Cheese: { data: Cheese },
    };
  }
};

export const buildCustomisationDefaultEntry = <Id extends SkuId>(id: Id) => {
  const customisations = getCustomisationOptions(id);

  if (!customisations) {
    return {};
  }

  let customisationKeys: CustomisationKey[] = [...customisations.base];
  if ('more' in customisations) {
    customisationKeys = customisationKeys.concat(customisations.more);
  }

  const standardCustomisationDefaults = customisationKeys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        data: CustomisationData[key].default,
      },
    }),
    {} as CustomisationEntry<Id>
  );

  return {
    ...standardCustomisationDefaults,
    ...getMeatCheeseDefaults(id),
  };
};
