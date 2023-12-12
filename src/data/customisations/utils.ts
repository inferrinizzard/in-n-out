import { CustomisationData, CustomisationTree } from './data';
import { type CustomisationEntry, type CustomisationKey } from './types';

import { type SkuId } from '../types';
import { type BurgerId } from '../../models/Burger';

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
  if (!(id in customisationOptionMap)) {
    throw Error('Tried to customise a combo instead of single item');
  }

  return CustomisationTree[
    customisationOptionMap[id as keyof typeof customisationOptionMap]
  ];
};

export const burgerMeatCheeseDefaults: Partial<
  Record<BurgerId, Pick<CustomisationEntry<BurgerId>, 'Meat' | 'Cheese'>>
> = {
  DblDbl: { Meat: { data: 2 }, Cheese: { data: 2 } },
  Cheeseburger: { Meat: { data: 1 }, Cheese: { data: 1 } },
  Hamburger: { Meat: { data: 1 }, Cheese: { data: 0 } },
};

export const buildCustomisationDefaultEntry = <Id extends SkuId>(id: Id) => {
  const customisations = getCustomisationOptions(id);

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
    ...burgerMeatCheeseDefaults[id as keyof typeof burgerMeatCheeseDefaults],
  };
};
