import { useEffect } from "react";
import { Image, ScrollView, View } from "react-native";
import { Button, Text } from "react-native-paper";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
	addActiveToPending,
	addPendingToList,
	selectActiveItem,
	setActiveItem,
} from "../../redux/slices/orderSlice";
import {
	selectCalories,
	selectMenu,
	selectPrices,
} from "../../redux/slices/dataSlice";

import type { StackScreenProps } from "../../navigation/StackNavigator";
import ItemCustomisations from "./components/ItemCustomisations";
import {
	getCustomisationOptions,
	buildCustomisationDefaultEntry,
} from "../../data/customisations";
import { useImage } from "@src/hooks/useImage";

import { ScreenKeys } from "../../consts";
import { Sku } from "../../models/Sku";
import type { MenuItem, SkuId } from "../../data/types";

export type ItemProps = MenuItem & {
	nextItems?: readonly SkuId[];
};

const Item: React.FC<ItemProps & StackScreenProps<typeof ScreenKeys.Item>> = ({
	navigation,
	route,
}) => {
	const dispatch = useAppDispatch();
	const menu = useAppSelector(selectMenu);
	const prices = useAppSelector(selectPrices);
	const calories = useAppSelector(selectCalories);
	const activeItem = useAppSelector(selectActiveItem);

	const { id, name, nextItems } = route.params!;

	const image = useImage(id);

	// TODO: memo
	const customisations = getCustomisationOptions(id);

	useEffect(() => {
		if (!activeItem) {
			dispatch(
				setActiveItem(
					Sku({
						...menu[id],
						price: prices.base[id],
						calories: calories.base[id],
						customisations: { ...buildCustomisationDefaultEntry(id) },
					}),
				),
			);
		}
	}, [id, activeItem]);

	return (
		<View style={{ display: "flex", flex: 1 }}>
			<View style={{ alignItems: "center" }}>
				<Image source={image} style={{ height: 240, width: 320 }} />
				<Text style={{ fontSize: 24 }}>{activeItem?.name ?? name}</Text>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<Text>{`$${Number(activeItem?.price || prices.base[id]).toFixed(
						2,
					)}`}</Text>
					<Text>{" | "}</Text>
					<Text>{`${activeItem?.calories ?? calories.base[id]} Calories`}</Text>
				</View>
			</View>

			<ScrollView
				contentContainerStyle={{ alignItems: "center" }}
				style={{ display: "flex" }}
			>
				{customisations ? (
					<ItemCustomisations<typeof id> customisations={customisations} />
				) : null}
			</ScrollView>

			<Button
				onPress={() => {
					dispatch(addActiveToPending());
					if (nextItems?.length) {
						const [nextItemId, ...rest] = nextItems;
						const nextItem = menu[nextItemId];
						navigation.push(ScreenKeys.Item, { ...nextItem, nextItems: rest });
					} else {
						dispatch(addPendingToList());
						navigation.popToTop();
					}
				}}
			>
				<Text>{nextItems?.length ? "Go to next Item" : "Add to Order"}</Text>
			</Button>
		</View>
	);
};

export default Item;
