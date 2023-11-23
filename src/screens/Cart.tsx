import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';

import { type TabScreenProps } from './routes';

import { useAppSelector } from '../redux/store';
import { selectItems } from '../redux/slices/orderSlice';

export interface CartProps {}

const Cart: React.FC<CartProps & TabScreenProps<'Cart'>> = ({ navigation }) => {
  const order = useAppSelector(selectItems);

  return (
    <View>
      <Text>{'Location Goes Here'}</Text>
      <Text>{'Order Contains:'}</Text>
      <FlatList
        data={order}
        renderItem={({ item, index }) => (
          <Text key={`${item.id}-${index}`}>{item.name}</Text>
        )}
      />
      <Text>{`Subtotal: ${order.reduce(
        (sum, item) => +item.price + sum,
        0
      )}`}</Text>
    </View>
  );
};

export default Cart;
