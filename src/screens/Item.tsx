import { useEffect } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useAppDispatch, useAppSelector } from '../redux/store';
import {
  addActiveToList,
  selectActiveItem,
  setActiveItem,
} from '../redux/slices/orderSlice';
import {
  selectImages,
  selectMenu,
  selectPrices,
} from '../redux/slices/dataSlice';

import { type StackScreenProps } from '../navigators/MenuStack';
import ItemCustomisations from '../components/Item/ItemCustomisations';
import { getCustomisationOptions } from '../data/customisations';

import { CustomisationData } from '../data/customisations';
import { Sku } from '../models/Sku';
import { type MenuItem, type SkuId } from '../data/types';
import { type CustomisationEntry } from '../data/customisations.types';

export type ItemProps = MenuItem & {
  nextItems?: readonly SkuId[];
};

const Item: React.FC<ItemProps & StackScreenProps<'StackItem'>> = ({
  navigation,
  route,
}) => {
  const dispatch = useAppDispatch();
  const menu = useAppSelector(selectMenu);
  const prices = useAppSelector(selectPrices);
  const images = useAppSelector(selectImages);
  const activeItem = useAppSelector(selectActiveItem);

  const { id, name, nextItems } = route.params!;

  const imageUrl = images[id as SkuId];

  // TODO: memo
  const customisations = getCustomisationOptions(id);

  useEffect(() => {
    dispatch(
      setActiveItem(
        Sku({
          ...menu[id],
          price: prices.base[id],
          customisations: customisations?.base.reduce(
            (acc, key) => ({
              ...acc,
              [key]: {
                data: CustomisationData[key].default,
                // flags:
                //   'flags' in CustomisationData[key]
                //     ? [
                //         ...CustomisationData[key][
                //           'flags' as keyof (typeof CustomisationData)[typeof key]
                //         ],
                //       ].reduce(
                //         (acc, flag) => ({ ...acc, [flag]: false }),
                //         {} as Record<string, boolean | undefined>
                //       )
                //     : undefined,
              },
            }),
            {} as CustomisationEntry<typeof id>
          ),
        })
      )
    );
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
      <Text style={{ fontSize: 24 }}>{name}</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text>{`$${Number(activeItem?.price || prices.base[id]).toFixed(
          2
        )}`}</Text>
        <Text>{' | '}</Text>
        <Text>{'Calories'}</Text>
      </View>

      <ItemCustomisations customisations={customisations} />

      <Button
        onPress={() => {
          if (nextItems?.length) {
            const [nextItemId, ...rest] = nextItems;
            const nextItem = menu[nextItemId];
            navigation.push('StackItem', { ...nextItem, nextItems: rest });
          } else {
            dispatch(addActiveToList());
            navigation.navigate('StackMenu');
          }
        }}
      >
        <Text>{nextItems?.length ? 'Go to next Item' : 'Add to Order'}</Text>
      </Button>
    </ScrollView>
  );
};

export default Item;
