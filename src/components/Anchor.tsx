import type { PropsWithChildren } from "react";
import { Linking, TouchableOpacity } from "react-native";

interface AnchorProps {
	href: string;
}

export const Anchor = ({ href, children }: PropsWithChildren<AnchorProps>) => {
	const handleLink = () => {
		Linking.canOpenURL(href).then(() => Linking.openURL(href));
	};

	return <TouchableOpacity onPress={handleLink}>{children}</TouchableOpacity>;
};
