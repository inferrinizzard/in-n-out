import { type ValueOf } from '../types/util';
import {
  type customisationOptionMap,
  type BaseCustomisationData,
} from './customisations';
import { type SkuId } from './types';

export interface CustomisationOption<
  Options extends readonly string[] = readonly string[]
> {
  default: Options[number];
  options: Options;
  flags?: readonly string[];
}

export interface ItemCustomisationOption {
  base: Record<string, CustomisationOption>;
  more?: ItemCustomisationOption;
  flags?: readonly string[];
}

export type ItemCustomisations<Id extends SkuId> =
  Id extends keyof typeof customisationOptionMap
    ? (typeof BaseCustomisationData)[(typeof customisationOptionMap)[Id]]
    : never;

export type FlattenedCustomisations<
  Id extends SkuId,
  BaseCustomisations = ItemCustomisations<Id>
> = 'base' extends keyof BaseCustomisations
  ? 'more' extends keyof BaseCustomisations
    ? 'base' extends keyof BaseCustomisations['more']
      ? BaseCustomisations['more']['base'] & BaseCustomisations['base']
      : never
    : BaseCustomisations['base']
  : never;

export type CustomisationMap<
  Id extends SkuId,
  Customisations = FlattenedCustomisations<Id>
> = {
  -readonly [key in keyof Customisations]: 'options' extends keyof Customisations[key]
    ? number extends keyof Customisations[key]['options']
      ? Customisations[key]['options'][number]
      : never
    : never;
};

export type CustomisationKey<Id extends SkuId> = keyof CustomisationMap<Id>;
export type CustomisationValue<Id extends SkuId> = ValueOf<
  CustomisationMap<Id>
>;

type map = CustomisationMap<SkuId>;
