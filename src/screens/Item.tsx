import { useEffect } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useAppDispatch, useAppSelector } from '../redux/store';
import {
  addActiveToPending,
  addingPendingToList,
  selectActiveItem,
  setActiveItem,
} from '../redux/slices/orderSlice';
import {
  selectImages,
  selectMenu,
  selectPrices,
} from '../redux/slices/dataSlice';

import { type StackScreenProps } from '../navigators/StackNavigator';
import ItemCustomisations from '../components/Item/ItemCustomisations';
import {
  getCustomisationOptions,
  buildCustomisationDefaultEntry,
} from '../data/customisations';

import { Sku } from '../models/Sku';
import { type MenuItem, type SkuId } from '../data/types';

export type ItemProps = MenuItem & {
  nextItems?: readonly SkuId[];
};

const Item: React.FC<ItemProps & StackScreenProps<'Item'>> = ({
  navigation,
  route,
}) => {
  const dispatch = useAppDispatch();
  const menu = useAppSelector(selectMenu);
  const prices = useAppSelector(selectPrices);
  const images = useAppSelector(selectImages);
  const activeItem = useAppSelector(selectActiveItem);

  const { id, name, nextItems } = route.params!;

  const imageUrl = images[id];

  // TODO: memo
  const customisations = getCustomisationOptions(id);

  useEffect(() => {
    if (!activeItem) {
      dispatch(
        setActiveItem(
          Sku({
            ...menu[id],
            price: prices.base[id],
            customisations: { ...buildCustomisationDefaultEntry(id) },
          })
        )
      );
    }
  }, [id]);

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={{
        display: 'flex',
      }}
    >
      <Image source={{ uri: imageUrl, height: 240, width: 320 }} />
      <Text style={{ fontSize: 24 }}>{activeItem?.name ?? name}</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text>{`$${Number(activeItem?.price || prices.base[id]).toFixed(
          2
        )}`}</Text>
        <Text>{' | '}</Text>
        <Text>{'Calories'}</Text>
      </View>

      {customisations ? (
        <ItemCustomisations<typeof id> customisations={customisations} />
      ) : null}

      <Button
        onPress={() => {
          dispatch(addActiveToPending());
          if (nextItems?.length) {
            const [nextItemId, ...rest] = nextItems;
            const nextItem = menu[nextItemId];
            navigation.push('Item', { ...nextItem, nextItems: rest });
          } else {
            dispatch(addingPendingToList());
            navigation.popToTop();
          }
        }}
      >
        <Text>{nextItems?.length ? 'Go to next Item' : 'Add to Order'}</Text>
      </Button>
    </ScrollView>
  );
};

export default Item;
