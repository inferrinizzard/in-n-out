import { Image } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { useAppSelector } from '../../redux/store';
import { selectImages } from '../../redux/slices/dataSlice';

import { type ItemProps } from '../../screens/Item';

export interface MenuItemProps extends ItemProps {
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ onPress, ...item }) => {
  const images = useAppSelector(selectImages);
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
