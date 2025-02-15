import { View } from "react-native";
import { Button } from "react-native-paper";

import { Text } from "@src/components";
import { ScreenKeys } from "@src/navigation";

import type { CartProps } from "..";

interface EmptyCartProps extends Pick<CartProps, "navigation"> {}

export const EmptyCart = ({ navigation }: EmptyCartProps) => {
	return (
		<View>
			<Text>{"No items in cart!"}</Text>
			<Button
				mode="contained"
				onPress={() => navigation.replace(ScreenKeys.Menu)}
			>
				<Text>{"Add items"}</Text>
			</Button>
		</View>
	);
};
