import { FlatList, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useAppSelector } from '../redux/store';
import { selectItems } from '../redux/slices/orderSlice';

import { type TabScreenProps } from '../navigators/BottomTabs';
import CartItem from '../components/cart/CartItem';
import CartLocation from '../components/cart/CartLocation';

export interface CartProps {}

const Cart: React.FC<CartProps & TabScreenProps<'TabCart'>> = ({
  navigation,
}) => {
  const order = useAppSelector(selectItems);

  return (
    <View style={{ flex: 1 }}>
      <CartLocation />
      <Text>{'Order Contains:'}</Text>
      <View style={{ flex: 1, flexGrow: 1 }}>
        <FlatList
          data={order}
          renderItem={({ item, index }) => (
            <CartItem key={`${item.id}-${index}`} {...item} />
          )}
        />
        <Text>{`Subtotal: ${order.reduce(
          (sum, item) => +item.price + sum,
          0
        )}`}</Text>
      </View>

      <Button mode="contained">
        <Text>{'Review and Pay'}</Text>
      </Button>
    </View>
  );
};

export default Cart;
