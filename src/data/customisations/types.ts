import { type SkuId } from '../types';
import { type CustomisationData, type CustomisationTree } from './data';
import { customisationOptionMap } from './utils';

export type CustomisationOption<
  Key extends CustomisationKey = CustomisationKey
> = (typeof CustomisationData)[Key];

export type SkuCustomisationKey<Id extends SkuId> = CustomisationKey &
  keyof CustomisationEntry<Id>;
export type CustomisationKey = keyof typeof CustomisationData;
export type CustomisationValue<
  Key extends CustomisationKey = CustomisationKey
> = CustomisationOption<Key>['options'][number];

export interface CustomisationNode {
  base: readonly CustomisationKey[];
  more?: readonly CustomisationKey[];
  flags?: readonly string[];
}

type CustomisationNodeKeys<Node extends CustomisationNode> =
  | Node['base'][number]
  | (Node['more'] & CustomisationKey[])[number];

export type ItemCustomisations<Id extends SkuId> =
  Id extends keyof typeof customisationOptionMap
    ? (typeof CustomisationTree)[(typeof customisationOptionMap)[Id]]
    : never;

export type CustomisationEntry<
  Id extends SkuId,
  Customisations extends CustomisationNode = ItemCustomisations<Id>,
  Options extends CustomisationKey = CustomisationNodeKeys<Customisations>
> = Id extends keyof typeof customisationOptionMap
  ? {
      [Option in Options]: {
        data: CustomisationValue<Option>;
        flags?: 'flags' extends keyof (typeof CustomisationData)[Option]
          ? undefined extends (typeof CustomisationData)[Option]['flags']
            ? undefined
            : Record<
                ((typeof CustomisationData)[Option]['flags'] &
                  string[])[number],
                boolean | undefined
              >
          : undefined;
      };
    }
  : never;
