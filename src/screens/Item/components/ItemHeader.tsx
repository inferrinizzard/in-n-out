import { useAtomValue } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { Box, Text } from "@src/components";
import { ResponsiveImage } from "@src/components/ResponsiveImage";
import { getImage } from "@src/utils/getImage";

export const ItemHeader = () => {
	const { sku, name, price, calories } = useAtomValue(activeItemAtom);

	const image = getImage(sku);

	return (
		<Box alignItems="center" gap="s" marginBottom="m">
			<ResponsiveImage
				source={image}
				baseAxis="height"
				minHeight={160}
				minWidth={320}
			/>
			<Text variant="bold" style={{ fontSize: 24 }}>
				{name}
			</Text>
			<Box flexDirection="row">
				<Text>{`$${price.toFixed(2)}`}</Text>
				<Text>{" | "}</Text>
				<Text>{`${calories} Calories`}</Text>
			</Box>
		</Box>
	);
};
