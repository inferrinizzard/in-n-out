import { FlatList, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useAppSelector } from '../redux/store';
import { selectMenuItems } from '../redux/slices/dataSlice';
import { selectItems } from '../redux/slices/orderSlice';

import { type TabScreenProps, type StackScreenProps } from './routes';
import MenuItem from '../components/menu/MenuItem';

export interface MenuProps {}

const Menu: React.FC<
  MenuProps & TabScreenProps<'Menu'> & StackScreenProps<'Menu'>
> = ({ navigation }) => {
  const orderItems = useAppSelector(selectItems);
  const menuItems = useAppSelector(selectMenuItems);

  return (
    <View>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <MenuItem
            onPress={() => {
              navigation.navigate('Item', {
                ...item,
                nextItems: 'has' in item ? item.has : undefined,
              });
            }}
            {...item}
          />
        )}
      />

      {orderItems.length ? (
        <View>
          <Button onPress={() => navigation.navigate('Cart')}>
            <Text>{`Checkout ${orderItems.length} Items now`}</Text>
          </Button>
        </View>
      ) : null}
    </View>
  );
};

export default Menu;
