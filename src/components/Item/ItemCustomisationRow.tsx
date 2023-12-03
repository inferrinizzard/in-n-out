import { useMemo } from 'react';
import { Image, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  selectActiveItem,
  updateActiveCustomisations,
} from '../../redux/slices/orderSlice';

import { CustomisationData } from '../../data/customisations';
import {
  type CustomisationValue,
  type CustomisationKey,
} from '../../data/customisations.types';

export interface ItemCustomisationRowProps<Key extends CustomisationKey> {
  name: Key;
}

const ItemCustomisationRow = <Key extends CustomisationKey>({
  name,
}: ItemCustomisationRowProps<Key>) => {
  const dispatch = useAppDispatch();
  const activeItem = useAppSelector(selectActiveItem)!;
  const activeOption = useMemo(
    () =>
      activeItem?.customisations?.[
        name as keyof typeof activeItem.customisations
      ],
    [activeItem]
  );

  const data = CustomisationData[name];

  const updateCustomisation = (value: CustomisationValue<Key>) =>
    dispatch(updateActiveCustomisations({ data: { name, value } }));

  const updateFlag = (flag: string, value: boolean) =>
    dispatch(updateActiveCustomisations({ flags: { name, flag, value } }));

  return (
    <View>
      <Text>{name}</Text>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {data.options.map((option) => (
          <Card key={option} onPress={() => updateCustomisation(option)}>
            <Card.Content
              style={{
                display: 'flex',
                flexDirection: 'row',

                borderRadius: 8,
                borderWidth: activeOption?.data === option ? 2 : 0,
              }}
            >
              {/* <Image source={{ uri: imageUrl, height: 120, width: 160 }} /> */}
              <Text>{option}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>

      {'flags' in data &&
        data.flags.map((flag) => {
          const isFlagActive =
            activeOption?.flags?.[flag as keyof typeof activeOption.flags];

          return (
            <Button
              key={flag}
              onPress={() => updateFlag(flag, !isFlagActive)}
              style={{
                borderBlockColor: 'black',
                borderRadius: 8,
                borderWidth: isFlagActive ? 2 : 0,
              }}
            >
              <Text>{flag}</Text>
            </Button>
          );
        })}
    </View>
  );
};

export default ItemCustomisationRow;
