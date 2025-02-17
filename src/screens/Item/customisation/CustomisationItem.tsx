import { useState } from "react";
import { Image } from "react-native";
import { Icon } from "react-native-paper";
import { useAtom } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { Box, Text } from "@src/components";
import { getCopy } from "@src/utils/getCopy";
import { getImage } from "@src/utils/getImage";

import type { OptionKey } from "@data/options";

interface CustomisationRowProps {
	option: OptionKey;
}

export const CustomisationRow = ({ option }: CustomisationRowProps) => {
	const [activeItem, activeItemSetter] = useAtom(activeItemAtom);

	const [isOpen, setIsOpen] = useState(false);

	const image = getImage(option);

	return (
		<Box
			flexDirection="row"
			paddingBottom="s"
			gap="s"
			alignItems="center"
			onPointerDown={() => setIsOpen(!isOpen)}
		>
			<Image
				source={image}
				style={{ minHeight: 40, minWidth: 60 }}
				resizeMode="contain"
			/>
			<Box flexGrow={1}>
				<Text variant="bold">{getCopy(option)}</Text>
			</Box>
			<Box flexDirection="row" alignItems="center">
				<Box>
					<Text>{activeItem.options?.[option]?.value}</Text>
				</Box>
				<Icon source={isOpen ? "chevron-up" : "chevron-down"} size={24} />
			</Box>
		</Box>
	);
};
