import { Image } from "react-native";
import { Button } from "react-native-paper";
import { useAtomValue } from "jotai";

import { orderAtom } from "@src/atoms/order.atom";
import { ScreenKeys } from "@src/navigation";
import { Box, Text } from "@src/components";

import type { MenuProps } from "../index";

interface CheckoutBannerProps extends Pick<MenuProps, "navigation"> {}

export const CheckoutBanner = ({ navigation }: CheckoutBannerProps) => {
	const order = useAtomValue(orderAtom);

	const numItems = Object.keys(order).length;

	if (!numItems) {
		return null;
	}

	return (
		<Box backgroundColor="redLight" width="100%">
			<Button
				onPress={() => navigation.replace(ScreenKeys.Cart)}
				contentStyle={{ position: "relative", justifyContent: "flex-start" }}
			>
				<Text
					color="white"
					variant="bold"
				>{`Checkout ${numItems} Items now ›`}</Text>
			</Button>
			<Image
				source={require("@images/bag.png")}
				style={{
					width: 40,
					height: 55,
					position: "absolute",
					bottom: 8,
					insetInlineEnd: 12,
				}}
			/>
		</Box>
	);
};
