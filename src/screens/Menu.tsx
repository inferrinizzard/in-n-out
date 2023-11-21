import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { type TabScreenProps, type StackScreenProps } from './routes';

export interface MenuProps {}

const Menu: React.FC<
  MenuProps & TabScreenProps<'Menu'> & StackScreenProps<'Menu'>
> = ({ navigation }) => {
  return (
    <View>
      <Text>Menu Screen</Text>

      <Button onPress={() => navigation.navigate('Cart')}>
        {'Go to Cart'}
      </Button>
    </View>
  );
};

export default Menu;
