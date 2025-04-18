import { View } from "react-native";

import { Box, Text, ResponsiveImage } from "@src/components";
import { getImage } from "@src/utils/getImage";
import { getCopy } from "@src/utils/getCopy";

import prices from "@data/prices";
import calories from "@data/calories";
import type { MenuKey } from "@data/menu";
import type { SkuKey } from "@data/sku";

export type MenuItemProps = {
	id: SkuKey | MenuKey;
	supertext?: string;
	subtext?: string;
	onPress: () => void;
};

const MenuItem = ({ id, supertext, subtext, onPress }: MenuItemProps) => {
	const image = getImage(id);

	const itemText = getCopy(id).toUpperCase();
	const price = id in prices.base ? prices.base[id as SkuKey] : undefined;
	const calorie = id in calories.base ? calories.base[id as SkuKey] : undefined;

	return (
		<Box
			flexDirection="row"
			gap="s"
			alignItems="center"
			paddingVertical="s"
			onPress={onPress}
		>
			<ResponsiveImage source={image} minHeight={48} minWidth={64} />
			<View style={{ flexGrow: 1, justifyContent: "center" }}>
				{supertext && <Text variant="script">{supertext}</Text>}
				<Text variant="header">{itemText}</Text>
				{subtext && <Text variant="script">{subtext}</Text>}
			</View>
			{(price || calorie) && (
				<View
					style={{
						flexGrow: 0,
						flexShrink: 0,
						alignItems: "flex-end",
						justifyContent: "center",
					}}
				>
					{price && (
						<Text variant="bold">{`$${Number(price).toFixed(2)}`}</Text>
					)}
					{!!calorie && (
						<Text variant="medium" numberOfLines={1}>{`${calorie} Cal`}</Text>
					)}
				</View>
			)}
		</Box>
	);
};

export default MenuItem;
