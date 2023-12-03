import { useMemo } from 'react';
import { Image, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  selectActiveItem,
  updateActiveItem,
} from '../../redux/slices/orderSlice';

import { CustomisationData } from '../../data/customisations';
import {
  type CustomisationValue,
  type CustomisationKey,
  type CustomisationEntry,
} from '../../data/customisations.types';

export interface ItemCustomisationRowProps<Key extends CustomisationKey> {
  name: Key;
}

const ItemCustomisationRow = <Key extends CustomisationKey>({
  name,
}: ItemCustomisationRowProps<Key>) => {
  const activeItem = useAppSelector(selectActiveItem)!;
  const activeOption = useMemo(
    () =>
      activeItem?.customisations?.[
        name as keyof typeof activeItem.customisations
      ],
    [activeItem]
  );

  const data = CustomisationData[name];

  const dispatch = useAppDispatch();

  const updateCustomisation = (value: CustomisationValue<Key>) =>
    dispatch(
      updateActiveItem({
        ...activeItem,
        customisations: {
          ...activeItem.customisations,
          [name]: { data: value }, // add flags
        },
      })
    );

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
        data.flags.map((flag) => (
          <Button key={flag} onPress={() => {}}>
            <Text>{flag}</Text>
          </Button>
        ))}
    </View>
  );
};

export default ItemCustomisationRow;
