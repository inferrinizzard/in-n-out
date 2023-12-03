import { useMemo } from 'react';
import { Image, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { useAppSelector } from '../../redux/store';
import { selectActiveItem } from '../../redux/slices/orderSlice';

import { type CustomisationOption } from '../../data/customisations.types';

export interface ItemCustomisationRowProps<Options extends readonly string[]>
  extends CustomisationOption<Options> {
  name: string;
}

const ItemCustomisationRow = <Options extends readonly string[]>({
  name,
  default: _default,
  options,
  flags,
}: ItemCustomisationRowProps<Options>) => {
  const activeItem = useAppSelector(selectActiveItem);
  const activeOption = useMemo(
    () =>
      activeItem?.customisations?.[
        name as keyof (typeof activeItem)['customisations']
      ],
    [activeItem]
  );

  return (
    <View>
      <Text>{name}</Text>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {options.map((option) => (
          <Card key={option}>
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
