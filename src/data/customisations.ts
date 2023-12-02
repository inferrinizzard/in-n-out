import { type ValueOf } from '../types/util';
import { type SkuId } from './types';

export const DrinkSizes = ['Small', 'Medium', 'Large', 'XtraLarge'] as const;
export type DrinkSize = ValueOf<typeof DrinkSizes>;

export const StandardToppingAmounts = [
  'None',
  'Lite',
  'Regular',
  'Xtra',
] as const;
export type ToppingAmount = ValueOf<typeof StandardToppingAmounts>;

export const BunOptions = [
  'None',
  'LiteToast',
  'Regular',
  'XtraToast',
  'ProteinStyle',
] as const;
export type BunOption = ValueOf<typeof BunOptions>;

export const FriesDonenesses = [
  'LiteFry',
  'Regular',
  'LiteWell',
  'WellDone',
  'XtraWellDone',
] as const;
export type FriesDoneness = ValueOf<typeof FriesDonenesses>;

interface CustomisationOption<Options extends readonly string[]> {
  default: Options[number];
  options: Options;
  flags?: string[];
}

const BaseCustomisationData = Object.freeze({
  Burger: {
    Onions: {
      default: 'None' as ToppingAmount,
      options: StandardToppingAmounts,
      flags: ['Chopped'],
    },
    More: {
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
      // TODO: AnimalStyle
      // TODO: CutInHalf
    },
  },
  Fries: {
    Doneness: {
      default: 'Regular' as FriesDoneness,
      options: FriesDonenesses,
      flags: ['NoSalt', 'AddCheese', 'AnimalStyle'],
    },
  },
  Drink: {
    Size: {
      default: 'Medium' as DrinkSize,
      options: DrinkSizes,
    },
  },
} as const);

const customisationOptionMap: Partial<
  Record<SkuId, keyof typeof BaseCustomisationData>
> = {
  DblDbl: 'Burger',
  Cheeseburger: 'Burger',
  Hamburger: 'Burger',
  Fries: 'Fries',
  SoftDrink: 'Drink',
};

export const getCustomisationOptions = (id: SkuId) => {
  if (id in customisationOptionMap) {
    return BaseCustomisationData[
      customisationOptionMap[id] as keyof typeof BaseCustomisationData
    ];
  }
};
