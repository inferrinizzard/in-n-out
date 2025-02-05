import { Button, Icon } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import type { HeaderOptions } from "@react-navigation/elements";

import type { StackNavigationProps } from "../StackNavigator";

import { ScreenKeys } from "../screens";

export type HeaderButtonProps = Parameters<
	Exclude<HeaderOptions["headerLeft"], undefined>
>[0];

const HeaderButton: React.FC<HeaderButtonProps> = () => {
	const navigation = useNavigation<StackNavigationProps>();
	const parentScreen = navigation.getState().routes[0].name;

	return (
		<Button
			onPress={() => {
				if (parentScreen === ScreenKeys.Cart) {
					// dispatch(addActiveToList());
				} else {
					// dispatch(clearActiveItem());
				}
				navigation.goBack();
			}}
		>
			<Icon source="arrow-left" size={36} />
		</Button>
	);
};

export default HeaderButton;
