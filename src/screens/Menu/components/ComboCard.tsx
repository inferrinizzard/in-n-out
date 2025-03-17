import { useMemo } from "react";
import { useTheme } from "@shopify/restyle";

import { useAtomSetter } from "@src/atoms";

import { ScreenKeys } from "@src/navigation";
import { queueAtom } from "@src/atoms/queue.atom";
import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { Box, Text, ResponsiveImage } from "@src/components";
import { getCopy } from "@src/utils/getCopy";
import { getImage } from "@src/utils/getImage";
import type { Theme } from "@src/styles/theme";

import calories from "@data/calories";
import { MenuComboMap, type MenuComboKey } from "@data/menu";
import prices from "@data/prices";
import { Sku } from "@data/sku";

import TriangleSvg from "@src/svg/triangle";
import ComboOneSvg from "@src/svg/combo1";
import ComboTwoSvg from "@src/svg/combo2";
import ComboThreeSvg from "@src/svg/combo3";

import type { MenuProps } from "../index";

interface ComboCardProps extends Pick<MenuProps, "navigation"> {
	comboKey: MenuComboKey;
	index: number;
}

export const ComboCard = ({ navigation, comboKey, index }: ComboCardProps) => {
	const theme = useTheme<Theme>();

	const queueSetter = useAtomSetter(queueAtom);
	const activeItemSetter = useAtomSetter(activeItemAtom);

	const combo = MenuComboMap[comboKey];
	const image = getImage(comboKey);

	const burgerCopy = getCopy(combo[0]);

	const price = prices.base[comboKey];
	const calorieCount = calories.base[comboKey];

	const ComboNumber = useMemo(
		() => [ComboOneSvg, ComboTwoSvg, ComboThreeSvg][index - 1],
		[index],
	);

	return (
		<Box
			flexGrow={1}
			borderRadius={4}
			borderColor="redLight"
			borderWidth={2}
			style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
			onPress={() => {
				activeItemSetter.setDefaultItem({ sku: combo[0] });
				navigation.push(ScreenKeys.Item, { title: burgerCopy });
				queueSetter.updateIndex(0);
				queueSetter.setQueue(combo[0], Sku.Fries, Sku.SoftDrink);
			}}
			touchableProps={{
				style: {
					flexBasis: 0,
					flexGrow: 1,
				},
			}}
		>
			<Box padding="xs" gap="xs">
				<Box
					style={{
						height: 55,
						width: 35,
						position: "absolute",
						top: theme.spacing.xs,
						left: theme.spacing.xs,
					}}
				>
					<TriangleSvg />
				</Box>
				<Box
					style={{
						height: 22,
						width: 16,
						position: "absolute",
						top: theme.spacing.xs + 5,
						left: theme.spacing.xs + 3,
					}}
				>
					<ComboNumber />
				</Box>

				<ResponsiveImage
					source={image}
					baseAxis="height"
					minHeight={80}
					minWidth={80}
				/>
				<Box>
					<Text variant="bold" fontSize={13}>{`${burgerCopy},`}</Text>
					<Text variant="bold" fontSize={13}>
						{"French Fries, and"}
					</Text>
					<Text variant="bold" fontSize={13}>
						{"Medium Drink"}
					</Text>
				</Box>
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
						<Text variant="bold" fontSize={14}>{`${(price).toFixed(2)}`}</Text>
					</Box>

					<Text variant="body" lineHeight={14}>{`${calorieCount} Cal`}</Text>
				</Box>
			</Box>
		</Box>
	);
};
