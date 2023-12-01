import { Image, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { type BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { selectImages } from '../../redux/slices/dataSlice';
import { editItem, removeItem } from '../../redux/slices/orderSlice';

import { type BaseTabParamList } from '../../navigators/BottomTabs';
import { type SkuId } from '../../data/types';
import { type Sku } from '../../models/Sku';

export type CartItemProps = Sku & { uuid: string };

const CartItem: React.FC<CartItemProps> = ({ uuid, ...item }) => {
  const dispatch = useAppDispatch();

  const images = useAppSelector(selectImages);
  const imageUrl = images[item.id as SkuId];

  const navigation = useNavigation<BottomTabNavigationProp<BaseTabParamList>>();

  const editCartItem = () => {
    dispatch(editItem(uuid));

    navigation.navigate('TabMenu', {
      // @ts-expect-error
      screen: 'StackItem',
      params: item,
    });
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
            <Text>{'Item Details'}</Text>
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
