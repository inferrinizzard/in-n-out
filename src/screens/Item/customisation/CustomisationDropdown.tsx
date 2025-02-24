import { Button, Icon, TextInput } from "react-native-paper";
import { useAtom } from "jotai";
import { useTheme } from "@shopify/restyle";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
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

	const [activeItem, activeItemSetter] = useAtom(activeItemAtom);

	const activeItemOptions = activeItem.options?.[option];
	const activeItemFlags = activeItemOptions?.flags;

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
						<Button style={{ backgroundColor: theme.colors.greyLight }}>
							<Icon source={"minus"} size={12} />
						</Button>
						<TextInput
							inputMode="numeric"
							value={(activeItem.options?.[option].count ?? 0).toString()}
							style={{
								height: 30,
								width: 30,
							}}
							onChange={() => {}}
						/>
						<Button style={{ backgroundColor: theme.colors.greyLight }}>
							<Icon source={"plus"} size={12} />
						</Button>
					</Box>
				</Box>
			)}

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
