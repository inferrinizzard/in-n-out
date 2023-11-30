import { FlatList, View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';

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
      <Divider />
      <View style={{ flex: 1, flexGrow: 1 }}>
        {order.length ? (
          <FlatList
            data={order}
            renderItem={({ item, index }) => (
              <CartItem key={`${item.id}-${index}`} {...item} />
            )}
          />
        ) : (
          <View>
            <Text>{'No items in cart!'}</Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('TabMenu')}
            >
              <Text>{'Add items'}</Text>
            </Button>
          </View>
        )}
        {order.length ? (
          <Text>{`Subtotal: ${order.reduce(
            (sum, item) => +item.price + sum,
            0
          )}`}</Text>
        ) : null}
      </View>

      {order.length ? (
        <Button mode="contained">
          <Text>{'Review and Pay'}</Text>
        </Button>
      ) : null}
    </View>
  );
};

export default Cart;
