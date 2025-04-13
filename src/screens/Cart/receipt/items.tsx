import React, { useMemo } from "react";
import { useAtomValue } from "jotai";

import { orderAtom, type SkuItem } from "@src/atoms";
import { Box, Text } from "@src/components";
import { getCustomisationData } from "@src/atoms/utils/options";

import type { SkuKey } from "@data/sku";

const ReceiptSkuOptions = <Sku extends SkuKey>({
	item,
}: { item: SkuItem<Sku> }) => {
	const customisationData = getCustomisationData(item);

	return (
		<>
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
		</>
	);
};

const ReceiptItem = <Sku extends SkuKey>({ item }: { item: SkuItem<Sku> }) => {
	return (
		<Box width="100%" flexDirection="row" justifyContent="space-between">
			<Box flexDirection="column">
				<Text fontFamily="monospace">{`  ${item.quantity} ${item.sku}`}</Text>
				{item.options && <ReceiptSkuOptions<Sku> item={item} />}
			</Box>
			<Text fontFamily="monospace">{item.price.toFixed(2)}</Text>
		</Box>
	);
};

export const ReceiptItemList = () => {
	const order = useAtomValue(orderAtom);
	const orderItems = useMemo(() => Object.entries(order), [order]);

	return (
		<Box width="100%" flexDirection="column" paddingBottom="m">
			{orderItems.map(([uuid, item]) => (
				<ReceiptItem key={uuid} item={item} />
			))}
		</Box>
	);
};
