import type { PropsWithChildren } from "react";
import { View } from "react-native";

import { Text } from "@src/components";

export interface HeaderTitleProps {
	children: string;
}

const HeaderTitle = ({ children }: PropsWithChildren<HeaderTitleProps>) => {
	return (
		<View>
			<Text variant="header" style={{ fontSize: 32, fontWeight: "bold" }}>
				{children.toUpperCase()}
			</Text>
		</View>
	);
};

export default HeaderTitle;
