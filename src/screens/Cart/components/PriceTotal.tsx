import { useMemo } from "react";
import { Button } from "react-native-paper";
import { useAtomValue } from "jotai";

import { orderAtom } from "@src/atoms/order.atom";
import { Box, Text } from "@src/components";

export const PriceTotal = () => {
	const order = useAtomValue(orderAtom);
	const orderItems = useMemo(() => Object.entries(order), [order]);

	if (!orderItems.length) {
		return null;
	}

	const subtotal = Number(
		orderItems.reduce((sum, [_, item]) => +item.price + sum, 0),
	);
	const taxesAndFees = 1.0;
	const total = subtotal + taxesAndFees;

	return (
		<Box gap="s" padding="m" borderTopColor="greyLight" borderTopWidth={1}>
			<Box flexDirection="row" justifyContent="space-between" p="s">
				<Text>{"Subtotal:"}</Text>
				<Text>{`$${subtotal.toFixed(2)}`}</Text>
			</Box>
			<Box flexDirection="row" justifyContent="space-between" p="s">
				<Text>{"Taxes and Fees:"}</Text>
				<Text>{`$${taxesAndFees.toFixed(2)}`}</Text>
			</Box>
			<Box flexDirection="row" justifyContent="space-between" p="s">
				<Text>{"Total:"}</Text>
				<Text>{`$${total.toFixed(2)}`}</Text>
			</Box>
			<Button mode="contained">
				<Text>{"Review and Pay"}</Text>
			</Button>
		</Box>
	);
};
