import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export interface MenuItemProps {
  name: string;
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, onPress }) => {
  return (
    <Card onPress={() => onPress()}>
      <Card.Content>
        <Text>{name}</Text>
      </Card.Content>
    </Card>
  );
};

export default MenuItem;
