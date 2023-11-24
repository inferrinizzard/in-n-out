import { FlatList, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useAppSelector } from '../redux/store';
import { selectMenu, selectMenuItems } from '../redux/slices/dataSlice';
import { selectItems } from '../redux/slices/orderSlice';

import { type TabScreenProps, type StackScreenProps } from './routes';
import MenuItem from '../components/menu/MenuItem';

export interface MenuProps {}

const Menu: React.FC<
  MenuProps & TabScreenProps<'Menu'> & StackScreenProps<'Menu'>
> = ({ navigation }) => {
  const orderItems = useAppSelector(selectItems);
  const menu = useAppSelector(selectMenu);
  const menuItems = useAppSelector(selectMenuItems);

  return (
    <ScrollView>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => {
          const [baseItem, ...next] = item.has;
          return (
            <MenuItem
              onPress={() => {
                navigation.navigate('Item', {
                  ...menu[baseItem],
                  nextItems: next,
                });
              }}
              {...item}
            />
          );
        }}
      />

      {orderItems.length ? (
        <View style={{ position: 'absolute', bottom: 0 }}>
          <Button onPress={() => navigation.navigate('Cart')}>
            <Text>{`Checkout ${orderItems.length} Items now`}</Text>
          </Button>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default Menu;
