import { Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { type StackScreenProps } from './routes';
import { useAppDispatch } from '../redux/store';
import { addItem } from '../redux/slices/orderSlice';
import { Burger } from '../models/Burger';

import images from '../../data/images.json';

export interface ItemProps {
  id: string;
  name: string;
}

const Item: React.FC<ItemProps & StackScreenProps<'Item'>> = ({
  navigation,
  route,
}) => {
  const { id, name } = route.params!;
  // TODO: fix
  const imageUrl = images[id as keyof typeof images];

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
