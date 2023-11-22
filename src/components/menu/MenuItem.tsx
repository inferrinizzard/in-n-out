import { Card, Text } from 'react-native-paper';

import { type ItemProps } from '../../screens/Item';
import { Image } from 'react-native';

export interface MenuItemProps extends ItemProps {
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ onPress, ...item }) => {
  return (
    <Card onPress={onPress}>
      <Card.Content style={{ display: 'flex', flexDirection: 'row' }}>
        <Image source={{ uri: item.image, height: 120, width: 160 }} />
        <Text>{item.name}</Text>
      </Card.Content>
    </Card>
  );
};

export default MenuItem;
