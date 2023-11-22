import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';

import { type StackScreenProps } from './routes';

export interface ItemProps {
  id: string;
  name: string;
  image: string;
}

const Item: React.FC<ItemProps & StackScreenProps<'Item'>> = ({
  navigation,
  route,
}) => {
  const { name, image } = route.params!;

  return (
    <View>
      <Image source={{ uri: image, height: 240, width: 320 }} />
      <Text>{name}</Text>
    </View>
  );
};

export default Item;
