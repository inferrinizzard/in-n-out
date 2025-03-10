import { Modal } from "react-native";
import { Button } from "react-native-paper";

import { Anchor, Box, Text } from "@src/components";

import { TAX_RATE } from "./PriceTotal";

const leftPadZeroes = (num: number) =>
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
	const number = leftPadZeroes(40);

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

				<Text fontFamily="monospace">{"YOUR GUEST NUMBER IS"}</Text>
				<Text fontFamily="monospace">{number}</Text>
				<Text fontFamily="monospace">{"IN N OUT BURGER SAN JOSE"}</Text>
				<Text fontFamily="monospace">{"240 2 2040 2054"}</Text>
				<Text fontFamily="monospace">
					{Array.from({ length: 41 })
						.map((_) => "=")
						.join("")}
				</Text>
				<Text fontFamily="monospace" textAlign="left" style={{ width: "100%" }}>
					{"Cashier: JOHN DOE"}
				</Text>
				<Text fontFamily="monospace" textAlign="left" style={{ width: "100%" }}>
					{`Check  : ${number}`}
				</Text>
				<Text fontFamily="monospace">
					{Array.from({ length: 41 })
						.map((_) => "=")
						.join("")}
				</Text>
				{}

				<Box width="100%" flexDirection="row" justifyContent="space-between">
					<Text fontFamily="monospace">{"COUNTER-Eat In"}</Text>
					<Text fontFamily="monospace">{subtotal.toFixed(2)}</Text>
				</Box>
				<Box width="100%" flexDirection="row" justifyContent="space-between">
					<Text fontFamily="monospace">{`TAX ${TAX_RATE}%`}</Text>
					<Text fontFamily="monospace">{taxesAndFees.toFixed(2)}</Text>
				</Box>
				<Box width="100%" flexDirection="row" justifyContent="space-between">
					<Text fontFamily="monospace">{"Amount Due"}</Text>
					<Text fontFamily="monospace">{total.toFixed(2)}</Text>
				</Box>
				<Text fontFamily="monospace">
					{Array.from({ length: 41 })
						.map((_) => "=")
						.join("")}
				</Text>
				<Text fontFamily="monospace">{"Help us end Human Trafficking."}</Text>
				<Text fontFamily="monospace">{"To donate, please visit:"}</Text>
				<Anchor href="www.slave2nothing.org">
					<Text fontFamily="monospace">{"www.slave2nothing.org"}</Text>
				</Anchor>
				<Text fontFamily="monospace">{"THANK YOU"}</Text>
				<Text fontFamily="monospace">
					{"Questions/Comments: Call 800-786-1000"}
				</Text>
				<Box width="100%" flexDirection="row" justifyContent="space-evenly">
					<Text fontFamily="monospace">{`${date.getFullYear()}-${leftPadZeroes(date.getMonth())}-${leftPadZeroes(date.getDate())}`}</Text>
					<Text fontFamily="monospace">{"L1 L2"}</Text>
					<Text fontFamily="monospace">{`${leftPadZeroes(date.getHours() % 12)}:${leftPadZeroes(date.getMinutes())} ${date.getHours() > 12 ? "PM" : "AM"}`}</Text>
				</Box>
			</Box>
		</Modal>
	);
};
