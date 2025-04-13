import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { StackNavigationProps } from "@src/navigation/StackNavigator";
import type { SkuItem } from "@src/atoms/types";
import { getCustomisationData } from "@src/atoms/utils/options";
import { Box, Text, ResponsiveImage } from "@src/components";

import { getImage } from "@src/utils/getImage";
import { getCopy } from "@src/utils/getCopy";
import { ItemOptionMap } from "@data/items";
import type { OptionInstance } from "@data/options";
import { SkuItemMap, type SkuKey } from "@data/sku";

export interface CartItemProps<Sku extends SkuKey> {
	uuid: string;
	item: SkuItem<Sku>;
}

const CartItem = <Sku extends SkuKey>({
	uuid,
	item: { item, sku, name, price, calories, options, quantity },
}: CartItemProps<Sku>) => {
	const navigation = useNavigation<StackNavigationProps>();

	const image = getImage(sku);
	const itemText = (name || getCopy(sku)).toUpperCase();

	const defaultOptions = {
		...ItemOptionMap[item as keyof typeof ItemOptionMap].default,
		...(SkuItemMap[sku] as { override?: object }).override,
	};

	const customisationData = getCustomisationData<Sku>({ item, sku, options });

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
			<ResponsiveImage source={image} minHeight={48} minWidth={64} />
			<View style={{ flexGrow: 1, justifyContent: "center" }}>
				<Text variant="header">{itemText}</Text>
				{customisationData.map(([key, val]) => {
					const defaultOption =
						key in defaultOptions
							? (defaultOptions[
									key as keyof typeof defaultOptions
								] as OptionInstance<typeof key>)
							: undefined;

					return (
						<React.Fragment key={`${uuid}-${key}`}>
							{defaultOption &&
								"value" in defaultOption &&
								"value" in val &&
								defaultOption.value !== val.value && (
									<Text>{`${key}: ${val.value}`}</Text>
								)}
							{defaultOption &&
								"count" in defaultOption &&
								"count" in val &&
								defaultOption.count !== val.count && (
									<Text>{`${key}: ${val.count}`}</Text>
								)}
							{val.flags &&
								Object.entries(val.flags).map(([flagKey, flagValue]) =>
									flagValue ? (
										<Text key={flagKey}>{`- ${flagKey}`}</Text>
									) : null,
								)}
						</React.Fragment>
					);
				})}
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
					<Text variant="bold">{`$${Number(price * quantity).toFixed(2)}`}</Text>
					{!!calories && <Text variant="medium">{` | ${calories} Cal`}</Text>}
				</Text>
				<Text>{`Quantity: ${quantity}`}</Text>
				<Text gap="s" style={{ display: "flex" }}>
					<Text>{"Edit"}</Text>
					<Text>{"Remove"}</Text>
				</Text>
			</View>
		</Box>
	);
};

export default CartItem;
