import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';

import { type TabScreenProps, type StackScreenProps } from './routes';
import MenuItem from '../components/menu/MenuItem';

export interface MenuProps {}

const Menu: React.FC<
  MenuProps & TabScreenProps<'Menu'> & StackScreenProps<'Menu'>
> = ({ navigation }) => {
  return (
    <View>
      <Text>Menu Screen</Text>

      <FlatList
        data={[
          { id: 'foo', name: 'burgr' },
          { id: 'bar', name: 'frys :)' },
        ]}
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
