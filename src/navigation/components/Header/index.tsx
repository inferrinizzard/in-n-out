import { Image, View } from "react-native";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { Box } from "@src/components";

import HeaderButton from "./HeaderButton";
import HeaderTitle from "./HeaderTitle";

export interface HeaderProps extends NativeStackHeaderProps {}

export const Header = ({ back, navigation, route }: HeaderProps) => {
	const headerTitle =
		(route.params && "title" in route.params
			? (route.params?.title as string)
			: undefined) ?? route.name;

	return (
		<View>
			<Image
				source={require("@images/banner.png")}
				height={50}
				resizeMode="cover"
				style={{ height: 50, flexGrow: 1 }}
			/>
			{back && (
				<Box flexDirection="row" alignItems="center">
					<HeaderButton navigation={navigation} />
					<HeaderTitle>{headerTitle}</HeaderTitle>
				</Box>
			)}
		</View>
	);
};
