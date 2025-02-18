import { Icon } from "react-native-paper";
import { useAtom } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { Box, Text } from "@src/components";
import { getCopy } from "@src/utils/getCopy";

import { OptionConfigMap, type OptionKey } from "@data/options";

interface CustomisationDropdownProps {
	option: OptionKey;
}

export const CustomisationDropdown = ({
	option,
}: CustomisationDropdownProps) => {
	const [activeItem, activeItemSetter] = useAtom(activeItemAtom);

	const options = OptionConfigMap[option].options;

	return (
		<Box gap="s" padding="s">
			{options.map((optionValue) => {
				const isActive = activeItem.options?.[option]?.value === optionValue;
				return (
					<Box
						key={optionValue}
						flexDirection="row"
						onPointerDown={() =>
							activeItemSetter().updateOption(option, { value: optionValue })
						}
					>
						<Text style={{ flexGrow: 1 }}>{getCopy(optionValue)}</Text>
						<Icon
							source={isActive ? "radiobox-marked" : "radiobox-blank"}
							size={16}
						/>
					</Box>
				);
			})}
		</Box>
	);
};
