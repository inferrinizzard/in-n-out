import type { PropsWithChildren } from "react";
import { ScrollView, type StyleProp, type ViewStyle } from "react-native";

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
			<Box padding="m" style={style}>
				{children}
			</Box>
		</ScrollView>
	);
};

export default ScreenContainer;
