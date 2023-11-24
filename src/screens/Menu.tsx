import { FlatList, View } from 'react-native';

import { useAppSelector } from '../redux/store';
import { selectMenu } from '../redux/slices/dataSlice';

import { type TabScreenProps, type StackScreenProps } from './routes';
import MenuItem from '../components/menu/MenuItem';

export interface MenuProps {}

const Menu: React.FC<
  MenuProps & TabScreenProps<'Menu'> & StackScreenProps<'Menu'>
> = ({ navigation }) => {
  const menu = useAppSelector(selectMenu);

  return (
    <View>
      <FlatList
        data={Object.values(menu)}
        renderItem={({ item }) => (
          <MenuItem
            onPress={() => navigation.navigate('Item', item)}
            {...item}
          />
        )}
      />
    </View>
  );
};

export default Menu;
