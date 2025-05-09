import { useCallback } from "react";
import { BackHandler } from "react-native";
import { Button } from "react-native-paper";
import Icon from "@react-native-vector-icons/material-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useAtomValue } from "jotai";

import { activeItemAtom, useAtomSetter } from "@src/atoms";
import { queueAtom } from "@src/atoms/queue.atom";

import type { HeaderProps } from "./index";
import { ScreenKeys } from "@src/navigation/screens";

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
				activeItemSetter.setItem({ ...prevItem, isValid: true });
			} else if (queue[prevIndex]) {
				activeItemSetter.setDefaultItem({ sku: queue[prevIndex] });
			}
		}
	}, [queue, index, navigation.goBack, queueSetter, activeItemSetter]);

	useFocusEffect(
		useCallback(() => {
			const handleGoBack = () => {
				if (navigation.canGoBack()) {
					handlePress();
					return true;
				}
				if (navigation.getState().routes[0].name !== ScreenKeys.Menu) {
					navigation.replace(ScreenKeys.Menu);
					return true;
				}

				return false;
			};

			const subscription = BackHandler.addEventListener(
				"hardwareBackPress",
				handleGoBack,
			);

			return () => subscription.remove();
		}, [handlePress, navigation]),
	);

	return (
		<Button onPress={handlePress}>
			<Icon
				name={index === 0 ? "close" : "chevron-left"}
				size={36}
				style={{ display: "flex", alignItems: "center" }}
			/>
		</Button>
	);
};

export default HeaderButton;
