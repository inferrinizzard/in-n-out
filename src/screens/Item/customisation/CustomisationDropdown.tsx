import { Icon } from "react-native-paper";
import { useAtom } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { Box, Text } from "@src/components";
import { getCopy } from "@src/utils/getCopy";

import { OptionConfigMap, type OptionKey } from "@data/options";

interface CustomisationDropdownProps<Option extends OptionKey> {
	option: Option;
}

export const CustomisationDropdown = <Option extends OptionKey>({
	option,
}: CustomisationDropdownProps<Option>) => {
	const [activeItem, activeItemSetter] = useAtom(activeItemAtom);

	const optionConfig = OptionConfigMap[option];
	const options = "options" in optionConfig ? optionConfig.options : [];
	const flags =
		"flags" in OptionConfigMap[option] ? OptionConfigMap[option].flags : [];

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

			{flags.map((flag) => {
				return (
					<Box
						key={flag}
						flexDirection="row"
						onPointerDown={() => activeItemSetter().toggleFlag(option, flag)}
					>
						<Text style={{ flexGrow: 1 }}>{getCopy(flag)}</Text>
						<Icon
							source={
								activeItem.options?.[option].flags?.[flag]
									? "checkbox-marked"
									: "checkbox-blank-outline"
							}
							size={16}
						/>
					</Box>
				);
			})}
		</Box>
	);
};
