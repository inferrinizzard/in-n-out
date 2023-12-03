import { useMemo } from 'react';
import { Image, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  selectActiveItem,
  updateActiveItem,
} from '../../redux/slices/orderSlice';

import { type SkuId } from '../../data/types';
import {
  CustomisationValue,
  type CustomisationKey,
  type CustomisationOption,
  CustomisationMap,
} from '../../data/customisations.types';

export interface ItemCustomisationRowProps<
  Id extends SkuId,
  Options extends readonly string[]
> extends CustomisationOption<Options> {
  name: CustomisationKey<Id>;
}

const ItemCustomisationRow = <
  Id extends SkuId,
  Options extends readonly string[]
>({
  name,
  default: _default,
  options,
  flags,
}: ItemCustomisationRowProps<Id, Options>) => {
  const activeItem = useAppSelector(selectActiveItem)!;
  const activeOption = useMemo(
    () => (activeItem?.customisations as CustomisationMap<Id>)?.[name],
    [activeItem]
  );

  const dispatch = useAppDispatch();

  const updateCustomisation = (
    key: CustomisationKey<Id>,
    value: CustomisationValue<Id>
  ) =>
    dispatch(
      updateActiveItem({
        ...activeItem,
        // @ts-expect-error
        // TODO fix CustomisationMap<SkuId>
        customisations: {
          ...activeItem.customisations,
          [key]: value,
        } as CustomisationMap<Id>,
      })
    );

  return (
    <View>
      <Text>{name.toString()}</Text>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {options.map((option) => (
          <Card
            key={option}
            onPress={() =>
              updateCustomisation(name, option as CustomisationValue<Id>)
            }
          >
            <Card.Content
              style={{
                display: 'flex',
                flexDirection: 'row',

                borderRadius: 8,
                borderWidth: activeOption === option ? 2 : 0,
              }}
            >
              {/* <Image source={{ uri: imageUrl, height: 120, width: 160 }} /> */}
              <Text>{option}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>

      {flags && flags.map((flag) => <Text>{flag}</Text>)}
    </View>
  );
};

export default ItemCustomisationRow;
