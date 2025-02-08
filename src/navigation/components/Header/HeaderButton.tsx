import { Button, Icon } from "react-native-paper";

import type { HeaderProps } from "./index";

export interface HeaderButtonProps extends Pick<HeaderProps, "navigation"> {
	shouldUseX?: boolean;
}

const HeaderButton = ({ navigation, shouldUseX }: HeaderButtonProps) => {
	return (
		<Button onPress={navigation.goBack}>
			<Icon source={shouldUseX ? "close" : "chevron-left"} size={36} />
		</Button>
	);
};

export default HeaderButton;
