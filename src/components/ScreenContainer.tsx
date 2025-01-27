import type { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export interface ScreenContainerProps {}

const ScreenContainer = ({
	children,
}: PropsWithChildren<ScreenContainerProps>) => {
	return <View style={{ ...styles.padding }}>{children}</View>;
};

export default ScreenContainer;

const styles = StyleSheet.create({
	padding: {
		paddingLeft: 20,
		paddingRight: 20,
	},
});
