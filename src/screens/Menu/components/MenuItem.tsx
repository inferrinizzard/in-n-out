import { Image, View } from "react-native";

import { Box, Text } from "@src/components";

import { getImage } from "@src/hooks/getImage";
import { getCopy } from "@src/hooks/getCopy";

import prices from "@data/prices";
import calories from "@data/calories";
import { ItemCopy } from "@data/copy";
import type { SkuId } from "@data/types";
import type { MenuKey } from "@data/menu";

export type MenuItemProps = {
	id: SkuId | MenuKey;
	onPress: () => void;
};

const MenuItem = ({ id, onPress }: MenuItemProps) => {
	const image = getImage(id);

	const itemText = getCopy(id).toUpperCase();
	const price = id in prices.base ? prices.base[id as SkuId] : undefined;
	const calorie = id in calories.base ? calories.base[id as SkuId] : undefined;

	return (
		<Box flexDirection="row" gap="s" paddingBottom="s" onPointerDown={onPress}>
			<Image
				source={image}
				style={{ height: 48, width: 64, flexGrow: 0, flexShrink: 1 }}
				resizeMode="contain"
			/>
			<View style={{ flexGrow: 1, justifyContent: "center" }}>
				<Text variant="header">{itemText}</Text>
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
