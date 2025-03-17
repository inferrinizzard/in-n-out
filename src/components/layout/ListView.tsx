import React from "react";
import type { StyleProp, ViewStyle } from "react-native";

import { Box } from "../Box";

export interface ListViewProps<
	Items extends Readonly<Array<unknown>>,
	Item = Items[number],
> {
	data: Items;
	SeparatorComponent?: React.ComponentType;
	renderItem: (item: Item) => JSX.Element;
}

export const ListView = <Items extends Readonly<Array<unknown>>>({
	data,
	renderItem,
	SeparatorComponent,
}: ListViewProps<Items>) => (
	<Box>
		{data.map((item, i) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
			<React.Fragment key={i}>
				{i > 0 && SeparatorComponent ? <SeparatorComponent /> : null}
				{renderItem(item)}
			</React.Fragment>
		))}
	</Box>
);
