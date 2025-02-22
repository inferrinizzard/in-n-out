import { View } from "react-native";
import { Button } from "react-native-paper";

import { Box, Text } from "@src/components";
import { ScreenKeys } from "@src/navigation";

import type { CartProps } from "..";

interface EmptyCartProps extends Pick<CartProps, "navigation"> {}

export const EmptyCart = ({ navigation }: EmptyCartProps) => {
	return (
		<View>
			<Box padding="m">
				<Text variant="boldItalic" textAlign="center">
					{"No items in cart!"}
				</Text>
			</Box>
			<Button
				mode="contained"
				onPress={() => navigation.replace(ScreenKeys.Menu)}
			>
				<Text variant="bold">{"Add items"}</Text>
			</Button>
		</View>
	);
};
