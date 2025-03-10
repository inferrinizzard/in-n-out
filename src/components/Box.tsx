import React from "react";
import { TouchableOpacity } from "react-native";
import { createBox } from "@shopify/restyle";

import type { Theme } from "@src/styles/theme";

export const ThemeBox = createBox<Theme>();

type ThemeBoxProps = Parameters<typeof ThemeBox>[0];
export interface BoxProps extends ThemeBoxProps {
	onPress?: () => void;
	// touchable?:
}

const _Box = ({ onPress, children, ...props }: BoxProps) => {
	if (!onPress) {
		return <ThemeBox {...props}>{children}</ThemeBox>;
	}

	return (
		<TouchableOpacity onPress={onPress}>
			<ThemeBox {...props}>{children}</ThemeBox>
		</TouchableOpacity>
	);
};

export const Box = React.memo(_Box);
