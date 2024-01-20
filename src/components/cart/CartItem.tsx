import { useMemo } from 'react';
import { Image, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { selectImages } from '../../redux/slices/dataSlice';
import { editItem, removeItem } from '../../redux/slices/orderSlice';

import { StackParamList } from '../../navigators/MenuStack';

import { getCustomisationText, type Sku } from '../../models/Sku';
import { type SkuId } from '../../data/types';

export type CartItemProps = Sku & { uuid: string };

const CartItem: React.FC<CartItemProps> = ({ uuid, ...item }) => {
  const dispatch = useAppDispatch();

  const images = useAppSelector(selectImages);
  const imageUrl = images[item.id as SkuId];

  const customisationData = useMemo(
    () => getCustomisationText(item),
    [item, uuid]
  );

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const editCartItem = () => {
    dispatch(editItem(uuid));

    // @ts-expect-error
    navigation.push('Item', item);
  };

  const removeCartItem = () => {
    dispatch(removeItem(uuid));
  };

  return (
    <Card>
      <Card.Content>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={{ uri: imageUrl, height: 120, width: 160 }} />
          <View>
            <Text>{item.name}</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text>{`$${Number(item.price).toFixed(2)}`}</Text>
              <Text>{' | '}</Text>
              <Text>{'Calories'}</Text>
            </View>
            {customisationData.map((line, i) => (
              <Text key={`${uuid}-text-${i}`}>{line}</Text>
            ))}
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
            <Button onPress={editCartItem}>
              <Text>{'Edit'}</Text>
            </Button>
            <Button onPress={removeCartItem}>
              <Text>{'Remove'}</Text>
            </Button>
          </View>
          <Text>{'Quantity'}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CartItem;
