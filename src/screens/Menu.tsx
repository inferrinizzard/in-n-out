import { useMemo } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useAppSelector } from '../redux/store';
import { selectMenu } from '../redux/slices/dataSlice';
import { selectItems } from '../redux/slices/orderSlice';

import { type StackScreenProps } from '../navigators/MenuStack';
import MenuItem from '../components/menu/MenuItem';

export interface MenuProps {}

const Menu: React.FC<
  MenuProps & StackScreenProps<'Menu'> & StackScreenProps<'Menu'>
> = ({ navigation }) => {
  const order = useAppSelector(selectItems);
  const orderItems = useMemo(() => Object.values(order), [order]);
  const menu = useAppSelector(selectMenu);
  const menuItems = useMemo(() => Object.values(menu), [menu]);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
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
      </SafeAreaView>

      {orderItems.length ? (
        <View
          style={{
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
