import { Image, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { type BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { useAppSelector } from '../../redux/store';
import { selectImages } from '../../redux/slices/dataSlice';

import { type BaseTabParamList } from '../../navigators/BottomTabs';
import { type SkuId } from '../../data/types';
import { type Sku } from '../../models/Sku';

export type CartItemProps = Sku & {};

const CartItem: React.FC<CartItemProps> = ({ ...item }) => {
  const images = useAppSelector(selectImages);
  const imageUrl = images[item.id as SkuId];

  const navigation = useNavigation<BottomTabNavigationProp<BaseTabParamList>>();

  const editItem = () => {
    navigation.navigate('TabMenu', {
      // @ts-expect-error
      screen: 'StackItem',
      params: item,
    });
  };

  return (
    <Card>
      <Card.Content>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={{ uri: imageUrl, height: 120, width: 160 }} />
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{'Item Price and Calories'}</Text>
            <Text>{'Item Details'}</Text>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button onPress={editItem}>
            <Text>{'Edit'}</Text>
          </Button>
          <Button>
            <Text>{'Remove'}</Text>
          </Button>
          <Text>{'Quantity'}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CartItem;
