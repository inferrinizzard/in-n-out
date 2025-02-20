import { Button, Icon } from "react-native-paper";
import { useAtomValue } from "jotai";

import { queueAtom } from "@src/atoms/queue.atom";

import type { HeaderProps } from "./index";

export interface HeaderButtonProps extends Pick<HeaderProps, "navigation"> {}

const HeaderButton = ({ navigation }: HeaderButtonProps) => {
	const { pending } = useAtomValue(queueAtom);

	return (
		<Button onPress={navigation.goBack}>
			<Icon source={pending.length ? "chevron-left" : "close"} size={36} />
		</Button>
	);
};

export default HeaderButton;
