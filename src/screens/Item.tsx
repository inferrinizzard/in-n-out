import { Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { addItem } from '../redux/slices/orderSlice';
import { selectImages } from '../redux/slices/dataSlice';

import { type StackScreenProps } from './routes';
import { Burger } from '../models/Burger';

import { type SkuId } from '../data/types';

export interface ItemProps {
  id: string;
  name: string;
}

const Item: React.FC<ItemProps & StackScreenProps<'Item'>> = ({
  navigation,
  route,
}) => {
  const images = useAppSelector(selectImages);

  const { id, name } = route.params!;
  const imageUrl = images[id as SkuId];

  const dispatch = useAppDispatch();

  return (
    <View>
      <Image source={{ uri: imageUrl, height: 240, width: 320 }} />
      <Text>{name}</Text>

      <Button
        onPress={() =>
          dispatch(
            addItem(Burger({ id, name, price: '1' }, { meat: 1, cheese: 1 }))
          )
        }
      >
        <Text>{'Add to Order'}</Text>
      </Button>
    </View>
  );
};

export default Item;
