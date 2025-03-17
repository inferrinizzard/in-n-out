import React, { useMemo } from "react";
import type { StyleProp, TextStyle } from "react-native";
import { createText, useTheme } from "@shopify/restyle";

import type { Theme } from "@src/styles/theme";

import Box from "./Box";

export const ThemeText = createText<Theme>();

type ThemeTextProps = Parameters<typeof ThemeText>[0];
export interface TextProps extends ThemeTextProps {}

const _Text = ({ children, style, ...props }: TextProps) => {
	const theme = useTheme<Theme>();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const textStyle: StyleProp<TextStyle> = useMemo(() => {
		const variantTheme = props.variant
			? theme.textVariants[props.variant]
			: undefined;

		const fontSize = (style as TextStyle)?.fontSize ?? variantTheme?.fontSize;

		const lineHeight =
			(style as TextStyle)?.lineHeight ??
			(variantTheme && "lineHeight" in variantTheme
				? variantTheme.lineHeight
				: undefined);

		const letterSpacing = ((style as TextStyle)?.letterSpacing ??
			(variantTheme && "letterSpacing" in variantTheme
				? variantTheme.letterSpacing
				: undefined)) as TextStyle["letterSpacing"];

		return { fontSize, lineHeight, letterSpacing };
	}, [props.variant, style]);

	if (!children) {
		return null;
	}

	if (typeof children !== "string") {
		return (
			<ThemeText {...props} style={style}>
				{children}
			</ThemeText>
		);
	}

	const slugs = children.split("®");

	if (slugs.length <= 1) {
		return (
			<ThemeText {...props} style={style}>
				{children}
			</ThemeText>
		);
	}

	const rStyle: StyleProp<TextStyle> = {
		fontSize: (textStyle.fontSize ?? 0) * 0.6 || undefined,
		lineHeight: (textStyle.lineHeight ?? 0) * 0.7 || undefined,
		letterSpacing: 0,
		alignSelf: "flex-start",
	};

	return (
		<Box
			flexDirection="row"
			flexWrap="nowrap"
			style={{ ...(style as object), gap: "0.04em" }}
		>
			{slugs.map((slug, i) => (
				<React.Fragment key={slug}>
					{i ? (
						<ThemeText {...props} variant={props.variant} style={rStyle}>
							{"®"}
						</ThemeText>
					) : null}
					{slug && (
						<ThemeText {...props} variant={props.variant} style={textStyle}>
							{slug}
						</ThemeText>
					)}
				</React.Fragment>
			))}
		</Box>
	);
};

export const Text = React.memo(_Text);
