import { type CustomisationNode, type CustomisationOption } from './types';

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

export const NumericCustomisation = [0, 1, 2, 3] as const;
export type NumericCustomisationValue = (typeof NumericCustomisation)[number];

export const CustomisationData = Object.freeze({
  Onions: {
    type: 'enum',
    default: 'None' as ToppingAmount,
    options: StandardToppingAmounts,
    flags: ['Chopped'],
  },
  GrilledOnions: {
    type: 'enum',
    default: 'None' as ToppingAmount,
    options: StandardToppingAmounts,
  },
  Lettuce: {
    type: 'enum',
    default: 'Regular' as ToppingAmount,
    options: StandardToppingAmounts,
  },
  Tomato: {
    type: 'enum',
    default: 'Regular' as ToppingAmount,
    options: StandardToppingAmounts,
  },
  Pickles: {
    type: 'enum',
    default: 'None' as ToppingAmount,
    options: StandardToppingAmounts,
  },
  Chilis: {
    type: 'enum',
    default: 'None' as ToppingAmount,
    options: StandardToppingAmounts,
  },
  Spread: {
    type: 'enum',
    default: 'Regular' as ToppingAmount,
    options: StandardToppingAmounts,
    flags: ['AddKetchup', 'AddMustard'],
  },
  Bun: {
    type: 'enum',
    default: 'Regular' as BunOption,
    options: BunOptions,
  },
  Doneness: {
    type: 'enum',
    default: 'Regular' as FriesDoneness,
    options: FriesDonenesses,
  },
  Size: {
    type: 'enum',
    default: 'Medium' as DrinkSize,
    options: DrinkSizes,
  },
  Burger: {
    type: 'flags',
    default: '',
    options: [],
    flags: ['AnimalStyle', 'CutInHalf'],
  },
  Fries: {
    type: 'flags',
    default: '',
    options: [],
    flags: ['NoSalt', 'AddCheese', 'AnimalStyle'],
  },
  Meat: {
    type: 'number',
    default: 0,
    options: NumericCustomisation,
    flags: ['NoSalt', 'MustardGrilled', 'MediumRare', 'WellDone'],
  },
  Cheese: {
    type: 'number',
    default: 0,
    options: NumericCustomisation,
    flags: ['ColdCheese'],
  },
} as const);

CustomisationData satisfies Record<string, CustomisationOption>;

export const CustomisationTree = Object.freeze({
  Burger: {
    base: ['Onions'],
    more: [
      'Meat',
      'Cheese',
      'GrilledOnions',
      'Lettuce',
      'Tomato',
      'Pickles',
      'Chilis',
      'Spread',
      'Bun',
      'Burger',
    ],
  },
  Fries: {
    base: ['Doneness'],
    more: ['Fries'],
  },
  Drink: {
    base: ['Size'],
  },
} as const);

CustomisationTree satisfies Record<string, CustomisationNode>;
