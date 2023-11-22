import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { type StackScreenProps } from './routes';

export interface ItemProps {
  name: string;
}

const Item: React.FC<ItemProps & StackScreenProps<'Item'>> = ({
  navigation,
  route,
}) => {
  const { name } = route.params!;

  return (
    <View>
      <Text>{`Item: ${name}`}</Text>

      <Button onPress={() => navigation.navigate('Menu')}>
        {'Go to Menu'}
      </Button>
    </View>
  );
};

export default Item;
