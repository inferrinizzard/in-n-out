import { View } from "react-native";
import { Text } from "react-native-paper";
import type { HeaderTitleProps } from "@react-navigation/elements";
import { useAtomValue } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";

import { HeaderCopy, type ScreenKey } from "../screens";

export interface HeaderProps extends HeaderTitleProps {}

const Header = ({ tintColor, children }: HeaderProps) => {
	const activeItem = useAtomValue(activeItemAtom)!;

	return (
		<View>
			<Text style={{ fontSize: 32, fontWeight: "bold" }}>
				{HeaderCopy[children as ScreenKey]}
			</Text>
		</View>
	);
};

export default Header;
