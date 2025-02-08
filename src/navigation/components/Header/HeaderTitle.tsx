import type { PropsWithChildren } from "react";
import { View } from "react-native";
import type { HeaderTitleProps } from "@react-navigation/elements";

import { Text } from "@src/components";

export interface HeaderProps extends HeaderTitleProps {}

const HeaderTitle = ({ children }: PropsWithChildren<HeaderProps>) => {
	return (
		<View>
			<Text variant="header" style={{ fontSize: 32, fontWeight: "bold" }}>
				{children.toUpperCase()}
			</Text>
		</View>
	);
};

export default HeaderTitle;
