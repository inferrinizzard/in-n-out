import { useCallback } from "react";
import { Button, Icon } from "react-native-paper";
import { useAtom } from "jotai";

import { queueAtom } from "@src/atoms/queue.atom";

import type { HeaderProps } from "./index";

export interface HeaderButtonProps extends Pick<HeaderProps, "navigation"> {}

const HeaderButton = ({ navigation }: HeaderButtonProps) => {
	const [{ index }, getQueueSetter] = useAtom(queueAtom);

	const handlePress = useCallback(() => {
		navigation.goBack();

		if (index === 0) {
			getQueueSetter().clear();
		} else {
			getQueueSetter().updateIndex(index - 1);
		}
	}, [index, navigation.goBack, getQueueSetter]);

	return (
		<Button onPress={handlePress}>
			<Icon source={index === 0 ? "close" : "chevron-left"} size={36} />
		</Button>
	);
};

export default HeaderButton;
