import React from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { StackNavigationProps } from "@src/navigation/StackNavigator";
import type { SkuItem } from "@src/atoms/types";
import { Box, Text } from "@src/components";
import { getImage } from "@src/utils/getImage";
import { getCopy } from "@src/utils/getCopy";
import { ItemOptionMap } from "@data/items";
import type { OptionInstance, OptionKey } from "@data/options";
import { SkuItemMap, type SkuKey } from "@data/sku";

export interface CartItemProps<Sku extends SkuKey> extends SkuItem<Sku> {
	uuid: string;
}

const CartItem = <Sku extends SkuKey>({
	uuid,
	sku,
	item,
	name,
	price,
	calories,
	options,
}: CartItemProps<Sku>) => {
	const navigation = useNavigation<StackNavigationProps>();

	const image = getImage(sku);
	const itemText = (name || getCopy(sku)).toUpperCase();

	const defaultOptions = {
		...ItemOptionMap[item as keyof typeof ItemOptionMap].default,
		...(SkuItemMap[sku] as { override?: object }).override,
	};

	const customisationData = (
		Object.entries(options ?? {}) as {
			[O in OptionKey]: [O, OptionInstance<O>];
		}[OptionKey][]
	).filter(([optionKey, optionValue]) => {
		if (!(item in ItemOptionMap)) {
			return true;
		}

		if (!(optionKey in defaultOptions)) {
			return true;
		}

		if (Object.values(optionValue.flags ?? {}).some((x) => x)) {
			return true;
		}

		const defaultValue =
			optionKey in defaultOptions
				? (defaultOptions[
						optionKey as keyof typeof defaultOptions
					] as OptionInstance<typeof optionKey>)
				: undefined;

		if (defaultValue && "count" in defaultValue && "count" in optionValue) {
			return defaultValue.count !== optionValue.count;
		}

		return defaultValue?.value !== optionValue.value;
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
				{customisationData.map(([key, val]) => {
					return (
						<React.Fragment key={`${uuid}-${key}`}>
							{
								// @ts-expect-error
								defaultOptions[key]?.value &&
									// @ts-expect-error
									defaultOptions[key].value !== val.value && (
										<Text>{`${key}: ${val.value}`}</Text>
									)
							}
							{"count" in val &&
								// @ts-expect-error
								defaultOptions[key]?.count &&
								// @ts-expect-error
								defaultOptions[key].count !== val.count && (
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
