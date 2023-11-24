import { Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { addItem } from '../redux/slices/orderSlice';
import { selectImages, selectMenu } from '../redux/slices/dataSlice';

import { type StackScreenProps } from './routes';
import { Burger } from '../models/Burger';

import { type MenuItem, type SkuId } from '../data/types';

export type ItemProps = MenuItem & {
  nextItems?: readonly SkuId[];
};

const Item: React.FC<ItemProps & StackScreenProps<'Item'>> = ({
  navigation,
  route,
}) => {
  const menu = useAppSelector(selectMenu);
  const images = useAppSelector(selectImages);

  const { id, name, nextItems } = route.params!;

  const imageUrl = images[id as SkuId];

  const dispatch = useAppDispatch();

  console.log(nextItems);

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
            return;
          }
          dispatch(
            addItem(Burger({ id, name, price: '1' }, { meat: 1, cheese: 1 }))
          );
        }}
      >
        <Text>{nextItems?.length ? 'Go to next Item' : 'Add to Order'}</Text>
      </Button>
    </View>
  );
};

export default Item;
