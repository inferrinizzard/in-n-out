import {
	Image,
	type ImageStyle,
	type StyleProp,
	type ImageProps,
} from "react-native";
import { Box, type BoxProps } from "./Box";

export interface ResponsiveImageProps
	extends ImageProps,
		Pick<BoxProps, "minHeight" | "minWidth"> {
	baseAxis?: "width" | "height";
}

export const ResponsiveImage = ({
	minHeight,
	minWidth,
	style,
	baseAxis = "width",
	...props
}: ResponsiveImageProps) => {
	return (
		<Box
			flexGrow={0}
			flexShrink={1}
			flexBasis={0}
			minHeight={minHeight}
			minWidth={minWidth}
			alignItems="center"
			justifyContent="center"
		>
			<Image
				{...props}
				style={{
					...(style as StyleProp<ImageStyle> & object),
					...(baseAxis === "width"
						? {
								height: "auto",
								aspectRatio: 1,
								width: "100%",
							}
						: {
								height: "100%",
								aspectRatio: 1,
								width: "auto",
							}),
				}}
				resizeMode="contain"
			/>
		</Box>
	);
};
