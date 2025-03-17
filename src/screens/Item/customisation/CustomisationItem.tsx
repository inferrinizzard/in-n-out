import React, { useState } from "react";
import { Icon } from "react-native-paper";
import { useAtom } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { Box, Text } from "@src/components";
import { ResponsiveImage } from "@src/components/ResponsiveImage";
import { getCopy } from "@src/utils/getCopy";
import { getImage } from "@src/utils/getImage";

import type { OptionKey } from "@data/options";
import { CustomisationDropdown } from "./CustomisationDropdown";

interface CustomisationRowProps {
	option: OptionKey;
}

export const CustomisationRow = ({ option }: CustomisationRowProps) => {
	const [activeItem, activeItemSetter] = useAtom(activeItemAtom);

	const [isOpen, setIsOpen] = useState(false);

	const image = getImage(option);

	const activeOption = activeItem.options?.[option];
	const endText =
		activeOption && "value" in activeOption && activeOption?.value;

	return (
		<>
			<Box
				flexDirection="row"
				paddingBottom="s"
				gap="s"
				alignItems="center"
				onPress={() => setIsOpen(!isOpen)}
			>
				<ResponsiveImage source={image} minHeight={40} minWidth={60} />
				<Box flexGrow={1}>
					<Text variant="bold">{getCopy(option)}</Text>
				</Box>
				<Box flexDirection="row" alignItems="center">
					<Box>{endText && <Text>{getCopy(endText)}</Text>}</Box>
					<Icon source={isOpen ? "chevron-up" : "chevron-down"} size={24} />
				</Box>
			</Box>
			{isOpen && <CustomisationDropdown option={option} />}
		</>
	);
};
