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
    <View>
      <ScrollView style={{ height: 650 }}>
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
      </ScrollView>

      {orderItems.length ? (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'red',
            width: '100%',
          }}
        >
          <Button onPress={() => navigation.navigate('Cart')}>
            <Text>{`Checkout ${orderItems.length} Items now`}</Text>
          </Button>
        </View>
      ) : null}
    </View>
  );
};

export default Menu;
