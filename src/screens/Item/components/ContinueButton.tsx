import { useMemo } from "react";
import { Button } from "react-native-paper";
import { StackActions } from "@react-navigation/native";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useTheme } from "@shopify/restyle";

import { ScreenKeys, type StackScreenProps } from "@src/navigation";
import { Box, Text } from "@src/components";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { queueAtom } from "@src/atoms/queue.atom";
import { orderAtom } from "@src/atoms/order.atom";
import type { Theme } from "@src/styles/theme";

import { Item } from "@data/items";
import { getCopy } from "@src/utils/getCopy";

interface ContinueButtonProps
	extends Pick<StackScreenProps<typeof ScreenKeys.Item>, "navigation"> {}

const ContinueButton = ({ navigation }: ContinueButtonProps) => {
	const theme = useTheme<Theme>();

	const [activeItem, activeItemSetter] = useAtom(activeItemAtom);
	const [{ pending, queue }, queueSetter] = useAtom(queueAtom);
	const { addItem } = useSetAtom(orderAtom)();

	const next = queue[0];

	const secondaryButtonInfo = useMemo(() => {
		if (next) {
			return {
				text: `Skip ${next}`,
				onPress: () => {},
			};
		}

		if (activeItem.item === Item.Burger) {
			return {
				text: "Make it a combo",
				onPress: () => {},
			};
		}
	}, [activeItem, next]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const primaryButtonInfo = useMemo(() => {
		if (next) {
			return {
				onPress: () => {
					activeItemSetter().setDefaultItem({ sku: next });
					queueSetter().shiftFromQueue();
					queueSetter().addToPending(activeItem);
					navigation.push(ScreenKeys.Item, { title: getCopy(next) });
				},
				text: `Continue to ${next}`,
			};
		}

		return {
			onPress: () => {
				addItem(...pending, activeItem);
				if (navigation.canGoBack()) {
					navigation.dispatch(StackActions.popToTop());
				}
				navigation.replace(ScreenKeys.Cart);
			},
			text: "Add to Order",
		};
	}, [next, activeItem]);

	return (
		<Box gap="l" padding="m" flexDirection="row">
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
				style={{
					backgroundColor: theme.colors.redLight,
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
