import { FlatList, View } from 'react-native';

import { useAppSelector } from '../redux/store';
import { selectMenuItems } from '../redux/slices/dataSlice';

import { type TabScreenProps, type StackScreenProps } from './routes';
import MenuItem from '../components/menu/MenuItem';

export interface MenuProps {}

const Menu: React.FC<
  MenuProps & TabScreenProps<'Menu'> & StackScreenProps<'Menu'>
> = ({ navigation }) => {
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
    </View>
  );
};

export default Menu;
