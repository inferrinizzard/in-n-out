import { Image } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Box, Text } from "@src/components";
import { getCopy } from "@src/utils/getCopy";
import { getImage } from "@src/utils/getImage";
import type { Theme } from "@src/styles/theme";

import { MenuComboMap, type MenuComboKey } from "@data/menu";
import calories from "@data/calories";
import prices from "@data/prices";

interface ComboCardProps {
	comboKey: MenuComboKey;
	index: number;
}

export const ComboCard = ({ comboKey, index }: ComboCardProps) => {
	const theme = useTheme<Theme>();

	const combo = MenuComboMap[comboKey];
	const image = getImage(comboKey);

	const comboCopy = combo.map(getCopy);
	const text = `${comboCopy[0]}, French Fries, and Medium Drink`.replace(
		"®",
		"",
	); // temp, figure out text replacement util

	const price = prices.base[comboKey];
	const calorieCount = calories.base[comboKey];

	const numbers = [
		require("@images/Combo1.svg"),
		require("@images/Combo2.svg"),
		require("@images/Combo3.svg"),
	];

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
					source={require("@images/Triangle.svg")}
					style={{
						minHeight: 55,
						minWidth: 35,
						flexGrow: 1,
						position: "absolute",
						top: theme.spacing.xs,
						left: theme.spacing.xs,
					}}
					resizeMode="contain"
				/>

				<Image
					source={numbers[index - 1]}
					style={{
						minHeight: 22,
						minWidth: 16,
						flexGrow: 1,
						position: "absolute",
						top: theme.spacing.xs + 5,
						left: theme.spacing.xs + 3,
					}}
					resizeMode="contain"
				/>

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
					<Box flexDirection="row">
						<Text
							variant="bold"
							fontSize={12}
							letterSpacing={0}
							lineHeight={16}
						>
							{"$"}
						</Text>
						<Text variant="bold" fontSize={16}>{`${(price).toFixed(2)}`}</Text>
					</Box>

					<Text variant="body" lineHeight={16}>{`${calorieCount} Cal`}</Text>
				</Box>
			</Box>
		</Box>
	);
};
