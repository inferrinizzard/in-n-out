import React from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { StackNavigationProps } from "@src/navigation/StackNavigator";
import type { SkuItem } from "@src/atoms/types";
import { Box, Text } from "@src/components";
import { getImage } from "@src/utils/getImage";
import { getCopy } from "@src/utils/getCopy";
import { ItemOptionMap } from "@data/items";
import type {
	CountOptionInstance,
	OptionInstance,
	OptionKey,
} from "@data/options";

export interface CartItemProps extends SkuItem {
	uuid: string;
}

const CartItem = ({
	uuid,
	sku,
	item,
	price,
	calories,
	options,
}: CartItemProps) => {
	const navigation = useNavigation<StackNavigationProps>();

	const image = getImage(sku);
	const itemText = getCopy(sku).toUpperCase();

	const customisationData = (
		Object.entries(options ?? {}) as [
			OptionKey,
			OptionInstance | CountOptionInstance,
		][]
	).filter(([optionKey, optionValue]) => {
		if (!(item in ItemOptionMap)) {
			return true;
		}
		const defaultOptions =
			ItemOptionMap[item as keyof typeof ItemOptionMap].default;

		if (!(optionKey in defaultOptions)) {
			return true;
		}

		const defaultValue = defaultOptions[
			optionKey as keyof typeof defaultOptions
		] as OptionInstance | CountOptionInstance;

		if ("count" in defaultValue && "count" in optionValue) {
			return defaultValue.count !== optionValue.count;
		}

		return defaultValue.value !== optionValue.value;
	});

	const editCartItem = () => {
		// dispatch(editItem(uuid));

		navigation.push("Item", { title: getCopy(sku) });
	};

	const removeCartItem = () => {
		// dispatch(removeItem(uuid));
	};

	return (
		<Box
			flexDirection="row"
			gap="s"
			paddingBottom="s"
			alignItems={customisationData.length ? "flex-start" : "center"}
		>
			<Image
				source={image}
				style={{ height: 48, width: 64, flexGrow: 0, flexShrink: 1 }}
				resizeMode="contain"
			/>
			<View style={{ flexGrow: 1, justifyContent: "center" }}>
				<Text variant="header">{itemText}</Text>
				{customisationData.map(([key, val]) => (
					<React.Fragment key={`${uuid}-${key}`}>
						<Text>{`${key}: ${val.value}`}</Text>
						{"count" in val && <Text>{`${key}: ${val.count}`}</Text>}
					</React.Fragment>
				))}
			</View>

			<View
				style={{
					flexGrow: 0,
					flexShrink: 1,
					alignItems: "flex-end",
					justifyContent: "center",
				}}
			>
				<Text>
					<Text variant="bold">{`$${Number(price).toFixed(2)}`}</Text>
					{!!calories && <Text variant="medium">{` | ${calories} Cal`}</Text>}
				</Text>
				<Text>{`Quantity: ${1}`}</Text>
				<Text gap="s" style={{ display: "flex" }}>
					<Text>{"Edit"}</Text>
					<Text>{"Remove"}</Text>
				</Text>
			</View>
		</Box>
	);
};

export default CartItem;
