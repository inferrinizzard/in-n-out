import { Image } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { type ItemProps } from '../../screens/Item';

import images from '../../../data/images.json';

export interface MenuItemProps extends ItemProps {
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ onPress, ...item }) => {
  // TODO: fix
  const imageUrl = images[item.id as keyof typeof images];

  return (
    <Card onPress={onPress}>
      <Card.Content style={{ display: 'flex', flexDirection: 'row' }}>
        <Image source={{ uri: imageUrl, height: 120, width: 160 }} />
        <Text>{item.name}</Text>
      </Card.Content>
    </Card>
  );
};

export default MenuItem;
