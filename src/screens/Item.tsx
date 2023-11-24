import { useEffect } from 'react';
import { Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { addActiveToList, updateActiveItem } from '../redux/slices/orderSlice';
import { selectImages, selectMenu } from '../redux/slices/dataSlice';

import { type StackScreenProps } from './routes';
import { Sku } from '../models/Sku';

import { type MenuItem, type SkuId } from '../data/types';

export type ItemProps = MenuItem & {
  nextItems?: readonly SkuId[];
};

const Item: React.FC<ItemProps & StackScreenProps<'Item'>> = ({
  navigation,
  route,
}) => {
  const dispatch = useAppDispatch();
  const menu = useAppSelector(selectMenu);
  const images = useAppSelector(selectImages);

  const { id, name, nextItems } = route.params!;

  const imageUrl = images[id as SkuId];

  useEffect(() => {
    dispatch(updateActiveItem({ id, item: Sku({ ...menu[id], price: 1 }) }));
  }, [id]);

  return (
    <View>
      <Image source={{ uri: imageUrl, height: 240, width: 320 }} />
      <Text>{name}</Text>

      <Button
        onPress={() => {
          if (nextItems?.length) {
            const [nextItemId, ...rest] = nextItems;
            const nextItem = menu[nextItemId];
            navigation.navigate('Item', { ...nextItem, nextItems: rest });
          } else {
            dispatch(addActiveToList());
            navigation.navigate('Menu');
          }
        }}
      >
        <Text>{nextItems?.length ? 'Go to next Item' : 'Add to Order'}</Text>
      </Button>
    </View>
  );
};

export default Item;
