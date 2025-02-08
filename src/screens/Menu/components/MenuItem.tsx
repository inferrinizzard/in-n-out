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
				<Text variant="header">{MenuCopy[id].toUpperCase()}</Text>
			</View>
			<View
				style={{
					flexGrow: 0,
					flexShrink: 1,
					alignItems: "flex-end",
					justifyContent: "center",
				}}
			>
				<Text variant="bold">{`$${Number(prices.base[id]).toFixed(2)}`}</Text>
				<Text variant="medium">{`${calories.base[id]} Cal`}</Text>
			</View>
		</Box>
	);
};

export default MenuItem;
