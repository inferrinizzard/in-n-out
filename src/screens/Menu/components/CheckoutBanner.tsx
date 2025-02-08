import { useAtomValue } from "jotai";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { orderAtom } from "@src/atoms/order.atom";
import { ScreenKeys } from "@src/navigation";
import { Text } from "@src/components";

import type { MenuProps } from "..";

interface CheckoutBannerProps extends Pick<MenuProps, "navigation"> {}

export const CheckoutBanner = ({ navigation }: CheckoutBannerProps) => {
	const order = useAtomValue(orderAtom);

	if (!order.length) {
		return null;
	}

	return (
		<View
			style={{
				backgroundColor: "red",
				width: "100%",
			}}
		>
			<Button onPress={() => navigation.replace(ScreenKeys.Cart)}>
				<Text>{`Checkout ${[].length} Items now`}</Text>
			</Button>
		</View>
	);
};
