import {
  type CustomisationNode,
  type CustomisationOption,
} from './customisations.types';
import { type SkuId } from './types';

export const DrinkSizes = ['Small', 'Medium', 'Large', 'XtraLarge'] as const;
export type DrinkSize = (typeof DrinkSizes)[number];

export const StandardToppingAmounts = [
  'None',
  'Lite',
  'Regular',
  'Xtra',
] as const;
export type ToppingAmount = (typeof StandardToppingAmounts)[number];

export const BunOptions = [
  'None',
  'LiteToast',
  'Regular',
  'XtraToast',
  'ProteinStyle',
] as const;
export type BunOption = (typeof BunOptions)[number];

export const FriesDonenesses = [
  'LiteFry',
  'Regular',
  'LiteWell',
  'WellDone',
  'XtraWellDone',
] as const;
export type FriesDoneness = (typeof FriesDonenesses)[number];

export const CustomisationData = Object.freeze({
  Onions: {
    default: 'None' as ToppingAmount,
    options: StandardToppingAmounts,
    flags: ['Chopped'],
  },
  GrilledOnions: {
    default: 'None' as ToppingAmount,
    options: StandardToppingAmounts,
  },
  Lettuce: {
    default: 'Regular' as ToppingAmount,
    options: StandardToppingAmounts,
  },
  Tomato: {
    default: 'Regular' as ToppingAmount,
    options: StandardToppingAmounts,
  },
  Pickles: {
    default: 'None' as ToppingAmount,
    options: StandardToppingAmounts,
  },
  Chilis: {
    default: 'None' as ToppingAmount,
    options: StandardToppingAmounts,
  },
  Spread: {
    default: 'Regular' as ToppingAmount,
    options: StandardToppingAmounts,
    flags: ['AddKetchup', 'AddMustard'],
  },
  Bun: {
    default: 'Regular' as BunOption,
    options: BunOptions,
  },
  Doneness: {
    default: 'Regular' as FriesDoneness,
    options: FriesDonenesses,
  },
  Size: {
    default: 'Medium' as DrinkSize,
    options: DrinkSizes,
  },
} as const);

CustomisationData satisfies Record<string, CustomisationOption>;

export const CustomisationTree = Object.freeze({
  Burger: {
    base: ['Onions'],
    more: [
      'GrilledOnions',
      'Lettuce',
      'Tomato',
      'Pickles',
      'Chilis',
      'Spread',
      'Bun',
    ],
    flags: ['AnimalStyle', 'CutInHalf'],
  },
  Fries: {
    base: ['Doneness'],
    flags: ['NoSalt', 'AddCheese', 'AnimalStyle'],
  },
  Drink: {
    base: ['Size'],
  },
} as const);

CustomisationTree satisfies Record<string, CustomisationNode>;

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
