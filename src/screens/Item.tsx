import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { type StackScreenProps } from './routes';

export interface ItemProps {}

const Item: React.FC<ItemProps & StackScreenProps<'Item'>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Item Screen</Text>

      <Button onPress={() => navigation.navigate('Menu')}>
        {'Go to Menu'}
      </Button>
    </View>
  );
};

export default Item;
