import { Image } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { useAppSelector } from '../../redux/store';
import { selectImages } from '../../redux/slices/dataSlice';

import { type SkuId } from '../../data/types';
import { type Sku } from '../../models/Sku';

export type CartItemProps = Sku & {};

const CartItem: React.FC<CartItemProps> = ({ ...item }) => {
  const images = useAppSelector(selectImages);
  const imageUrl = images[item.id as SkuId];

  return (
    <Card>
      <Card.Content style={{ display: 'flex', flexDirection: 'row' }}>
        <Image source={{ uri: imageUrl, height: 120, width: 160 }} />
        <Text>{item.name}</Text>
        <Text>{` $${item.price}`}</Text>
      </Card.Content>
    </Card>
  );
};

export default CartItem;
