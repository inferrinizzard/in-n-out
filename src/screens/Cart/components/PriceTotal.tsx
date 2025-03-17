import React, { useMemo, useState } from "react";
import { Button } from "react-native-paper";
import { useAtomValue } from "jotai";

import { orderAtom } from "@src/atoms/order.atom";
import { Box, Text } from "@src/components";

import { Receipt, TAX_RATE } from "./Receipt";

export const PriceTotal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const order = useAtomValue(orderAtom);
	const orderItems = useMemo(() => Object.entries(order), [order]);

	if (!orderItems.length) {
		return null;
	}

	const subtotal = Number(
		orderItems.reduce((sum, [_, item]) => +item.price + sum, 0),
	);
	const taxesAndFees = subtotal * (TAX_RATE / 100.0);
	const total = subtotal + taxesAndFees;

	return (
		<>
			<Box
				gap="xs"
				paddingHorizontal="m"
				paddingVertical="s"
				borderTopColor="greyLight"
				borderTopWidth={1}
			>
				<Box flexDirection="row" justifyContent="space-between" padding="xs">
					<Text>{"Subtotal:"}</Text>
					<Text>{`$${subtotal.toFixed(2)}`}</Text>
				</Box>
				<Box flexDirection="row" justifyContent="space-between" padding="xs">
					<Text>{"Taxes and Fees:"}</Text>
					<Text>{`$${taxesAndFees.toFixed(2)}`}</Text>
				</Box>
				<Box
					flexDirection="row"
					justifyContent="space-between"
					padding="xs"
					paddingBottom="s"
				>
					<Text variant="bold">{"Total:"}</Text>
					<Text variant="bold" letterSpacing={0}>{`$${total.toFixed(2)}`}</Text>
				</Box>
				<Button mode="contained" onPress={() => setIsModalOpen(true)}>
					<Text variant="bold">{"Review and Pay"}</Text>
				</Button>
			</Box>
			<Receipt
				isVisible={isModalOpen}
				onExit={() => setIsModalOpen(false)}
				subtotal={subtotal}
				taxesAndFees={taxesAndFees}
				total={total}
			/>
		</>
	);
};
