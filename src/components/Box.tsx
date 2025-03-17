import React from "react";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { createBox } from "@shopify/restyle";

import type { Theme } from "@src/styles/theme";

export const ThemeBox = createBox<Theme>();

type ThemeBoxProps = Parameters<typeof ThemeBox>[0];
export interface BoxProps extends ThemeBoxProps {
	onPress?: () => void;
	touchableProps?: TouchableOpacityProps;
}

const Box = ({ onPress, touchableProps, children, ...props }: BoxProps) => {
	if (!onPress) {
		return <ThemeBox {...props}>{children}</ThemeBox>;
	}

	return (
		<TouchableOpacity {...touchableProps} onPress={onPress}>
			<ThemeBox {...props}>{children}</ThemeBox>
		</TouchableOpacity>
	);
};

export default React.memo(Box);
