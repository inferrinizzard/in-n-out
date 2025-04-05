import React from "react";
import { Modal } from "react-native";
import { Button } from "react-native-paper";

import { Box, Text } from "@src/components";
import {
	ReceiptBR,
	ReceiptFooter,
	ReceiptHeader,
	ReceiptTotal,
} from "./components";
import { ReceiptItemList } from "./items";
import { leftPadZeroes } from "./misc";

export interface ReceiptProps {
	isVisible: boolean;
	onExit?: () => void;

	subtotal: number;
	taxesAndFees: number;
	total: number;
}

export const Receipt = ({
	isVisible,
	onExit,
	subtotal,
	taxesAndFees,
	total,
}: ReceiptProps) => {
	const orderNumber = leftPadZeroes(40);

	return (
		<Modal visible={isVisible}>
			<Box alignItems="center" padding="m">
				<Button
					mode="contained"
					onPress={onExit}
					style={{ width: "100%", marginBottom: 32 }}
				>
					<Text variant="bold">{"Exit"}</Text>
				</Button>

				<ReceiptHeader orderNumber={orderNumber} />
				<ReceiptBR />
				<Text fontFamily="monospace" textAlign="left" style={{ width: "100%" }}>
					{"Cashier: JOHN DOE"}
				</Text>
				<Text fontFamily="monospace" textAlign="left" style={{ width: "100%" }}>
					{`Check  : ${orderNumber}`}
				</Text>
				<ReceiptBR />

				<ReceiptItemList />

				<ReceiptTotal
					subtotal={subtotal}
					taxesAndFees={taxesAndFees}
					total={total}
				/>
				<ReceiptBR />
				<ReceiptFooter />
			</Box>
		</Modal>
	);
};

export * from "./misc";
