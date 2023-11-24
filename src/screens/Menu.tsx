import { FlatList, View } from 'react-native';

import { type TabScreenProps, type StackScreenProps } from './routes';
import MenuItem from '../components/menu/MenuItem';

import menu from '../../data/tempMenu.json';

export interface MenuProps {}

const Menu: React.FC<
  MenuProps & TabScreenProps<'Menu'> & StackScreenProps<'Menu'>
> = ({ navigation }) => {
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
