import { View } from "react-native";
import { Text } from "react-native-paper";
import { type HeaderTitleProps } from "@react-navigation/elements";

import { useAppSelector } from "../../redux/store";
import { selectActiveItem } from "../../redux/slices/orderSlice";

import { HeaderCopy, type ScreenKey } from "../../consts";

export interface HeaderProps extends HeaderTitleProps {}

const Header: React.FC<HeaderProps> = ({ tintColor, children }) => {
	const activeItem = useAppSelector(selectActiveItem);

	return (
		<View>
			<Text style={{ fontSize: 32, fontWeight: "bold" }}>
				{activeItem?.name ?? HeaderCopy[children as ScreenKey]}
			</Text>
		</View>
	);
};

export default Header;
