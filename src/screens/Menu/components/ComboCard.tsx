import { Image } from "react-native";

import { Box, Text } from "@src/components";
import { getCopy } from "@src/utils/getCopy";
import { getImage } from "@src/utils/getImage";

import { MenuComboMap, type MenuComboKey } from "@data/menu";

interface ComboCardProps {
	comboKey: MenuComboKey;
}

export const ComboCard = ({ comboKey }: ComboCardProps) => {
	const combo = MenuComboMap[comboKey];
	const image = getImage(comboKey);

	const comboCopy = combo.map(getCopy);
	const text = `${comboCopy[0]}, French Fries, and Medium Drink`;

	return (
		<Box
			flexGrow={1}
			flexBasis={0}
			borderRadius={4}
			borderColor="redLight"
			borderWidth={2}
		>
			<Box padding="xs" gap="xs">
				<Image
					source={image}
					style={{
						minHeight: 80,
						minWidth: 100,
						flexGrow: 1,
					}}
					resizeMode="contain"
				/>
				<Text variant="bold">{text}</Text>
				<Box
					flexDirection="row"
					justifyContent="space-between"
					alignItems="flex-end"
				>
					<Text variant="bold" fontSize={16}>{`$${(1.0).toFixed(2)}`}</Text>

					<Text variant="body" lineHeight={16}>{`100 Cal`}</Text>
				</Box>
			</Box>
		</Box>
	);
};
