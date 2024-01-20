import { Image } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { useAppSelector } from '../../redux/store';
import {
  selectCalories,
  selectImages,
  selectPrices,
} from '../../redux/slices/dataSlice';

import { type SkuId } from '../../data/types';
import { type ItemProps } from '../../screens/Item';

export type MenuItemProps = ItemProps & {
  onPress: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ onPress, ...item }) => {
  const calories = useAppSelector(selectCalories);
  const prices = useAppSelector(selectPrices);

  const images = useAppSelector(selectImages);
  const imageUrl = images[item.id as SkuId];

  return (
    <Card onPress={onPress}>
      <Card.Content style={{ display: 'flex', flexDirection: 'row' }}>
        <Image source={{ uri: imageUrl, height: 120, width: 160 }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Text>{item.name}</Text>
          <Text>{`$${Number(prices.base[item.id]).toFixed(2)}`}</Text>
          <Text>{`${calories.base[item.id]} Calories`}</Text>
        </div>
      </Card.Content>
    </Card>
  );
};

export default MenuItem;
