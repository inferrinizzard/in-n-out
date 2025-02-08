import { Image, View } from "react-native";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

interface HeaderProps extends NativeStackHeaderProps {}

export const Header = ({ back, navigation, route, options }: HeaderProps) => {
	return (
		<View>
			<Image
				source={require("@images/banner.png")}
				height={48}
				resizeMode="repeat"
				style={{ height: 48 }}
			/>
		</View>
	);
};
