import { Image, View } from "react-native";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { Box } from "@src/components";

import HeaderButton from "./HeaderButton";
import HeaderTitle from "./HeaderTitle";

interface HeaderProps extends NativeStackHeaderProps {}

export const Header = ({ back, navigation, route, options }: HeaderProps) => {
	if (back) {
		console.log({ back, navigation, route, options });
	}

	return (
		<View>
			<Image
				source={require("@images/banner.png")}
				height={48}
				resizeMode="repeat"
				style={{ height: 48 }}
			/>
			{back && (
				<Box flexDirection="row" alignItems="center">
					<HeaderButton />
					<HeaderTitle>{route.params?.title ?? "test"}</HeaderTitle>
				</Box>
			)}
		</View>
	);
};
