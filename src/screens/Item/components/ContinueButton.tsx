import { useCallback, useMemo } from "react";
import { Button } from "react-native-paper";
import { StackActions } from "@react-navigation/native";
import { useAtomValue } from "jotai";
import { useTheme } from "@shopify/restyle";

import type { StackScreenProps } from "@src/navigation";
import { ScreenKeys } from "@src/navigation/screens";
import { Box, Text } from "@src/components";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { queueAtom } from "@src/atoms/queue.atom";
import { orderAtom } from "@src/atoms/order.atom";
import { useAtomSetter } from "@src/atoms";
import type { Theme } from "@src/styles/theme";
import { getCopy } from "@src/utils/getCopy";

import { Sku } from "@data/sku";
import { Item, ItemOptionMap } from "@data/items";

interface ContinueButtonProps
	extends Pick<StackScreenProps<typeof ScreenKeys.Item>, "navigation"> {}

const ContinueButton = ({ navigation }: ContinueButtonProps) => {
	const theme = useTheme<Theme>();

	const activeItem = useAtomValue(activeItemAtom);
	const activeItemSetter = useAtomSetter(activeItemAtom);
	const { index, pending, queue } = useAtomValue(queueAtom);
	const queueSetter = useAtomSetter(queueAtom);
	const orderSetter = useAtomSetter(orderAtom);

	const next = queue[index + 1];
	const pendingList = Object.values(pending);

	const advanceToCart = useCallback(() => {
		if (navigation.canGoBack()) {
			navigation.dispatch(StackActions.popToTop());
		}
		navigation.replace(ScreenKeys.Cart);
		queueSetter.clear();
	}, [navigation, queueSetter]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const secondaryButtonInfo = useMemo(() => {
		if (queue.length || pendingList.length) {
			return {
				text: `Skip ${getCopy(activeItem.sku)}`,
				onPress: () => {
					if (!next) {
						orderSetter.addItem(...pendingList);

						advanceToCart();
						return;
					}

					queueSetter.updateIndex(index + 1);
					activeItemSetter.setDefaultItem({ sku: next });
					navigation.push(ScreenKeys.Item, { title: getCopy(next) });
				},
			};
		}

		if (activeItem.item === Item.Burger) {
			return {
				text: "Make it a combo",
				onPress: () => {
					queueSetter.setQueue(activeItem.sku, Sku.Fries, Sku.SoftDrink);
					queueSetter.addToPending(activeItem);
					queueSetter.updateIndex(index + 1);
					activeItemSetter.setDefaultItem({ sku: Sku.Fries });
					navigation.push(ScreenKeys.Item, { title: getCopy(Sku.Fries) });
				},
			};
		}
	}, [activeItem, next]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const primaryButtonInfo = useMemo(() => {
		if (!activeItem.isValid) {
			return {
				text: `Required: ${ItemOptionMap[
					activeItem.item as keyof typeof ItemOptionMap
				].options
					.filter(
						(option) =>
							activeItem.options &&
							(!(option in activeItem.options) || !activeItem.options[option]),
					)
					.map(getCopy)
					.join(", ")}`,
				onPress: () => {},
			};
		}

		if (next) {
			return {
				onPress: () => {
					activeItemSetter.setDefaultItem({ sku: next });
					queueSetter.addToPending(activeItem);
					queueSetter.updateIndex(index + 1);
					navigation.push(ScreenKeys.Item, { title: getCopy(next) });
				},
				text: `Continue to ${getCopy(next)}`,
			};
		}

		return {
			onPress: () => {
				orderSetter.addItem(...pendingList, activeItem);
				advanceToCart();
			},
			text: "Add to Order",
		};
	}, [next, activeItem]);

	return (
		<Box gap="l" paddingHorizontal="m" paddingVertical="s" flexDirection="row">
			{secondaryButtonInfo && (
				<Button
					style={{
						backgroundColor: theme.colors.greyLight,
						flexGrow: 1,
						flexBasis: 0,
					}}
					onPress={secondaryButtonInfo.onPress}
				>
					<Text variant="bold" color="black">
						{secondaryButtonInfo.text}
					</Text>
				</Button>
			)}
			<Button
				disabled={!activeItem.isValid}
				style={{
					backgroundColor: activeItem.isValid
						? theme.colors.redLight
						: theme.colors.greyDark,
					flexGrow: 1,
					flexBasis: 0,
				}}
				onPress={primaryButtonInfo.onPress}
			>
				<Text variant="bold" color="white">
					{primaryButtonInfo.text}
				</Text>
			</Button>
		</Box>
	);
};

export default ContinueButton;
