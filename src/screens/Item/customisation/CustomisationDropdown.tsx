import { Icon } from "react-native-paper";
import { useAtom } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { Box, Text } from "@src/components";
import { getCopy } from "@src/utils/getCopy";

import {
	OptionConfigMap,
	type OptionInstance,
	type OptionKey,
} from "@data/options";

interface CustomisationDropdownProps<Option extends OptionKey> {
	option: Option;
}

export const CustomisationDropdown = <Option extends OptionKey>({
	option,
}: CustomisationDropdownProps<Option>) => {
	const [activeItem, activeItemSetter] = useAtom(activeItemAtom);

	const activeItemOptions = activeItem.options?.[option];
	const activeItemFlags = activeItemOptions?.flags;

	const optionConfig = OptionConfigMap[option];
	const options = "options" in optionConfig ? optionConfig.options : [];
	const flags =
		"flags" in OptionConfigMap[option] ? OptionConfigMap[option].flags : [];

	return (
		<Box>
			{options.map((optionValue) => {
				const isActive = activeItem.options?.[option]?.value === optionValue;
				return (
					<Box
						key={optionValue}
						flexDirection="row"
						padding="xs"
						backgroundColor={isActive ? "greyLight" : undefined}
						onPointerDown={() =>
							activeItemSetter().updateOption(option, {
								value: optionValue,
							} as OptionInstance<typeof option>)
						}
					>
						<Text
							variant={isActive ? "bold" : undefined}
							style={{ flexGrow: 1, letterSpacing: 0 }}
						>
							{getCopy(optionValue)}
						</Text>
						<Icon
							source={isActive ? "radiobox-marked" : "radiobox-blank"}
							size={16}
						/>
					</Box>
				);
			})}

			{flags.map((flag) => {
				const isActive =
					activeItemFlags &&
					flag in activeItemFlags &&
					activeItemFlags[flag as keyof typeof activeItemFlags];

				return (
					<Box
						key={flag}
						flexDirection="row"
						padding="xs"
						backgroundColor={isActive ? "greyLight" : undefined}
						onPointerDown={() => activeItemSetter().toggleFlag(option, flag)}
					>
						<Text
							variant={isActive ? "bold" : undefined}
							style={{ flexGrow: 1, letterSpacing: 0 }}
						>
							{getCopy(flag)}
						</Text>
						<Icon
							source={isActive ? "checkbox-marked" : "checkbox-blank-outline"}
							size={16}
						/>
					</Box>
				);
			})}
		</Box>
	);
};
