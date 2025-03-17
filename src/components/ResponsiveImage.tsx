import { Image, type ImageProps } from "react-native";
import { Box, type BoxProps } from "./Box";

export interface ResponsiveImageProps
	extends ImageProps,
		Pick<BoxProps, "minHeight" | "minWidth"> {}

export const ResponsiveImage = ({
	minHeight,
	minWidth,
	style,
	...props
}: ResponsiveImageProps) => {
	return (
		<Box
			flexGrow={0}
			flexShrink={1}
			flexBasis={0}
			minHeight={minHeight}
			minWidth={minWidth}
		>
			<Image
				{...props}
				style={{
					height: "auto",
					aspectRatio: 1,
					width: "100%",
				}}
				resizeMode="contain"
			/>
		</Box>
	);
};
