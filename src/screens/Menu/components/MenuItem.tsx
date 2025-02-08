import { Image, View } from "react-native";

import { Box, Text } from "@src/components";
import { useImage } from "@src/hooks/useImage";

import prices from "@data/prices";
import calories from "@data/calories";
import { MenuCopy } from "@data/copy";
import type { SkuId } from "@data/types";

export type MenuItemProps = {
	id: SkuId;
	onPress: () => void;
};

const MenuItem = ({ id, onPress }: MenuItemProps) => {
	const image = useImage(id);

	const mainText = (id in MenuCopy ? MenuCopy[id] : id).toUpperCase();
	const price = prices.base[id];
	const calorie = calories.base[id];

	return (
		<Box
			flexDirection="row"
			gap="s"
			paddingBottom="s"
			style={{ display: "flex" }}
			onPointerDown={onPress}
		>
			<Image
				source={image}
				style={{ height: 48, width: 64, flexGrow: 0, flexShrink: 1 }}
				resizeMode="contain"
			/>
			<View style={{ flexGrow: 1, justifyContent: "center" }}>
				<Text variant="header">{mainText}</Text>
			</View>
			{(price || calorie) && (
				<View
					style={{
						flexGrow: 0,
						flexShrink: 1,
						alignItems: "flex-end",
						justifyContent: "center",
					}}
				>
					{price && (
						<Text variant="bold">{`$${Number(price).toFixed(2)}`}</Text>
					)}
					{calorie && <Text variant="medium">{`${calorie} Cal`}</Text>}
				</View>
			)}
		</Box>
	);
};

export default MenuItem;
