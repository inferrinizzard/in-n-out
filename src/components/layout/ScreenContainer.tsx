import type { PropsWithChildren } from "react";
import { ScrollView, type StyleProp, type ViewStyle } from "react-native";

import { Box } from "../base";

export interface ScreenContainerProps {
	style?: StyleProp<ViewStyle>;
	Header?: React.ReactElement;
	Footer?: React.ReactElement;
}

const ScreenContainer = ({
	style,
	Header,
	Footer,
	children,
}: PropsWithChildren<ScreenContainerProps>) => {
	return (
		<Box id="screen-container" flexGrow={1}>
			{Header}
			<ScrollView style={{ flexGrow: 1 }}>
				<Box padding="m" style={style}>
					{children}
				</Box>
			</ScrollView>
			{Footer}
		</Box>
	);
};

export default ScreenContainer;
