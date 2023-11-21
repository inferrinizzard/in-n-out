import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { type TabScreenProps } from './routes';

export interface CartProps {}

const Cart: React.FC<CartProps & TabScreenProps<'Cart'>> = ({ navigation }) => {
  return (
    <View>
      <Text>Cart Screen</Text>

      <Button onPress={() => navigation.navigate('Menu')}>
        {'Go to Menu'}
      </Button>
    </View>
  );
};

export default Cart;
