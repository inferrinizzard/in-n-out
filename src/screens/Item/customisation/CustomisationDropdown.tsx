import { Button, TextInput } from "react-native-paper";
import Icon from "@react-native-vector-icons/material-icons";
import { useAtomValue } from "jotai";
import { useTheme } from "@shopify/restyle";

import { activeItemAtom, useAtomSetter } from "@src/atoms";
import { Box, Text } from "@src/components";
import { getCopy } from "@src/utils/getCopy";

import {
	OptionConfigMap,
	type OptionInstance,
	type OptionKey,
} from "@data/options";
import type { Theme } from "@src/styles/theme";

interface CustomisationDropdownProps<Option extends OptionKey> {
	option: Option;
}

export const CustomisationDropdown = <Option extends OptionKey>({
	option,
}: CustomisationDropdownProps<Option>) => {
	const theme = useTheme<Theme>();

	const activeItemSetter = useAtomSetter(activeItemAtom);
	const activeItem = useAtomValue(activeItemAtom);

	const activeItemOptions = activeItem.options?.[option];
	const activeItemFlags = activeItemOptions?.flags;
	const activeItemCount =
		activeItemOptions && "count" in activeItemOptions
			? activeItemOptions.count
			: 0;

	const optionConfig = OptionConfigMap[option];
	const hasCountOption = "count" in optionConfig ? optionConfig.count : false;
	const options = "options" in optionConfig ? optionConfig.options : [];
	const flags =
		"flags" in OptionConfigMap[option] ? OptionConfigMap[option].flags : [];

	return (
		<Box>
			{hasCountOption && (
				<Box flexDirection="row" padding="xs" alignItems="center">
					<Text style={{ flexGrow: 1 }}>{`Num ${option}`}</Text>
					<Box flexDirection="row" gap="xs">
						<Button
							style={{ backgroundColor: theme.colors.greyLight }}
							disabled={activeItemCount <= 0}
							onPress={() =>
								activeItemSetter.updateOption(option, {
									count: activeItemCount - 1,
								} as OptionInstance<typeof option>)
							}
						>
							<Icon name="minimize" size={12} />
						</Button>
						<TextInput
							inputMode="numeric"
							keyboardType="numeric"
							value={activeItemCount.toString()}
							style={{
								height: 30,
								width: 30,
							}}
							onChangeText={(text) =>
								activeItemSetter.updateOption(option, {
									count: +text,
								} as OptionInstance<typeof option>)
							}
						/>
						<Button
							style={{ backgroundColor: theme.colors.greyLight }}
							onPress={() =>
								activeItemSetter.updateOption(option, {
									count: activeItemCount + 1,
								} as OptionInstance<typeof option>)
							}
						>
							<Icon name="add" size={12} />
						</Button>
					</Box>
				</Box>
			)}

			{options.map((optionValue) => {
				const activeItemOptions = activeItem.options?.[option];
				const isActive =
					activeItemOptions &&
					"value" in activeItemOptions &&
					activeItemOptions?.value === optionValue;
				return (
					<Box
						key={optionValue}
						flexDirection="row"
						padding="xs"
						backgroundColor={isActive ? "greyLight" : undefined}
						onPress={() =>
							activeItemSetter.updateOption(option, {
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
							name={isActive ? "radio-button-on" : "radio-button-off"}
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
						onPress={() => activeItemSetter.toggleFlag(option, flag)}
					>
						<Text
							variant={isActive ? "bold" : undefined}
							style={{ flexGrow: 1, letterSpacing: 0 }}
						>
							{getCopy(flag)}
						</Text>
						<Icon
							name={isActive ? "check-box" : "check-box-outline-blank"}
							size={16}
						/>
					</Box>
				);
			})}
		</Box>
	);
};
