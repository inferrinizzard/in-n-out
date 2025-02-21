import { useCallback } from "react";
import { Button, Icon } from "react-native-paper";
import { useAtomValue } from "jotai";

import { activeItemAtom, useAtomSetter } from "@src/atoms";
import { queueAtom } from "@src/atoms/queue.atom";

import type { HeaderProps } from "./index";

export interface HeaderButtonProps extends Pick<HeaderProps, "navigation"> {}

const HeaderButton = ({ navigation }: HeaderButtonProps) => {
	const { index, queue } = useAtomValue(queueAtom);
	const queueSetter = useAtomSetter(queueAtom);
	const activeItemSetter = useAtomSetter(activeItemAtom);

	const handlePress = useCallback(() => {
		navigation.goBack();

		if (index === 0) {
			queueSetter.clear();
		} else {
			const prevIndex = index - 1;
			queueSetter.updateIndex(prevIndex);
			const prevItem = queueSetter.popFromPending(prevIndex);

			if (prevItem) {
				activeItemSetter.setItem(prevItem);
			} else {
				activeItemSetter.setDefaultItem({ sku: queue[prevIndex] });
			}
		}
	}, [queue, index, navigation.goBack, queueSetter, activeItemSetter]);

	return (
		<Button onPress={handlePress}>
			<Icon source={index === 0 ? "close" : "chevron-left"} size={36} />
		</Button>
	);
};

export default HeaderButton;
