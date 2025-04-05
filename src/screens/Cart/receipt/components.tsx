import React from "react";

import { Anchor, Box, Text } from "@src/components";

import type { ReceiptProps } from "./index";
import { leftPadZeroes, TAX_RATE } from "./misc";

export const ReceiptBR = () => (
	<Text fontFamily="monospace">
		{Array.from({ length: 41 })
			.map((_) => "=")
			.join("")}
	</Text>
);

export const ReceiptHeader = ({ orderNumber }: { orderNumber: string }) =>
	[
		"YOUR GUEST NUMBER IS",
		orderNumber,
		"IN N OUT BURGER SAN JOSE",
		"240 2 2040 2054",
	].map((text) => (
		<Text key={text} fontFamily="monospace">
			{text}
		</Text>
	));

export const ReceiptTotal = ({
	subtotal,
	taxesAndFees,
	total,
}: Pick<ReceiptProps, "subtotal" | "taxesAndFees" | "total">) => {
	const lines = [
		{ left: "COUNTER-Eat In", right: subtotal.toFixed(2) },
		{ left: `TAX ${TAX_RATE}%`, right: taxesAndFees.toFixed(2) },
		{ left: "Amount Due", right: total.toFixed(2) },
	];

	return lines.map(({ left, right }, i) => (
		<Box
			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
			key={i}
			width="100%"
			flexDirection="row"
			justifyContent="space-between"
		>
			<Text fontFamily="monospace">{left}</Text>
			<Text fontFamily="monospace">{right}</Text>
		</Box>
	));
};

export const ReceiptFooter = () => {
	const date = new Date();

	return (
		<>
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
		</>
	);
};
