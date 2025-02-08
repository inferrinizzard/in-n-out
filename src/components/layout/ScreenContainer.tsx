import type { PropsWithChildren } from "react";
import {
	Image,
	ScrollView,
	type StyleProp,
	type ViewStyle,
} from "react-native";

import { Box } from "../base";

export interface ScreenContainerProps {
	style?: StyleProp<ViewStyle>;
}

const ScreenContainer = ({
	style,
	children,
}: PropsWithChildren<ScreenContainerProps>) => {
	return (
		<ScrollView>
			<Image
				source={require("@images/banner.png")}
				height={48}
				resizeMode="repeat"
				style={{ height: 48 }}
			/>
			<Box padding="m" style={style}>
				{children}
			</Box>
		</ScrollView>
	);
};

export default ScreenContainer;
