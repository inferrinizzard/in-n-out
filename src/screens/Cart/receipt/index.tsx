import React, { useMemo } from "react";
import { Modal } from "react-native";
import { Button } from "react-native-paper";
import { useAtomValue } from "jotai";

import { orderAtom } from "@src/atoms";
import { Box, Text } from "@src/components";
import { getCustomisationData } from "@src/atoms/utils/options";
import {
	ReceiptBR,
	ReceiptFooter,
	ReceiptHeader,
	ReceiptTotal,
} from "./components";

export const TAX_RATE = 10.25; // Francisquito -> Baldwin Park -> LA County

export const leftPadZeroes = (num: number) =>
	`00${num.toFixed(0).toString()}`.slice(-2);

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
	const date = new Date();
	const orderNumber = leftPadZeroes(40);

	const order = useAtomValue(orderAtom);
	const orderItems = useMemo(() => Object.entries(order), [order]);

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

				<Box width="100%" flexDirection="column" paddingBottom="m">
					{orderItems.map(([uuid, item]) => {
						const customisationData = getCustomisationData(item);

						return (
							<React.Fragment key={uuid}>
								<Text
									fontFamily="monospace"
									textAlign="left"
									style={{ width: "100%" }}
								>
									{`  ${item.sku}`}
								</Text>
								{customisationData.map(([optionKey, optionInstance]) => {
									const optionText =
										"value" in optionInstance
											? optionInstance.value
											: "count" in optionInstance
												? optionInstance.count
												: undefined;

									if (!optionText) {
										return;
									}

									return (
										<Text
											key={optionKey}
											fontFamily="monospace"
											textAlign="left"
											style={{ width: "100%" }}
										>
											{`  - ${optionText} ${optionKey}`}
										</Text>
									);
								})}
							</React.Fragment>
						);
					})}
				</Box>

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
