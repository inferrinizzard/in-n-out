import React from "react";
import type { StyleProp, TextStyle } from "react-native";
import { createText, useTheme } from "@shopify/restyle";

import type { Theme } from "@src/styles/theme";

import { Box } from "./base";

export const _Text = createText<Theme>();

export const Text = ({ children, ...props }: Parameters<typeof _Text>[0]) => {
	const theme = useTheme<Theme>();

	if (!children) {
		return null;
	}

	if (typeof children !== "string") {
		return <_Text {...props}>{children}</_Text>;
	}

	const slugs = children.split("®");

	if (slugs.length <= 1) {
		return <_Text {...props}>{children}</_Text>;
	}

	const rStyle: StyleProp<TextStyle> = {
		...(props.style as object),
		fontSize: props.variant
			? theme.textVariants[props.variant].fontSize * 0.6
			: undefined,
		lineHeight: props.variant
			? theme.textVariants[props.variant].fontSize * 0.7
			: undefined,
		letterSpacing: 0,
		alignSelf: "flex-start",
	};

	return (
		<Box flexDirection="row" flexWrap="nowrap" style={{ gap: "0.04em" }}>
			{slugs.map((slug, i) => (
				<React.Fragment key={i}>
					{i ? (
						<_Text {...props} style={rStyle}>
							{"®"}
						</_Text>
					) : null}
					{slug && <_Text {...props}>{slug}</_Text>}
				</React.Fragment>
			))}
		</Box>
	);
};
