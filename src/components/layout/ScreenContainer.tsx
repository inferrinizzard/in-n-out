import type { PropsWithChildren } from "react";
import { ScrollView, type StyleProp, type ViewStyle } from "react-native";

import Box from "../Box";

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
		<Box id="screen-container" flexGrow={1} height="100%">
			{Header}
			<ScrollView
				horizontal={false}
				showsVerticalScrollIndicator={false}
				style={{ flexGrow: 1 }}
			>
				<Box padding="m" style={style}>
					{children}
				</Box>
			</ScrollView>
			{Footer}
		</Box>
	);
};

export default ScreenContainer;
