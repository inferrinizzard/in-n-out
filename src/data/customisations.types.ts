import {
  type CustomisationData,
  type customisationOptionMap,
  type CustomisationTree,
} from './customisations';

import { type SkuId } from './types';

export interface CustomisationOption<
  Options extends readonly string[] = readonly string[]
> {
  default: Options[number];
  options: Options;
  flags?: readonly string[];
}

export type CustomisationKey = keyof typeof CustomisationData;
export type CustomisationValue<
  Key extends CustomisationKey = CustomisationKey
> = (typeof CustomisationData)[Key]['options'][number];

export interface CustomisationNode {
  base: readonly CustomisationKey[];
  more?: readonly CustomisationKey[];
  flags?: readonly string[];
}

type CustomisationNodeKeys<Node extends CustomisationNode> =
  undefined extends Node['more']
    ? Node['base'][number]
    : Node['base'][number] | (Node['more'] & CustomisationKey[])[number];

export type ItemCustomisations<Id extends SkuId> =
  Id extends keyof typeof customisationOptionMap
    ? (typeof CustomisationTree)[(typeof customisationOptionMap)[Id]]
    : never;

export type CustomisationEntry<
  Id extends SkuId,
  Customisations extends CustomisationNode = ItemCustomisations<Id>,
  Options extends CustomisationKey = CustomisationNodeKeys<Customisations>
> = Id extends keyof typeof customisationOptionMap
  ? Partial<{
      [Option in Options]: {
        data: CustomisationValue<Option>;
        flags?: 'flags' extends keyof (typeof CustomisationData)[Option]
          ? {
              -readonly [Index in keyof (typeof CustomisationData)[Option]['flags']]: (typeof CustomisationData)[Option]['flags'][Index];
            }
          : undefined;
      };
    }>
  : never;
