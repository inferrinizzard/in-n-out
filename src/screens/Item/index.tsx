import { useEffect } from "react";
import { Image, ScrollView, View } from "react-native";
import { Button, Text } from "react-native-paper";

import { type StackScreenProps, ScreenKeys } from "@src/navigation";
import calories from "@data/calories";
import prices from "@data/prices";
import menu from "@data/old/menu";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
	addActiveToPending,
	addPendingToList,
	selectActiveItem,
	setActiveItem,
} from "../../redux/slices/orderSlice";

import ItemCustomisations from "./components/ItemCustomisations";
import {
	getCustomisationOptions,
	buildCustomisationDefaultEntry,
} from "../../data/customisations";
import { useImage } from "@src/hooks/useImage";

import { Sku } from "../../models/Sku";
import type { ItemKey } from "@data/items";

export interface ItemScreenParams {
	id: ItemKey;
}

export interface ItemProps
	extends ItemScreenParams,
		StackScreenProps<typeof ScreenKeys.Item> {}

const Item = ({ navigation, route }: ItemProps) => {
	const { id } = route.params!;

	const dispatch = useAppDispatch();
	const activeItem = useAppSelector(selectActiveItem);

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

			{/* <Button
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
			</Button> */}
		</View>
	);
};

export default Item;
